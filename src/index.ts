import inquirer from "inquirer";
import chalk from "chalk";

console.log("Hola, vamos a jugar");

const questions = [
  {
    type: "confirm",
    name: "isSincero",
    message: "¿Aceptas responder a las preguntas con sinceridad?",
  },
  {
    type: "input",
    name: "name",
    message: "¿Como te llamas?",
  },
  {
    type: "list",
    name: "catalunya",
    message: "Como te gusta más Catalunya?",
    choices: [
      `${chalk.yellow("I")}${chalk.red("n")}${chalk.yellow("d")}${chalk.red(
        "e"
      )}${chalk.yellow("p")}${chalk.red("e")}${chalk.yellow("n")}${chalk.red(
        "d"
      )}${chalk.yellow("i")}${chalk.red("e")}${chalk.yellow("n")}${chalk.red(
        "t"
      )}${chalk.yellow("e")}`,
      "Oprimida",
    ],
  },
  {
    type: "list",
    name: "tortilla",
    message: "Tortilla de patatas:",
    choices: ["sin cebolla", `${chalk.bgGreen("con cebolla")}🧅`],
  },
  {
    type: "list",
    name: "pizza",
    message: "Pizza:",
    choices: [`🍍${chalk.bgGreen("con piña")}🍍`, "sin piña"],
  },
  {
    type: "list",
    name: "deploy",
    message: "Plataforma de deploy preferida:",
    choices: ["Netlify", "Vercel"],
  },
  {
    type: "list",
    name: "os",
    message: "Sistema operativo preferido:",
    choices: [`${chalk.bgGreen("MacOS")}`, "💩Windows💩"],
  },
  {
    type: "confirm",
    name: "sure",
    message: "¿Estás seguro?",
  },
  {
    type: "list",
    name: "mobile",
    message: "Sistema mobile preferido:",
    choices: ["💩Android💩", `${chalk.bgGreen("iOS")}`],
  },
  {
    type: "list",
    name: "comillas",
    message: "Comillas:",
    choices: ["Dobles", "Simples"],
  },
  {
    type: "list",
    name: "programmingLanguage",
    message: "Lenguaje de programación preferido (de entre los siguientes):",
    choices: [
      `${chalk.red("php")}`,
      `${chalk.red("java")}`,
      `${chalk.red("COBOL")}`,
    ],
  },
];

type AnswersStrucutre = {
  name: string;
};

const questionaire = async () => {
  await inquirer.prompt(questions).then((answers: AnswersStrucutre) => {
    console.log(`Gracias por jugar 👻${chalk.greenBright(answers.name)}👻`);
  });
};

await questionaire();
