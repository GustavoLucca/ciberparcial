/* Opciones falsas: mismo tono que la correcta, dato vecino cambiado. */
const PLAUSIBLE = {};
function p(id, a, b, c) {
  PLAUSIBLE[id] = [a, b, c];
}

p("t001",
  "El conjunto de ordenadores, redes e infraestructuras que se conectan, se administran y se defienden.",
  "El espacio de Internet público en el que solo circula lo que es accesible desde la web abierta.",
  "La sala del SOC en la que los incidentes se detectan, se analizan y se contienen.");
p("t002",
  "Solo es virtual. Incluye datos, servicios y cuentas, pero no ordenadores, personas ni sistemas físicos.",
  "Solo es físico. Incluye equipos, cableado y salas, pero no datos, personas ni servicios.",
  "Es la red de un operador, con fronteras de país claras, sin personas ni sistemas ciberfísicos.");
p("t003",
  "En un servicio de Internet opcional.",
  "En una red social mundial.",
  "En el Esquema Nacional de Seguridad.");
p("t004",
  "Correo, webs estáticas, intradós de empresa, sistemas de backup, el SOC, el CERT y el ENS.",
  "Redes sociales, comercio electrónico, ofimática, centros de datos y la respuesta a incidentes del SOC.",
  "Internet de las cosas, industria 4.0, el Mando Conjunto del Ciberespacio, INCIBE-CERT y el ENS.");
p("t005",
  "Un grupo organizado que alquila ransomware para llevar un sistema al límite de su disponibilidad.",
  "Un joven que busca notoriedad modificando hardware o software para ganar fama en foros.",
  "Un empleado interno que filtra datos modificando el software para cobrarse una venganza.");
p("t006",
  "Estados patrocinadores, con motivaciones estratégicas: espionaje, persistencia o sabotaje.",
  "Grupos organizados, con motivaciones económicas: ransomware, botnets o denegación de servicio.",
  "Empleados internos, con motivaciones personales: venganza, filtración o abuso de acceso.");
p("t007",
  "Siguen siendo individuos aislados, con poco conocimiento técnico y sin recursos económicos. El hacktivismo es alquilar malware, botnets o DDoS con fines de lucro, no políticos.",
  "Pasan a ser servicios de estado, con poco conocimiento propio y muchos recursos económicos. El hacktivismo es espionaje persistente con fines militares, no ideológicos.",
  "Pasan a ser jóvenes independientes, con mucho conocimiento técnico y sin recursos económicos. El hacktivismo es buscar fama con fines personales, no políticos ni sociales.");
p("t008",
  "El paso de buscar fama a cobrar un rescate, aunque el atacante sigue escribiendo él mismo el malware. El delito no se compra ya empaquetado.",
  "La venta de informes del CERT, de copias de seguridad o de respuesta a incidentes, incluido el forense como servicio. La defensa se compra ya empaquetada.",
  "El alquiler de una APT de estado, con persistencia y sofistificación, incluido el espionaje como servicio. El ataque exige un experto.");
p("t009",
  "Que hace falta más conocimiento técnico que nunca, porque las herramientas ya no se alquilan ni se estandarizan.",
  "Que el delito vuelve a ser artesanal: solo un grupo con muchos recursos puede comprar o usar esas herramientas.",
  "Que cualquiera puede defenderse sin formación, porque el CERT alquila herramientas de protección estandarizadas.");
p("t010",
  "Cualidad por la que un mensaje o unos datos se pueden comprobar y no han sido alterados por quien no está autorizado.",
  "Cualidad por la que un mensaje o unos datos están disponibles cuando los pide la persona o el sistema autorizado.",
  "Cualidad por la que un mensaje o unos datos no pueden ser negados después por la persona o el sistema autorizado.");
p("t011",
  "Cualidad que permite comprobar que solo el autorizado lo entiende: el dato no ha sido leído por nadie más.",
  "Cualidad que permite comprobar que el dato sigue disponible: no ha dejado de poder recuperarse cuando hace falta.",
  "Cualidad que permite comprobar que el emisor no niega el envío: el dato conserva la prueba del origen.");
p("t012",
  "Los datos solo los entiende quien está autorizado, y dejan de ser legibles para el resto. No se pueden recuperar si no hay clave.",
  "Los datos no han sido alterados respecto del original, y eso se puede comprobar cuando los necesitan. Se puede demostrar que siguen íntegros.",
  "Los datos prueban quién los envió y quién los recibió. Se pueden usar para el no repudio en ese momento.");
p("t013",
  "Decidir qué recursos puede usar quien ya entró, y en informática asignar permisos después del usuario y la contraseña.",
  "Guardar qué hizo el usuario dentro del sistema, y en informática registrar el acceso además del usuario y la contraseña.",
  "Impedir que niegue el envío o la recepción, y en informática firmar el documento además del usuario y la contraseña.");
p("t014",
  "El receptor no puede negar el envío. La prueba la crea el propio receptor y la recibe el emisor.",
  "El emisor no puede negar la recepción. La prueba la crea el propio destinatario y se la queda él.",
  "Nadie que no esté autorizado puede leer el envío. La prueba la crea el cifrado y la comprueba el destinatario.");
p("t015",
  "El emisor no puede negar que recibió el mensaje. La prueba la crea el emisor y la recibe el receptor.",
  "El receptor no puede negar que envió el mensaje. La prueba la crea el emisor y la conserva el receptor.",
  "El mensaje no puede negar que fue alterado. La prueba la crea el hash y la comprueba el receptor.");
p("t016",
  "Cifrado, firma, hash, cortafuegos, IDS, SIEM y copias de seguridad.",
  "LOPD, GDPR, ENS, NIS2, PCI DSS, ISO 27001 y HIPAA.",
  "Confidencialidad, integridad, disponibilidad, trazabilidad, anonimato, auditoría y forense.");
p("t017",
  "La directiva europea que obliga a medianas y grandes empresas a avisar de un ataque grave en menos de 24 horas. La referencia del tema es INCIBE-CERT. El plazo de 2022 está en la diapositiva de NIS2.",
  "La ley orgánica española que regula la protección de datos personales y el consentimiento del interesado. La referencia del tema es el DPO. El GDPR está en la diapositiva de privacidad.",
  "La norma de la industria de tarjetas que regula qué eventos de acceso hay que registrar y cuánto tiempo conservar los logs. La referencia es PCI DSS. El requisito 10 está en la diapositiva de logging.");
p("t018",
  "Obliga a cualquier particular a cifrar sus datos, nombrar un DPO y avisar de una brecha de privacidad en menos de 72 horas. En España coordina el CCN.",
  "Obliga a la Administración a aplicar el Esquema Nacional de Seguridad y a clasificar los servicios electrónicos. En España coordina el Centro Criptológico Nacional.",
  "Obliga a quien procesa tarjetas a conservar logs un año, con tres meses en línea, y a revisarlos cada día. En España coordina el SOC.");
p("t019",
  "En 2001, el Convenio de Budapest como ley interna. En 2010, el acuerdo de la OTAN sustituye al ENS y a INCIBE-CERT.",
  "En 1997, el PCCIP español. En 2022, NIS2 crea el Mando Conjunto del Ciberespacio y deroga el RD 311/2022.",
  "En 2013, INCIBE-CERT pasa a llamarse CCN-CERT. En 2022, el GDPR y la LOPD se aprueban junto al plan de ciberdefensa.");
p("t020",
  "Avisar a INCIBE-CERT en menos de 24 horas y aplicar el ENS a las empresas de sectores clave. Además hay que conservar logs un año, sincronizar relojes con NTP y revisar los eventos cada día.",
  "Pedir un rescate, ocultar el malware y alquilar la botnet. Además hay que demostrar el no repudio, cifrar con SHA-512 y no registrar el tratamiento fuera de la UE.",
  "Nombrar un CERT, abrir un SOC y clasificar los activos. Además hay que poder demostrar la integridad, informar al CNI y limitar las transferencias al Centro Criptológico Nacional.");
