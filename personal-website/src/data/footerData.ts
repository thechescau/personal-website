import { IconType } from "react-icons"
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export type FooterLink = {
    name: string
    icon: IconType
    link: string 
}

export const footerLink: FooterLink[] = [
    {
        name: "facebook",
        icon: FaFacebook,
        link: ""
    },
    {
        name: "linkedin",
        icon: FaLinkedinIn,
        link: ""
    },
    {
        name: "instagram",
        icon: FaInstagram,
        link: ""
    },
]