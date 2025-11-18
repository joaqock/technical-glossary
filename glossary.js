// Lista de términos técnicos para el glosario
// term (inglés), translation (español), definition (en inglés), category
const glossary = [
  // Web & Internet
  {
    term: "Website",
    translation: "Sitio web",
    definition: "A collection of related Internet pages that are accessible under one domain name.",
    category: "Web"
  },
  {
    term: "Web browser",
    translation: "Navegador web",
    definition: "A program used to view and interact with web pages.",
    category: "Web"
  },
  {
    term: "Hyperlink",
    translation: "Hipervínculo",
    definition: "A word, phrase or image that you can click to navigate to another resource.",
    category: "Web"
  },
  {
    term: "HTML (HyperText Markup Language)",
    translation: "Lenguaje de marcado de hipertexto",
    definition: "The standard markup language used to structure content on the web.",
    category: "Web"
  },
  {
    term: "Web host",
    translation: "Proveedor de alojamiento web",
    definition: "A company that provides space on a server for a website.",
    category: "Web"
  },
  {
    term: "URL (Uniform Resource Locator)",
    translation: "Dirección web",
    definition: "The text that specifies the address of a resource on the Internet.",
    category: "Web"
  },
  {
    term: "Search engine",
    translation: "Motor de búsqueda",
    definition: "A web service that finds websites or information based on keywords.",
    category: "Web"
  },
  {
    term: "Meta tag",
    translation: "Metaetiqueta",
    definition: "A piece of HTML code that provides information about a web page to search engines.",
    category: "Web"
  },

  // Hardware
  {
    term: "CPU (Central Processing Unit)",
    translation: "Unidad central de procesamiento",
    definition: "The main hardware component that performs most of the processing in a computer.",
    category: "Hardware"
  },
  {
    term: "RAM (Random Access Memory)",
    translation: "Memoria de acceso aleatorio",
    definition: "Short-term memory used by the computer to store active data and programs.",
    category: "Hardware"
  },
  {
    term: "Motherboard",
    translation: "Placa madre",
    definition: "The main circuit board that connects and allows communication between all components of a computer.",
    category: "Hardware"
  },
  {
    term: "Hard drive",
    translation: "Disco duro",
    definition: "A storage device that keeps data permanently, even when the computer is turned off.",
    category: "Hardware"
  },
  {
    term: "Power supply",
    translation: "Fuente de alimentación",
    definition: "The component that converts electrical power and provides it to all parts of the computer.",
    category: "Hardware"
  },
  {
    term: "Heat sink",
    translation: "Disipador de calor",
    definition: "A device that absorbs and disperses heat away from components like the CPU.",
    category: "Hardware"
  },
  {
    term: "Expansion card",
    translation: "Tarjeta de expansión",
    definition: "A circuit board that can be inserted into a slot on the motherboard to add new functions to a computer.",
    category: "Hardware"
  },
  {
    term: "Storage",
    translation: "Almacenamiento",
    definition: "Hardware used to keep data permanently, such as SSDs or hard drives.",
    category: "Hardware"
  },
  {
    term: "Peripheral",
    translation: "Periférico",
    definition: "An external device connected to a computer, such as a keyboard or printer.",
    category: "Hardware"
  },
  {
    term: "Network",
    translation: "Red",
    definition: "A group of connected devices that share resources and information.",
    category: "Hardware"
  },
  {
    term: "Server",
    translation: "Servidor",
    definition: "A computer that provides services or data to other computers on a network.",
    category: "Hardware"
  },
  {
    term: "Client",
    translation: "Cliente",
    definition: "A computer or program that requests services from a server.",
    category: "Hardware"
  },

  // User Interface / Desktop
  {
    term: "Operating system",
    translation: "Sistema operativo",
    definition: "Software that manages computer hardware and other software.",
    category: "UI"
  },
  {
    term: "Icon",
    translation: "Ícono",
    definition: "A small picture that represents a file, folder, program or function.",
    category: "UI"
  },
  {
    term: "Shortcut",
    translation: "Acceso directo",
    definition: "A special icon that links to a file or program for quick access.",
    category: "UI"
  },
  {
    term: "Folder",
    translation: "Carpeta",
    definition: "A container used to organize files on a computer.",
    category: "UI"
  },
  {
    term: "Window",
    translation: "Ventana",
    definition: "A visual area on the screen where a program or document is displayed.",
    category: "UI"
  },
  {
    term: "Menu",
    translation: "Menú",
    definition: "A list of options or commands in a program.",
    category: "UI"
  },

  // Word processing
  {
    term: "Document",
    translation: "Documento",
    definition: "A text file created and edited in a word processor.",
    category: "Word processing"
  },
  {
    term: "Font",
    translation: "Fuente",
    definition: "The style and size of the characters used to display text.",
    category: "Word processing"
  },
  {
    term: "Layout",
    translation: "Diseño",
    definition: "The arrangement of text and images on a page or screen.",
    category: "Word processing"
  },
  {
    term: "Macro",
    translation: "Macro",
    definition: "A recorded sequence of actions that can be replayed to automate tasks.",
    category: "Word processing"
  },
  {
    term: "Template",
    translation: "Plantilla",
    definition: "A pre-designed document that you can reuse with new content.",
    category: "Word processing"
  },
  {
    term: "Spell check",
    translation: "Corrector ortográfico",
    definition: "A tool that checks and suggests corrections for spelling mistakes.",
    category: "Word processing"
  },

  // Databases & spreadsheets
  {
    term: "Database",
    translation: "Base de datos",
    definition: "An organized collection of structured data stored electronically.",
    category: "Databases"
  },
  {
    term: "Table",
    translation: "Tabla",
    definition: "A set of data arranged in rows and columns in a database.",
    category: "Databases"
  },
  {
    term: "Field",
    translation: "Campo",
    definition: "A single piece of information stored in a record.",
    category: "Databases"
  },
  {
    term: "Record",
    translation: "Registro",
    definition: "A collection of related fields describing one item.",
    category: "Databases"
  },
  {
    term: "Query",
    translation: "Consulta",
    definition: "A request for specific information from a database.",
    category: "Databases"
  },
  {
    term: "Spreadsheet",
    translation: "Hoja de cálculo",
    definition: "A document that uses cells arranged in rows and columns to organize data.",
    category: "Databases"
  },
  {
    term: "Formula",
    translation: "Fórmula",
    definition: "An expression that performs calculations in a spreadsheet.",
    category: "Databases"
  },
  {
    term: "Function",
    translation: "Función",
    definition: "A pre-defined formula that performs a specific calculation.",
    category: "Databases"
  },

  // Security
  {
    term: "Password",
    translation: "Contraseña",
    definition: "A secret string of characters used to access a system or service.",
    category: "Security"
  },
  {
    term: "Backup",
    translation: "Copia de seguridad",
    definition: "A copy of data kept in case the original data is lost or damaged.",
    category: "Security"
  },
  {
    term: "Antivirus",
    translation: "Antivirus",
    definition: "Software designed to detect and remove malicious programs.",
    category: "Security"
  },
  {
    term: "Firewall",
    translation: "Cortafuegos",
    definition: "A system that controls and filters network traffic for security.",
    category: "Security"
  },
  {
    term: "Encryption",
    translation: "Encriptación",
    definition: "The process of converting data into a secret code to protect it.",
    category: "Security"
  },
  {
    term: "Permissions",
    translation: "Permisos",
    definition: "Settings that control what a user is allowed to do in a system.",
    category: "Security"
  },

  // Programming
  {
    term: "Algorithm",
    translation: "Algoritmo",
    definition: "A finite set of steps used to solve a problem or perform a task.",
    category: "Programming"
  },
  {
    term: "Variable",
    translation: "Variable",
    definition: "A named element that stores a value that can change during program execution.",
    category: "Programming"
  },
  {
    term: "Constant",
    translation: "Constante",
    definition: "A value that does not change during program execution.",
    category: "Programming"
  },
  {
    term: "Loop",
    translation: "Bucle",
    definition: "A structure that repeats a block of code while a condition is true.",
    category: "Programming"
  },
  {
    term: "Condition",
    translation: "Condición",
    definition: "An expression that can be true or false and controls program flow.",
    category: "Programming"
  },
  {
    term: "Boolean",
    translation: "Booleano",
    definition: "A data type that has only two values: true or false.",
    category: "Programming"
  },
  {
    term: "String",
    translation: "Cadena de caracteres",
    definition: "A sequence of characters treated as text.",
    category: "Programming"
  },
  {
    term: "Array",
    translation: "Arreglo / Array",
    definition: "A data structure that stores an ordered list of elements.",
    category: "Programming"
  },
  {
    term: "Object",
    translation: "Objeto",
    definition: "A data structure that groups related properties and methods.",
    category: "Programming"
  },
  {
    term: "Class",
    translation: "Clase",
    definition: "A blueprint that defines the structure and behavior of objects.",
    category: "Programming"
  },
  {
    term: "Method",
    translation: "Método",
    definition: "A function that belongs to an object or class.",
    category: "Programming"
  },
  {
    term: "Syntax",
    translation: "Sintaxis",
    definition: "The set of rules that defines how code must be written.",
    category: "Programming"
  },
  {
    term: "Debugging",
    translation: "Depuración",
    definition: "The process of finding and fixing errors in a program.",
    category: "Programming"
  },
  {
    term: "Compile",
    translation: "Compilar",
    definition: "To translate source code into machine code or another lower-level form.",
    category: "Programming"
  },
  {
    term: "Execute",
    translation: "Ejecutar",
    definition: "To run a program or a specific instruction.",
    category: "Programming"
  },

  // Tools (incluye parte de lo que antes era Graphics)
  {
    term: "Framework",
    translation: "Framework",
    definition: "A set of tools and libraries that provides a structure for developing software.",
    category: "Tools"
  },
  {
    term: "Version control",
    translation: "Control de versiones",
    definition: "A system that records changes to files so you can track and revert them.",
    category: "Tools"
  },
  {
    term: "Repository",
    translation: "Repositorio",
    definition: "A storage location where code and its history are kept.",
    category: "Tools"
  },
  {
    term: "Branch",
    translation: "Rama",
    definition: "A separate line of development in a version control system.",
    category: "Tools"
  },
  {
    term: "Pixel",
    translation: "Píxel",
    definition: "The smallest unit of an image displayed on a screen.",
    category: "Tools"
  },
  {
    term: "Resolution",
    translation: "Resolución",
    definition: "The level of detail or sharpness of an image.",
    category: "Tools"
  },
  {
    term: "Crop",
    translation: "Recortar",
    definition: "To remove unwanted outer areas from an image.",
    category: "Tools"
  },

  // IT Professions
  {
    term: "Software developer",
    translation: "Desarrollador de software",
    definition: "A professional who designs, writes and maintains computer programs and applications.",
    category: "Professions"
  },
  {
    term: "Front-end developer",
    translation: "Desarrollador front-end",
    definition: "A developer who focuses on the visual and interactive parts of a website or application that users see.",
    category: "Professions"
  },
  {
    term: "Back-end developer",
    translation: "Desarrollador back-end",
    definition: "A developer who works on the server side, databases and application logic behind the scenes.",
    category: "Professions"
  },
  {
    term: "Full-stack developer",
    translation: "Desarrollador full-stack",
    definition: "A developer who works on both front-end and back-end parts of an application.",
    category: "Professions"
  },
  {
    term: "Network administrator",
    translation: "Administrador de redes",
    definition: "A person who installs, configures and maintains an organization's computer networks.",
    category: "Professions"
  },
  {
    term: "Database analyst",
    translation: "Analista de bases de datos",
    definition: "A professional who designs, maintains and optimizes database structures and queries.",
    category: "Professions"
  },
  {
    term: "Systems analyst",
    translation: "Analista de sistemas",
    definition: "A person who studies existing systems and designs solutions to meet business requirements.",
    category: "Professions"
  },
  {
    term: "Technical support specialist",
    translation: "Especialista de soporte técnico",
    definition: "Someone who helps users solve hardware and software problems.",
    category: "Professions"
  },
  {
    term: "UX designer",
    translation: "Diseñador UX",
    definition: "A professional who focuses on the user experience, making interfaces easy and pleasant to use.",
    category: "Professions"
  },
  {
    term: "IT manager",
    translation: "Gerente de TI",
    definition: "A person responsible for planning and supervising technology use in an organization.",
    category: "Professions"
  }
];