p("t021",
  "La LOPD es la directiva europea de sectores clave. El GDPR es el Esquema Nacional de Seguridad.",
  "La LOPD es el reglamento europeo de protección de datos. El GDPR es la ley orgánica española.",
  "La LOPD es la norma de logs de las tarjetas. El GDPR es la directiva que exige el aviso en 24 horas.");
p("t022",
  "Cualquier línea de log con prioridad debug o un falso positivo del escáner: no hace falta una acción deliberada contra la CIA.",
  "Una vulnerabilidad publicada en CVE que todavía nadie ha disparado: el incidente existe aunque no haya intento.",
  "La fase de preparación del SOC, en la que se valoran activos y se parchea antes de que alguien ataque.");
p("t023",
  "Para pedir permiso, ser transparente y nombrar un DPO. Se hace ante la autoridad de protección de datos. Actúan auditores; en España, INCIBE-CERT no interviene.",
  "Para conservar logs un año y revisarlos cada día. Se hace en el propio router. Actúan administradores; en España, el ENS sustituye al CERT.",
  "Para alquilar la contención como un servicio. Se hace en el equipo del usuario. Actúan los propios afectados; en España no hay CCN-CERT.");
p("t024",
  "Contener el alcance, quitar el malware, deshabilitar cuentas y recuperar la copia, que es la erradicación y no la preparación.",
  "Correlacionar logs, comparar con lo normal y sincronizar relojes, que es la detección cuando el incidente ya está en curso.",
  "Redactar el informe forense, sacar estadísticas y hacer simulacros, que es lo que se hace después de cerrar el incidente.");
p("t025",
  "Activos, probabilidad y severidad. Medidas como parches, contraseñas y control del USB. Buenas prácticas: formar usuarios antes de que exista un incidente.",
  "Contención, evidencias y cuentas comprometidas. Medidas como reinstalar, quitar el malware y tirar de backup. Buenas prácticas: reconstruir el sistema ya atacado.",
  "Lecciones, estadísticas y simulacros. Medidas como el informe al CEO y el intercambio con otros CERT. Buenas prácticas: cerrar el caso y archivar el forense.");
p("t026",
  "Valorar activos, probabilidad y severidad, parchear el host, cerrar la red y formar a los usuarios en contraseñas y USB.",
  "Buscar indicadores, correlacionar logs, comparar con lo normal, sincronizar relojes y revisar IDS, antivirus y SIEM.",
  "Aprender qué falló, publicar estadísticas, intercambiar inteligencia, hacer forense admisible y programar el siguiente simulacro.");
p("t027",
  "Contener el alcance, identificar hosts, quitar el malware, deshabilitar cuentas, reconstruir sistemas y recuperar las copias.",
  "Valorar el riesgo, parchear hosts, segmentar la red, desplegar antimalware y formar a los usuarios antes del ataque.",
  "Declarar el incidente cerrado en cuanto el IDS deja de alertar, sin mirar logs ni conservar evidencias.");
p("t028",
  "Es la cualidad de que solo el autorizado entienda el dato. Entra en tensión con la integridad y con la disponibilidad.",
  "Es la prueba de que el emisor no niega el envío. Entra en tensión con la autenticación y con el no repudio en destino.",
  "Es el deber de avisar a INCIBE-CERT en 24 horas. Entra en tensión con el ENS y con el centro Criptológico Nacional.");
p("t029",
  "La primera parte es un anunciante externo al sitio. La tercera es el propio sitio que visitas. El rastreo es anónimo y no se puede relacionar con un perfil.",
  "La primera parte rastrea solo dentro de la empresa. La tercera es el SOC que correlaciona logs. El rastreo es el no repudio del usuario.",
  "Las dos partes son el mismo responsable del tratamiento. La diferencia es el cifrado, no quién recoge el dato ni si se puede identificar.");
p("t030",
  "Porque el cifrado moderno impide cualquier error humano y el malware ya no necesita que nadie haga clic ni reutilice una contraseña.",
  "Porque los estados dejaron de usar la ingeniería social y el vector preferido pasó a ser solo el exploit de día cero.",
  "Porque el ENS obliga a desactivar la autenticación y la interfaz de seguridad ya no interviene en los fallos.");
p("t031",
  "Registrar un dominio casi igual al de una marca, sin necesidad de una web que imite el original ni de un enlace previo.",
  "Mensaje publicitario no solicitado, sin suplantación de una entidad ni recogida de credenciales en una página falsa.",
  "Historia larga que fabrica confianza para ir sacando dinero, como el príncipe o la estafa romántica, no un enlace a una web falsa.");
p("t032",
  "El spear phishing es el fraude masivo a consumidores. El BEC es un ataque de denegación de servicio al correo. El whaling es el phishing que solo llega por SMS, nunca a un directivo.",
  "El spear phishing es registrar un dominio parecido. El BEC es el anuncio no solicitado. El whaling es la estafa del príncipe, sin un objetivo empresarial ni un CEO.",
  "El spear phishing, el BEC y el whaling son el mismo ataque masivo: cambian el canal, pero no el grado de personalización ni la víctima.");
p("t033",
  "Baiting: una amenaza ficticia que usa el miedo (estás infectado). Scareware: un dominio casi igual al de una marca. Pretexting: correo masivo no solicitado, sin historia ni confianza.",
  "Baiting: correo dirigido al CEO para pedir una transferencia. Scareware: suplantación de una web bancaria enlazada desde spam. Pretexting: registro de un dominio parecido para confundir.",
  "Baiting: gusano que se copia solo por la red. Scareware: rootkit que oculta el proceso y exige root. Pretexting: ransomware que cifra el disco y pide un rescate.");
p("t034",
  "Enviar correo masivo no solicitado para anunciar un producto, sin registrar ningún dominio parecido.",
  "Suplantar a un banco con una página enlazada desde un spam, usando el dominio auténtico de la marca.",
  "Cifrar los ficheros de la víctima y pedir un rescate, sin necesidad de un nombre de dominio que confunda.");
p("t035",
  "Fáciles: el spear phishing y el correo dirigido a un directivo. Difícil: el príncipe nigeriano y el pedido genérico de contraseña.",
  "Fáciles: el BEC hecho a medida y el whaling. Difícil: cualquier spam con faltas de ortografía y un enlace acortado.",
  "Fáciles y difíciles se distinguen por el adjunto, no por lo genérico del mensaje: el príncipe es el caso difícil.");
p("t036",
  "Una vulnerabilidad ya publicada en CVE, aunque nadie pueda explotarla todavía ni haya un evento que dañe operaciones, activos o personas.",
  "Solo un incidente que ya tuvo éxito y fue contenido: si no se comprometió la CIA, no hay amenaza según esta definición.",
  "Cualquier fallo humano de configuración, sin acceso no autorizado, destrucción, revelación, modificación ni denegación de servicio.");
p("t037",
  "Espionaje político, económico o militar: un insider. Lucro: un estado. Causa política o ideológica: un ciberdelincuente. Venganza desde dentro: un hacktivista.",
  "Espionaje: hacktivista. Lucro y fama personal: una APT de estado. Causa ideológica: el actor interno. Venganza: el grupo que alquila ransomware.",
  "Todas las motivaciones corresponden al mismo actor. El estado, el hacktivista, el insider y el ciberdelincuente no se distinguen por el móvil.");
