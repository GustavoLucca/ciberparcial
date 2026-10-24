/* Ids estables: se numeran al cargar, en este orden.
   Si insertas una tarjeta por el medio, el progreso guardado se desalinea.
   Añade tarjetas nuevas al final del bloque correspondiente. */
const CARDS = [];
const seq = { teoria: 0, labs: 0 };

function c(deck, topic, q, a, d, why) {
  seq[deck] += 1;
  const id = (deck === "teoria" ? "t" : "l") + String(seq[deck]).padStart(3, "0");
  CARDS.push({ id, deck, topic, q, a, d, why: why || "" });
}

/* ---------- TEORÍA: orden del temario ---------- */

c(
  "teoria",
  "Ciberespacio",
  "¿Qué es el ciberespacio en este tema?",
  "El entorno formado por datos digitalizados que se crean, se almacenan y se comparten.",
  [
    "El conjunto de dispositivos conectados a una misma red local.",
    "Sinónimo de Internet: solo lo que es accesible desde la web pública.",
    "El departamento que responde a incidentes dentro del SOC.",
  ],
  "No basta con decir «los dispositivos» ni «internet». La definición del tema es el entorno de esos datos."
);

c(
  "teoria",
  "Ciberespacio",
  "¿El ciberespacio es un lugar físico o un entorno virtual?",
  "Ni lo uno ni lo otro. Incluye ordenadores, sistemas e infraestructuras, personas y sistemas físicos que dependen de ordenadores y redes.",
  [
    "Solo es virtual: no incluye nada físico.",
    "Solo es físico: los equipos y el cableado, sin personas ni datos.",
    "Es exactamente la red de un operador, con fronteras claras entre países.",
  ],
  "Las fronteras están en cuestión. El tema lo trata como infraestructura crítica."
);

c(
  "teoria",
  "Ciberespacio",
  "Según la diapositiva, ¿en qué se ha convertido el ciberespacio?",
  "En una infraestructura crítica.",
  [
    "En un servicio opcional, desconectado de la industria.",
    "En un sinónimo de red social.",
    "En el Esquema Nacional de Seguridad.",
  ]
);

c(
  "teoria",
  "Ciberespacio",
  "¿Qué usos de Internet cita la introducción?",
  "Redes sociales, comercio electrónico, Internet de las cosas, sistemas ciberfísicos (industria 4.0) y el ciber-crimen, ciberterrorismo y ciberguerra.",
  [
    "Solo correo electrónico y páginas estáticas.",
    "Solo sistemas industriales, sin personas ni comercio.",
    "Solo el SOC, el CERT y el ENS.",
  ]
);

c(
  "teoria",
  "Evolución",
  "En los años 60, ¿qué significa «hacker» en este tema?",
  "Alguien capaz de modificar hardware o software para llevarlo al límite de sus capacidades.",
  [
    "Un grupo organizado que alquila ransomware.",
    "Un joven que busca fama en foros.",
    "Un empleado que filtra datos por venganza.",
  ]
);

c(
  "teoria",
  "Evolución",
  "¿Cómo describe el tema al atacante de los años 90?",
  "Jóvenes independientes, con motivaciones particulares: notoriedad, reivindicaciones o fama.",
  [
    "Estados que mantienen una APT durante años.",
    "Cualquiera que alquile una botnet sin saber programar.",
    "Quien modifica hardware para explorar sus límites, sin ánimo de fama.",
  ]
);

c(
  "teoria",
  "Evolución",
  "¿Qué cambia en los años 2010 y qué es el hacktivismo?",
  "Pasan a ser grupos organizados, con mucho conocimiento técnico y recursos económicos. El hacktivismo usa herramientas y técnicas de intrusión con fines políticos, sociales o ideológicos.",
  [
    "Desaparece el móvil económico y todo vuelve a ser curiosidad individual.",
    "El hacktivismo es el alquiler de malware como producto.",
    "Solo hay estados, y el móvil es siempre el espionaje militar.",
  ]
);

c(
  "teoria",
  "Evolución",
  "¿Qué es el crimen como servicio (CaaS)?",
  "La venta o el alquiler de malware, botnets o denegaciones de servicio, incluido el ransomware como servicio. El delito se compra ya empaquetado.",
  [
    "Que los atacantes de los 90 buscaban reputación y ahora solo buscan dinero.",
    "Que hay más dispositivos conectados y por eso más superficie.",
    "Un servicio legal del CERT para responder incidentes.",
  ],
  "El punto de examen no es «ahora lo hacen por dinero». Es que el ataque es un producto listo para usar."
);

