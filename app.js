const STORAGE_KEY = "ciberparcial-sr-v1";
const DAY = 1440;

const TOPICS = {
  teoria: [
    "Ciberespacio",
    "Evolución",
    "Propiedades",
    "Marco legal",
    "Incidentes",
    "Privacidad",
    "Factor humano",
    "Amenazas",
    "Reconocimiento",
    "Técnicas",
    "Malware",
  ],
  labs: [
    "Escenario",
    "Identidad",
    "Linux",
    "Windows",
    "SSH",
    "Escaneo",
    "Mini-lab de contraseñas",
    "Logs: conceptos",
    "Syslog",
    "Laboratorio de logs",
    "Rotación y cumplimiento",
  ],
};

const app = document.getElementById("app");

const view = {
  screen: "home",
  deck: "teoria",
  topic: "all",
  phase: "question",
  queue: [],
  current: null,
  browseAt: 0,
  flipped: false,
  choices: null,
  picked: null,
  exam: null,
  session: { graded: 0, again: 0, good: 0 },
};

let db = load();

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fresh();
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.v !== 1) return fresh();
    parsed.cards = parsed.cards || {};
    parsed.starred = parsed.starred || [];
    parsed.days = parsed.days || {};
    return parsed;
  } catch {
    return fresh();
  }
}