p("t038",
  "Es ruidosa, corta y oportunista, sin un patrocinador ni persistencia.",
  "Está patrocinada por un insider, es simple y termina en cuanto cobra.",
  "Es un ransomware de alquiler, poco sofisticado y sin objetivo concreto.");
p("t039",
  "Solo el espionaje de un estado. Los retos son la falta de dinero, de personal y de persistencia.",
  "Cualquier incidente interno sin Internet. Los retos son el GDPR, el DPO y las transferencias fuera de la UE.",
  "Solo la denegación de servicio. Los retos son la firma del binario, el salt y la sincronización NTP.");
p("t040",
  "El ransomware mina con la CPU de la víctima y no cifra nada. El cryptojacking secuestra el disco y pide el pago.",
  "Los dos cifran el disco y piden un rescate; el cryptojacking solo cambia la moneda en la que se cobra.",
  "El ransomware es una estafa de miedo sin tocar ficheros. El cryptojacking es un ataque de cadena de suministro.");
p("t041",
  "Robar números de tarjeta y venderlos. Objetivos citados: consumidores, tiendas online y pasarelas de pago.",
  "Modificar hardware por curiosidad, sin fin político. Objetivos citados: foros, laboratorios universitarios y CTF.",
  "Alquilar malware y botnets. Objetivos citados: afiliados del CaaS, mercados oscuros y operadores de ransomware.");
p("t042",
  "Abrir un puerto, mantener una sesión cifrada y sincronizar relojes. La propagación es solo por syslog.",
  "Robar credenciales, instalar un rootkit y pedir un rescate. La propagación es solo por un gusano.",
  "Registrar un dominio parecido y suplantar una web. La propagación no busca miedo, confusión ni cambio de opinión.");
p("t043",
  "Para detectar malware en el SOC, correlacionar logs y escribir el informe forense en lenguaje de negocio.",
  "Para sustituir el cifrado del canal y para que el ataque deje de parecer humano en el correo y en la voz.",
  "Para nada ofensivo: la diapositiva dice que la IA solo sirve para romper la detección del defensor, no para engañar.");
p("t044",
  "Un ataque de cadena de suministro de 2019 contra Orion, con más de 18 000 clientes y acceso privilegiado a logs.",
  "La puerta trasera de XZ Utils en 2024, introducida por un contribuidor en betas de Red Hat y Debian.",
  "El gusano de correo I Love You del año 2000, que se propagaba por mensajes y no por dispositivos IoT.");
p("t045",
  "Porque solo afectan a redes aisladas, sin navegador ni usuarios, y no sirven para troyanos bancarios.",
  "Porque dejan de ser posibles en cuanto el sitio usa el puerto 443 y un certificado.",
  "Porque sustituyen al phishing y al ransomware: la superficie web es pequeña y fácil de cerrar.");
p("t046",
  "Un fallo en un equipo concreto, sin comprometer a quien usa después ese software. Mirai 2016: botnet IoT y DDoS a Krebs, OVH y Dyn. Morris 1988: gusano de red, no una cadena de suministro.",
  "El registro de un dominio casi igual al del fabricante para confundir a sus clientes. SolarWinds es de 2024 y XZ Utils es la botnet que tumbó Dyn.",
  "Una denegación de servicio contra el proveedor para que no pueda publicar parches. Los ejemplos del tema son Melissa y Mydoom, no Orion ni XZ Utils.");
p("t047",
  "Borrar huellas después del incidente. No incluye reconocimiento: la clase se concentra en la erradicación y el forense.",
  "El nombre que el ENS da a las auditorías. Es solo defensa, y las técnicas de ataque se ven en el mismo día.",
  "Denegación de servicio distribuida. El reconocimiento pasivo queda fuera y Nikto sustituye a todo el ciclo.");
p("t048",
  "Escaneo SYN que no completa la conexión y marca el puerto como abierto, cerrado o filtrado.",
  "Desensamblado de un binario sin ejecutarlo, para ver todos los caminos con IDA Pro o Ghidra.",
  "Módulo PAM que pide el código TOTP de 30 segundos además de la contraseña de SSH.");
p("t049",
  "Desde fuera: usuarios locales, hashes y sudoers. Desde dentro: solo el puerto 443 y la web pública. En una impresora se ve lo mismo que en un servidor.",
  "Desde fuera: banner grabbing y cuentas del directorio. Desde dentro: solo la huella del sistema operativo. El termómetro no cambia la enumeración.",
  "Desde fuera y desde dentro se obtiene el mismo inventario. OSINT es la enumeración interna y nmap es siempre pasivo.");
p("t050",
  "La WAN está dentro de un edificio y los equipos hablan por un switch. La LAN une sedes lejanas a través de Internet.",
  "La LAN usa solo UDP 514 y la WAN solo el puerto 22. El alcance no depende de la distancia ni del router.",
  "No hay diferencia de alcance: las dos son redes locales y las dos salen a Internet por el mismo interfaz.");
p("t051",
  "Nmap busca vulnerabilidades web, cabeceras raras y componentes sin actualizar. Nikto busca puertos, servicios y la huella del sistema operativo.",
  "Los dos buscan lo mismo y solo cambia el sistema desde el que se lanzan: Nmap en el LAMP y Nikto en el IDS.",
  "Nmap es el gestor de logs y Nikto el servidor NTP. Ninguno enumera puertos ni el servidor web.");
p("t052",
  "El programa que ya está aprovechando el fallo. El repositorio vigente es OSVDB y CVE se cerró en 2016.",
  "Un incidente que ya comprometió la CIA. Se consulta en el SOC, no en un repositorio público de fallos.",
  "La debilidad solo existe en el código, nunca en procedimientos ni controles. MITRE CVE es un formato de log.");
p("t053",
  "La debilidad en el sistema, antes de que exista una herramienta que la dispare.",
  "El informe forense que reconstruye lo que pasó después del incidente.",
  "La facility de syslog por la que el núcleo escribe sus mensajes.");
p("t054",
  "Escuchar un canal ya cifrado sin tocar ninguna entrada. La defensa es cambiar el puerto y activar TLS.",
  "Probar miles de contraseñas hasta acertar. La defensa es un segundo factor, no validar los campos.",
  "Rellenar el disco de logs hasta negar el servicio. La defensa es rotar los ficheros, no sanitizar entradas.");
p("t055",
  "Solo la versión del navegador y el puerto. La herramienta es Nikto. El efecto es detectar el sistema operativo.",
  "El salt de /etc/shadow y el algoritmo del hash. La herramienta es John. El efecto es recuperar la contraseña.",
  "La clave privada SSH y la passphrase. La herramienta es ssh-keygen. El efecto es entrar sin descifrar nada.");
p("t056",
  "Un escaneo que envía un SYN y no llega a completar la conexión TCP.",
  "Una prueba de caja negra que lanza entradas variadas para buscar fallos.",
  "La rotación del fichero de log cuando alcanza un tamaño o un plazo.");
p("t057",
  "Un único intento con la contraseña ya conocida. La contramedida es publicarla para que deje de ser secreta.",
  "Validar el formato de todas las entradas. La contramedida es quitar el cifrado del canal.",
  "Un análisis de strings sin ejecutar el binario. La contramedida es subir la muestra a VirusTotal.");
p("t058",
  "Uso de programas que ya estaban instalados y son de confianza, sin traer una herramienta nueva.",
  "Cifrado del binario para que cada copia parezca distinta y, al descifrar, el código siga igual.",
  "Sincronización de la hora de todos los equipos contra un servidor NTP interno.");