c(
  "teoria",
  "Evolución",
  "¿Qué significa la commoditización del cibercrimen?",
  "Que ya no hace falta un conocimiento técnico avanzado: cualquiera puede comprar o alquilar herramientas de ataque estandarizadas.",
  [
    "Que solo los grupos con muchos recursos pueden atacar.",
    "Que el malware deja de ser automático y vuelve a escribirse a mano para cada víctima.",
    "Que los estados dejan de espiar y el delito se concentra en una sola banda.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "Define confidencialidad.",
  "Cualidad por la que un mensaje o unos datos solo se entienden o se leen por la persona o el sistema autorizado.",
  [
    "Cualidad que permite comprobar que el original no ha sido alterado.",
    "Cualidad por la que los datos están accesibles cuando el autorizado los necesita.",
    "Prueba de que el emisor no puede negar que envió el mensaje.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "Define integridad.",
  "Cualidad que permite comprobar que no ha habido manipulación: el dato no ha sido alterado respecto del original.",
  [
    "Que solo el autorizado puede leer el dato.",
    "Que el dato se puede recuperar en el momento en que hace falta.",
    "Que el receptor no puede negar que lo recibió.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "Define disponibilidad.",
  "Los datos están accesibles y son utilizables por los usuarios o procesos autorizados cuando los necesitan. Se pueden recuperar en ese momento.",
  [
    "Que el mensaje no ha sido modificado.",
    "Que un tercero no puede leer la comunicación.",
    "Que el emisor firma el mensaje para que no pueda repudiarlo.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "¿Qué es la autenticación en este tema?",
  "Verificar que un documento ha sido elaborado por quien dice, y en informática verificar la identidad (usuario y contraseña).",
  [
    "Decidir qué recursos puede usar esa identidad una vez dentro.",
    "Guardar el rastro de lo que el usuario hizo.",
    "Impedir que el receptor niegue haber recibido el mensaje.",
  ],
  "Autenticación es quién eres. Autorización es qué puedes hacer. Accounting es qué hiciste."
);

c(
  "teoria",
  "Propiedades",
  "¿Qué es el no repudio en origen?",
  "El emisor no puede negar el envío. La prueba la crea el propio emisor y la recibe el destinatario.",
  [
    "El receptor no puede negar que recibió el mensaje. La prueba la crea el receptor y la recibe el emisor.",
    "Que solo el autorizado puede leer el mensaje, porque la prueba de origen es la confidencialidad.",
    "Que el destinatario no puede negar la recepción: la prueba la crea él y se la queda el emisor.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "¿Qué es el no repudio en destino?",
  "El receptor no puede negar que recibió el mensaje. La prueba la crea el receptor y la recibe el emisor.",
  [
    "El emisor no puede negar el envío. La prueba la crea el emisor y la recibe el destinatario.",
    "El dato no ha sido alterado por el camino.",
    "El certificado del servidor demuestra la confidencialidad.",
  ]
);

c(
  "teoria",
  "Propiedades",
  "Además de CIA, ¿qué otras propiedades rodean el esquema del tema?",
  "Autenticación, autorización, control de acceso, no repudio, privacidad, resiliencia y justicia.",
  [
    "Solo cifrado, firma y hash.",
    "Solo firewall, IDS y SIEM.",
    "Solo LOPD, GDPR y ENS.",
  ]
);

c(
  "teoria",
  "Marco legal",
  "¿Qué es el Esquema Nacional de Seguridad (ENS)?",
  "La norma jurídica española que regula la política de seguridad de la información y la protección de los servicios electrónicos. La referencia del tema es el Centro Criptológico Nacional. El Real Decreto 311/2022 está en la diapositiva de 2022.",
  [
    "La directiva europea que obliga a avisar de un ataque grave en menos de 24 horas.",
    "La ley orgánica española de protección de datos personales.",
    "El estándar de la industria de tarjetas para conservar logs un año.",
  ]
);

c(
  "teoria",
  "Marco legal",
  "¿Qué obliga la directiva NIS2, según la diapositiva, y quién coordina en España?",
  "Obliga a medianas y grandes empresas de sectores clave a proteger sus redes, gestionar riesgos y avisar de ataques graves en menos de 24 horas. En España coordina INCIBE-CERT.",
  [
    "Es la norma española del CCN y no fija un plazo de aviso de 24 horas.",
    "Solo regula la privacidad y el nombramiento de un DPO.",
    "Obliga a cualquier particular a conservar los logs tres años.",
  ]
);

c(
  "teoria",
  "Marco legal",
  "¿Qué hitos españoles de ciberdefensa cita la introducción?",
  "En 2013, el Mando Conjunto del Ciberespacio (antes, Ciberdefensa). En 2022, el Plan Nacional de Ciberseguridad y el real decreto de seguridad 5G, junto al ENS (RD 311/2022).",
  [
    "En 2001, el Convenio de Budapest es una ley interna española.",
    "En 1997, España crea el SOC único de la OTAN.",
    "En 2010, INCIBE sustituye al ENS.",
  ],
  "También salen el PCCIP de EE. UU. (1997), el Convenio de Budapest (2001) y el acuerdo de ciberdefensa de la OTAN (2010). Esos no son normas españolas."
);

c(
  "teoria",
  "Marco legal",
  "¿Cómo resume la diapositiva el GDPR?",
  "Pedir permiso, ser transparente e invertir en seguridad para evitar brechas. Además hay que poder demostrar el cumplimiento, informar y registrar el tratamiento, limitar las transferencias fuera de la UE, formar, nombrar un DPO y hacer evaluaciones de privacidad.",
  [
    "Avisar a INCIBE-CERT en menos de 24 horas de cualquier incidente.",
    "Conservar todos los logs al menos un año con tres meses en línea.",
    "Sustituye al ENS y regula solo los sistemas clasificados.",
  ]
);

c(
  "teoria",
  "Marco legal",
  "¿Qué es la LOPD frente al GDPR?",
  "La LOPD es la ley orgánica española de protección de datos. El GDPR es el reglamento europeo de protección de datos.",
  [
    "La LOPD es la directiva NIS2 y el GDPR es el ENS.",
    "Las dos son lo mismo: el estándar PCI de tarjetas.",
    "La LOPD regula el no repudio y el GDPR el cifrado militar.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Qué es un incidente en este tema?",
  "Un intento de traspasar la seguridad de un sistema o una red: acciones deliberadas para comprometer la confidencialidad, la integridad o la disponibilidad.",
  [
    "Cualquier línea de log con prioridad debug.",
    "Un falso positivo de un escáner de servidor web.",
    "La fase de preparación anterior a que exista un ataque.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Para qué sirve la respuesta a incidentes y dónde se hace?",
  "Para descubrir y responder a amenazas y brechas, minimizar la pérdida de información y las interrupciones. Se hace en el SOC. Actúan equipos CERT; en España, el CCN-CERT del CNI.",
  [
    "Para escribir la política de privacidad y nombrar al DPO.",
    "Solo para borrar logs cuando el disco se llena.",
    "Se hace en el puesto del usuario, sin un centro de operaciones.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Qué incluye la preparación, la primera fase del ciclo de respuesta?",
  "Valorar riesgos (activos, valor, probabilidad y severidad), asegurar el host y la red, prevenir malware y formar a los usuarios (contraseñas, USB).",
  [
    "Contener el ataque, recoger evidencias y restaurar el backup.",
    "Correlacionar logs y sincronizar relojes, que es la fase de detección cuando el incidente ya está en curso.",
    "Recoger evidencias y restaurar la copia, que corresponde a la erradicación y la recuperación.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Qué entra en detección y análisis?",
  "Indicadores y precursores. Sistemas como IDS, cortafuegos, antivirus, SIEM, logs y CVE. Buenas prácticas: saber qué es lo normal, guardar y correlacionar logs, sincronizar relojes y poder mirar paquetes.",
  [
    "Deshabilitar cuentas y reinstalar sistemas, que es la erradicación, no la detección.",
    "Valorar activos y probabilidad antes de que exista un incidente, que es la preparación.",
    "Redactar el informe forense admisible, que se hace después de cerrar el incidente.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Qué se hace en erradicación y recuperación?",
  "Contener el alcance, recoger evidencias, identificar hosts atacantes, eliminar el malware, deshabilitar cuentas comprometidas, reconstruir sistemas y recuperar copias.",
  [
    "Valorar activos, probabilidad y severidad, que es la preparación y ocurre antes del incidente.",
    "Correlacionar logs y comparar con la línea base de lo normal, que es la detección.",
    "Sacar estadísticas, inteligencia de amenazas y simulacros, que es la fase posterior.",
  ]
);

c(
  "teoria",
  "Incidentes",
  "¿Qué se hace después del incidente?",
  "Aprender qué falló y qué funcionó, sacar estadísticas, intercambiar información, producir inteligencia de amenazas (CTI), hacer forense admisible y realizar simulacros.",
  [
    "Contener el alcance, quitar el malware y recuperar la copia, que es la erradicación.",
    "Formar a los usuarios y parchear hosts, que es la preparación previa.",
    "Declarar el incidente cerrado en cuanto el antivirus deja de alertar, sin revisar qué falló.",
  ],
  "Forense, en la diapositiva: proceso para extraer, examinar y reconstruir evidencias digitales de manera íntegra y legalmente admisible."
);

c(
  "teoria",
  "Privacidad",
  "¿Qué es la privacidad en el tema y con qué entra en tensión?",
  "Es el derecho o la capacidad de decidir cómo, cuándo y quién accede a la información. Entra en tensión con la seguridad y con la experiencia de usuario.",
  [
    "Es lo mismo que la confidencialidad del mensaje en tránsito.",
    "Es el no repudio en destino.",
    "Solo se aplica a las empresas, nunca a los usuarios.",
  ],
  "La diapositiva avisa de que quien invade la privacidad se escuda en «es por tu seguridad» o «para ofrecerte mejores productos»."
);

c(
  "teoria",
  "Privacidad",
  "¿Qué diferencia hay entre tracking de primera y de tercera parte?",
  "La primera parte rastrea desde el propio sitio o la app que visitas. La tercera es una entidad distinta de ese sitio. El rastreo no es anónimo: es fácil de relacionar, por ejemplo con un perfil de red social.",
  [
    "La tercera parte es el propio sitio y la primera es el anunciante externo.",
    "Los dos son anónimos por definición y no se pueden relacionar con una persona.",
    "Solo la tercera parte necesita consentimiento; la primera está prohibida.",
  ]
);

c(
  "teoria",
  "Factor humano",
  "¿Por qué el tema dice que las personas siguen siendo un vector preferido?",
  "Por configuraciones incorrectas, credenciales débiles y mal uso de sistemas o algoritmos. La interfaz de seguridad sigue siendo difícil; el tema cita «Why Johnny Can't Encrypt» (1999).",
  [
    "Porque el cifrado moderno es imposible de usar bien en cualquier caso.",
    "Porque el malware ya no necesita que nadie haga clic.",
    "Porque el ENS obliga al usuario a desactivar la autenticación.",
  ]
);

c(
  "teoria",
  "Factor humano",
  "Define phishing.",
  "Suplantación de una entidad legítima, normalmente con una web maliciosa enlazada desde un fraude previo (spam), para recoger credenciales.",
  [
    "Registro de un dominio parecido al de una marca, sin necesidad de una web que imite el original.",
    "Mensaje no solicitado cuyo único fin es la publicidad.",
    "Historia larga que fabrica confianza para ir sacando dinero, como una estafa romántica.",
  ]
);

c(
  "teoria",
  "Factor humano",
  "¿Qué es el spear phishing, el BEC y el whaling?",
  "El spear phishing es un fraude dirigido a una víctima concreta. El BEC (Business Email Compromise) es ese correo hecho a medida en un contexto de empresa. El whaling es la variante contra altos directivos, el fraude al CEO.",
  [
    "Whaling es el phishing masivo a consumidores.",
    "BEC es un ataque de denegación de servicio contra el correo.",
    "Spear phishing solo existe en redes sociales y nunca llega por email.",
  ],
  "En el tema de amenazas se insiste: el phishing se desplaza del consumidor a la empresa, crece en el móvil y también aparece en sitios HTTPS."
);

c(
  "teoria",
  "Factor humano",
  "Diferencia baiting, scareware y pretexting.",
  "Baiting: un señuelo que apela a la codicia o la curiosidad (has ganado un premio). Scareware: una amenaza ficticia que usa el miedo (estás infectado, somos la policía). Pretexting: una historia fabricada que construye confianza para seguir sacando dinero (el príncipe, la estafa romántica).",
  [
    "Los tres son tipos de virus que se copian solos por la red.",
    "Scareware es siempre un rootkit y baiting es un gusano.",
    "Pretexting es el registro de dominios parecidos.",
  ],
  "En el tema de malware, la diapositiva de ransomware dice que antes se llamó scareware. Si la pregunta está en factor humano, scareware es la estafa basada en el miedo."
);

c(
  "teoria",
  "Factor humano",
  "¿Qué es el typosquatting?",
  "Registrar, de mala fe, un dominio tan parecido a una marca que confunde. Es una forma de cybersquatting.",
  [
    "Enviar correo masivo no solicitado.",
    "Suplantar a un banco con una página que cuelga de un enlace en un spam.",
    "Cifrar los ficheros de la víctima y pedir un rescate.",
  ]
);

c(
  "teoria",
  "Factor humano",
  "¿Qué spam es fácil de detectar y cuál no, según el tema?",
  "Fáciles: el clásico del príncipe (409) y el pedido falso de contraseña. Difícil: el spear phishing, correo hecho a medida para una víctima concreta.",
  [
    "El spear phishing es el más fácil porque usa faltas de ortografía evidentes.",
    "Todo el spam es igual de fácil: basta con mirar el adjunto.",
    "El 409 es un ataque de cadena de suministro.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Cómo define el NIST una ciberamenaza?",
  "Circunstancia o evento que puede dañar operaciones, activos o personas a través de un sistema de información, mediante acceso no autorizado, destrucción, revelación, modificación o denegación de servicio. También, la posibilidad de que una fuente de amenaza explote una vulnerabilidad.",
  [
    "Solo un incidente que ya ha tenido éxito y ha sido contenido.",
    "Cualquier vulnerabilidad publicada en CVE, aunque nadie pueda explotarla.",
    "Únicamente el malware que ya está ejecutándose en el equipo.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "La diapositiva de actores agrupa por motivación. ¿Con quién se empareja cada una?",
  "Espionaje político, económico o militar: un estado. Lucro: ciberdelincuente. Causa política, social o ideológica: hacktivista. Lucro o venganza desde dentro: actor interno.",
  [
    "El estado busca solo fama personal y el insider dirige una APT durante años.",
    "El hacktivista alquila ransomware y el estado solo hace phishing masivo a consumidores.",
    "Todas las motivaciones corresponden al mismo tipo de actor.",
  ],
  "En la diapositiva los nombres no están escritos: están las motivaciones. Este es el emparejamiento que corresponde a esas etiquetas."
);

c(
  "teoria",
  "Amenazas",
  "¿Qué tres rasgos definen una APT en el tema?",
  "Está patrocinada por un estado, es sofisticada y persiste en el tiempo.",
  [
    "Es un ataque ruidoso, corto y sin un objetivo concreto.",
    "Es siempre un ransomware de alquiler, sin persistencia.",
    "Es un error de configuración del propio administrador.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "Define cibercrimen según el NIST y qué retos cita el tema.",
  "Delitos cometidos en internet o con ayuda de la tecnología. Los retos son la accesibilidad, la escala y el anonimato.",
  [
    "Solo el espionaje de estado. Los retos son la falta de dinero y de personal.",
    "Cualquier incidente interno. Los retos son el GDPR y el DPO.",
    "Solo la denegación de servicio. No hay anonimato porque la IP identifica siempre a la persona.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Qué diferencia hay entre ransomware y cryptojacking?",
  "El ransomware secuestra un activo y pide un pago. El cryptojacking usa los recursos de la víctima para minar. El tema presenta el segundo como un desplazamiento desde el primero.",
  [
    "Los dos cifran el disco; el cryptojacking además exige un rescate doble.",
    "El cryptojacking es un ataque de cadena de suministro y el ransomware es una noticia falsa.",
    "El ransomware solo afecta a móviles y el cryptojacking solo a papel.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Qué busca el ciberterrorismo y qué objetivos cita el tema?",
  "Cambiar el orden social, crear miedo o influir en decisiones políticas afectando a la CIA o al control de procesos físicos. Objetivos citados: gobiernos, bancos y servicios esenciales.",
  [
    "Solo robar números de tarjeta para venderlos en un mercado.",
    "Modificar hardware por curiosidad, sin fin político.",
    "Publicar un parche de seguridad antes que el fabricante.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Qué objetivos tiene la noticia falsa en el tema?",
  "Causar miedo, causar confusión, cambiar una opinión y propagarse. La propagación puede ser manual o automática.",
  [
    "Robar credenciales suplantando a un medio en un correo dirigido a una víctima concreta.",
    "Registrar un dominio casi idéntico al de un medio para que la pieza parezca suya.",
    "Tumbar el sitio que podría desmentirla mediante una denegación de servicio.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Para qué usa la IA el atacante, según el tema?",
  "Para que el ataque parezca más humano: ingeniería social a medida, correos con lenguaje natural y contexto, romper captchas y manipular datos de otros sistemas de IA.",
  [
    "Solo para detectar malware en un SOC defensor.",
    "Para sustituir el cifrado del canal y volverlo ilegible para el propio atacante.",
    "La diapositiva dice que la IA no tiene ningún uso ofensivo.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Qué es el caso Mirai en las diapositivas?",
  "Una botnet de dispositivos IoT. En septiembre de 2016 hizo denegaciones de servicio de más de 600 Gbps y tumbó Krebs on Security, OVH y Dyn, y con ellos servicios web muy visibles.",
  [
    "El ataque de 2019 a Orion, de SolarWinds, con más de 18 000 clientes.",
    "La puerta trasera de XZ Utils en 2024, en betas de Red Hat y Debian.",
    "El gusano de correo I Love You, del año 2000.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "¿Por qué el tema destaca los ataques web?",
  "Porque la superficie es enorme: navegadores, servicios web, CMS y sitios. Sirven, entre otras cosas, para troyanos bancarios.",
  [
    "Porque solo afectan a redes aisladas sin usuarios.",
    "Porque son imposibles si la web usa el puerto 443.",
    "Porque sustituyen por completo al phishing y al ransomware.",
  ]
);

c(
  "teoria",
  "Amenazas",
  "Define un ataque de cadena de suministro y cita los dos ejemplos del tema.",
  "Una interrupción en un proceso normal que deja un resultado comprometido, para atacar después a quien usa ese software. SolarWinds 2019: Orion, acceso privilegiado a logs y rendimiento, más de 18 000 clientes. XZ Utils 2024: puerta trasera de un contribuidor, en betas de Red Hat y Debian.",
  [
    "Los dos ejemplos son Mirai y el gusano Morris.",
    "Es un typosquatting contra el dominio del fabricante.",
    "SolarWinds es de 2024 y XZ Utils es la botnet de Dyn.",
  ]
);

c(
  "teoria",
  "Reconocimiento",
  "En este tema, ¿qué significa Computer Network Exploitation?",
  "Usar las redes para reunir datos. Puede incluir reconocimiento y ataque, pero la clase se concentra en el reconocimiento. Las técnicas de ataque vienen después.",
  [
    "Es solo la fase de borrar huellas después de un incidente.",
    "Es el nombre del ENS para las auditorías.",
    "Significa exclusivamente denegación de servicio.",
  ]
);

c(
  "teoria",
  "Reconocimiento",
  "¿Qué es OSINT?",
  "Reconocimiento pasivo: reunir información de fuentes abiertas y públicas.",
  [
    "Un escaneo SYN que completa media conexión con cada puerto.",
    "El desensamblado de un binario sin ejecutarlo.",
    "El módulo PAM que pide un código de 30 segundos.",
  ]
);

c(
  "teoria",
  "Reconocimiento",
  "¿Qué se enumera desde fuera y qué desde dentro?",
  "Desde fuera: servicios (SSH, VPN), puertos abiertos, webs (80, 443), huella del sistema operativo. Desde dentro: hosts, usuarios, servicios aprovechables y banner grabbing. No es igual en todos los dispositivos: la diapositiva pone el ejemplo de una impresora o un termómetro.",
  [
    "Desde fuera se ven los usuarios locales y desde dentro solo el puerto 443.",
    "La enumeración interna y la externa producen exactamente el mismo resultado en un termómetro y en un servidor.",
    "OSINT es la enumeración interna y nmap es siempre pasivo.",
  ]
);

c(
  "teoria",
  "Reconocimiento",
  "¿Qué diferencia de alcance hay entre una LAN y una WAN en el tema?",
  "La LAN está dentro de un edificio u organización y los equipos hablan a través de un router o un switch. La WAN conecta equipos a gran distancia, en general a través de Internet.",
  [
    "La WAN es siempre la DMZ y la LAN es siempre la red de administración.",
    "La LAN usa solo UDP 514 y la WAN solo el puerto 22.",
    "No hay diferencia: las dos son redes locales.",
  ]
);

c(
  "teoria",
  "Reconocimiento",
  "En las diapositivas de reconocimiento, ¿qué busca Nmap y qué busca Nikto?",
  "Nmap busca puertos, servicios y huella del sistema operativo. Nikto busca vulnerabilidades del servidor: cabeceras raras, adivinación de subdominios, componentes sin actualizar.",
  [
    "Nikto detecta el sistema operativo y Nmap solo mira cabeceras web.",
    "Los dos hacen lo mismo y se diferencian solo en el sistema operativo donde corren.",
    "Nmap es un gestor de logs y Nikto un servidor NTP.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "Define vulnerabilidad, según el NIST, y dónde se consultan.",
  "Debilidad en un sistema, en sus procedimientos o en sus controles, que una amenaza puede disparar. El repositorio que importa es MITRE CVE. OSVDB está retirado desde 2016.",
  [
    "La vulnerabilidad es el programa que ya la está aprovechando.",
    "OSVDB es el repositorio vigente y CVE se cerró en 2016.",
    "Una vulnerabilidad es lo mismo que un incidente ya contenido.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué es un exploit?",
  "Un programa que se aprovecha de una vulnerabilidad.",
  [
    "La debilidad en sí, antes de que exista ninguna herramienta.",
    "El informe forense posterior al incidente.",
    "La facility de syslog por la que habla el núcleo.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué consigue un ataque de inyección y cuál es la defensa que pide el tema?",
  "Meter código o una sentencia en un campo para robar, modificar o borrar datos. La defensa es sanitizar y validar todas las entradas del usuario.",
  [
    "Escuchar un canal ya cifrado sin tocar ninguna entrada.",
    "Probar miles de contraseñas hasta acertar. La defensa es cambiar de puerto.",
    "Rellenar el disco de logs hasta tumbar el servicio. La defensa es apagar syslog.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué tiene que conocer quien hace SQL injection y qué herramienta cita el tema?",
  "El tipo de base de datos, su estructura y la consulta maliciosa. La herramienta que aparece es sqlmap. El efecto es modificar, borrar o extraer datos.",
  [
    "Solo la versión del navegador. La herramienta es logrotate.",
    "El salt de /etc/shadow. La herramienta es ntpq.",
    "La clave privada SSH. La herramienta es Nikto.",
  ],
  "Esto es el qué y el para qué. El parcial no necesita una consulta concreta."
);

c(
  "teoria",
  "Técnicas",
  "¿Qué es un man in the middle, en una frase del tema?",
  "Alguien situado en medio de una comunicación. Puede usarse para probar o para atacar.",
  [
    "Un escaneo que no llega a completar la conexión TCP.",
    "Un fallo que solo existe si el programa se lee entero sin ejecutarlo.",
    "La rotación del fichero cuando alcanza un tamaño.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué es la fuerza bruta y qué contramedida cita el tema?",
  "Muchos intentos hasta conseguir el objetivo, por ejemplo una contraseña. La contramedida que ponen es la autenticación de más de un factor.",
  [
    "Un único intento con la contraseña ya conocida. La contramedida es publicarla.",
    "Validar el formato de una entrada. La contramedida es quitar el cifrado.",
    "Un análisis de strings sin ejecutar el binario.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué es el fuzzing?",
  "Prueba de caja negra que lanza entradas variadas para buscar fallos. También puede usarse para atacar. Desde el punto de vista del atacante no es caja blanca. Depende de la aplicación. Se mitiga con validación y con pruebas de software hechas bien.",
  [
    "Usar solo programas que ya estaban instalados y son de confianza.",
    "Cifrar el binario para que cada copia parezca distinta.",
    "Sincronizar la hora de todos los equipos con un servidor interno.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué es Living off the Land?",
  "Usar programas y ficheros que ya están en el sistema, de confianza, sin soltar una herramienta maliciosa propia. Cuesta ver quién está detrás. La diapositiva nombra, entre otros, WMIC, Bitsadmin, certutil y regsvr32. El objetivo que escribe es robar información y moverse en lateral.",
  [
    "Subir un binario nuevo, firmado por el atacante, para que el antivirus lo marque en cuanto aparece.",
    "Cifrar el propio código en cada salto y descifrarlo igual en la víctima, que es polimorfismo.",
    "Simular un servicio vulnerable para que el malware entre solo, que es un honeypot.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Qué contrapone la diapositiva de DNS over HTTPS?",
  "El envenenamiento clásico, en el que el atacante mete sus propias IP, frente a DoH, que va cifrado y dificulta esa inspección.",
  [
    "DoH publica las consultas en claro para que el administrador vea el poisoning y lo bloquee.",
    "El poisoning mete la IP legítima y DoH la sustituye por la del atacante en el resolver local.",
    "DoH es el puerto de syslog cifrado, y el poisoning es un desajuste del servidor NTP.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "¿Quién hizo Metasploit, en qué año y en qué lenguaje, y qué interfaz se usa más?",
  "H. D. Moore, en 2003, en Ruby. msfconsole es la interfaz más usada. msfgui es la gráfica.",
  [
    "Lo escribió el CCN en 1997, en Python, y la interfaz habitual es la gráfica msfgui.",
    "Es de 2016, va dentro del kernel y solo se maneja desde un SIEM.",
    "Es un módulo de rsyslog escrito en Ruby para reenviar logs a un loghost.",
  ]
);

c(
  "teoria",
  "Técnicas",
  "En Metasploit, ¿cómo se separan vulnerabilidad, exploit y payload?",
  "La vulnerabilidad es el fallo (en el ejemplo, una SQL injection por no validar la entrada). El exploit es lo que lo aprovecha. El payload es lo que se ejecuta después, por ejemplo para llegar a la administración y subir código.",
  [
    "Los tres nombres designan el mismo fichero.",
    "El payload es la vulnerabilidad y el exploit es el log resultante.",
    "La vulnerabilidad es la facility local6.",
  ],
  "El parcial pide esta separación. No hace falta reproducir el módulo."
);

c(
  "teoria",
  "Técnicas",
  "¿Para qué sirve un pentest, según el tema?",
  "Para analizar la seguridad y encontrar huecos antes que un atacante, comprobar configuraciones, formar y probar tecnología nueva. La diapositiva también reconoce que las mismas herramientas pueden usarse para atacar.",
  [
    "Para sustituir la copia de seguridad y el cifrado del disco en la fase de preparación.",
    "Para borrar las evidencias después del incidente y dejar el informe forense.",
    "Para generar una noticia falsa y medir cuánta gente la reenvía.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Cuál es la definición práctica de malware y cuál la teórica?",
  "Práctica: altera el funcionamiento, recoge información sensible, entra en un sistema o busca beneficio (chantaje). Teórica, menos nítida: software destinado a perjudicar al usuario, al equipo o a la red.",
  [
    "Solo es malware si se copia solo por la red. Si lo ejecuta el usuario, no cuenta.",
    "La definición teórica exige que pida un rescate.",
    "Malware es cualquier programa con permisos de administrador.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Por qué prolifera el malware, según el tema?",
  "Por el beneficio, por la automatización (malware como servicio, barato), por la reutilización de código, por la poca persecución en darknets y por la ayuda de la IA.",
  [
    "Porque cada muestra se escribe desde cero y no se puede revender.",
    "Porque los sistemas operativos dejaron de tener usuarios.",
    "Solo por fallos del hardware de los años 60.",
  ]
);

c(
  "teoria",
  "Malware",
  "Define virus.",
  "Malware que infecta otros binarios. Necesita que algo dispare la infección. Busca un vehículo para llegar a otros equipos.",
  [
    "Se autorreplica por la red explotando vulnerabilidades, sin infectar un binario anfitrión.",
    "Se disfraza de programa legítimo y lo arranca la propia víctima creyendo que es normal.",
    "Oculta sus huellas y normalmente exige privilegios de root.",
  ]
);

c(
  "teoria",
  "Malware",
  "Define gusano.",
  "Se autorreplica por la red, explotando vulnerabilidades, fallos de configuración o la ingeniería social. Su objetivo inmediato es infectar el siguiente equipo.",
  [
    "Infecta otros binarios y espera a que alguien lo ejecute.",
    "Solo muestra anuncios y no se propaga.",
    "Es un documento de texto sin capacidad de ejecución.",
  ]
);

c(
  "teoria",
  "Malware",
  "Define troyano.",
  "Se disfraza de programa normal y lo dispara el usuario. El objetivo es ejecutar funciones ocultas: más malware, bots, puertas traseras o un RAT.",
  [
    "Se copia solo de máquina en máquina sin que el usuario abra nada.",
    "Cifra los datos y muestra una nota de rescate.",
    "Es la copia de seguridad del sistema.",
  ]
);

c(
  "teoria",
  "Malware",
  "Define spyware, adware, ransomware y rootkit.",
  "Spyware: espía y roba información personal. Adware: muestra anuncios. Ransomware: secuestra un activo valioso para cobrar. Rootkit: se esconde, normalmente necesita root, y deja una puerta trasera.",
  [
    "El rootkit muestra anuncios, el adware secuestra el disco y el spyware es un anuncio legal.",
    "Los cuatro son gusanos y se diferencian solo por el puerto.",
    "El ransomware es la estafa del príncipe y no toca ningún fichero.",
  ],
  "En esta diapositiva dicen que el ransomware antes se llamó scareware. En factor humano, scareware es otra cosa: la estafa que usa el miedo."
);

c(
  "teoria",
  "Malware",
  "¿Qué es un bot y qué es una botnet?",
  "Un bot es malware controlado en remoto por un mando y control (C2). La botnet es el conjunto. El objetivo es mandar a todos a la vez y mantener el anonimato de quien ordena. Sirve para lo que decida el operador, por ejemplo denegación de servicio o spam.",
  [
    "Un bot es un log centralizado y la botnet es el servidor NTP.",
    "El C2 es el certificado con el que el usuario entra por SSH.",
    "Una botnet es siempre un ataque de cadena de suministro contra un compilador.",
  ]
);

c(
  "teoria",
  "Malware",
  "Empareja los hitos que sí nombra el tema.",
  "Brain, 1986, sector de arranque en disquete. Morris, 1988, gusano de red. Melissa, 1999, macro de Office. I Love You, 2000, gusano de correo. Anna Kournikova, 2001, gusano de correo. SoBig, 2003, troyano y puerta trasera. Mydoom, 2004, puerta trasera y bomba lógica de denegación de servicio.",
  [
    "Morris es de 2016 y es una botnet de cámaras. Brain es el ataque a SolarWinds.",
    "Melissa es un rootkit de kernel y Mydoom es una norma del ENS.",
    "I Love You es de 1986 y viajaba en disquetes de arranque.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué vectores nuevos cita el tema para el malware móvil?",
  "4G, Wi-Fi, Bluetooth, SMS y los repositorios públicos de aplicaciones. En el móvil hay mucha información personal. En la época web, además, aparecen el drive-by download, el P2P de programas pirata y la publicidad.",
  [
    "Solo el disquete de arranque.",
    "Solo la cadena de suministro de un compilador.",
    "El malware móvil no tiene vector propio y solo llega por correo de escritorio.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué dice el tema del malware asistido por IA, a día de hoy?",
  "No se ha observado de forma masiva: hay prototipos académicos y el coste operativo sigue siendo alto. Rasgos posibles: suplantar marcas, código generado por modelos, bucles de agente y movimiento lateral asistido. La detección que cita sigue siendo la clásica: comportamiento, sandbox en la nube y analítica en el endpoint.",
  [
    "Ya ha sustituido por completo a virus y gusanos, y la detección por comportamiento no sirve.",
    "Solo existe como noticia falsa, sin ningún prototipo.",
    "Se detecta únicamente con la firma MD5 del año 2003.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué son los clippers en el panorama actual del tema?",
  "Ladrones de criptomonedas que vigilan el portapapeles (el copiar y pegar) para sustituir una dirección de destino.",
  [
    "Un gusano que vigila la red y sustituye direcciones de destino en tránsito.",
    "La firma con la que el antivirus reconoce un hash ya visto en VirusTotal.",
    "El proceso que comprime y archiva los logs cuando superan un tamaño.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿En qué consiste el análisis estático básico?",
  "Examinar la muestra sin ejecutarla: antivirus, hash (MD5 o SHA) y strings. VirusTotal es el ejemplo de consulta de hashes y motores.",
  [
    "Ejecutarla en el equipo del analista y mirar qué ficheros crea.",
    "Depurarla en modo kernel con un segundo sistema.",
    "Pedirle al C2 que envíe una orden nueva.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué añade el análisis estático avanzado y por qué puede ver más que el dinámico?",
  "Un desensamblador (IDA Pro, Ghidra) pasa de código máquina a ensamblador. Puede recorrer todos los caminos, también los de un bot que espera una orden y en una ejecución normal no se ven.",
  [
    "Consiste en ejecutar la muestra una vez y anotar las conexiones de red.",
    "Solo mira el icono y el nombre del fichero.",
    "Sustituye al hash: si no hay desensamblado, no se puede identificar una muestra.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué se observa en el análisis dinámico y en qué orden va respecto del estático?",
  "Se ejecuta en un entorno vigilado y se mira qué ficheros, registro, memoria y conexiones toca. Va después del estático básico y, normalmente, antes de bajar al desensamblado profundo. Tiene riesgo: hace falta un entorno controlado.",
  [
    "Se hace en el equipo de producción, antes de calcular el hash.",
    "No mira la red ni los ficheros: solo el código fuente, si existe.",
    "Es más seguro que el estático porque el malware no llega a ejecutarse.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué es un depurador en este tema y qué diferencia hay entre modo usuario y modo kernel?",
  "Permite examinar la ejecución de otro programa: registros, memoria, pila, y también modificarla. En malware suele haber solo ensamblador, no código fuente. El modo kernel exige un segundo sistema. Ejemplos: OllyDbg, Immunity, IDA, gdb, WinDbg.",
  [
    "Es un sandbox en la nube que no puede parar la ejecución.",
    "El modo kernel se hace en el mismo proceso, sin otro equipo.",
    "Sirve para rotar logs cuando alcanzan un tamaño.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué son la primera y la segunda oportunidad de un depurador?",
  "Los depuradores se apoyan en excepciones. En la primera, el depurador ve la excepción antes que el programa. Si la excepción sigue y el programa va a caerse, el depurador tiene una segunda oportunidad.",
  [
    "La primera oportunidad es calcular el hash y la segunda es desensamblar si el hash no está en VirusTotal.",
    "La primera es ejecutar en la nube y la segunda es borrar la muestra si se detecta una VM.",
    "Son las dos claves SSH del laboratorio: la pública firma y la privada comprueba.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué es un sandbox y qué problema cita el tema con el malware dirigido?",
  "Un entorno seguro, a menudo virtualizado, para ejecutar la muestra sin infectar los sistemas reales. Cuckoo es el ejemplo. Si la muestra es dirigida, puede llevar nombres internos, usuarios o contraseñas: subirla a un servicio público filtra esos datos.",
  [
    "Es el loghost que centraliza syslog para no ejecutar la muestra en el equipo real.",
    "Es un honeypot: su objetivo es atraer muestras nuevas, no analizar una que ya tienes.",
    "Impide las técnicas anti-VM porque la muestra no puede saber que está virtualizada.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué hacen un honeypot y una honeynet?",
  "Simulan vulnerabilidades y servicios para atraer malware. La máquina física cuesta de restaurar y de automatizar. La virtual tiene técnicas anti-VM y riesgos propios, como las carpetas compartidas.",
  [
    "Son el desensamblador que usa el analista sobre una muestra ya capturada.",
    "Son el formato binario del log de Windows.",
    "Sustituyen al hash MD5 para identificar la muestra.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué es un packer?",
  "Una capa que reduce el tamaño y estorba la detección. Deja secciones poco claras.",
  [
    "Una técnica que reescribe el código en cada infección con instrucciones equivalentes.",
    "Un depurador de modo kernel.",
    "El fichero donde se guarda la contraseña ya recuperada.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué es el polimorfismo?",
  "Cambia la apariencia con una clave y un motor de mutación, normalmente cifrando el binario. Una vez descifrado, el código es el mismo: no reescribe su propio código.",
  [
    "Reescribe su propio código: cambian las secuencias de bytes y la función se mantiene.",
    "Oculta el proceso dentro del kernel y exige root.",
    "Es lo mismo que un packer, y solo sirve para comprimir.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué es el metamorfismo?",
  "Reescribe su propia forma. Las secuencias de bytes cambian de una variante a otra y la función se mantiene. La diapositiva pone NOPs e instrucciones equivalentes, como varias maneras de dejar un 5 en un registro.",
  [
    "Solo cifra el binario y, al descifrar, queda idéntico.",
    "Cambia el icono y no toca ninguna instrucción.",
    "Es la detección por firma de un antivirus.",
  ]
);

c(
  "teoria",
  "Malware",
  "¿Qué técnicas anti-depuración cita el tema?",
  "Retrasos temporales, código que se ejecuta antes del punto de entrada, y detección del depurador por consultas a la API o por flags de hardware.",
  [
    "Publicar el hash en VirusTotal para que el depurador se niegue a adjuntarse.",
    "Comprimir el binario con un packer para que el depurador no encuentre el punto de entrada.",
    "Pedir un segundo factor antes de permitir que el depurador lea la memoria.",
  ]
);

/* ---------- LABORATORIOS ---------- */

c(
  "labs",
  "Escenario",
  "¿Qué máquina hay en cada red del laboratorio?",
  "Red externa: Kali, 192.168.3.10, y el router por eth0 en 192.168.3.2. DMZ: router eth1 en 192.168.1.2 y LAMP en 192.168.1.20. ADM: router eth2 en 10.0.4.2, IDS en 10.0.4.40 y OSSIM en 10.0.4.50.",
  [
    "El LAMP está en la ADM y OSSIM en la red externa.",
    "La Kali es el loghost y el IDS está en la DMZ.",
    "Las tres redes comparten la dirección 10.0.4.50.",
  ]
);

c(
  "labs",
  "Escenario",
  "¿Con qué usuario se entra en cada máquina?",
  "Kali: kali. LAMP e IDS: master. OpenWRT y OSSIM: root.",
  [
    "OSSIM usa master y el LAMP usa root.",
    "Todas usan kali.",
    "El IDS usa root y OpenWRT usa master.",
  ],
  "Las contraseñas del guion son las de las máquinas de clase: kali, cyber y toor, emparejadas con esos usuarios. No son de ningún sistema real."
);

c(
  "labs",
  "Escenario",
  "¿Quién da la hora y quién recibe los logs?",
  "El IDS (10.0.4.40) es el servidor NTP. OSSIM (10.0.4.50) es el loghost y escucha syslog por UDP 514.",
  [
    "OSSIM da la hora y el IDS guarda los logs.",
    "La Kali hace las dos funciones.",
    "El LAMP es el NTP y OpenWRT es el único sitio donde se conservan los logs.",
  ]
);

c(
  "labs",
  "Escenario",
  "¿En qué laboratorio no hace falta la Kali?",
  "En el de logs. Sí hace falta en el de autenticación SSH y en el mini-lab de Nmap y Nikto.",
  [
    "No hace falta en el de SSH, porque el 2FA se prueba desde el IDS.",
    "No hace falta en ningún laboratorio.",
    "Solo hace falta en el de logs, para recibir el tráfico UDP 514.",
  ]
);

c(
  "labs",
  "Identidad",
  "Define autenticación, autorización y accounting.",
  "Autenticación: demostrar quién eres. Autorización: qué puedes hacer (recursos y procesos). Accounting: el rastro de lo que hiciste. El accounting enlaza con los logs.",
  [
    "Autorización es demostrar quién eres, y autenticación es el rastro de lo que hiciste después.",
    "Accounting es decidir qué recursos puede usar esa identidad una vez dentro.",
    "Las tres describen el mismo control y solo cambia el fichero donde se anota.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Cuáles son los tres factores de autenticación del tema?",
  "Algo que sabes (una contraseña), algo que tienes (una tarjeta o un token OTP) y algo que eres (una huella o un rasgo de conducta).",
  [
    "Leer, escribir y ejecutar.",
    "Facility, prioridad y acción.",
    "Confidencialidad, integridad y disponibilidad.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Qué ventaja y qué riesgo tiene la autenticación de una sola vez frente a la continua?",
  "La de una sola vez es rápida. Si roban el dispositivo, permite suplantación. La continua dificulta los bots y sube la seguridad.",
  [
    "La continua se hace una vez al año y la de una sola vez pide un factor cada segundo sin excepción.",
    "La de una sola vez impide por completo la suplantación.",
    "La continua elimina la necesidad de identificar al usuario.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Qué ventajas e inconvenientes del SSO cita el tema?",
  "Ventajas: acceso rápido, no hay que recordar contraseñas y es fácil conectar servicios nuevos. Inconvenientes: esa contraseña maestra tiene que ser muy fuerte, si el SSO cae no entras a nada, y si comprometen al proveedor de identidad se filtra todo.",
  [
    "El SSO obliga a una contraseña distinta por cada servicio.",
    "Si el proveedor cae, cada aplicación sigue entrando con su propia base local sin notar nada.",
    "El SSO es el selector de syslog que separa los inicios de sesión del resto de eventos.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Qué persiguen por igual el SSO y la identidad federada, y en qué protocolos se apoya la federación?",
  "Los dos buscan usar una misma identidad en varios servicios. Para autenticar, el tema cita OpenID Connect, SAML y Firebase. Para autorizar, OAuth 2.0.",
  [
    "OAuth autentica y OpenID Connect solo autoriza.",
    "SAML es el hash de /etc/shadow.",
    "La identidad federada prohíbe entrar a más de un servicio.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Qué problema evita OAuth y qué piezas lo forman?",
  "El cliente no pide la contraseña del usuario en el otro servicio. El dueño del recurso concede un authorization grant; el cliente lo cambia por un access token y presenta ese token para llegar solo a los recursos permitidos.",
  [
    "OAuth entrega la contraseña de Facebook al sitio que quiere las fotos.",
    "El access token sustituye al certificado SSH y se guarda en /etc/shadow.",
    "OAuth es el protocolo con el que syslog envía logs por UDP.",
  ]
);

c(
  "labs",
  "Identidad",
  "¿Qué es OpenID Connect, qué es SAML y qué métodos tiene Firebase?",
  "OpenID Connect autentica y hace SSO de cara al usuario, encima de OAuth. SAML es un estándar abierto en XML, el SSO típico de empresa. Firebase autentica en el cliente con correo y contraseña, con un proveedor federado, con el teléfono por SMS o de forma anónima (pudiendo identificarse después).",
  [
    "SAML va en binario y OpenID Connect autoriza, no autentica, y no se apoya en OAuth.",
    "Firebase solo admite certificado de empleado y un código TOTP generado en el servidor.",
    "OpenID Connect es el SSO de empresa en XML, y SAML es el inicio de sesión anónimo de Firebase.",
  ]
);

c(
  "labs",
  "Linux",
  "¿Qué hay en /etc/passwd y qué hay en /etc/shadow?",
  "passwd lo puede leer cualquiera y no lleva el hash: lleva la cuenta. shadow lleva el hash, el salt y datos de caducidad, y está protegido.",
  [
    "Los dos llevan el hash y los dos son legibles por cualquier usuario.",
    "shadow es legible por todos y passwd solo por root.",
    "Las contraseñas de Linux están en el SAM de Windows.",
  ]
);

c(
  "labs",
  "Linux",
  "Un hash de shadow empieza por $6$. ¿Qué algoritmo es y dónde está el salt?",
  "$6$ es SHA-512. $5$ es SHA-256 y $1$ es MD5. El salt es el tramo entre el segundo y el tercer dólar.",
  [
    "$6$ es MD5 y el salt es el nombre de usuario.",
    "$6$ es el hash LM de Windows, basado en DES.",
    "El salt va al final del fichero passwd, fuera del hash.",
  ]
);

c(
  "labs",
  "Linux",
  "¿Dónde se definen los grupos y qué grupo recibe un usuario nuevo?",
  "En /etc/group. Al crear un usuario se crea, por defecto, un grupo con su mismo nombre, y el usuario pertenece a él.",
  [
    "En /etc/shadow, y el usuario nuevo entra en root.",
    "En el SAM, y no se crea ningún grupo.",
    "Los grupos solo existen en Windows. Linux solo tiene el bit de otros.",
  ]
);

c(
  "labs",
  "Linux",
  "¿Qué número es el modo rw-r--r-x y qué permisos son 741?",
  "rw-r--r-x es 645. 741 es rwx para el usuario, r para el grupo y x para el resto, lo mismo que u=rwx,g=r,o=x.",
  [
    "rw-r--r-x es 755. 741 es rwxrwxrwx.",
    "rw-r--r-x es 644. 741 no existe porque los números solo llegan a 7 en un dígito y 741 tiene tres, pero significaría otra cosa distinta de la diapositiva.",
    "645 es rwxr-xr-x.",
  ],
  "r=4, w=2, x=1. rw- = 6, r-- = 4, r-x = 5."
);

c(
  "labs",
  "Linux",
  "¿Qué es el principio de mínimo privilegio y qué archivo regula el sudo?",
  "La cuenta de cada día no debe ser administrador. /etc/sudoers dice quién puede elevar privilegios y para qué.",
  [
    "Todo el mundo debe entrar como root para no olvidar la contraseña.",
    "sudoers guarda los hashes de shadow.",
    "El mínimo privilegio significa quitar el bit de lectura a /etc/passwd.",
  ]
);

c(
  "labs",
  "Windows",
  "¿Qué es un security principal y qué propiedad tiene su SID?",
  "Cualquier entidad que puede autenticarse: usuario, grupo o equipo. El SID es único aunque se repita el nombre. La diapositiva dice que, en vez de borrar usuarios, se deshabilitan.",
  [
    "El SID se reutiliza al crear otra cuenta con el mismo nombre.",
    "Solo los usuarios tienen SID; los grupos no.",
    "El SID de Windows se guarda en /etc/passwd.",
  ]
);

c(
  "labs",
  "Windows",
  "¿Qué lleva el access token de un inicio de sesión?",
  "El SID del usuario, los grupos, los privilegios y un logon ID que apunta a la sesión de origen.",
  [
    "La contraseña en claro y el historial del navegador.",
    "Solo el nombre para mostrar, sin grupos ni privilegios.",
    "El hash LM y nada más.",
  ]
);

c(
  "labs",
  "Windows",
  "¿Qué relación hay entre ACL y ACE?",
  "La ACL es la lista de control de acceso. Cada entrada es un ACE: permisos sobre el recurso y derechos del usuario. Una copia del ACE viaja con los hilos y procesos que ejecuta ese usuario.",
  [
    "ACE es el algoritmo del hash y ACL es /etc/shadow.",
    "La ACL solo existe en Linux y se edita con chmod.",
    "Un ACE es el certificado público SSH.",
  ]
);

c(
  "labs",
  "Windows",
  "¿Dónde está el SAM y cómo protege las contraseñas?",
  "En %SystemRoot%/system32/config/SAM. No se puede leer con Windows en marcha. LM, basado en DES, está obsoleto; la diapositiva lo sitúa antes de Windows NT 3.1. NTLM (escrito NLTM en la diapositiva) se basa en MD4.",
  [
    "Está en /etc/shadow y usa SHA-512 con salt.",
    "Está en authorized_keys y se consulta por UDP 514.",
    "LM es el algoritmo vigente y NTLM está retirado desde NT 3.1.",
  ]
);

c(
  "labs",
  "Windows",
  "Define DAC, MAC y RBAC.",
  "DAC (discrecional): el dueño del recurso decide, como los permisos de Linux y las ACL. MAC (obligatorio): una política central asigna etiquetas y el usuario no las rebaja. RBAC: los permisos van unidos al rol, no a la persona.",
  [
    "DAC es la política de etiquetas militares y MAC es el chmod.",
    "RBAC significa que cada fichero tiene su propia contraseña.",
    "Los tres son protocolos de identidad federada.",
  ],
  "La diapositiva nombra los tres. El dibujo que sí se lee es una ACL con permisos por usuario, el caso discrecional."
);

c(
  "labs",
  "Windows",
  "¿Qué diferencia hay entre un grupo local, uno de dominio, sAMAccountName y UPN?",
  "El grupo local vale en una máquina. El de dominio lo administra Active Directory. sAMAccountName es el nombre de login tradicional. UPN es el nombre moderno, con forma de correo.",
  [
    "UPN es el SID y sAMAccountName es el hash NTLM.",
    "El grupo de dominio solo existe dentro de /etc/group.",
    "Los dos nombres son el mismo campo de syslog.",
  ]
);

c(
  "labs",
  "SSH",
  "En el laboratorio, ¿qué autenticación se exige desde cada red hacia el LAMP?",
  "Desde la red externa (Kali), doble factor. Desde la ADM (el IDS), clave pública.",
  [
    "Desde Kali, solo clave pública. Desde el IDS, contraseña en claro sin más.",
    "Desde las dos redes, solo el código TOTP, sin contraseña ni clave.",
    "Desde OSSIM, el certificado de la CA raíz, y desde Kali no se permite SSH.",
  ]
);

c(
  "labs",
  "SSH",
  "¿Por qué el guion desaconseja la contraseña como único método en un SSH expuesto?",
  "Porque se puede atacar por fuerza bruta. Por eso desde fuera se añade un segundo factor y desde la ADM se usa clave pública.",
  [
    "Porque SSH no cifra el canal si se usa contraseña.",
    "Porque la contraseña se guarda en claro en /etc/passwd.",
    "Porque el puerto 22 no admite más de un intento.",
  ]
);

c(
  "labs",
  "SSH",
  "¿Cómo funciona el TOTP de Google Authenticator en este laboratorio?",
  "En el alta, el LAMP genera un secreto (texto o QR) y unos códigos de emergencia por si pierdes el móvil. El móvil calcula HMAC-SHA1 con ese secreto y el número de periodos de 30 segundos desde el epoch de Unix. Se enseña un trozo de ese MAC.",
  [
    "El código es una contraseña fija que no cambia con el tiempo.",
    "Se usa el hash LM y una ventana de 24 horas.",
    "El secreto se envía al servidor cada vez que abres la aplicación.",
  ]
);

c(
  "labs",
  "SSH",
  "¿Qué dos ficheros hay que tocar para activar ese segundo factor?",
  "En /etc/pam.d/sshd, al principio: auth required pam_google_authenticator.so. En /etc/ssh/sshd_config: ChallengeResponseAuthentication yes.",
  [
    "Solo /etc/shadow, cambiando el salt.",
    "Solo authorized_keys, pegando el QR.",
    "/etc/ntp.conf y /etc/rsyslog.conf.",
  ]
);

c(
  "labs",
  "SSH",
  "Describe el intercambio de la autenticación por clave pública.",
  "El cliente conecta. El servidor reconoce al usuario y su clave pública, genera un desafío y se lo envía. El cliente firma el desafío con la clave privada (y para usarla teclea la passphrase que la protege). El servidor comprueba la firma con la clave pública.",
  [
    "El cliente envía la clave privada y el servidor la compara con /etc/shadow.",
    "El servidor firma un desafío con la clave privada del usuario, que también está en el servidor.",
    "No hay desafío: basta con copiar id_rsa al fichero passwd.",
  ]
);

c(
  "labs",
  "SSH",
  "¿Qué fichero se queda en el cliente, cuál viaja y dónde acaba en el servidor?",
  "La privada se queda en el cliente (~/.ssh/id_rsa). La pública es id_rsa.pub y acaba en ~/.ssh/authorized_keys del servidor. ssh-keygen las crea. ssh-copy-id copia la pública.",
  [
    "Las dos se copian al servidor. La privada queda en authorized_keys.",
    "La pública se queda solo en el cliente y la privada se manda por syslog.",
    "id_rsa.pub es la privada porque el .pub indica protección.",
  ]
);

c(
  "labs",
  "SSH",
  "¿Para qué pide ssh-keygen una passphrase?",
  "Para proteger la clave privada en el equipo donde está. Quien copie ese fichero todavía necesita la passphrase para usarla. Si no llevas la privada, desde otro equipo no entras.",
  [
    "Es la contraseña del usuario master en el LAMP, y el servidor la comprueba contra shadow.",
    "Es el código TOTP de 30 segundos que pide el PAM al entrar desde la Kali.",
    "Cifra la clave pública antes de copiarla a authorized_keys, para que el servidor no la vea.",
  ]
);

c(
  "labs",
  "Escaneo",
  "¿Qué hace nmap -sS?",
  "Escaneo SYN, o half-open: envía un SYN y no completa la conexión. SYN/ACK significa abierto. RST significa cerrado. Sin respuesta, o un ICMP unreachable de los tipos que cita el guion, significa filtrado.",
  [
    "Detecta el sistema operativo.",
    "Lista la versión del servicio.",
    "Limita el escaneo a 100 puertos.",
  ]
);

c(
  "labs",
  "Escaneo",
  "Empareja -F, -O, -sV, -sU, -p y -oG.",
  "-F: rápido, unos 100 puertos. -O: sistema operativo. -sV: versión del servicio. -sU: UDP, y se puede combinar con -sS. -p: solo esos puertos. -oG: salida que luego se puede filtrar con grep.",
  [
    "-O es la versión del servicio y -sV es el sistema operativo. -F recorre todos los puertos.",
    "-F apaga el escaneo TCP, -sU detecta el sistema operativo y -oG lanza Nikto.",
    "-oG guarda solo los puertos cerrados y -p activa el segundo factor en el SSH del objetivo.",
  ]
);

c(
  "labs",
  "Escaneo",
  "¿Qué hace Nikto y cómo se le indica el objetivo?",
  "Nikto busca vulnerabilidades del servidor web: cabeceras poco habituales, componentes viejos y otros fallos del servicio. El objetivo se pasa con -h: una IP, un nombre o un fichero de hosts.",
  [
    "Nikto descubre el sistema operativo de toda la subred con un SYN.",
    "Nikto recupera contraseñas a partir de un hash.",
    "-h significa el puerto, no el host.",
  ]
);

c(
  "labs",
  "Escaneo",
  "¿Para qué encadena el mini-lab un nmap del puerto 80 con Nikto?",
  "Nmap se queda con quién tiene el 80 abierto (-p 80 -oG, y awk filtra las líneas open). Ese fichero de IP se le pasa a Nikto. El objetivo es localizar servidores web y revisar sus vulnerabilidades, no quedarse solo en el puerto.",
  [
    "Para sincronizar la hora de esos hosts con el IDS.",
    "Para enviarles los logs por UDP 514.",
    "Para extraer el hash de un documento de Office.",
  ]
);

c(
  "labs",
  "Mini-lab de contraseñas",
  "¿Sobre qué formato trabaja John the Ripper en el mini-lab?",
  "Sobre líneas usuario:hash. Es la herramienta de la práctica para estudiar la fuerza de las contraseñas. Está en la Kali.",
  [
    "Sobre el fichero de logs de Apache, línea a línea.",
    "Sobre paquetes SYN, para ver puertos abiertos.",
    "Sobre /etc/passwd, porque ahí está el hash.",
  ]
);

c(
  "labs",
  "Mini-lab de contraseñas",
  "¿Qué hace el modo -single y dónde quedan las contraseñas ya encontradas?",
  "-single es el modo más rápido: prueba candidatos sacados del propio usuario, por ejemplo el nombre. Lo encontrado se guarda en john.pot. --show lo enseña. Para repetir la búsqueda se borra ese fichero o se indica otro con --pot.",
  [
    "-single es el modo más lento y solo prueba dígitos.",
    "--show lanza el ataque desde cero e ignora john.pot.",
    "Las contraseñas recuperadas se escriben en /etc/shadow.",
  ]
);

c(
  "labs",
  "Mini-lab de contraseñas",
  "¿Qué significan --wordlist, --rules e --incremental, y por qué el ataque no funciona siempre?",
  "--wordlist usa un diccionario. --rules deforma esas palabras. --incremental:[MODE] amplía el espacio, por ejemplo ASCII o dígitos. Solo cae lo que está en ese espacio: una contraseña larga y aleatoria no tiene por qué aparecer. Por eso no se recupera en todos los casos.",
  [
    "Los tres modos garantizan la contraseña original en pocos segundos.",
    "--incremental enseña john.pot y --wordlist detecta el sistema operativo.",
    "Si el hash tiene salt, John no puede ni empezar, sea cual sea la contraseña.",
  ]
);

c(
  "labs",
  "Mini-lab de contraseñas",
  "¿Cómo se dificulta este ataque, que es la pregunta final del mini-lab?",
  "Con contraseñas largas, salt, una función de hash lenta y un segundo factor. Ocultar /etc/passwd no esconde el secreto: el hash está en shadow, y además passwd tiene que ser legible.",
  [
    "Publicando el hash para que deje de servir como secreto.",
    "Pasando el hash a /etc/passwd, que cualquiera puede leer, y quitando el salt.",
    "Acortando la contraseña a cuatro caracteres y usando el hash LM, que es el de Linux.",
  ]
);

c(
  "labs",
  "Mini-lab de contraseñas",
  "¿Para qué está office2john en el mini-lab?",
  "Para extraer el hash de un documento de Office cifrado y poder estudiar esa contraseña después con John. No recupera el documento por sí solo.",
  [
    "Para generar el par de claves SSH.",
    "Para configurar el segundo factor TOTP.",
    "Para enviar el documento al loghost por UDP 514.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "Define evento, campo, registro, log, logging y audit.",
  "Evento: una ocurrencia. Campo: un atributo de ese evento. Registro: el conjunto de campos. Log: la colección de registros. Logging: guardarlos. Audit: evaluarlos.",
  [
    "Log es una sola línea y evento es el fichero entero.",
    "Audit es guardar, y logging es borrar lo que no cabe.",
    "Campo y registro son sinónimos de facility.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Cuáles son las 5 W del logging?",
  "Qué pasó, cuándo, dónde, quién y de dónde venía.",
  [
    "Qué, cuándo, dónde, por qué y cuánto costó.",
    "Facility, prioridad, acción, salt y SID.",
    "Confidencialidad, integridad, disponibilidad, autenticación y no repudio.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué logs son de texto y cuáles binarios?",
  "Texto, legible: syslog y las alertas de Snort. Binario, más compacto y que necesita herramienta: el Event Log de Windows y tcpdump.",
  [
    "syslog es binario y hace falta una herramienta; el Event Log de Windows es texto y se lee con cat.",
    "Los dos formatos son texto y ocupan lo mismo; la diferencia es solo el puerto por el que viajan.",
    "tcpdump guarda hashes de contraseñas y el Event Log guarda solo las facilities de syslog.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué tres registros de Windows separa el tema?",
  "Application (eventos ligados al sistema, como DLL), Security (inicios de sesión y acceso a recursos) y System (reinicios, fallos de driver). Las aplicaciones, además, pueden tener su propio log.",
  [
    "Kernel, User y Local6.",
    "Passwd, Shadow y Group.",
    "DMZ, ADM y externa.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué es un sensor y de qué tres familias habla el tema?",
  "Cualquier sistema, aplicación o proceso que aporta información. Las familias son el software de seguridad, el sistema operativo y las aplicaciones, y los equipos de red (routers, switches, cortafuegos).",
  [
    "Sensor es solo la sonda de un IDS. El router no genera logs.",
    "Solo existen sensores de host, y ninguno de red.",
    "Un sensor es el servidor NTP.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué fuentes son push y cuáles pull?",
  "Push: syslog, SMTP y Windows Event Log. Pull: bases de datos y enfoques cliente-servidor como OSSEC.",
  [
    "syslog es pull y OSSEC es push.",
    "Todas son push. Pull no existe en el tema.",
    "NTP es el único mecanismo pull de logs.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "Define la infraestructura de logging y sus tres capas.",
  "El conjunto de hardware, software, redes y soportes que genera, transmite, guarda, analiza y tira los logs. Capas: generación (parsing y filtrado), análisis y almacenamiento (agregación, normalización, rotación, archivo, compresión, integridad, correlación) y monitorización (ver e informar).",
  [
    "Solo es el fichero /var/log/syslog.",
    "Tiene una capa: la del antivirus.",
    "La generación incluye el juicio forense y la monitorización incluye escribir el evento.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué es normalizar y qué es preservar?",
  "Normalizar pasa de formatos distintos a uno común, en tres pasos: parsing (sacar campos), reducción (tirar lo que no hace falta, también por privacidad) y conversión. Preservar es guardar el log crudo como un campo más, para el forense y para el cumplimiento.",
  [
    "Normalizar es borrar el log en origen. Preservar es comprimirlo y tirar el original siempre.",
    "El orden es conversión, luego parsing, luego reducción.",
    "Preservar está prohibido por PCI porque el crudo ocupa sitio.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Cuándo se debe filtrar un log en el origen?",
  "Solo si estás seguro al cien por cien de que sobra, por ejemplo porque es redundante. En general es mejor conservarlo un tiempo.",
  [
    "Siempre, para ahorrar disco, sobre todo los de autenticación.",
    "Nunca se puede filtrar nada, ni lo duplicado.",
    "Solo los de prioridad emerg, que son los menos importantes.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "Diferencia retención, almacenamiento y rotación.",
  "Retención: guardar los logs un tiempo, no necesariamente en línea; la política fija duración, soporte y velocidad de recuperación. Almacenamiento: el formato (texto, texto indexado o binario) o una base, rápida y con control de acceso pero cara y poco escalable. Rotación: archivar (comprimir y pasar a un soporte fuera de línea) por tiempo o por tamaño. El ejemplo es logrotate.",
  [
    "Rotar es normalizar y retener es borrar al día siguiente.",
    "Una base de logs escala mejor que el fichero y no tiene coste.",
    "La retención exige que todo esté en línea todo el año.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué herramientas cita el tema para un análisis manual, y qué no puede hacer ese análisis?",
  "En UNIX: head, tail, less, grep y cut. En Windows, Log Parser, con una sintaxis parecida a SQL. No escala, cuesta con logs complejos y no da una foto general.",
  [
    "El análisis manual es el mejor modo de ver una botnet entera en tiempo real.",
    "grep sustituye a la correlación de un SIEM sin perder nada.",
    "Log Parser solo abre ficheros de Linux.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué análisis es de mal uso, cuál de anomalía y qué aporta la minería?",
  "Por reglas: detección de mal uso. Estadístico: detección de anomalías. La minería busca patrones escondidos en conjuntos grandes (agrupar, clasificar) y necesita datos ya estructurados. Es eficaz y exige mucho conocimiento de los datos.",
  [
    "La anomalía se detecta con una firma fija y el mal uso con la media del tráfico.",
    "La minería trabaja sobre texto libre sin estructura.",
    "El análisis estadístico solo sirve para el informe al juzgado.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Cómo tiene que hablar un informe de logs según el destinatario?",
  "El analista suele ver resúmenes, no el crudo. Al responsable de negocio se le explica en lenguaje de negocio. Un informe forense tiene que valer como prueba. Qué informes hacen falta se decide al principio, por el cumplimiento y por la privacidad.",
  [
    "Al responsable de negocio se le manda el syslog íntegro, y el resumen se reserva para el juicio.",
    "El informe forense se escribe en lenguaje de negocio, sin conservar el evento crudo.",
    "Los resúmenes se improvisan al final, porque el cumplimiento no exige decidirlos al principio.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Quiénes son el primer y el segundo cliente de la infraestructura de logs?",
  "El primero es el CSIRT, que gestiona incidentes. El segundo es el auditor, que comprueba que la infraestructura cumple la norma y usa los logs para auditar a la organización.",
  [
    "El auditor es el primer cliente y el CSIRT solo entra si el auditor escala el caso.",
    "El desarrollador es quien responde al incidente, y el CSIRT configura rsyslog en cada host.",
    "El CIO lee los logs en primera línea y el auditor no puede usarlos para comprobar la norma.",
  ]
);

c(
  "labs",
  "Logs: conceptos",
  "¿Qué hace cada rol con los logs?",
  "Sistemas y redes: configuran el logging de hosts y equipos, lo mantienen y lo miran. Seguridad: lo mismo en los dispositivos de seguridad, como el IDS. Desarrollo: debe seguir un estándar al registrar. El CIO fija los requisitos. El responsable de seguridad de la información supervisa el conjunto.",
  [
    "El desarrollador fija la retención legal y el auditor edita 50-default.conf en cada host.",
    "El CIO es el único que puede abrir un log; el resto recibe solo el informe.",
    "El CSIRT cambia los permisos de /etc/passwd y sistemas se limita a leer el resultado.",
  ]
);

c(
  "labs",
  "Syslog",
  "¿Por dónde viaja syslog y de dónde lee el demonio?",
  "El protocolo clásico va por UDP 514. Las versiones modernas también admiten TCP y TLS. syslogd lee del socket /dev/log y puede escribir el mismo evento en varios sitios, según las reglas.",
  [
    "El protocolo clásico va por TCP 514 y el demonio lee los eventos ya escritos en /var/log/syslog.",
    "Solo admite UDP, y las versiones modernas quitaron TCP y TLS.",
    "El puerto 514 es el de NTP; syslog viaja por el 123.",
  ]
);

c(
  "labs",
  "Syslog",
  "¿Cómo se lee un selector y qué significa el guion delante de la ruta?",
  "Forma: facility.prioridad seguida de una acción. Sin prefijo, esa prioridad y las más graves. Con '=', solo esa prioridad. El guion (-/var/log/...) no sincroniza el disco en cada evento, a cambio de rendimiento. La diapositiva dice que todas las reglas se evalúan.",
  [
    "Sin prefijo significa solo esa prioridad, y '=' significa esa y las más leves.",
    "El guion borra el fichero antes de escribir.",
    "Solo se evalúa la primera regla del fichero; el resto se ignora.",
  ]
);

c(
  "labs",
  "Syslog",
  "¿Qué registra auth.warning, qué registra auth.=warning y qué registra auth.none?",
  "auth.warning: warning y todo lo más grave (err, crit, alert, emerg), no info ni debug. auth.=warning: solo warning. auth.none: nada de la facility auth.",
  [
    "auth.warning registra solo debug, porque el 7 es lo más grave.",
    "auth.=warning registra warning y todo lo más grave.",
    "auth.none registra todo menos warning.",
  ],
  "Número bajo = más grave: 0 emerg, 1 alert, 2 crit, 3 err, 4 warning, 5 notice, 6 info, 7 debug."
);

c(
  "labs",
  "Syslog",
  "La diapositiva equipara '!' con none. ¿Qué usa de verdad el mini-lab?",
  "La diapositiva dice que '!' significa todas las prioridades menos esa, y que none equivale a !*. En el manual, '!' excluye esa prioridad y las más graves, y .none descarta la facility entera. El mini-lab usa .none: es lo que quita auth, authpriv y, después, user.",
  [
    "El mini-lab usa '!debug' para borrar el fichero.",
    ".none significa solo la prioridad notice.",
    "La diapositiva y el mini-lab dicen exactamente lo mismo y no hay nada que distinguir.",
  ],
  "Si la pregunta cita la diapositiva, contesta como la diapositiva. Si cita 50-default.conf, contesta .none."
);

c(
  "labs",
  "Syslog",
  "Cita las prioridades de 0 a 7 y las facilities que salen en la práctica.",
  "0 emerg, 1 alert, 2 crit, 3 err, 4 warning, 5 notice, 6 info, 7 debug. Facilities: kern 0, user 1, auth 4, authpriv 10 (la de autorización cuando el dato es sensible), local0 a local7 del 16 al 23. En el lab, local4 es Snort y local6 es Apache.",
  [
    "7 es emerg y 0 es debug. local6 es la prioridad warning.",
    "authpriv es la 4 y auth es la 10.",
    "local4 y local6 son prioridades, no facilities.",
  ]
);

c(
  "labs",
  "Syslog",
  "En rsyslog, ¿qué diferencia hay entre @ y @@?",
  "Una arroba envía por UDP. Dos arrobas envían por TCP. El laboratorio usa *.* @10.0.4.50, es decir UDP hacia OSSIM.",
  [
    "@@ es UDP y @ es TCP.",
    "La arroba significa la facility local.",
    "@10.0.4.50 sincroniza NTP, no envía logs.",
  ]
);

c(
  "labs",
  "Syslog",
  "En el mini-lab de rsyslog, ¿por qué el mensaje de user sale dos veces y cómo se corta?",
  "user.* lo manda a /var/log/user.log, pero *.* también lo mete en syslog. Se corta cambiando *.*;auth,authpriv.none por *.*;auth,authpriv,user.none y reiniciando rsyslog. El mini-lab se hace en el LAMP.",
  [
    "Sale dos veces porque logrotate lo copia. Se corta borrando /var/log.",
    "Hay que comentar user.* y dejar solo *.*.",
    "Se corta poniendo user.* @@127.0.0.1.",
  ]
);

c(
  "labs",
  "Syslog",
  "¿Qué hace logger -p warn en ese mini-lab?",
  "Genera un registro de prueba con prioridad warning, para comprobar en qué fichero cae después de tocar la configuración.",
  [
    "Reinicia rsyslog y fuerza una rotación de todos los ficheros de /var/log.",
    "Borra el registro de esa prioridad para dejar el fichero limpio antes de la prueba.",
    "Abre el puerto 514 hacia la red externa para comprobar que OSSIM acepta el evento.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cómo queda el IDS como servidor NTP de sí mismo?",
  "En /etc/ntp.conf se comentan los servidores externos. Se añade server 127.127.1.0 y fudge 127.127.1.0 stratum 10, el reloj local. Se reinicia ntp y se comprueba con ntpq -n -c pe.",
  [
    "Se apunta a pool.ntp.org y se borra el reloj local.",
    "El stratum 10 significa que es la mejor fuente posible de Internet.",
    "Se configura en /etc/rsyslog.conf, no en ntp.conf.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿A quién apuntan el LAMP y el router para la hora?",
  "Al IDS, 10.0.4.40. En el LAMP es la línea server de ntp.conf. En OpenWRT es list server dentro de la configuración NTP de /etc/config/system, con los pools externos comentados.",
  [
    "A OSSIM, 10.0.4.50.",
    "A la Kali, 192.168.3.10.",
    "Cada uno se queda con su reloj y no hay servidor común.",
  ],
  "PCI 10.4 pide hora consistente. Sin ella no se puede ordenar lo que pasó en máquinas distintas."
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cómo se prepara OSSIM para recibir logs remotos?",
  "Tienen que estar activos $ModLoad imudp y $UDPServerRun 514. La shell de administración sale de la opción 3, Jailbreak. Entras como root y no hace falta sudo.",
  [
    "Hay que instalar un segundo syslog en la Kali y abrir el puerto 22.",
    "imudp significa TCP. El puerto del laboratorio es el 1514 solo.",
    "Jailbreak es el nombre del módulo PAM del segundo factor.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Qué línea hace que LAMP y Snort manden todo a OSSIM?",
  "*.* @10.0.4.50 dentro de /etc/rsyslog.d/50-default.conf, y luego se reinicia rsyslog. Se comprueba en OSSIM con tcpdump udp port 514 y generando eventos con logger.",
  [
    "*.* @@192.168.1.20, porque el loghost es el propio LAMP y hay que usar TCP.",
    "auth.none @10.0.4.40, porque los logs de autenticación se quedan en el IDS y el resto no se reenvía.",
    "La línea se añade en /etc/ntp.conf, porque quien centraliza los logs es el servidor de hora.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Dónde cae por defecto un log remoto en OSSIM?",
  "En /var/log/alienvault/devices/%fromhost-ip/%fromhost-ip.log, por la plantilla DYNlog definida en zzz_alienvault_template.conf. La regla de partida manda ahí todo lo que no viene de 127.0.0.1.",
  [
    "Siempre en /var/log/syslog del propio LAMP, y OSSIM no guarda copia.",
    "En /home/master/myLogs.log.",
    "En el SAM del IDS.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cómo se separan los logs de Apache?",
  "Si la IP de origen es 192.168.1.20 y la facility es local6, van a /var/log/apacheLAMP.log. El resto de lo remoto, cuando la facility no es local6, sigue por DYNlog.",
  [
    "Apache usa local4 y la IP 10.0.4.40.",
    "Se separan por la palabra «apache» en cualquier facility, venida de cualquier IP.",
    "local6 significa prioridad crítica, no una facility.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cuál es el reto de Snort y cuál el del cortafuegos, aunque el segundo sea para prácticas posteriores?",
  "Snort: la facility local4 desde el IDS (10.0.4.40) va a /var/log/snort.log. El reto de iptables: los mensajes que contienen la palabra iptables van a /var/log/firewall.log. Se puede probar con logger desde OpenWRT.",
  [
    "Snort usa local6 y Apache usa local4.",
    "Los dos se quedan en DYNlog y no hay fichero propio.",
    "iptables se filtra por la facility kern y solo por esa.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cómo manda logs OpenWRT y qué es conloglevel 1?",
  "No usa syslog.conf. En /etc/config/system, option log_ip 10.0.4.50. conloglevel 1 deja en la consola solo prioridad 1 o menor: alert y emerg. El cambio de hora y de logs pide reiniciar el router.",
  [
    "conloglevel 1 muestra debug, info y notice, que son las más graves.",
    "OpenWRT se configura en 50-default.conf, igual que Ubuntu.",
    "log_ip apunta al IDS porque el IDS es el loghost.",
  ]
);

c(
  "labs",
  "Laboratorio de logs",
  "¿Cómo se deja de enviar la facility daemon, que es el reto del hito 1?",
  "En vez de *.* hacia OSSIM, se excluye la facility: *.*;daemon.none @10.0.4.50.",
  [
    "Se comenta la facility en el origen y se deja de instalar rsyslog.",
    "Se cambia el envío a TCP 22, que es el puerto por el que el laboratorio manda los logs.",
    "daemon.none enviaría solo los mensajes del demonio y callaría el resto de facilities.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "En el mini-lab, ¿qué hace cada directiva de myLogRotate.conf?",
  "rotate 2 conserva dos generaciones. daily es la frecuencia de ese fichero, no la de todos los logs. compress comprime. postrotate ejecuta algo justo después; en el ejemplo escribe una línea en el log nuevo. logrotate -f -v fuerza una pasada y la explica.",
  [
    "rotate 2 borra el log al segundo día y no guarda copias.",
    "daily se aplica a todos los ficheros del sistema aunque no estén en ese bloque.",
    "-f significa filtrar y -v significa borrar.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Qué pasa cuando se supera el número de rotaciones?",
  "La copia más antigua se elimina. No se guardan más generaciones que las que dice rotate.",
  [
    "logrotate se detiene y deja de tocar ese fichero para siempre.",
    "Se concatenan todas las copias en un solo fichero sin comprimir.",
    "La más antigua vuelve a ser el log activo.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Todos los logs del sistema rotan igual?",
  "No. /etc/logrotate.conf y los ficheros de /etc/logrotate.d, entre ellos el de rsyslog, pueden fijar plazos y retenciones distintos.",
  [
    "Sí. daily y rotate 2 son globales e inamovibles.",
    "Solo rota syslog. El resto crece sin límite por diseño.",
    "La retención la decide el cliente SSH en cada sesión.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Qué normas cita el tema como marco del logging?",
  "PCI DSS (tarjetas), ISO 27001 (sistema de gestión de seguridad), HIPAA (sanidad en EE. UU.) y las recomendaciones NIST.",
  [
    "Solo el GDPR. PCI, ISO 27001 e HIPAA no dicen nada de logs.",
    "PCI DSS es la directiva europea que obliga a avisar a INCIBE en menos de 24 horas.",
    "HIPAA es el reglamento europeo que sustituye al GDPR cuando el log es sanitario.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Qué pide PCI DSS en 10.1, 10.2 y 10.3?",
  "10.1: poder ligar cada acceso a una persona, así que hace falta un identificador de usuario. 10.2: qué eventos guardar (accesos a datos de tarjeta, acciones de administración, intentos inválidos). 10.3: los campos (usuario, tipo, marca de tiempo, éxito o fallo, origen e identidad del dato afectado).",
  [
    "10.1 obliga a borrar el usuario para anonimizar. 10.3 prohíbe guardar la hora.",
    "10.2 pide conservar los logs un año. 10.1 pide revisarlos cada hora.",
    "Los tres requisitos hablan solo del cifrado de la tarjeta, no de logs.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Qué piden PCI DSS 10.4, 10.5, 10.6 y 10.7?",
  "10.4: hora consistente, con NTP. 10.5: confidencialidad, integridad y disponibilidad de los propios logs. 10.6: revisarlos al menos cada día, lo que empuja a herramientas automáticas. 10.7: conservarlos al menos un año, con tres meses disponibles en línea.",
  [
    "10.7 pide borrarlos a los siete días. 10.4 prohíbe NTP.",
    "10.6 pide revisarlos una vez al año. 10.5 pide que sean públicos.",
    "10.4 es la retención y 10.7 es la hora.",
  ]
);

c(
  "labs",
  "Rotación y cumplimiento",
  "¿Por qué hay que proteger la CIA de los propios logs?",
  "Confidencialidad: pueden llevar datos sensibles, como nombres de usuario en auth. Integridad: son el relato del sistema, y un atacante, un fallo o una mala configuración pueden modificarlos. Disponibilidad: hay que copiarlos a un servidor central; un router no debería ser el único sitio donde viven sus logs.",
  [
    "Los logs no contienen nunca un nombre de usuario, así que la confidencialidad no aplica.",
    "La disponibilidad se consigue dejándolos solo en el dispositivo de red.",
    "La integridad sobra porque un log no sirve como evidencia.",
  ]
);

if (typeof module !== "undefined" && module.exports) module.exports = CARDS;
