import ImageHTML5 from "/public/html-5.svg";
import ImageCss3 from "/public/css-3.svg";
import ImageJavaScript from "/public/javascript.svg";
import ImageTypescript from "/public/typescript-icon.svg";
import ImageNext from "/public/nextjs-icon.svg";
import ImageDocker from "/public/docker-icon.svg";
import ImageNestjs from "/public/nestjs.svg";
import ImageMaterialUI from "/public/material-ui.svg";
import ImageTailwind from "/public/tailwindcss-icon.svg";
import ImageNodejs from "/public/nodejs.svg";

export const codigos = [
  {
    id: 1,
    name: "HTML5",
    primero: "<h1>Título principal</h1>",
    segundo: "<p> Parrafo de texto </p>",
    image: ImageHTML5,
  },
  {
    id: 2,
    name: "CSS3",
    primero: "body { background: lightblue };",
    segundo: `h1 { color: blue };`,
    image: ImageCss3,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    primero: `function saludar(nombre) { 
      console.log("Hola" + nombre)}`,
    segundo: "saludar('Juan')",
    image: ImageJavaScript,
  },
  {
    id: 4,
    name: "TYPESCRIPT",
    primero: "const square=(n: number)=> n * n",
    segundo: `console.log(square(3)) 
    // Output: 9`,
    image: ImageTypescript,
  },
  {
    id: 5,
    name: "NEXT JS",
    primero: `npx create-next-app@latest`,
    segundo: "yarn create next-app --typescript",
    image: ImageNext,
  },
  {
    id: 6,
    name: "MATERIAL UI",
    primero: "npm install @material-ui/core",
    segundo: "npm install @material-ui/icons",
    image: ImageMaterialUI,
  },
  {
    id: 7,
    name: "TAILWINDCSS",
    primero: "npm install -D tailwindcss",
    segundo: "npx tailwindcss init",
    image: ImageTailwind,
  },
  {
    id: 8,
    name: "DOCKER",
    primero: "docker build -t my-app .",
    segundo: "docker run -p 8080:8080 my-app",
    image: ImageDocker,
  },
  {
    id: 9,
    name: "NODE JS",
    primero: "sudo apt install nodejs",
    segundo: "node index.js",
    image: ImageNodejs,
  },
  {
    id: 10,
    name: "NEST JS",
    primero: "nest new project-name",
    segundo: "nest g cl <path/name>",
    image: ImageNestjs,
  },
];