p("t059",
  "Subir un binario nuevo y un rootkit para ocultarlo. Es fácil ver quién está detrás. La diapositiva cita sqlmap, John, Nikto y nmap. El objetivo es solo el reconocimiento.",
  "Cifrar el propio código en cada salto. Una vez descifrado, el binario es el mismo. La diapositiva cita IDA Pro, Ghidra, OllyDbg y Cuckoo. El objetivo es el análisis.",
  "Simular un servicio vulnerable para atraer muestras. La diapositiva cita honeypots, no programas ya presentes. El objetivo es capturar malware, no moverse en lateral.");
p("t060",
  "DoH deja las consultas en claro para que el administrador vea el poisoning y lo bloquee en el resolver.",
  "El poisoning inserta la IP legítima y DoH la sustituye por la del atacante dentro del navegador.",
  "DoH es el puerto cifrado de syslog y el poisoning es un desajuste del servidor NTP, no de DNS.");
p("t061",
  "Lo escribió el CCN en 1997, en Python, y la interfaz habitual es la gráfica msfgui.",
  "Es de 2016, va dentro del kernel y solo se maneja desde un SIEM, no desde una consola.",
  "Es un módulo de rsyslog escrito en Ruby para reenviar logs, y msfconsole es un demonio de syslog.");
p("t062",
  "El payload es el fallo, el exploit es el log que deja y la vulnerabilidad es el código que se ejecuta después.",
  "Los tres nombres designan el mismo fichero: no hay separación entre el fallo, lo que lo aprovecha y lo que corre luego.",
  "La vulnerabilidad es la facility local6, el exploit es la regla de rsyslog y el payload es el fichero de Apache.");
p("t063",
  "Para sustituir la copia de seguridad y el cifrado en la preparación, no para buscar huecos ni para formar.",
  "Para borrar evidencias después del incidente y redactar el forense, no para comprobar configuraciones.",
  "Para generar una noticia falsa y medir su propagación. La diapositiva dice que no sirve para atacar.");
p("t064",
  "Práctica: solo es malware si se copia solo por la red. Teórica: exige un rescate y un binario de Windows.",
  "Práctica: cualquier programa con permisos de administrador. Teórica: el software que el usuario instala a propósito.",
  "Práctica y teórica coinciden: malware es únicamente el gusano, y el troyano queda fuera de las dos.");
p("t065",
  "Porque cada muestra se escribe desde cero, no se revende y la persecución en darknets es muy alta.",
  "Por el bajo beneficio, la falta de automatización y la desaparición del malware como servicio.",
  "Solo por fallos de hardware de los años 60, no por dinero, reutilización ni modelos de IA.");
p("t066",
  "Malware que se autorreplica por la red sin infectar un binario anfitrión ni esperar un disparador.",
  "Malware que se disfraza de programa legítimo y lo arranca la víctima creyendo que es normal.",
  "Malware que oculta sus huellas, normalmente exige root y deja una puerta trasera.");
p("t067",
  "Infecta otros binarios y espera a que alguien lo ejecute. No se copia solo por la red.",
  "Se disfraza de programa normal. Su objetivo inmediato es la función oculta, no el siguiente equipo.",
  "Solo muestra anuncios y no se propaga. No explota vulnerabilidades ni fallos de configuración.");
p("t068",
  "Se copia solo de máquina en máquina sin que el usuario abra nada ni crea que es un programa normal.",
  "Cifra los datos y muestra una nota de rescate. No necesita disfrazarse ni esconder otra función.",
  "Oculta el proceso en el kernel y exige root. El usuario no lo ejecuta creyendo que es legítimo.");
p("t069",
  "Spyware: muestra anuncios. Adware: secuestra el disco y cobra. Ransomware: oculta el kernel. Rootkit: solo roba teclas.",
  "Spyware: exige root para esconderse. Adware: es un gusano de red. Ransomware: es la estafa del príncipe. Rootkit: cifra y pide rescate.",
  "Los cuatro son gusanos y solo cambia el puerto. Ninguno espía, anuncia, secuestra ni se esconde.");
p("t070",
  "Un bot es un log centralizado y la botnet es el servidor NTP. No hay mando ni control remoto, ni anonimato del operador.",
  "Un bot es un certificado SSH y la botnet es authorized_keys. El objetivo es autenticar, no lanzar spam ni una denegación de servicio.",
  "Un bot es una cadena de suministro y la botnet es el contribuidor que mete la puerta trasera. No hay C2 ni campañas.");
p("t071",
  "Morris es de 2016 y es una botnet de cámaras. Brain es el ataque a SolarWinds. Melissa es un rootkit. Mydoom es una norma del ENS.",
  "I Love You es de 1986 y viajaba en disquetes. Brain es un gusano de correo del 2000. SoBig es una macro de Office de 1999.",
  "Melissa es de 2004 y es una bomba lógica. Mydoom es el sector de arranque de 1986. Anna Kournikova es el gusano de red de 1988.");
p("t072",
  "Solo el disquete de arranque y el correo de escritorio. El móvil no tiene vectores propios ni repositorios de aplicaciones.",
  "Solo la cadena de suministro de un compilador. 4G, Wi-Fi, Bluetooth y SMS no aparecen en el tema.",
  "Los mismos vectores que en los años 80. El drive-by, el P2P y la publicidad son posteriores al malware móvil y no al revés.");
p("t073",
  "Ya ha sustituido a virus y gusanos en el mundo real, y la detección por comportamiento dejó de servir.",
  "No existe ni como prototipo académico: el tema lo descarta y no habla de coste ni de detección clásica.",
  "Se detecta solo con la firma MD5 de 2003. El sandbox, el comportamiento y la analítica de endpoint no aplican.");
p("t074",
  "Herramientas que rotan, comprimen y archivan logs cuando superan un tamaño o un plazo.",
  "Firmas con las que el antivirus reconoce un hash ya visto en VirusTotal.",
  "Servidores NTP de stratum bajo que dan la hora al resto de máquinas del laboratorio.");
p("t075",
  "Ejecutarla en el equipo del analista y anotar qué ficheros, registro y conexiones crea.",
  "Depurarla en modo kernel con un segundo sistema, mirando registros, pila y memoria.",
  "Pedirle al C2 una orden nueva para ver caminos que una ejecución normal no recorre.");
p("t076",
  "Consiste en ejecutar la muestra una vez y anotar las conexiones. Ve menos caminos que el dinámico.",
  "Solo mira el icono y el nombre del fichero. No pasa de código máquina a ensamblador.",
  "Sustituye al hash: sin IDA Pro o Ghidra no se puede identificar la muestra en VirusTotal.");
p("t077",
  "Se hace en el equipo de producción, antes de calcular el hash, y es más seguro porque el malware no llega a ejecutarse.",
  "No mira ficheros, registro, memoria ni red: solo el código fuente, si el analista lo tiene.",
  "Va después del desensamblado profundo y antes del estático básico. No exige un entorno controlado.");
p("t078",
  "Es un sandbox en la nube que no puede parar la ejecución ni ver registros, memoria o pila.",
  "El modo kernel se hace en el mismo proceso, sin un segundo equipo. En malware suele haber código fuente.",
  "Sirve para rotar logs cuando alcanzan un tamaño. Ejemplos: rsyslog, logrotate, ntpd y logger.");
p("t079",
  "La primera oportunidad es el hash y la segunda es el desensamblado si VirusTotal no lo conoce.",
  "La primera es subir la muestra a la nube y la segunda es borrarla si se detecta una máquina virtual.",
  "Son las dos claves SSH: la pública firma el desafío y la privada lo comprueba en el servidor.");
p("t080",
  "Es el loghost que centraliza syslog para no ejecutar la muestra en el equipo de producción.",
  "Es un honeypot: su objetivo es atraer muestras nuevas, no analizar una que ya tienes.",
  "Impide las técnicas anti-VM, así que una muestra dirigida no puede saber que está virtualizada.");
