export interface Project {
    id: string,
    title: string,
    description: string,
    skills: Skill[],
    link: string,
    github: string,
    imgPath: string
}

export interface Skill {
    name: string,
    imgPath: string
}