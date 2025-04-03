import { Project } from "../interfaces/project.interface";

export const dabubble: Project = {
    id: "01",
    title: "DABubble",
    description_de: "Ein Chat-Messenger im Stile von Slack. Echtzeitkommunikation in Channels oder über Direktnachrichten. Eine globale Suchfunktion erleichtert das Finden von Nutzern und Nachrichten.",
    description_en: "A Messenger like Slack. Communicate with your team through channels or send private messages to other users. A global search feature makes it easy to find messages, users or channels. Share images or PDFs directly in the chat.",
    skills: [
        {
            name: 'Angular',
            imgPath: 'assets/img/skills-angular-green.svg'
        },
        {
            name: 'TypeScript',
            imgPath: 'assets/img/skills-typescript-green.svg'
        },
        {
            name: 'Firebase',
            imgPath: 'assets/img/skills-firebase-green.svg'
        },
        {
            name: 'HTML',
            imgPath: 'assets/img/skills-html-green.svg'
        },
        {
            name: 'SCSS',
            imgPath: 'assets/img/skills-css-green.svg'
        },
    ],
    link: "https://da-bubble.manuel-braun.net/login",
    github: "https://github.com/manuelbrauncoder/my-da-bubble",
    imgPath: "assets/img/portfolio-dabubble.png"
}

export const join: Project = {
    id: "02",
    title: "Join",
    description_de: "Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
    description_en: "Task manager inspired by the Kanban System. Create and organize tasks, using drag and drop functions, and assign users and categories.",
    skills: [
        {
            name: 'Angular',
            imgPath: 'assets/img/skills-angular-green.svg'
        },
        {
            name: 'TypeScript',
            imgPath: 'assets/img/skills-typescript-green.svg'
        },
        {
            name: 'Firebase',
            imgPath: 'assets/img/skills-firebase-green.svg'
        },
        {
            name: 'HTML',
            imgPath: 'assets/img/skills-html-green.svg'
        },
        {
            name: 'SCSS',
            imgPath: 'assets/img/skills-css-green.svg'
        },
    ],
    link: "https://da-bubble.manuel-braun.net/login",
    github: "https://github.com/manuelbrauncoder/my-da-bubble",
    imgPath: "assets/img/portfolio-join.png"
}

export const epl: Project = {
    id: "03",
    title: "El Pollo Loco",
    description_de: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Salsa-Flaschen zu finden, um gegen die Killerhühner zu kämpfen.",
    description_en: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.",
    skills: [
        {
            name: 'JavaScript',
            imgPath: 'assets/img/skills-javascript-green.svg'
        },
        {
            name: 'HTML',
            imgPath: 'assets/img/skills-html-green.svg'
        },
        {
            name: 'SCSS',
            imgPath: 'assets/img/skills-css-green.svg'
        },
    ],
    link: "https://da-bubble.manuel-braun.net/login",
    github: "https://github.com/manuelbrauncoder/my-da-bubble",
    imgPath: "assets/img/portfolio-epl.png"
}

export const projects: Project[] = [
    dabubble, join, epl
]