p("t081",
  "Son el desensamblador que el analista usa sobre una muestra que ya capturó.",
  "Son el formato binario del log de Windows y de las capturas de tcpdump.",
  "Sustituyen al hash MD5 para identificar la muestra sin ejecutarla ni atraerla.");
p("t082",
  "Una técnica que reescribe el código en cada infección con instrucciones equivalentes.",
  "Un depurador de modo kernel que exige un segundo sistema para ver la muestra.",
  "El fichero donde se guarda la contraseña ya recuperada para no repetir la búsqueda.");
p("t083",
  "Reescribe su propio código: cambian los bytes y la función se mantiene. No se limita a cifrar.",
  "Oculta el proceso dentro del kernel, exige root y deja una puerta trasera.",
  "Es lo mismo que un packer: solo comprime y, al descomprimir, las secciones siguen poco claras.");
p("t084",
  "Solo cifra el binario. Al descifrar, el código es el mismo y no reescribe su forma ni usa NOPs.",
  "Cambia el icono y el nombre, pero no las instrucciones. La función y los bytes quedan igual.",
  "Es la detección por firma. El antivirus compara hashes y no genera variantes equivalentes.");
p("t085",
  "Publicar el hash en VirusTotal para que el depurador se niegue a adjuntarse a la muestra.",
  "Comprimir el binario con un packer para que no haya punto de entrada ni consultas a la API.",
  "Pedir un segundo factor antes de permitir que el depurador lea registros o memoria.");

p("l001",
  "Red externa: LAMP, 192.168.1.20, y el router por eth1 en 192.168.1.2. DMZ: Kali, 192.168.3.10. ADM: OSSIM, 10.0.4.40, e IDS, 10.0.4.50.",
  "Red externa: IDS, 10.0.4.40. DMZ: OSSIM, 10.0.4.50, y el router por eth2. ADM: Kali, 192.168.3.10, y LAMP, 192.168.1.20.",
  "Las tres redes comparten 10.0.4.50. Kali está en la DMZ, el LAMP en la ADM y OSSIM en la red externa.");
p("l002",
  "Kali: root. LAMP e IDS: kali. OpenWRT y OSSIM: master.",
  "Kali: master. LAMP e IDS: root. OpenWRT y OSSIM: kali.",
  "Todas usan kali. El LAMP no usa master y OSSIM no usa root.");
p("l003",
  "OSSIM (10.0.4.50) es el servidor NTP. El IDS (10.0.4.40) es el loghost y escucha syslog por UDP 123.",
  "La Kali (192.168.3.10) da la hora. El LAMP (192.168.1.20) recibe los logs por TCP 514.",
  "El LAMP es el NTP y OpenWRT es el único loghost. El IDS no participa en la hora ni en syslog.");
p("l004",
  "En el de SSH. Sí hace falta en el de logs, porque la Kali recibe el tráfico UDP 514.",
  "En el de Nmap. Sí hace falta en el de logs y no hace falta en el de autenticación.",
  "No hace falta en ninguno. El de logs, el de SSH y el de Nikto se hacen desde el IDS.");
p("l005",
  "Autenticación: qué puedes hacer. Autorización: quién eres. Accounting: el cifrado del disco. No enlaza con los logs.",
  "Autenticación: el rastro de lo que hiciste. Autorización: demostrar la identidad. Accounting: los permisos del recurso.",
  "Las tres describen el mismo control. Solo cambia el fichero: passwd, shadow o sudoers.");
p("l006",
  "Algo que lees (un log), algo que escribes (un fichero) y algo que ejecutas (un binario).",
  "Facility, prioridad y acción: los tres campos con los que syslog decide dónde guardar el evento.",
  "Confidencialidad, integridad y disponibilidad: los tres pilares, no los tres factores de entrada.");
p("l007",
  "La de una sola vez impide la suplantación si roban el dispositivo. La continua es más rápida y baja la seguridad.",
  "La continua se hace una vez al año. La de una sola vez pide un factor en cada segundo de la sesión.",
  "Las dos eliminan la identidad. La diferencia es solo el cifrado del canal, no el momento ni el dispositivo.");
p("l008",
  "Ventajas: una contraseña distinta por servicio y ningún secreto compartido. Inconvenientes: si el proveedor cae, cada aplicación sigue con su base local.",
  "Ventajas: el proveedor puede caer sin dejar fuera al usuario. Inconvenientes: hay que recordar una contraseña por cada aplicación nueva.",
  "Ventajas: un fallo del proveedor no filtra nada. Inconvenientes: el acceso es lento y no se pueden conectar servicios nuevos.");
p("l009",
  "Persiguen fines distintos: el SSO es de una sola aplicación y la federación exige una contraseña por servicio. OpenID Connect autoriza y OAuth autentica.",
  "Los dos prohíben reutilizar la identidad. Para autenticar, el tema cita OAuth 2.0. Para autorizar, SAML, Firebase y el hash de shadow.",
  "Solo el SSO cruza servicios. La identidad federada es interna. Firebase autentica y SAML es el access token, no XML.");
p("l010",
  "El cliente pide la contraseña del usuario en el otro servicio y la guarda. No hay grant ni access token: el acceso es total.",
  "El dueño entrega la contraseña al cliente y el token solo sirve para syslog. El grant sustituye a la clave pública SSH.",
  "OAuth evita el cifrado del canal. El access token se guarda en authorized_keys y el grant en /etc/shadow.");
p("l011",
  "OpenID Connect autoriza y no se apoya en OAuth. SAML es binario y es el SSO de particulares. Firebase solo admite certificado de empleado y un TOTP de servidor.",
  "OpenID Connect es el SSO de empresa en XML. SAML autentica en el cliente con correo, SMS o de forma anónima. Firebase va encima de OAuth y no tiene métodos propios.",
  "Los tres autentican igual, en XML y en el servidor. Firebase no admite correo, teléfono ni proveedor federado, y SAML no hace SSO.");
p("l012",
  "shadow lo puede leer cualquiera y no lleva el hash. passwd lleva el hash, el salt y la caducidad, y está protegido.",
  "Los dos llevan el hash y los dos son legibles por cualquier usuario. La caducidad está en /etc/group.",
  "Las contraseñas de Linux están en el SAM. passwd y shadow solo guardan el nombre y el grupo.");
p("l013",
  "$6$ es MD5. $5$ es SHA-512 y $1$ es SHA-256. El salt es el nombre de usuario, fuera del hash.",
  "$6$ es el hash LM de Windows, basado en DES. El salt es el SID y va al final de passwd.",
  "$6$ es SHA-256. $5$ es MD5 y $1$ es SHA-512. El salt es el tramo anterior al primer dólar.");
p("l014",
  "En /etc/shadow. Al crear un usuario entra en root y no se crea un grupo con su nombre.",
  "En el SAM. Al crear un usuario se reutiliza el grupo Administradores y no hay grupo privado.",
  "En /etc/passwd. Los grupos solo existen en Windows. Linux solo tiene el bit de otros.");
p("l015",
  "rw-r--r-x es 755. 741 es rwx para todos, lo mismo que u=rwx,g=rwx,o=rwx.",
  "rw-r--r-x es 644. 741 es rwxr-xr-x, lo mismo que u=rwx,g=rx,o=rx.",
  "rw-r--r-x es 745. 741 es rw- para el usuario y rwx para el resto.");
p("l016",
  "La cuenta de cada día debe ser root. /etc/sudoers guarda los hashes y no decide quién eleva privilegios.",
  "La cuenta de cada día puede ser administrador. /etc/shadow dice quién puede usar sudo y para qué comando.",
  "El mínimo privilegio es quitar la lectura de passwd. sudoers no existe: la elevación se configura en el PAM.");
