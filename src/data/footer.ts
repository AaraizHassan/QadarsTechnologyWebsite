import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        // {
        //     text: "Our Expertise",
        //     url: "#ourexpertise"
        // },
        {
            text: "Tech Stack",
            url: "#techstack"
        }
        // {
        //     text: "Testimonials",
        //     url: "#testimonials"
        // }
    ],
    email: 'aaraiz@qadars.com',
    telephone: '+92-315-422-7249',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}