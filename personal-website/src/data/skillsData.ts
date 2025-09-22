import { IconType } from "react-icons"
import { FaGithub, FaBitbucket } from "react-icons/fa"
import { SiFigma, SiAdobeillustrator, SiCanva, SiAdobephotoshop} from "react-icons/si"
import { MessageCircle, Users } from "lucide-react"

export type ProgrammingSkill = {
    name: string
    percent: number 
} 

export type ToolSkill = {
    name: string
    icon: IconType
}

export type Skill = ProgrammingSkill | ToolSkill

export type Category = {
    name: string
    skills: Skill[]
} 

// Actual data:

export const categories: Category[] = [
    {
        name: "Programming",
        skills: [
            {name: "React", percent: 50},
            {name: "HTML", percent: 50},
            {name: "CSS", percent: 50},
            {name: "Javascript", percent: 50}, 
            {name: "C++", percent: 10},
            {name: "Java", percent: 10},
            {name: "Python", percent: 70},
            {name: "Dart", percent: 5},
            {name: "MySQL", percent: 20},

        ]
    },
    {
        name: "Tools",
        skills: [
            {name: "Figma", icon: SiFigma },
            {name: "Canva", icon: SiCanva },
            {name: "Photoshop", icon: SiAdobephotoshop},
            {name: "Illustrator", icon: SiAdobeillustrator},
            {name: "Github", icon: FaGithub},
            {name: "Bitbucket", icon: FaBitbucket}
        ]
    },
    {
        name: "Others", 
        skills: [
            { name: "Communication", icon: MessageCircle },
            { name: "Teamwork", icon: Users },
        ]
    }
]