p("l017",
  "Solo los usuarios pueden autenticarse: los grupos y los equipos no tienen SID. El identificador se reutiliza si se repite el nombre.",
  "Cualquier proceso es un security principal. El SID se borra con el usuario y la diapositiva recomienda eliminarlo, no deshabilitarlo.",
  "El SID de Windows se guarda en /etc/passwd y puede repetirse. Deshabilitar una cuenta libera el identificador para la siguiente.");
p("l018",
  "La contraseña en claro, el historial del navegador y el hash LM. No lleva grupos ni un identificador de sesión.",
  "Solo el nombre para mostrar. Los grupos, los privilegios y el logon ID se consultan después en el SAM.",
  "El hash NTLM y el SID del equipo, sin grupos ni privilegios. El logon ID es la contraseña de red.");
p("l019",
  "La ACE es el algoritmo del hash y la ACL es /etc/shadow. No hay entradas de permisos ni copia en el proceso.",
  "La ACL solo existe en Linux y se edita con chmod. En Windows el ACE es el certificado público de SSH.",
  "ACL y ACE son lo mismo: una sola lista, sin entradas, que no viaja con los hilos ni con los procesos.");
p("l020",
  "Está en /etc/shadow y usa SHA-512 con salt. Se puede leer con el sistema en marcha. LM es el algoritmo vigente.",
  "Está en authorized_keys y se consulta por UDP 514. NTLM está retirado desde NT 3.1 y LM, basado en MD4, es el actual.",
  "Está en el registro, legible mientras Windows arranca. La diapositiva sitúa NTLM antes de NT 3.1 y LM como el hash moderno.");
p("l021",
  "DAC: una política central pone etiquetas y el usuario no las rebaja. MAC: el dueño decide, como chmod. RBAC: cada fichero tiene su propia contraseña.",
  "DAC y MAC son protocolos de identidad federada. RBAC es el hash de shadow, no un modelo de permisos por rol.",
  "RBAC: el dueño del recurso decide. MAC: los permisos van al rol. DAC: el sistema impone etiquetas que el usuario no cambia.");
p("l022",
  "El grupo local lo administra Active Directory. El de dominio solo vale en una máquina. UPN es el login corto y sAMAccountName es el correo.",
  "UPN es el SID y sAMAccountName es el hash NTLM. Los dos grupos se guardan en /etc/group y no hay directorio.",
  "No hay diferencia: local y de dominio son el mismo grupo, y los dos nombres son el mismo campo de syslog.");
p("l023",
  "Desde la red externa (Kali), clave pública. Desde la ADM (el IDS), solo la contraseña, sin segundo factor.",
  "Desde las dos redes, solo el código TOTP. Ni la Kali ni el IDS usan contraseña ni clave pública.",
  "Desde la Kali, certificado de la CA. Desde OSSIM, el doble factor. El IDS no entra por SSH al LAMP.");
p("l024",
  "Porque SSH no cifra el canal si se usa contraseña. Por eso desde fuera se quita el cifrado y desde la ADM se usa Telnet.",
  "Porque la contraseña se guarda en claro en /etc/passwd. Por eso se mueve el hash a shadow y se cierra el puerto 22.",
  "Porque el puerto 22 solo admite un intento. Por eso el segundo factor se pone en la ADM y la clave pública en la Kali.");
p("l025",
  "En el alta, el móvil genera el secreto y el LAMP solo muestra un QR decorativo. El código es una contraseña fija, no un HMAC, y la ventana es de 24 horas.",
  "En el alta no hay secreto compartido. El LAMP calcula el código y el móvil lo comprueba con MD5, en periodos de un día desde el epoch.",
  "El secreto viaja en cada intento. No hay códigos de emergencia. El MAC es SHA-256 sobre la contraseña, sin usar el tiempo.");
p("l026",
  "Solo /etc/shadow, cambiando el salt, y /etc/passwd, poniendo el hash en claro. El PAM y sshd_config no se tocan.",
  "Solo authorized_keys, pegando el QR, y ~/.ssh/id_rsa, copiando el secreto. No hay línea de PAM ni ChallengeResponse.",
  "Solo /etc/ntp.conf y /etc/rsyslog.conf. El segundo factor de SSH no pasa por pam.d ni por el demonio sshd.");
p("l027",
  "El cliente envía la clave privada y el servidor la compara con /etc/shadow. No hay desafío ni firma.",
  "El servidor firma un desafío con la clave privada del usuario, que también está guardada en el servidor.",
  "No hay intercambio: basta con copiar id_rsa al fichero passwd. La passphrase la comprueba el loghost, no el cliente.");
p("l028",
  "Las dos se copian al servidor. La privada queda en authorized_keys y la pública se queda solo en el cliente.",
  "La pública se queda en el cliente y la privada se manda por syslog. ssh-copy-id copia id_rsa, no id_rsa.pub.",
  "id_rsa.pub es la privada, porque .pub indica que está protegida. ssh-keygen solo crea una y ssh-copy-id la borra.");
p("l029",
  "Es la contraseña del usuario master en el LAMP, y el servidor la comprueba contra shadow en cada sesión.",
  "Es el código TOTP de 30 segundos que pide el PAM al entrar desde la Kali, no una protección de la clave.",
  "Cifra la clave pública antes de copiarla a authorized_keys, para que el servidor no pueda verla.");
p("l030",
  "Detección del sistema operativo: mira la huella y no envía un SYN ni clasifica abierto, cerrado o filtrado.",
  "Versión del servicio: completa la conexión y no usa RST ni ICMP para marcar el puerto.",
  "Escaneo rápido de unos 100 puertos. Un SYN/ACK significa filtrado y un RST significa abierto.");
p("l031",
  "-O: versión del servicio. -sV: sistema operativo. -F: todos los puertos. -sU: solo TCP. -p: salida grepeable. -oG: el puerto concreto.",
  "-F: apaga el TCP. -O: lanza Nikto. -sV: escaneo UDP. -sU: huella del SO. -p: segundo factor. -oG: versión del servicio.",
  "-oG: detecta el sistema operativo. -p: lista versiones. -F: UDP. -sU: 100 puertos. -O y -sV hacen lo mismo.");
p("l032",
  "Nikto descubre el sistema operativo de la subred con un SYN. El objetivo se pasa con -p, que es el puerto y no el host.",
  "Nikto recupera contraseñas a partir de un hash. El objetivo se pasa con -h, pero -h significa el fichero de wordlist.",
  "Nikto centraliza syslog. -h es la facility. No mira cabeceras, componentes viejos ni el servidor web.");
p("l033",
  "Para sincronizar la hora de los hosts que tienen el 80 abierto con el IDS, no para revisar el servidor web.",
  "Para enviarles los logs por UDP 514. awk selecciona la facility y Nikto es el loghost.",
  "Para extraer el hash de un documento de Office en esos hosts. El 80 no importa: el objetivo es la contraseña.");
p("l034",
  "Sobre el fichero de logs de Apache, línea a línea. No usa el formato usuario:hash ni está pensado para contraseñas.",
  "Sobre paquetes SYN, para ver puertos abiertos. La práctica se hace en el LAMP, no en la Kali.",
  "Sobre /etc/passwd, porque el tema dice que ahí está el hash. shadow no interviene.");
p("l035",
  "-single es el modo más lento y solo prueba dígitos. Lo encontrado se imprime y no se guarda. --show lanza el ataque desde cero.",
  "-single usa un diccionario externo. john.pot guarda la configuración, no las contraseñas. Para repetir hay que conservar ese fichero.",
  "-single es el modo incremental. --show borra john.pot. El nombre de usuario no se usa como candidato.");
