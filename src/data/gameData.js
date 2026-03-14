export const MIN_CORRECT = 2;

export const LEVELS = [
  {
    id: 1,
    floor: "Recepción",
    title: "Bienvenido a VeyharCorp",
    concept: "IA Generativa vs Automatización vs Humano",
    accentColor: "#22C55E",
    floorIcon: "🚪",
    // Desk objects — each triggers a challenge from the pool
    objects: [
      { id: "emails", label: "Bandeja de emails", icon: "📧", x: 38, y: 52, hint: "500 emails sin responder" },
      { id: "phone",  label: "Teléfono",          icon: "📞", x: 62, y: 58, hint: "Cliente VIP en espera" },
      { id: "clipboard", label: "Tarea pendiente", icon: "📋", x: 50, y: 44, hint: "Recordatorio semanal" },
    ],
    challengePool: [
      {
        id:"1a", objectId:"emails", points:100,
        situation:"Marketing quiere responder 500 correos idénticos de clientes sobre un nuevo producto. Todos dicen prácticamente lo mismo. ¿Qué recomiendas?",
        options:[
          {id:"chatgpt",name:"ChatGPT",icon:"💬",desc:"IA conversacional de OpenAI",color:"#10A37F"},
          {id:"auto",name:"Automatización clásica",icon:"⚙️",desc:"Scripts, macros, flujos programados",color:"#64748B"},
          {id:"human",name:"Equipo humano",icon:"👥",desc:"Personas respondiendo cada correo",color:"#0EA5E9"},
          {id:"dalle",name:"DALL-E / Midjourney",icon:"🎨",desc:"IA generativa de imágenes",color:"#EC4899"},
        ],
        correct:"auto",
        explanation:"500 correos idénticos con la misma respuesta = tarea repetitiva y predecible. Caso perfecto para automatización clásica (script o macro). No se necesita IA generativa porque no hay variabilidad ni creatividad. ChatGPT sería usar un Ferrari para ir a comprar pan.",
      },
      {
        id:"1a2", objectId:"emails", points:100,
        situation:"El área de RRHH necesita notificar a 800 empleados que mañana no hay oficina. Mismo mensaje para todos.",
        options:[
          {id:"chatgpt",name:"ChatGPT redacta",icon:"💬",desc:"IA genera el mensaje",color:"#10A37F"},
          {id:"auto",name:"Email masivo programado",icon:"⚙️",desc:"Script de envío automatizado",color:"#64748B"},
          {id:"human",name:"RRHH lo envía manual",icon:"👥",desc:"Una persona lo manda",color:"#0EA5E9"},
          {id:"dalle",name:"Diseño visual del aviso",icon:"🎨",desc:"Infografía generada con IA",color:"#EC4899"},
        ],
        correct:"auto",
        explanation:"Mismo mensaje para todos, tarea única y predecible: automatización clásica. Un script de envío masivo lo hace en segundos sin costo de API ni intervención. ChatGPT añade complejidad innecesaria cuando el mensaje no requiere personalización.",
      },
      {
        id:"1b", objectId:"phone", points:100,
        situation:"Un cliente VIP llama furioso por un producto defectuoso. Tiene contrato de alto valor y exige solución inmediata.",
        options:[
          {id:"chatgpt",name:"Chatbot automático",icon:"💬",desc:"IA responde la llamada",color:"#10A37F"},
          {id:"auto",name:"Email automático de disculpa",icon:"⚙️",desc:"Respuesta pre-programada",color:"#64748B"},
          {id:"human",name:"Ejecutivo de cuentas",icon:"👥",desc:"Persona con autoridad y empatía",color:"#0EA5E9"},
          {id:"dalle",name:"Carta visual personalizada",icon:"🎨",desc:"Diseño generado con IA",color:"#EC4899"},
        ],
        correct:"human",
        explanation:"Crisis con clientes VIP requieren juicio humano, empatía real y autoridad para tomar decisiones. Un cliente furioso que recibe IA se irrita más. La IA no puede negociar compensaciones ni generar la confianza emocional que esta situación exige.",
      },
      {
        id:"1b2", objectId:"phone", points:100,
        situation:"El CEO de un cliente importante llama para decidir renovar contrato por $2M. Quiere hablar con alguien de VeyharCorp ahora.",
        options:[
          {id:"chatgpt",name:"Asistente de IA responde",icon:"💬",desc:"Claude o ChatGPT maneja la llamada",color:"#10A37F"},
          {id:"auto",name:"Sistema de agendado auto",icon:"⚙️",desc:"Bot agenda una reunión",color:"#64748B"},
          {id:"human",name:"Director Comercial al teléfono",icon:"👥",desc:"Ejecutivo senior atiende",color:"#0EA5E9"},
          {id:"dalle",name:"Propuesta visual generada",icon:"🎨",desc:"Deck de renovación con IA",color:"#EC4899"},
        ],
        correct:"human",
        explanation:"Negociaciones de alto valor requieren presencia humana, poder de decisión y relación personal. Un bot o sistema automático en este momento puede costar el contrato. La IA puede preparar materiales de apoyo, pero la conversación la tiene un humano.",
      },
      {
        id:"1c", objectId:"clipboard", points:100,
        situation:"RRHH necesita enviar cada lunes a 800 empleados el mismo recordatorio para registrar sus horas. Siempre el mismo texto.",
        options:[
          {id:"chatgpt",name:"ChatGPT genera el mensaje",icon:"💬",desc:"IA redacta el recordatorio",color:"#10A37F"},
          {id:"auto",name:"Tarea programada (cron job)",icon:"⚙️",desc:"Script automático cada lunes",color:"#64748B"},
          {id:"human",name:"RRHH lo envía manual",icon:"👥",desc:"Persona que recuerda cada semana",color:"#0EA5E9"},
          {id:"dalle",name:"Infografía semanal con IA",icon:"🎨",desc:"Imagen recordatorio generada",color:"#EC4899"},
        ],
        correct:"auto",
        explanation:"Tarea 100% repetitiva, mismo horario, mismo mensaje: automatización clásica pura. Un cron job lo hace sin costo por API ni intervención humana. Usar ChatGPT aquí sería gastar tokens en algo que un script de 5 líneas resuelve mejor y más barato.",
      },
      {
        id:"1c2", objectId:"clipboard", points:100,
        situation:"Ventas necesita una imagen corporativa original que represente 'innovación y confianza' para un pitch. No hay diseñador disponible.",
        options:[
          {id:"dalle",name:"DALL-E / Midjourney",icon:"🎨",desc:"IA generativa de imágenes",color:"#EC4899"},
          {id:"chatgpt",name:"ChatGPT",icon:"💬",desc:"IA conversacional",color:"#10A37F"},
          {id:"auto",name:"Plantillas predefinidas",icon:"⚙️",desc:"Templates corporativos",color:"#64748B"},
          {id:"human",name:"Stock photos manual",icon:"👥",desc:"Equipo busca imágenes",color:"#0EA5E9"},
        ],
        correct:"dalle",
        explanation:"Crear imágenes originales con conceptos abstractos es el dominio exacto de DALL-E y Midjourney. Con un prompt bien escrito generan imágenes únicas con estilo consistente en minutos. ChatGPT no genera imágenes de calidad profesional, y una plantilla no puede crear algo realmente 'original'.",
      },
    ],
  },
  {
    id: 2,
    floor: "Sala de Reuniones",
    title: "Ya estás en ritmo",
    concept: "Diferencias entre modelos de IA",
    accentColor: "#3B82F6",
    floorIcon: "📊",
    objects: [
      { id: "laptop",    label: "Laptop del equipo", icon: "💻", x: 35, y: 55, hint: "Tarea de desarrollo urgente" },
      { id: "projector", label: "Proyector",          icon: "📽️", x: 55, y: 35, hint: "Presentación al cliente" },
      { id: "coffee",    label: "Brief del cliente",  icon: "📄", x: 65, y: 60, hint: "Documento de 80 páginas" },
    ],
    challengePool: [
      {
        id:"2a", objectId:"laptop", points:150,
        situation:"Desarrollo debe escribir 200 funciones Python repetitivas para conectar APIs internas. Plazo: mañana.",
        options:[
          {id:"copilot",name:"GitHub Copilot",icon:"💻",desc:"IA especializada en código en el IDE",color:"#6366F1"},
          {id:"claude",name:"Claude",icon:"🤖",desc:"IA conversacional de Anthropic",color:"#D97706"},
          {id:"chatgpt",name:"ChatGPT",icon:"💬",desc:"IA generativa de OpenAI",color:"#10A37F"},
          {id:"auto",name:"Escribirlo manualmente",icon:"⚙️",desc:"El equipo codea sin IA",color:"#64748B"},
        ],
        correct:"copilot",
        explanation:"GitHub Copilot está optimizado para generar código en el IDE con autocompletado en tiempo real y contexto del proyecto. Para 200 funciones similares es exponencialmente más eficiente. Claude o ChatGPT pueden ayudar puntualmente, pero no se integran al flujo de desarrollo como Copilot.",
      },
      {
        id:"2a2", objectId:"laptop", points:150,
        situation:"El equipo de QA quiere generar automáticamente 500 casos de prueba unitarios para el nuevo módulo de pagos.",
        options:[
          {id:"copilot",name:"GitHub Copilot",icon:"💻",desc:"IA de código con contexto del proyecto",color:"#6366F1"},
          {id:"claude",name:"Claude",icon:"🤖",desc:"IA conversacional de Anthropic",color:"#D97706"},
          {id:"dalle",name:"DALL-E",icon:"🎨",desc:"IA de imágenes",color:"#EC4899"},
          {id:"auto",name:"Script manual de testing",icon:"⚙️",desc:"El equipo escribe los tests",color:"#64748B"},
        ],
        correct:"copilot",
        explanation:"Copilot entiende el contexto del código existente y genera tests que se alinean con la estructura real del proyecto. Para 500 casos de prueba en un módulo específico, su integración directa en el IDE lo hace infinitamente más eficiente que un chat externo.",
      },
      {
        id:"2b", objectId:"projector", points:150,
        situation:"RRHH quiere crear 50 avatares corporativos profesionales y visualmente consistentes para el directorio interno.",
        options:[
          {id:"dalle",name:"DALL-E / Midjourney",icon:"🎨",desc:"IA generativa de imágenes",color:"#EC4899"},
          {id:"chatgpt",name:"ChatGPT",icon:"💬",desc:"IA conversacional",color:"#10A37F"},
          {id:"copilot",name:"GitHub Copilot",icon:"💻",desc:"IA de código",color:"#6366F1"},
          {id:"human",name:"Fotógrafo corporativo",icon:"👥",desc:"Sesión de fotos presencial",color:"#0EA5E9"},
        ],
        correct:"dalle",
        explanation:"Modelos como DALL-E o Midjourney generan 50 avatares con el mismo estilo corporativo y paleta de colores en minutos usando un prompt consistente. ChatGPT no genera imágenes de calidad profesional, y un fotógrafo costaría 10x más además de requerir coordinar a 50 personas.",
      },
      {
        id:"2b2", objectId:"projector", points:150,
        situation:"El CEO quiere un podcast semanal de 5 minutos con noticias del sector tech para empleados. No hay locutor.",
        options:[
          {id:"elevenlabs",name:"ElevenLabs / TTS",icon:"🎙️",desc:"IA generativa de voz sintética",color:"#8B5CF6"},
          {id:"claude",name:"Claude (solo guión)",icon:"🤖",desc:"IA genera solo el texto",color:"#D97706"},
          {id:"dalle",name:"DALL-E portadas",icon:"🎨",desc:"IA para imagen del podcast",color:"#EC4899"},
          {id:"human",name:"Contratar locutor externo",icon:"👥",desc:"Voz humana profesional",color:"#0EA5E9"},
        ],
        correct:"elevenlabs",
        explanation:"Para audio y voz sintetizada, modelos TTS como ElevenLabs son la herramienta correcta. Clonan voces, mantienen tono consistente y producen audio profesional en minutos. Claude puede escribir el guión, pero no produce audio — son dominios distintos y complementarios.",
      },
      {
        id:"2c", objectId:"coffee", points:150,
        situation:"Necesitamos analizar un contrato legal de 80 páginas, identificar cláusulas de riesgo y generar un resumen ejecutivo.",
        options:[
          {id:"claude",name:"Claude",icon:"🤖",desc:"IA con ventana de contexto de 200K tokens",color:"#D97706"},
          {id:"dalle",name:"DALL-E",icon:"🎨",desc:"IA de imágenes",color:"#EC4899"},
          {id:"auto",name:"Script de búsqueda de texto",icon:"⚙️",desc:"Buscar palabras clave automáticamente",color:"#64748B"},
          {id:"copilot",name:"GitHub Copilot",icon:"💻",desc:"IA de código",color:"#6366F1"},
        ],
        correct:"claude",
        explanation:"Claude procesa hasta 200K tokens — suficiente para un contrato de 80 páginas completo. Su fortaleza en análisis legal, síntesis y razonamiento lo hace ideal para identificar cláusulas de riesgo. Un script de búsqueda de palabras clave nunca podría entender el contexto legal ni generar recomendaciones.",
      },
      {
        id:"2c2", objectId:"coffee", points:150,
        situation:"Soporte quiere un chatbot que responda preguntas técnicas usando la documentación interna de 500 páginas.",
        options:[
          {id:"claude",name:"Claude con RAG",icon:"🤖",desc:"IA conectada a documentos internos",color:"#D97706"},
          {id:"chatgpt",name:"ChatGPT estándar",icon:"💬",desc:"Sin acceso a docs internos",color:"#10A37F"},
          {id:"copilot",name:"GitHub Copilot",icon:"💻",desc:"IA de código",color:"#6366F1"},
          {id:"auto",name:"FAQ estático en la web",icon:"⚙️",desc:"Preguntas frecuentes hardcodeadas",color:"#64748B"},
        ],
        correct:"claude",
        explanation:"Para responder usando documentación interna se necesita RAG (Retrieval Augmented Generation): la IA busca en los documentos y genera respuestas basadas en esa información. Claude es ideal por su capacidad de procesar documentos largos. ChatGPT estándar no tiene acceso a tu documentación y podría alucinar.",
      },
    ],
  },
  {
    id: 3,
    floor: "Piso de Proyectos",
    title: "Consultor en forma",
    concept: "API, prompt engineering e integración",
    accentColor: "#F59E0B",
    floorIcon: "⚡",
    objects: [
      { id: "postit",  label: "Post-it en pizarra", icon: "📌", x: 25, y: 40, hint: "Decisión técnica urgente" },
      { id: "monitor", label: "Monitor con código",  icon: "🖥️", x: 50, y: 52, hint: "Bug en producción" },
      { id: "folder",  label: "Carpeta de proyecto", icon: "📁", x: 72, y: 48, hint: "Propuesta al cliente" },
    ],
    challengePool: [
      {
        id:"3a", objectId:"postit", points:200,
        situation:"VeyharCorp usará Claude para responder 10,000 consultas diarias de clientes en la web. ¿Cómo se implementa técnicamente?",
        options:[
          {id:"api",name:"Integrar vía API al backend",icon:"🔌",desc:"Llamadas programáticas desde el servidor",color:"#F59E0B"},
          {id:"web",name:"Usar claude.ai manualmente",icon:"🌐",desc:"El equipo usa la interfaz web",color:"#6366F1"},
          {id:"script",name:"Script copia y pega",icon:"⚙️",desc:"Automatización del navegador",color:"#64748B"},
          {id:"human",name:"Equipo de agentes humanos",icon:"👥",desc:"Personas usando Claude como apoyo",color:"#0EA5E9"},
        ],
        correct:"api",
        explanation:"Para 10,000 consultas diarias, la única solución viable es integrar Claude vía API al backend. Permite escalabilidad automática, control de costos y experiencia seamless. Usar la interfaz web manualmente sería físicamente imposible a ese volumen.",
      },
      {
        id:"3a2", objectId:"postit", points:200,
        situation:"Los costos de API de GPT-4 se dispararon 400% en un mes. ¿Primera acción recomendada?",
        options:[
          {id:"cache",name:"Caché + auditar prompts",icon:"💾",desc:"Reutilizar respuestas y reducir tokens",color:"#F59E0B"},
          {id:"cambiar",name:"Migrar a modelo más barato",icon:"💰",desc:"GPT-3.5 o modelo open source",color:"#22C55E"},
          {id:"limitar",name:"Restringir acceso a usuarios",icon:"🚫",desc:"Reducir volumen de uso",color:"#EF4444"},
          {id:"budget",name:"Solicitar más presupuesto",icon:"📈",desc:"El costo es parte del crecimiento",color:"#6366F1"},
        ],
        correct:"cache",
        explanation:"Antes de cambiar modelos, auditar el uso: ¿hay prompts innecesariamente largos? ¿preguntas repetidas que podrían cachearse? Implementar caché puede reducir costos 60-80% sin degradar experiencia. Luego evalúas si también necesitas un modelo más barato para casos simples.",
      },
      {
        id:"3b", objectId:"monitor", points:200,
        situation:"El prompt para generar reportes da resultados inconsistentes: diferente formato, falta información. ¿Cuál es la causa principal?",
        options:[
          {id:"prompt",name:"El prompt es ambiguo",icon:"📝",desc:"Falta estructura, ejemplos y contexto",color:"#F59E0B"},
          {id:"modelo",name:"El modelo no es bueno",icon:"🤖",desc:"Cambiar de proveedor de IA",color:"#EC4899"},
          {id:"internet",name:"Latencia en la API",icon:"🌐",desc:"La conexión afecta la calidad",color:"#64748B"},
          {id:"datos",name:"Faltan datos de entrada",icon:"📊",desc:"El modelo necesita más info",color:"#22C55E"},
        ],
        correct:"prompt",
        explanation:"La inconsistencia es casi siempre problema de prompt engineering. Un buen prompt necesita: rol claro, formato esperado, ejemplos de referencia (few-shot) y restricciones precisas. Los LLMs son estocásticos — sin instrucciones precisas producen variaciones. El modelo no es el problema; las instrucciones sí.",
      },
      {
        id:"3b2", objectId:"monitor", points:200,
        situation:"El chatbot funciona bien en pruebas internas pero en producción da respuestas extrañas. ¿Causa más probable?",
        options:[
          {id:"contexto",name:"Contexto mal gestionado",icon:"🌀",desc:"Historial de chat se acumula incorrectamente",color:"#F59E0B"},
          {id:"server",name:"Problema de infraestructura",icon:"🖥️",desc:"Fallo técnico en producción",color:"#64748B"},
          {id:"modelo",name:"El modelo cambió versión",icon:"🤖",desc:"El proveedor actualizó el modelo",color:"#EC4899"},
          {id:"users",name:"Usuarios escriben mal",icon:"👥",desc:"Inputs inesperados",color:"#0EA5E9"},
        ],
        correct:"contexto",
        explanation:"El problema más común al pasar a producción es la gestión del contexto. En pruebas cada conversación empieza limpia. En producción, si el historial se acumula incorrectamente, el modelo recibe instrucciones contradictorias — explicando comportamientos 'extraños' que no aparecen en testing.",
      },
      {
        id:"3c", objectId:"folder", points:200,
        situation:"Van a enviar contratos confidenciales de clientes a una IA pública para analizarlos. El Director de TI pregunta por el riesgo.",
        options:[
          {id:"alto",name:"Riesgo alto — solución privada",icon:"🔴",desc:"Datos confidenciales sin DPA = riesgo legal",color:"#EF4444"},
          {id:"bajo",name:"Riesgo bajo — no guardan datos",icon:"🟡",desc:"Las APIs no retienen información",color:"#F59E0B"},
          {id:"ninguno",name:"Sin riesgo — es solo texto",icon:"🟢",desc:"No hay riesgo real",color:"#22C55E"},
          {id:"depende",name:"Depende del proveedor",icon:"🔵",desc:"Revisar términos caso por caso",color:"#3B82F6"},
        ],
        correct:"alto",
        explanation:"Enviar datos confidenciales a APIs públicas sin DPA firmado representa riesgo legal serio. Sin contrato que garantice privacidad, la empresa puede violar GDPR o acuerdos de confidencialidad con sus clientes. Solución: DPA firmado, implementación on-premise, o anonimizar datos antes.",
      },
      {
        id:"3c2", objectId:"folder", points:200,
        situation:"El equipo quiere usar IA para generar propuestas comerciales personalizadas con datos reales de cada cliente.",
        options:[
          {id:"api",name:"IA vía API con datos del CRM",icon:"🔌",desc:"Conectar Claude a Salesforce/HubSpot",color:"#F59E0B"},
          {id:"chatgpt",name:"ChatGPT web manualmente",icon:"💬",desc:"Copiar y pegar datos de cada cliente",color:"#10A37F"},
          {id:"auto",name:"Plantilla Word automatizada",icon:"⚙️",desc:"Mail merge clásico",color:"#64748B"},
          {id:"human",name:"Redactor humano con plantilla",icon:"👥",desc:"Persona personaliza cada propuesta",color:"#0EA5E9"},
        ],
        correct:"api",
        explanation:"Para personalización masiva con datos reales, la integración vía API es la solución correcta: conectar Claude al CRM (Salesforce, HubSpot) permite generar propuestas personalizadas automáticamente con datos actualizados de cada cliente. Copiar y pegar manualmente no escala y es propenso a errores.",
      },
    ],
  },
  {
    id: 4,
    floor: "Oficina del Director",
    title: "Te ganaste su confianza",
    concept: "Riesgos, límites y criterio experto",
    accentColor: "#EF4444",
    floorIcon: "🎯",
    objects: [
      { id: "document", label: "Documento confidencial", icon: "📄", x: 40, y: 50, hint: "Decisión delicada" },
      { id: "trophy",   label: "Caso de riesgo",         icon: "⚠️", x: 62, y: 44, hint: "Alerta del equipo legal" },
      { id: "phone_exec", label: "Teléfono ejecutivo",   icon: "📱", x: 28, y: 60, hint: "Llamada urgente" },
    ],
    challengePool: [
      {
        id:"4a", objectId:"document", points:250,
        situation:"Legal quiere usar IA para tomar decisiones automáticas de despido basadas en métricas de desempeño.",
        options:[
          {id:"no",name:"No usar IA para esta decisión",icon:"🚫",desc:"Requiere juicio humano y responsabilidad legal",color:"#EF4444"},
          {id:"apoyo",name:"IA solo como apoyo informativo",icon:"🤝",desc:"IA genera reporte, humano decide",color:"#F59E0B"},
          {id:"auto",name:"Automatizar completamente",icon:"⚙️",desc:"Más eficiente y objetivo",color:"#64748B"},
          {id:"piloto",name:"Piloto con un departamento",icon:"🧪",desc:"Probar a pequeña escala primero",color:"#3B82F6"},
        ],
        correct:"no",
        explanation:"Decisiones sobre empleo son un caso donde la IA NO debe decidir. Los modelos heredan sesgos de entrenamiento (pueden discriminar). Las leyes laborales requieren que decisiones de despido sean tomadas por personas con responsabilidad legal. La 'objetividad' de la IA es ilusión.",
      },
      {
        id:"4a2", objectId:"document", points:250,
        situation:"Un modelo generó un informe financiero con cifras muy convincentes. El CFO quiere publicarlo al directorio sin revisión.",
        options:[
          {id:"verificar",name:"Verificar todas las cifras",icon:"🔍",desc:"Los modelos pueden alucinar datos",color:"#22C55E"},
          {id:"publicar",name:"Publicar — el modelo es confiable",icon:"📤",desc:"Los mejores modelos son muy precisos",color:"#EF4444"},
          {id:"segunda",name:"Otro modelo lo valida",icon:"🤖",desc:"Cruzar con ChatGPT para confirmar",color:"#6366F1"},
          {id:"descartar",name:"Descartar — IA no sirve para finanzas",icon:"🗑️",desc:"No es confiable en datos numéricos",color:"#64748B"},
        ],
        correct:"verificar",
        explanation:"Las alucinaciones son limitación fundamental de los LLMs: pueden generar cifras que suenan plausibles pero son incorrectas. Usar otro LLM para validar tampoco resuelve — dos modelos pueden alucinar consistentemente. Regla: IA para redactar y estructurar, humanos para verificar números contra fuentes reales.",
      },
      {
        id:"4b", objectId:"trophy", points:250,
        situation:"El chatbot da respuestas diferentes e incorrectas según cómo se escribe la misma pregunta. ¿Qué está pasando?",
        options:[
          {id:"alucinacion",name:"Alucinación del modelo",icon:"🌀",desc:"El LLM genera texto plausible pero falso",color:"#EF4444"},
          {id:"datos",name:"Falta de entrenamiento",icon:"📊",desc:"El modelo necesita más datos",color:"#F59E0B"},
          {id:"bug",name:"Bug en el código",icon:"🐛",desc:"Error técnico en la integración",color:"#6366F1"},
          {id:"latencia",name:"Latencia de conexión",icon:"🌐",desc:"El mensaje no llega completo",color:"#64748B"},
        ],
        correct:"alucinacion",
        explanation:"La alucinación es el problema central de los LLMs: genera respuestas confiadas pero falsas porque predice texto probable, no texto verdadero. Soluciones: RAG (conectar a base de conocimiento verificada), guardrails (restricciones de respuesta), y temperature baja para mayor consistencia.",
      },
      {
        id:"4b2", objectId:"trophy", points:250,
        situation:"El modelo generó un análisis de mercado brillante. Al investigar, descubres que cita estudios que no existen.",
        options:[
          {id:"verificar",name:"Verificar cada cita antes de publicar",icon:"🔍",desc:"Nunca publicar sin validar fuentes",color:"#22C55E"},
          {id:"eliminar",name:"Eliminar citas y usar el análisis",icon:"✂️",desc:"El análisis puede ser válido igual",color:"#F59E0B"},
          {id:"regenerar",name:"Pedir al modelo citas reales",icon:"🔄",desc:"Regenerar hasta obtener fuentes válidas",color:"#6366F1"},
          {id:"descartar",name:"Descartar — IA no sirve para análisis",icon:"🗑️",desc:"No es confiable para este trabajo",color:"#EF4444"},
        ],
        correct:"verificar",
        explanation:"Las citas inventadas (hallucinated references) son comunes en LLMs. El modelo genera citas que suenan académicas pero son falsas. Acción: verificar cada cita, reemplazar falsas con fuentes reales. Regenerar no garantiza citas reales — el problema es estructural en cómo funcionan los LLMs.",
      },
      {
        id:"4c", objectId:"phone_exec", points:250,
        situation:"El área médica quiere IA para generar diagnósticos automáticos basados en síntomas reportados por pacientes.",
        options:[
          {id:"no",name:"No — decisiones médicas requieren profesional",icon:"🚫",desc:"Riesgo de vida en diagnósticos incorrectos",color:"#EF4444"},
          {id:"apoyo",name:"IA como triaje, médico confirma",icon:"🏥",desc:"IA filtra urgencia, humano diagnostica",color:"#F59E0B"},
          {id:"si",name:"Sí — los modelos médicos son precisos",icon:"✅",desc:"Med-PaLM tiene alta accuracy",color:"#22C55E"},
          {id:"piloto",name:"Piloto con síntomas leves",icon:"🧪",desc:"Empezar con casos no urgentes",color:"#3B82F6"},
        ],
        correct:"apoyo",
        explanation:"La IA en medicina es poderosa como apoyo, nunca como decisión final. Modelo correcto: triaje asistido donde la IA prioriza casos y sugiere diagnósticos diferenciales, pero el diagnóstico oficial lo valida un médico licenciado. En la mayoría de jurisdicciones es un requerimiento legal.",
      },
      {
        id:"4c2", objectId:"phone_exec", points:250,
        situation:"Compliance detectó que el chatbot a veces da información incorrecta sobre regulaciones financieras a clientes.",
        options:[
          {id:"apagar",name:"Apagar el chatbot inmediatamente",icon:"🔴",desc:"Riesgo regulatorio inaceptable",color:"#EF4444"},
          {id:"rag",name:"Implementar RAG con base regulatoria",icon:"🔌",desc:"Conectar IA a fuentes regulatorias verificadas",color:"#22C55E"},
          {id:"disclaimer",name:"Añadir disclaimer legal",icon:"📋",desc:"Avisar que la IA puede equivocarse",color:"#F59E0B"},
          {id:"humano",name:"Reemplazar con agentes humanos",icon:"👥",desc:"Volver a atención 100% humana",color:"#0EA5E9"},
        ],
        correct:"rag",
        explanation:"RAG (Retrieval Augmented Generation) es la solución técnica correcta: conectar el modelo a una base de datos de regulaciones verificadas y actualizadas. Así el chatbot responde basado en fuentes oficiales, no en entrenamiento estático. Un disclaimer solo no elimina el riesgo regulatorio.",
      },
    ],
  },
  {
    id: 5,
    floor: "Sala del CEO",
    title: "Leyenda de VeyharCorp",
    concept: "Estrategia, ROI y gobernanza de IA",
    accentColor: "#A855F7",
    floorIcon: "👑",
    objects: [
      { id: "dashboard", label: "Dashboard estratégico", icon: "📈", x: 45, y: 42, hint: "Decisión de inversión" },
      { id: "map",       label: "Mapa de roadmap",        icon: "🗺️", x: 65, y: 55, hint: "Plan de expansión" },
      { id: "briefcase", label: "Maletín ejecutivo",      icon: "💼", x: 28, y: 55, hint: "Propuesta al directorio" },
    ],
    challengePool: [
      {
        id:"5a", objectId:"dashboard", points:300,
        situation:"El CEO quiere implementar IA en toda la empresa el próximo trimestre. Presupuesto ilimitado. ¿Primera recomendación?",
        options:[
          {id:"audit",name:"Auditar procesos primero",icon:"🗺️",desc:"Identificar dónde la IA genera valor real",color:"#A855F7"},
          {id:"comprar",name:"Adquirir las mejores herramientas",icon:"💳",desc:"Invertir en soluciones completas ya",color:"#EF4444"},
          {id:"equipo",name:"Contratar equipo de IA interno",icon:"👥",desc:"Capacidad interna antes de implementar",color:"#0EA5E9"},
          {id:"esperar",name:"Esperar que madure la tecnología",icon:"⏳",desc:"Aún es temprano para implementación masiva",color:"#64748B"},
        ],
        correct:"audit",
        explanation:"El error más caro en transformación digital es comprar tecnología antes de entender el problema. Un audit permite: identificar 2-3 casos con mayor ROI real, evitar IA donde no agrega valor, y crear un roadmap priorizado. El presupuesto ilimitado es una trampa sin dirección clara.",
      },
      {
        id:"5a2", objectId:"dashboard", points:300,
        situation:"Un competidor implementó IA y redujo costos 30%. El CEO quiere 'implementar IA en todo YA'. ¿Tu respuesta?",
        options:[
          {id:"calma",name:"Evaluar antes de actuar por presión",icon:"🧠",desc:"El FOMO es la peor razón para adoptar tech",color:"#A855F7"},
          {id:"urgente",name:"Actuar urgente — el mercado no espera",icon:"🚀",desc:"La velocidad es ventaja competitiva",color:"#EF4444"},
          {id:"copiar",name:"Replicar lo que hizo el competidor",icon:"📋",desc:"Si les funcionó, nos funcionará",color:"#64748B"},
          {id:"invertir",name:"Duplicar inversión para ganar terreno",icon:"💰",desc:"Superar al competidor con más inversión",color:"#F59E0B"},
        ],
        correct:"calma",
        explanation:"El FOMO es uno de los principales causantes de implementaciones fallidas. Lo que funcionó para el competidor puede no aplicar — diferentes procesos, cultura, datos y capacidades. Respuesta correcta: entender qué hizo el competidor, evaluar si aplica, y construir un plan basado en tus procesos críticos.",
      },
      {
        id:"5b", objectId:"map", points:300,
        situation:"¿Build vs Buy? ¿Construir modelo propio o usar APIs de Anthropic/OpenAI? El CFO pide ROI.",
        options:[
          {id:"api",name:"APIs externas — mejor ROI inicial",icon:"🔌",desc:"Menor inversión, despliegue rápido",color:"#A855F7"},
          {id:"propio",name:"Modelo propio — control total",icon:"🏗️",desc:"Alta inversión pero independencia",color:"#F59E0B"},
          {id:"hibrido",name:"Híbrido según sensibilidad del dato",icon:"⚖️",desc:"APIs para general, propio para datos críticos",color:"#22C55E"},
          {id:"outsource",name:"Consultoría externa completa",icon:"🤝",desc:"Delegar toda la implementación",color:"#0EA5E9"},
        ],
        correct:"hibrido",
        explanation:"La respuesta estratégica madura es híbrida: APIs externas para el 80% de casos donde el ROI es inmediato y datos no son críticos; on-premise para el 20% con datos altamente sensibles. Construir todo propio cuesta $10M+ y 2 años. APIs puras crean dependencia y riesgos de privacidad.",
      },
      {
        id:"5b2", objectId:"map", points:300,
        situation:"¿Cómo medimos el éxito de la implementación de IA en VeyharCorp? El CEO pide el marco correcto.",
        options:[
          {id:"negocio",name:"KPIs de negocio: tiempo, costo, NPS",icon:"📈",desc:"Reducción de costos, productividad, satisfacción",color:"#A855F7"},
          {id:"precision",name:"Precisión técnica del modelo",icon:"🎯",desc:"Accuracy del modelo en sus respuestas",color:"#6366F1"},
          {id:"velocidad",name:"Velocidad de respuesta del sistema",icon:"⚡",desc:"Latencia y tiempo de procesamiento",color:"#F59E0B"},
          {id:"adopcion",name:"Número de herramientas implementadas",icon:"🔧",desc:"Más tools = más transformación",color:"#64748B"},
        ],
        correct:"negocio",
        explanation:"El éxito de la IA se mide en impacto de negocio, no en métricas técnicas. Un modelo con 99% accuracy que no reduce costos ni mejora experiencia del cliente es un fracaso. KPIs correctos: reducción de tiempo en procesos clave, ahorro en costos, mejora en NPS, revenue adicional generado.",
      },
      {
        id:"5c", objectId:"briefcase", points:300,
        situation:"Legal pregunta qué políticas de gobernanza se necesitan antes de lanzar el asistente de IA interno.",
        options:[
          {id:"politicas",name:"Política de uso + clasificación de datos",icon:"📋",desc:"Qué datos pueden y no pueden procesarse",color:"#A855F7"},
          {id:"nada",name:"No se necesitan — es uso interno",icon:"🚫",desc:"El uso interno no requiere regulación",color:"#EF4444"},
          {id:"dpo",name:"Solo contratar un DPO",icon:"👤",desc:"Un experto que defina todo",color:"#0EA5E9"},
          {id:"esperar",name:"Esperar regulación de IA local",icon:"⏳",desc:"Alinearse con la ley cuando exista",color:"#64748B"},
        ],
        correct:"politicas",
        explanation:"Antes de lanzar IA interna se necesitan: (1) Política de uso aceptable — qué datos pueden enviarse a APIs externas; (2) Clasificación de datos — categorizar información confidencial; (3) Proceso de reporte de errores. Sin esto, el primer incidente de privacidad puede costar millones en multas.",
      },
      {
        id:"5c2", objectId:"briefcase", points:300,
        situation:"El Directorio pregunta: ¿debería VeyharCorp tener un Chief AI Officer? ¿Es necesario ese rol?",
        options:[
          {id:"si",name:"Sí — la IA necesita liderazgo dedicado",icon:"👔",desc:"Un CAIO coordina estrategia, ética y adopción",color:"#A855F7"},
          {id:"no",name:"No — el CTO puede asumir eso",icon:"🚫",desc:"Es una función técnica más del CTO",color:"#EF4444"},
          {id:"depende",name:"Depende del tamaño y madurez de la empresa",icon:"⚖️",desc:"No todas las empresas lo necesitan igual",color:"#22C55E"},
          {id:"despues",name:"Cuando tengamos más proyectos de IA",icon:"⏳",desc:"Crear el rol cuando haya más volumen",color:"#64748B"},
        ],
        correct:"depende",
        explanation:"No hay respuesta única. Para empresas medianas con pocos proyectos de IA, el CTO puede asumir ese rol. Para empresas con múltiples iniciativas de IA, datos sensibles y decisiones éticas complejas, un CAIO dedicado tiene sentido. La clave es que alguien tenga ownership claro de la estrategia de IA.",
      },
    ],
  },
];

export const TITLES = [
  { min: 90, title: "AI Whisperer",                    subtitle: "VeyharCorp te necesita en el directorio", emoji: "🏆" },
  { min: 70, title: "Prompt Engineer de Alto Vuelo",    subtitle: "El CEO pide tu número directo",           emoji: "🚀" },
  { min: 50, title: "Consultor con Criterio en Construcción", subtitle: "Vas por muy buen camino",           emoji: "📈" },
  { min: 0,  title: "Analógico con Potencial Digital",  subtitle: "Cada experto empezó desde cero — ¡inténtalo de nuevo!", emoji: "💡" },
];

export function pickOnePerObject(pool) {
  // For each object id, pick one random challenge from the pool
  const byObject = {};
  pool.forEach(c => {
    if (!byObject[c.objectId]) byObject[c.objectId] = [];
    byObject[c.objectId].push(c);
  });
  return Object.values(byObject).map(arr => arr[Math.floor(Math.random() * arr.length)]);
}