function fresh() {
  return { v: 1, cards: {}, starred: [], days: {} };
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function todayId() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function bumpToday(kind) {
  const id = todayId();
  if (!db.days[id]) db.days[id] = { graded: 0, again: 0, good: 0 };
  db.days[id][kind] += 1;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function deckCards(deck, topic) {
  return CARDS.filter((card) => {
    if (deck !== "all" && card.deck !== deck) return false;
    if (topic && topic !== "all" && card.topic !== topic) return false;
    return true;
  });
}

function stateOf(id) {
  return db.cards[id] || null;
}

function classify(card) {
  const state = stateOf(card.id);
  if (!state) return "new";
  if (state.due <= Date.now()) return "due";
  if (state.interval < DAY) return "learning";
  return "ok";
}

function counts(deck, topic) {
  const cards = deckCards(deck, topic);
  const tally = { new: 0, due: 0, learning: 0, ok: 0, total: cards.length };
  cards.forEach((card) => {
    tally[classify(card)] += 1;
  });
  return tally;
}

function schedule(prev, grade, now) {
  const base = prev || { ease: 2.5, interval: 0, reps: 0, lapses: 0 };
  let { ease, interval, reps, lapses } = base;
  if (grade === "again") {
    lapses += 1;
    reps = 0;
    ease = Math.max(1.3, ease - 0.2);
    interval = 10;
  } else if (grade === "hard") {
    ease = Math.max(1.3, ease - 0.15);
    interval = reps === 0 ? 20 : Math.max(20, Math.round(interval * 1.2));
  } else if (grade === "good") {
    interval = reps === 0 ? DAY : Math.max(DAY, Math.round(interval * ease));
    reps += 1;
  } else {
    ease += 0.15;
    interval = reps === 0 ? DAY * 2 : Math.max(DAY * 2, Math.round(interval * ease * 1.3));
    reps += 1;
  }
  return { ease, interval, reps, lapses, due: now + interval * 60000, last: now, grade };
}

function buildQueue() {
  const now = Date.now();
  const cards = deckCards(view.deck, view.topic);
  const due = cards
    .filter((card) => {
      const state = stateOf(card.id);
      return state && state.due <= now;
    })
    .sort((a, b) => stateOf(a.id).due - stateOf(b.id).due);
  const fresh = cards.filter((card) => !stateOf(card.id));
  return [...due, ...fresh];
}

function startStudy(deck, topic) {
  view.screen = "study";
  view.deck = deck;
  view.topic = topic || "all";
  view.session = { graded: 0, again: 0, good: 0 };
  view.queue = buildQueue();
  pullNext();
}

function pullNext() {
  view.current = view.queue.shift() || null;
  view.phase = view.current ? "question" : "done";
  view.choices = view.current ? buildChoices(view.current) : null;
  view.picked = null;
  render();
}

const LENGTH_EXTRAS_UNUSED = [
  'El tema lo sitúa en ese papel y no en el de al lado',
  'La clase lo separa del caso que se le parece',
  'La diapositiva lo deja con ese alcance',
  'El laboratorio lo usa en otro punto del escenario',
  'El temario lo cierra con ese matiz',
  'El profesor lo compara con la definición vecina',
  'El apartado lo trata como un caso distinto',
  'El escenario lo muestra con este ejemplo',
  'La práctica lo ilustra en otro contexto',
  'El contraste lo aparta de la fase contigua',
  'La formulación lo fija en este apartado',
  'La explicación lo reconoce por ese detalle',
  'El planteamiento lo ancla en el caso de clase',
  'La descripción lo recorre hasta su frontera',
  'La exposición lo distingue del término siguiente',
  'El desarrollo lo aplica al escenario de prácticas',
  'La redacción lo deja sin mezclar el punto siguiente',
  'La comparación lo separa de la idea contigua',
  'El enunciado lo recoge con el ejemplo de clase',
  'El criterio lo mide por este caso y no por el otro',
  'El repaso lo deja en este apartado del temario',
  'La diapositiva lo cierra antes del concepto vecino',
  'El laboratorio lo enseña con otro ejemplo',
  'La clase lo formula con el límite de este punto',
  'El tema lo distingue de la fase y de la máquina vecinas',
  'El escenario lo concreta con el caso visto en clase',
  'La práctica lo separa de la definición que está al lado',
  'El contraste lo cierra con la frontera de este punto',
  'El temario lo deja listo para no mezclarlo con el siguiente',
  'La explicación lo ancla en el ejemplo y no en el parecido',
];
const LENGTH_TAILS = {
  4: ', ya',
  5: ', hoy',
  6: ', aquí',
  7: ', ahora',
  8: ', de hoy',
  9: ', también',
  10: ', de clase',
  11: ', del curso',
  12: ', en el tema',
  13: ', del temario',
  14: ', del profesor',
  15: ', en este punto',
  16: ', de la práctica',
  17: ', del laboratorio',
  18: ', de este apartado',
  19: ', en el laboratorio',
  20: ', y no el de al lado',
  21: ', como se ve en clase',
  22: ', según la diapositiva',
  23: ', hoy en el laboratorio',
  24: ', en este punto del tema',
  25: ', con el ejemplo de clase',
  26: ', y no con el otro término',
  27: ', tal como se dijo en clase',
  28: ', de clase en el laboratorio',
  29: ', según el contraste del tema',
  30: ', del temario de este apartado',
  31: ', y no en el apartado siguiente',
  32: ', del profesor en el laboratorio',
  33: ', en la comparación de este punto',
  34: ', con la frontera de este apartado',
  35: ', y no en la fase que viene después',
  36: ', como queda explicado en el temario',
  37: ', según el apartado en el laboratorio',
  38: ', con el matiz que marca este apartado',
  39: ', en el sentido que fija la diapositiva',
  40: ', tal como se distingue en este apartado',
  41: ', con el ejemplo de clase del laboratorio',
  42: ', con el ejemplo de clase de este apartado',
  43: ', con el detalle que pertenece a este punto',
  44: ', en los términos que el tema deja para esto',
  45: ', tal como se dijo en clase en el laboratorio',
  46: ', y no en el apartado siguiente de la práctica',
  47: ', y no en el apartado siguiente del laboratorio',
  48: ', y no con la definición vecina de este apartado',
  49: ', y no en el apartado siguiente en el laboratorio',
  50: ', con la frontera de este apartado del laboratorio',
  51: ', en la comparación de este punto en el laboratorio',
  52: ', con la frontera de este apartado en el laboratorio',
  53: ', como queda explicado en el temario de este apartado',
  54: ', como queda explicado en el temario en el laboratorio',
  55: ', en el sentido que fija la diapositiva del laboratorio',
  56: ', con el matiz que marca este apartado en el laboratorio',
  57: ', en el sentido que fija la diapositiva en el laboratorio',
  58: ', tal como se distingue en este apartado en el laboratorio',
  59: ', con el detalle que pertenece a este punto del laboratorio',
  60: ', en los términos que el tema deja para esto del laboratorio',
  61: ', con el detalle que pertenece a este punto en el laboratorio',
  62: ', en los términos que el tema deja para esto en el laboratorio',
};

function clipWords(text, max) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const space = cut.lastIndexOf(" ");
  const clipped = (space > 8 ? cut.slice(0, space) : cut).replace(/[,:;.\s]+$/g, "");
  return clipped || clean.slice(0, max).trim();
}

function fitToLength(text, target, salt) {
  let body = text.replace(/\s+/g, " ").trim().replace(/\.+$/g, "");
  if (body.length + 1 > target) body = clipWords(body, target - 1);
  const sizes = Object.keys(LENGTH_TAILS).map(Number).filter((n) => n >= 4).sort((a, b) => b - a);
  const rotated = sizes.slice(salt % sizes.length).concat(sizes.slice(0, salt % sizes.length));
  const used = [];
  for (let guard = 0; guard < 24; guard += 1) {
    const hole = target - 1 - body.length;
    if (hole === 0) return `${body}.`;
    if (LENGTH_TAILS[hole]) return `${body}${LENGTH_TAILS[hole]}.`;
    const size = rotated.find((n) => n < hole && !used.includes(n));
    if (!size) break;
    used.push(size);
    body += LENGTH_TAILS[size];
  }
  let hole = target - 1 - body.length;
  if (hole === 0) return `${body}.`;
  if (LENGTH_TAILS[hole]) return `${body}${LENGTH_TAILS[hole]}.`;
  if (hole === 2 && /[bcdfghjklmnpqrtvwxyzñ]$/i.test(body)) return `${body}es.`;
  if (hole === 2 && /[aeiouáéíóú]$/i.test(body) && body.includes(" ")) {
    const splitAt = body.lastIndexOf(" ");
    return `${body.slice(0, splitAt)},${body.slice(splitAt)}s.`;
  }
  if (hole === 1 && /[aeiouáéíóú]$/i.test(body)) return `${body}s.`;
  if (hole === 1 && body.includes(" ")) {
    const splitAt = body.lastIndexOf(" ");
    return `${body.slice(0, splitAt)},${body.slice(splitAt)}.`;
  }
  if (hole === 3) return `${body} ya.`;
  return `${body}.`;
}

function buildChoices(card) {
  const authored = typeof PLAUSIBLE !== "undefined" && PLAUSIBLE[card.id];
  const wrong = (authored || card.d).slice(0, 3);
  const slot = Math.floor(Math.random() * 4);
  const choices = [];
  let cursor = 0;
  for (let index = 0; index < 4; index += 1) {
    if (index === slot) choices.push({ text: card.a, ok: true });
    else choices.push({ text: wrong[cursor++], ok: false });
  }
  return choices;
}

function reveal() {
  if (view.screen === "browse") {
    view.flipped = !view.flipped;
    render();
  }
}

function chooseStudy(index) {
  if (!view.current || view.picked !== null || !view.choices) return;
  view.picked = index;
  const choice = view.choices[index];
  const name = choice.ok ? "good" : "again";
  const next = schedule(stateOf(view.current.id), name, Date.now());
  if (!choice.ok) next.due = Date.now();
  db.cards[view.current.id] = next;
  view.session.graded += 1;
  if (choice.ok) view.session.good += 1;
  else view.session.again += 1;
  bumpToday("graded");
  bumpToday(choice.ok ? "good" : "again");
  save();
  if (!choice.ok) {
    view.queue = view.queue.filter((item) => item.id !== view.current.id);
    view.queue.splice(Math.min(view.queue.length, 3), 0, view.current);
  }
  view.phase = "answer";
  render();
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function examReady(card) {
  const average = card.d.reduce((sum, text) => sum + text.length, 0) / 3;
  return card.a.length < 180 || card.a.length < average * 1.85;
}

function startExam(deck, size) {
  const pool = deckCards(deck, "all").filter(examReady);
  const weak = pool.filter((card) => {
    const kind = classify(card);
    return kind === "new" || kind === "due" || kind === "learning";
  });
  const rest = shuffle(pool.filter((card) => classify(card) === "ok"));
  const chosen = shuffle([...weak, ...rest]).slice(0, Math.min(size, pool.length));
  view.screen = "exam";
  view.deck = deck;
  view.exam = {
      items: chosen.map((card) => ({
      card,
      choices: buildChoices(card),
      picked: null,
    })),
    index: 0,
    size,
  };
  render();
}

function pickExam(choice) {
  const item = view.exam.items[view.exam.index];
  if (item.picked !== null) return;
  item.picked = choice;
  if (!choice.ok) {
    const next = schedule(stateOf(item.card.id), "again", Date.now());
    next.due = Date.now();
    db.cards[item.card.id] = next;
    bumpToday("graded");
    bumpToday("again");
    save();
  }
  render();
}

function examNext() {
  if (view.exam.index < view.exam.items.length - 1) {
    view.exam.index += 1;
    render();
    return;
  }
  view.screen = "exam-end";
  render();
}

function browseList() {
  return deckCards(view.deck, view.topic);
}

function topicButtons(deck) {
  const topics = deck === "all" ? [...TOPICS.teoria, ...TOPICS.labs] : TOPICS[deck];
  const all = counts(deck, "all");
  const buttons = [
    `<button class="topic ${view.topic === "all" ? "is-on" : ""}" data-action="topic" data-topic="all">
      <span>Todo el mazo</span><span class="muted">${all.total}</span>
    </button>`,
  ];
  topics.forEach((topic) => {
    const tally = counts(deck, topic);
    if (tally.total === 0) return;
    buttons.push(
      `<button class="topic ${view.topic === topic ? "is-on" : ""}" data-action="topic" data-topic="${esc(topic)}">
        <span>${esc(topic)}</span><span class="muted">${tally.due ? `${tally.due} a repasar` : tally.new ? `${tally.new} nuevas` : tally.total}</span>
      </button>`
    );
  });
  return buttons.join("");
}

function header() {
  const today = db.days[todayId()] || { graded: 0, again: 0, good: 0 };
  return `
    <header class="top">
      <button class="brand" data-action="home">Ciberparcial</button>
      <p class="today">Hoy ${today.graded} repasadas · ${today.again} a repetir</p>
    </header>`;
}

function renderHome() {
  const teoria = counts("teoria", "all");
  const labs = counts("labs", "all");
  app.innerHTML = `
    ${header()}
    <main class="home">
      <p class="kicker">Parcial de Sistemas de Ciberseguridad</p>
      <h1>Estudia el temario en orden. Lo que falles vuelve solo.</h1>
      <p class="lede">La teoría y los laboratorios van en mazos distintos. Cada pregunta tiene cuatro opciones y la correcta cambia de letra cada vez que sale. Si fallas, vuelve tres tarjetas después, otra vez mezclada. Si aciertas, vuelve mañana.</p>
      <div class="decks">
        ${deckCard("teoria", "Teoría", "Introducción, amenazas, reconocimiento, técnicas y malware.", teoria)}
        ${deckCard("labs", "Laboratorios", "Escenario, identidad, SSH, escaneo, contraseñas y logs.", labs)}
      </div>
      <section class="how">
        <h2>Cómo encaja con el examen</h2>
        <ol>
          <li>Estudiar es un tipo test, como el parcial. La letra de la correcta no está fija.</li>
          <li>Un fallo vuelve enseguida al repaso. Un acierto se programa para mañana.</li>
          <li>Tarjetas sirve para releer un tema. Pasarlas no programa el repaso.</li>
        </ol>
      </section>
      <footer class="tools">
        <button class="texty" data-action="export">Exportar progreso</button>
        <label class="texty file">Importar<input type="file" accept="application/json" data-action="import"></label>
        <button class="texty danger" data-action="reset">Borrar progreso</button>
      </footer>
    </main>`;
}

function deckCard(deck, title, blurb, tally) {
  return `
    <article class="deck deck-${deck}">
      <p class="kicker">${tally.total} tarjetas</p>
      <h2>${title}</h2>
      <p>${blurb}</p>
      <dl class="tally">
        <div><dt>Nuevas</dt><dd>${tally.new}</dd></div>
        <div><dt>A repasar</dt><dd>${tally.due}</dd></div>
        <div><dt>En curso</dt><dd>${tally.learning}</dd></div>
        <div><dt>Al día</dt><dd>${tally.ok}</dd></div>
      </dl>
      <div class="bar" aria-hidden="true"><span style="width:${tally.total ? Math.round((tally.ok / tally.total) * 100) : 0}%"></span></div>
      <div class="row">
        <button class="primary" data-action="study" data-deck="${deck}">Estudiar</button>
        <button data-action="exam" data-deck="${deck}" data-size="15">Examen de 15</button>
        <button class="ghost" data-action="browse" data-deck="${deck}">Tarjetas</button>
      </div>
    </article>`;
}

function renderStudy() {
  const tally = counts(view.deck, view.topic);
  const card = view.current;
  const starred = card && db.starred.includes(card.id);
  let stage = "";
  if (!card) {
    stage = `
      <div class="empty">
        <h2>Cola vacía</h2>
        <p>No queda ninguna tarjeta nueva ni ninguna a repasar en esta selección. Las que acertaste vuelven mañana. Puedes examinar el mazo o cambiar de tema.</p>
        <div class="row">
          <button class="primary" data-action="exam" data-deck="${view.deck}" data-size="15">Examen de 15</button>
          <button data-action="home">Volver</button>
        </div>
      </div>`;
  } else {
    const picked = view.picked;
    const lapses = stateOf(card.id)?.lapses || 0;
    const feedback = picked === null
      ? ""
      : `<div class="feedback ${view.choices[picked].ok ? "is-correct" : "is-wrong"}">
          <p>${view.choices[picked].ok ? "Correcta." : "Esta no. La del temario queda marcada."}</p>
          ${card.why ? `<p>${esc(card.why)}</p>` : ""}
          ${!view.choices[picked].ok && lapses ? `<p>Vuelve dentro de tres tarjetas, con las opciones en otro orden. La has fallado ${lapses} ${lapses === 1 ? "vez" : "veces"}.</p>` : ""}
          <button class="primary" data-action="continue">Siguiente</button>
        </div>`;
    stage = `
      <article class="sheet">
        <div class="sheet-top">
          <p class="kicker">${esc(card.topic)} · ${esc(labelDeck(card.deck))}</p>
          <button class="texty" data-action="star" aria-pressed="${starred ? "true" : "false"}">${starred ? "Marcada" : "Marcar"}</button>
        </div>
        <h2>${esc(card.q)}</h2>
        ${optionButtons(view.choices, picked, "choose")}
        ${feedback}
        ${picked === null ? `<p class="hint">Teclas 1, 2, 3 y 4</p>` : ""}
      </article>`;
  }
  app.innerHTML = `
    ${header()}
    <div class="layout">
      <aside>
        <p class="kicker">${esc(labelDeck(view.deck))}</p>
        <div class="side-actions">
          <button class="texty" data-action="home">Inicio</button>
          <button class="texty" data-action="browse" data-deck="${view.deck}">Tarjetas</button>
        </div>
        <div class="topics">${topicButtons(view.deck)}</div>
        <p class="side-note">${tally.new} nuevas · ${tally.due} a repasar · esta sesión ${view.session.graded}</p>
      </aside>
      <section class="stage">${stage}</section>
    </div>`;
}

function optionButtons(choices, picked, action) {
  const letters = ["A", "B", "C", "D"];
  return `<div class="options">${choices.map((choice, index) => {
    let cls = "option";
    if (picked !== null) {
      if (choice.ok) cls += " is-correct";
      else if (picked === index) cls += " is-wrong";
    }
    return `<button class="${cls}" data-action="${action}" data-index="${index}" ${picked !== null ? "disabled" : ""}>
      <span class="letter">${letters[index]}</span><span>${esc(choice.text)}</span>
    </button>`;
  }).join("")}</div>`;
}

function renderBrowse() {
  const list = browseList();
  if (view.browseAt >= list.length) view.browseAt = 0;
  const card = list[view.browseAt];
  const face = !card
    ? `<div class="empty"><h2>No hay tarjetas</h2></div>`
    : `
      <article class="sheet clickable" data-action="reveal">
        <div class="sheet-top">
          <p class="kicker">${esc(card.topic)} · ${view.browseAt + 1} / ${list.length}</p>
          <span class="hint">${view.flipped ? "Respuesta" : "Pulsa para darle la vuelta"}</span>
        </div>
        <h2>${esc(view.flipped ? card.a : card.q)}</h2>
        ${view.flipped && card.why ? `<p class="why">${esc(card.why)}</p>` : ""}
      </article>
      <div class="row spread">
        <button data-action="prev" ${view.browseAt === 0 ? "disabled" : ""}>Anterior</button>
        <button data-action="next" ${view.browseAt >= list.length - 1 ? "disabled" : ""}>Siguiente</button>
      </div>
      <p class="hint">Flechas para moverte. Espacio para voltear. Pasarlas no programa el repaso.</p>`;
  app.innerHTML = `
    ${header()}
    <div class="layout">
      <aside>
        <p class="kicker">Tarjetas · ${esc(labelDeck(view.deck))}</p>
        <div class="side-actions">
          <button class="texty" data-action="home">Inicio</button>
          <button class="texty" data-action="study" data-deck="${view.deck}">Estudiar</button>
        </div>
        <div class="topics">${topicButtons(view.deck)}</div>
      </aside>
      <section class="stage">${face}</section>
    </div>`;
}

function renderExam() {
  const item = view.exam.items[view.exam.index];
  const pickedIndex = item.picked === null ? null : item.choices.indexOf(item.picked);
  const options = optionButtons(item.choices, pickedIndex, "pick");
  const feedback = item.picked
    ? `<div class="feedback ${item.picked.ok ? "is-correct" : "is-wrong"}">
        <p>${item.picked.ok ? "Correcta." : "Esta no. La respuesta del temario es la que queda marcada."}</p>
        ${!item.picked.ok && item.card.why ? `<p>${esc(item.card.why)}</p>` : ""}
        <button class="primary" data-action="exam-next">${view.exam.index === view.exam.items.length - 1 ? "Ver resultado" : "Siguiente"}</button>
      </div>`
    : "";
  app.innerHTML = `
    ${header()}
    <main class="exam">
      <div class="sheet-top">
        <p class="kicker">Examen · ${esc(labelDeck(view.deck))} · ${view.exam.index + 1} / ${view.exam.items.length}</p>
        <button class="texty" data-action="home">Salir</button>
      </div>
      <div class="bar exam-bar" aria-hidden="true"><span style="width:${Math.round((view.exam.index / view.exam.items.length) * 100)}%"></span></div>
      <h2>${esc(item.card.q)}</h2>
      <p class="hint">${esc(item.card.topic)}</p>
      ${options}
      ${feedback}
    </main>`;
}

function renderExamEnd() {
  const items = view.exam.items;
  const correct = items.filter((item) => item.picked && item.picked.ok).length;
  const misses = items.filter((item) => item.picked && !item.picked.ok);
  app.innerHTML = `
    ${header()}
    <main class="home">
      <p class="kicker">Resultado</p>
      <h1>${correct} de ${items.length}</h1>
      <p class="lede">${misses.length ? "Los fallos ya están en el repaso y volverán al estudiar." : "Ningún fallo. El acierto en el tipo test no marca la tarjeta como sabida: si quieres fijarla, estúdiala en recuerdo."}</p>
      ${misses.length ? `<ul class="misses">${misses.map((item) => `<li><strong>${esc(item.card.q)}</strong><span>${esc(item.card.a)}</span></li>`).join("")}</ul>` : ""}
      <div class="row">
        <button class="primary" data-action="study" data-deck="${view.deck}">Repasar el mazo</button>
        <button data-action="exam" data-deck="${view.deck}" data-size="${view.exam.size}">Otra ronda</button>
        <button class="ghost" data-action="home">Inicio</button>
      </div>
    </main>`;
}

function labelDeck(deck) {
  if (deck === "labs") return "Laboratorios";
  if (deck === "all") return "Todo";
  return "Teoría";
}

function render() {
  if (view.screen === "home") renderHome();
  else if (view.screen === "study") renderStudy();
  else if (view.screen === "browse") renderBrowse();
  else if (view.screen === "exam") renderExam();
  else if (view.screen === "exam-end") renderExamEnd();
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || button.dataset.action === "import") return;
  const { action } = button.dataset;
  if (action === "home") {
    view.screen = "home";
    render();
  } else if (action === "study") {
    startStudy(button.dataset.deck || view.deck, "all");
  } else if (action === "browse") {
    view.screen = "browse";
    view.deck = button.dataset.deck || view.deck;
    view.topic = "all";
    view.browseAt = 0;
    view.flipped = false;
    render();
  } else if (action === "exam") {
    startExam(button.dataset.deck || view.deck, Number(button.dataset.size || 15));
  } else if (action === "topic") {
    view.topic = button.dataset.topic;
    if (view.screen === "study") startStudy(view.deck, view.topic);
    else {
      view.browseAt = 0;
      view.flipped = false;
      render();
    }
  } else if (action === "reveal") {
    reveal();
  } else if (action === "choose") {
    chooseStudy(Number(button.dataset.index));
  } else if (action === "continue") {
    pullNext();
  } else if (action === "star") {
    const id = view.current.id;
    if (db.starred.includes(id)) db.starred = db.starred.filter((item) => item !== id);
    else db.starred.push(id);
    save();
    render();
  } else if (action === "prev") {
    view.browseAt = Math.max(0, view.browseAt - 1);
    view.flipped = false;
    render();
  } else if (action === "next") {
    view.browseAt = Math.min(browseList().length - 1, view.browseAt + 1);
    view.flipped = false;
    render();
  } else if (action === "pick") {
    pickExam(view.exam.items[view.exam.index].choices[Number(button.dataset.index)]);
  } else if (action === "exam-next") {
    examNext();
  } else if (action === "export") {
    const blob = new Blob([JSON.stringify(db)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ciberparcial-progreso.json";
    link.click();
    URL.revokeObjectURL(url);
  } else if (action === "reset") {
    if (confirm("Se borra el progreso de repaso guardado en este navegador.")) {
      db = fresh();
      save();
      view.screen = "home";
      render();
    }
  }
});

app.addEventListener("change", (event) => {
  if (event.target.dataset.action !== "import") return;
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed || parsed.v !== 1 || !parsed.cards) throw new Error("formato");
      db = parsed;
      db.starred = db.starred || [];
      db.days = db.days || {};
      save();
      render();
    } catch {
      alert("Ese archivo no es un progreso de Ciberparcial.");
    }
  };
  reader.readAsText(file);
});

document.addEventListener("keydown", (event) => {
  const typing = event.target.matches("textarea, input");
  if (view.screen === "study" && !typing) {
    const map = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 };
    if (view.picked === null && map[event.code] !== undefined) chooseStudy(map[event.code]);
    else if (view.picked !== null && (event.code === "Space" || event.code === "Enter")) {
      event.preventDefault();
      pullNext();
    }
  } else if (event.code === "Space" && !typing && view.screen === "browse") {
    event.preventDefault();
    reveal();
  } else if (view.screen === "browse" && !typing) {
    if (event.code === "ArrowRight") {
      view.browseAt = Math.min(browseList().length - 1, view.browseAt + 1);
      view.flipped = false;
      render();
    } else if (event.code === "ArrowLeft") {
      view.browseAt = Math.max(0, view.browseAt - 1);
      view.flipped = false;
      render();
    }
  }
});

render();