p("l036",
  "Los tres garantizan la contraseña original en pocos segundos, con o sin salt. Una contraseña larga y aleatoria también cae.",
  "--wordlist enseña john.pot, --rules detecta el sistema operativo y --incremental solo sirve si el hash no tiene salt.",
  "--incremental es el más rápido y usa el nombre de usuario. --wordlist prueba todo el ASCII. El ataque funciona siempre.");
p("l037",
  "Con contraseñas de cuatro letras, sin salt y con un hash rápido. Ocultar /etc/passwd basta, porque ahí está el secreto.",
  "Publicando el hash para que deje de ser útil y moviéndolo a un fichero que pueda leer todo el mundo.",
  "Quitando el segundo factor y usando LM. shadow no importa: el ataque se dificulta haciendo passwd ilegible.");
p("l038",
  "Para generar el par de claves SSH y copiar la pública al servidor. No tiene que ver con documentos.",
  "Para configurar el segundo factor TOTP y mostrar el QR. El hash del documento no se extrae.",
  "Para enviar el documento al loghost por UDP 514. John no interviene y el fichero no va cifrado.");
p("l039",
  "Evento: el fichero entero. Campo: la facility. Registro: una línea suelta. Log: un solo atributo. Logging: borrarlos. Audit: guardarlos.",
  "Evento y registro son sinónimos. Campo es el fichero. Log es la evaluación. Logging es la auditoría y audit es el transporte.",
  "Log es una sola ocurrencia. Evento es la colección. Logging es analizar y audit es comprimir y rotar.");
p("l040",
  "Qué, cuándo, dónde, por qué y cuánto costó.",
  "Facility, prioridad, acción, salt y SID.",
  "Quién, qué, cómo, cuál y hacia dónde.");
p("l041",
  "Texto: el Event Log de Windows y tcpdump. Binario: syslog y las alertas de Snort, que se leen con cat.",
  "Los dos formatos son texto y ocupan lo mismo. La diferencia es el puerto, no la herramienta ni la legibilidad.",
  "syslog es binario y hace falta un visor. Las alertas de Snort y el Event Log son el mismo formato de contraseñas.");
p("l042",
  "Kernel, User y Local6. Security no existe y System guarda los inicios de sesión.",
  "Passwd, Shadow y Group. Application es el hash y Security es la caducidad de la cuenta.",
  "DMZ, ADM y externa. System es la facility local4 y Application es el log de Apache.");
p("l043",
  "Solo la sonda de un IDS. El router, el switch y el cortafuegos no generan información de seguridad.",
  "Solo sensores de host. No hay familias de red ni de aplicaciones, y un proceso no puede ser un sensor.",
  "El servidor NTP. Las tres familias son hora, syslog y backup, no seguridad, sistema y red.");
p("l044",
  "Push: bases de datos y OSSEC. Pull: syslog, SMTP y el Event Log de Windows.",
  "Todas son push. Pull no existe en el tema y OSSEC empuja igual que syslog.",
  "NTP es el único pull. syslog es pull y SMTP no transporta eventos.");
p("l045",
  "Solo es el fichero /var/log/syslog. No hay capas: generar, guardar y mirar son el mismo paso, y no existe la monitorización.",
  "El conjunto de contraseñas, claves y hashes. Capas: passwd, shadow y sudoers. No incluye hardware ni el descarte de logs.",
  "La sonda del IDS. Capas: SYN, versión de servicio y huella del SO. No agrega, no normaliza y no informa.");
p("l046",
  "Normalizar es borrar el log en origen. Preservar es comprimirlo y tirar el original siempre, también en el forense.",
  "El orden es conversión, luego parsing y luego reducción. Preservar está prohibido porque el crudo no sirve de prueba.",
  "Normalizar y preservar son la rotación: las dos archivan por tamaño y ninguna guarda el evento original.");
p("l047",
  "Siempre, para ahorrar disco, sobre todo los de autenticación, aunque no sean redundantes.",
  "Nunca, ni siquiera lo duplicado. Conservar un tiempo es peor que filtrar en el origen.",
  "Solo los de prioridad emerg, que el tema considera los menos importantes y los primeros que sobran.");
p("l048",
  "Retención: borrar al día siguiente. Almacenamiento: solo texto en claro, barato y muy escalable. Rotación: normalizar, no archivar. logrotate no es el ejemplo.",
  "Retención: tenerlo todo en línea todo el año. Almacenamiento: la base escala mejor que el fichero y no tiene coste. Rotación: convertir el formato, no el soporte.",
  "Las tres son lo mismo. Retener, guardar y rotar significan comprimir cada día y el tema no las distingue.");
p("l049",
  "En UNIX: sqlmap, John y nmap. En Windows, el visor de eventos sustituye a Log Parser. El análisis manual escala y da la foto general.",
  "grep sustituye a la correlación de un SIEM sin perder nada. head y tail sobran. Log Parser solo abre ficheros de Linux.",
  "El análisis manual es el mejor modo de ver una botnet en tiempo real. No tiene límites de escala ni de complejidad.");
p("l050",
  "Por reglas: detección de anomalías. Estadístico: detección de mal uso. La minería trabaja sobre texto libre y no necesita datos estructurados.",
  "Por reglas: el informe al juzgado. Estadístico: la rotación. La minería es el análisis manual con grep y no busca patrones.",
  "Mal uso y anomalía son lo mismo. La minería solo sirve para el forense y no agrupa ni clasifica.");
p("l051",
  "El analista ve el crudo y no los resúmenes. Al responsable de negocio se le manda el syslog íntegro. El forense se escribe en eslogan.",
  "El informe forense va en lenguaje de negocio y el del CEO en lenguaje de prueba. Los resúmenes se improvisan al final.",
  "No hay diferencia de destinatario. El cumplimiento y la privacidad no influyen en qué informes se definen.");
p("l052",
  "El primero es el auditor y el segundo es el CSIRT. El auditor gestiona el incidente y el CSIRT solo comprueba la norma.",
  "El primero es el desarrollador que depura. El segundo es el CIO. Ninguno usa los logs para un incidente ni para una auditoría.",
  "No hay clientes: el log se queda en el router. El CSIRT y el auditor leen el informe anual, no la infraestructura.");
p("l053",
  "Sistemas solo lee. Seguridad configura passwd. Desarrollo fija la retención legal. El auditor edita rsyslog. El CIO es el único que puede abrir un log.",
  "El CSIRT configura cada host. El desarrollador responde al incidente. El responsable de seguridad cambia el chmod de /etc/passwd.",
  "Todos hacen lo mismo: mirar el syslog por la mañana. No hay distinción entre red, seguridad, desarrollo, CIO y responsable.");
p("l054",
  "El protocolo clásico va por TCP 514 y el demonio lee /var/log/syslog. Las versiones modernas quitaron TCP y TLS.",
  "Viaja por TCP 22 y lee de /etc/shadow. UDP 514 es el puerto de NTP, no el de syslog.",
  "Solo admite UDP, y el socket /dev/log no existe. Un evento no puede escribirse en más de un sitio.");
p("l055",
  "Sin prefijo, solo esa prioridad. Con '=', esa y las más leves. El guion borra el fichero. Solo se evalúa la primera regla.",
  "Sin prefijo, esa y las más leves. Con '=', todas menos esa. El guion fuerza el sync en cada evento. Las reglas no se acumulan.",
  "El selector es prioridad.facility. El guion envía por TCP. '=' significa ninguna prioridad y sin prefijo significa none.");
p("l056",
  "auth.warning: solo debug, porque el 7 es lo más grave. auth.=warning: warning y todo lo más leve. auth.none: todo menos warning.",
  "auth.warning: solo warning. auth.=warning: warning y las más graves. auth.none: info y debug, que son las más graves.",
  "Los tres registran lo mismo. El prefijo '=' y la palabra none no cambian qué prioridades de auth se guardan.");
p("l057",
  "La diapositiva y el manual coinciden: '!' y .none son lo mismo, y el mini-lab usa '!' para borrar el fichero de debug.",
  "El mini-lab usa '!' como «solo esa prioridad». .none significa notice, y no quita auth, authpriv ni user.",
  "El mini-lab no toca 50-default.conf. La duplicación se corta con logrotate, no con user.none ni con authpriv.none.");
p("l058",
  "7 emerg, 0 debug. auth es 10 y authpriv es 4. local4 y local6 son prioridades, no facilities. Apache es local4 y Snort es local6.",
  "0 es debug y 7 es emerg. kern es 1 y user es 0. En el lab, local6 es la prioridad crítica y local4 es el puerto de Snort.",
  "Las prioridades y las facilities comparten número. local0 es emerg. En el lab no se usa local4 ni local6.");
p("l059",
  "Una arroba envía por TCP. Dos arrobas envían por UDP. El laboratorio usa @@ y por eso el transporte es TCP.",
  "La arroba es la facility local. @@ es la prioridad. Ninguna de las dos elige UDP ni TCP.",
  "@10.0.4.50 sincroniza NTP. @@10.0.4.40 envía logs. El laboratorio no usa arrobas en rsyslog.");
p("l060",
  "Sale dos veces porque logrotate lo copia. Se corta borrando /var/log y dejando solo user.*.",
  "Hay que comentar user.* y dejar *.*, que es lo que evita la copia en syslog.",
  "Se corta con user.* @@127.0.0.1. El mini-lab se hace en OSSIM, no en el LAMP, y auth no interviene.");
p("l061",
  "Reinicia rsyslog y fuerza una rotación de todos los ficheros de /var/log.",
  "Borra los eventos de esa prioridad para dejar el fichero limpio antes de la prueba.",
  "Abre el puerto 514 hacia la red externa para ver si OSSIM acepta el paquete.");
p("l062",
  "Se dejan los servidores del pool y se borra el reloj local. El stratum 10 significa que es la mejor fuente de Internet.",
  "Se configura en /etc/rsyslog.conf, no en ntp.conf. 127.127.1.0 es la IP de OSSIM, no el reloj local.",
  "El IDS apunta a 10.0.4.50 y no comenta los pools. fudge stratum 10 apaga ntpd.");
p("l063",
  "A OSSIM, 10.0.4.50. En el LAMP es la línea de rsyslog. En OpenWRT no hay NTP.",
  "A la Kali, 192.168.3.10. Los pools externos se dejan activos y el IDS no da la hora.",
  "Cada uno se queda con su reloj. 10.0.4.40 es el loghost, no el servidor de tiempo.");
p("l064",
  "Hay que instalar otro syslog en la Kali y abrir el puerto 22. imudp significa TCP y el puerto del lab es el 1514.",
  "Jailbreak es el módulo PAM del segundo factor. No hace falta imudp ni UDPServerRun, y el usuario no es root.",
  "OSSIM no recibe logs remotos: solo los locales. La opción 3 apaga rsyslog y exige sudo.");
p("l065",
  "*.* @@192.168.1.20, porque el loghost es el LAMP y el transporte del laboratorio es TCP.",
  "auth.none @10.0.4.40, porque solo la autenticación se reenvía y el destino es el IDS.",
  "La línea se escribe en /etc/ntp.conf. Quien centraliza los logs es el servidor de hora, no OSSIM.");
p("l066",
  "Siempre en /var/log/syslog del LAMP. OSSIM no guarda copia y DYNlog no existe.",
  "En /home/master/myLogs.log, que es la plantilla de logrotate, no la de AlienVault.",
  "En el SAM del IDS. La IP de origen no entra en la ruta y 127.0.0.1 también se guarda.");
p("l067",
  "Apache usa local4 y la IP 10.0.4.40. El resto, si es local6, va a apacheLAMP.log.",
  "Se separan por la palabra apache en cualquier facility y desde cualquier IP, no por local6.",
  "local6 es una prioridad, no una facility. El LAMP no tiene la 192.168.1.20 en esta regla.");
p("l068",
  "Snort usa local6 y Apache usa local4. iptables se queda en DYNlog y no hay /var/log/firewall.log.",
  "Los dos retos escriben en el mismo fichero. local4 es la prioridad de emerg y no identifica a Snort.",
  "iptables se filtra solo por la facility kern. Snort no tiene IP 10.0.4.40 ni facility local4.");
p("l069",
  "Usa syslog.conf, como Ubuntu. conloglevel 1 muestra debug e info, que el tema trata como las más graves.",
  "log_ip apunta al IDS, porque el IDS es el loghost. conloglevel 1 deja en consola warning y notice.",
  "No hace falta reiniciar. /etc/config/system es de rsyslog, y la consola recibe todas las prioridades.");
p("l070",
  "Se borra rsyslog en el origen y se deja de enviar cualquier facility, no solo daemon.",
  "Se cambia el envío a TCP 22. daemon.none enviaría solo el demonio y callaría el resto.",
  "Se comenta *.* y se deja daemon.* @10.0.4.50, que es lo contrario de excluir esa facility.");
p("l071",
  "rotate 2 borra el log al segundo día y no guarda copias. daily vale para todos los ficheros. compress es la rotación. -f filtra y -v borra.",
  "rotate 2 conserva el log para siempre. daily es el tamaño, no el plazo. postrotate se ejecuta antes. -f -v envía el fichero a OSSIM.",
  "Todas las directivas hacen lo mismo: comprimir y mandar a 10.0.4.50. No hay generaciones ni una pasada forzada.");
p("l072",
  "logrotate se detiene y no vuelve a tocar ese fichero.",
  "Se concatenan todas las copias en un solo fichero sin comprimir.",
  "La más antigua vuelve a ser el log activo y no se borra.");
p("l073",
  "Sí. daily y rotate 2 son globales e inamovibles para todos los ficheros del sistema.",
  "Solo rota syslog. El resto crece sin límite por diseño y logrotate.d no existe.",
  "La retención la decide el cliente SSH en cada sesión, no los ficheros de configuración.");
p("l074",
  "Solo el GDPR. PCI DSS, ISO 27001 e HIPAA no dicen nada de logs.",
  "PCI DSS es la directiva europea del aviso en 24 horas. HIPAA es el formato binario del Event Log.",
  "NIST es el ENS español. ISO 27001 es la LOPD. HIPAA es el reglamento que sustituye al GDPR.");
p("l075",
  "10.1 obliga a borrar el usuario. 10.2 pide conservar un año. 10.3 prohíbe guardar la hora y el origen.",
  "10.1 es la hora con NTP. 10.2 es la revisión diaria. 10.3 es la retención de tres meses en línea.",
  "Los tres requisitos hablan del cifrado de la tarjeta, no de identificar a la persona ni de los campos del evento.");
p("l076",
  "10.4 prohíbe NTP. 10.5 pide que los logs sean públicos. 10.6 pide revisarlos una vez al año. 10.7 pide borrarlos a los siete días.",
  "10.4 es la retención. 10.5 es la hora. 10.6 es el identificador de usuario. 10.7 es la lista de eventos.",
  "Los cuatro exigen cifrar la tarjeta y no hablan de hora, de revisión diaria ni de conservar los logs.");
p("l077",
  "Confidencialidad: un log nunca lleva un nombre de usuario. Integridad: no sirve como evidencia. Disponibilidad: se consigue dejándolos solo en el router.",
  "Solo importa la disponibilidad. La confidencialidad y la integridad no se aplican a los logs de auth.",
  "Hay que publicarlos para que el auditor los vea. Centralizarlos facilita que un atacante los modifique todos a la vez.");
