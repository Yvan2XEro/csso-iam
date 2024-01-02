import { Globals } from "@/lib/schema";
import { v4 } from "uuid";

export const globalsData: Globals[] = [{
    id: v4(),
    icon: "/assets/Images/logo.png",
    description: "Sécurité des systèmes d'information",
    facebook: "cybersecurity_fb",
    instagram: "cybersecurity_insta",
    x: "cybersecurity_x",
    linkedin: "cybersecurity_linkedin",
    adress: "123 Sécurité Street",
    phone: "+1234567890",
    email: "info@cybersecurity.com",
    getInTouchText: "Contactez-nous pour renforcer votre sécurité en ligne",
    lng: 45.678 as any,
    lat: -34.567 as any,
    //   Vision
    ourVisionTitle: "Notre Vision en Cybersécurité",
    visionDescription: "Protéger chaque utilisateur en ligne contre les menaces potentielles.",
    missionDescription: "Offrir des solutions de cybersécurité innovantes pour un monde plus sûr.",

    //   Hero section
    heroTitle: "Héros de la Cybersécurité",
    heroDescription: "Nous sommes engagés à défendre votre monde numérique.",
    heroImage: "/assets/Images/home/banner.jpg",

    //   Why Us
    whyUsTitle: "Pourquoi Nous Choisir",
    whyUsImage: "/assets/Images/home/choose_main.jpg",
    whyUsDescription: "Notre expertise et notre engagement inébranlable envers la sécurité font de nous le meilleur choix.",

    //   About Us
    aboutSectionTitle: "À Propos de Nous",
    aboutSectionDescription: "Cybersecurity Solutions est leader dans le domaine de la protection en ligne.",
    aboutSectionImage: "/assets/Images/about/about.jpg",
    aboutTeamDescription: "Rencontrez notre équipe dévouée de professionnels de la cybersécurité.",

    //   Services
    serviceTitle: "Nos Services",
    servicesDescrption: "Des services de cybersécurité complets pour répondre à vos besoins uniques.",

    // How we work
    howWeWorkDescription: "Nous utilisons les dernières technologies et meilleures pratiques pour assurer votre sécurité.",
    howWeWorkTitle: "Notre Méthode de Travail",
    howWeWorkImage: "/assets/Images/home/how_we_work.jpg",

    docsLink: "https://cybersecurity-docs.com",
    ctaTitle: "Contactez-nous dès aujourd'hui",
    ctaDescription: "Protégez votre entreprise avec nos solutions de cybersécurité de pointe.",
    faqSectionTitle: "Foire Aux Questions",
    faqSectionDescription: "Réponses aux questions les plus fréquemment posées sur la cybersécurité.",
}]

export const bannersData = [{
    id: v4(),
    about: "/assets/Images/about/banner_about.jpg",
    blog: "/assets/Images/about/banner_about.jpg",
    contact: "/assets/Images/about/banner_about.jpg",
    service: "/assets/Images/about/banner_about.jpg",
    team: "/assets/Images/about/banner_about.jpg",
    cta: "/assets/Images/home/experience.jpg",
}]

export const usersData = [{
    id: v4(),
    name: "Admin Super",
    email: "admin@super.com",
    password: "$2a$12$.O5v0F3mojLJ3bSvGaWPX.R5ulhOFHTG6yqIL89ckKnJHTIBBiJF2", //4L6IZcvTWsOPG08NAY41VjdIa2BWl1LSdHdEKi9Yr+I=
}]

export const faqData = [{
    id: v4(),
    question: "Question 1",
    response: "Answer 1",
}, {
    id: v4(),
    question: "Question 2",
    response: "Answer 2",
}, {
    id: v4(),
    question: "Question 3",
    response: "Answer 3",
}]

export const membersData = [{
    id: v4(),
    title: "Member 1",
    image: "/assets/Images/slider/testimonial1.jpg",
    description: "Description 1",
}, {
    id: v4(),
    title: "Member 2",
    image: "/assets/Images/slider/testimonial2.jpg",
    description: "Description 2",
}, {
    id: v4(),
    title: "Member 3",
    image: "/assets/Images/slider/testimonial3.jpg",
    description: "Description 3",
}, {
    id: v4(),
    title: "Member 4",
    image: "/assets/Images/slider/testimonial4.jpg",
    description: "Description 4",
}, {
    id: v4(),
    title: "Member 5",
    image: "/assets/Images/slider/testimonial5.jpg",
    description: "Description 5",
}, {
    id: v4(),
    title: "Member 6",
    image: "/assets/Images/slider/testimonial6.jpg",
    description: "Description 6",
}]

export const reasonsData = [{
    id: v4(),
    title: "Reason 1",
    image: "/assets/Images/icon/choose1.png",
    description: "Description 1",
}, {
    id: v4(),
    title: "Reason 2",
    image: "/assets/Images/icon/choose2.png",
    description: "Description 2",
}, {
    id: v4(),
    title: "Reason 3",
    image: "/assets/Images/icon/choose3.png",
    description: "Description 3",
}]

export const servicesData = [{
    id: v4(),
    title: "Service 1",
    image: "/assets/Images/icon/service1.png",
    description: "Description 1",
}, {
    id: v4(),
    title: "Service 2",
    image: "/assets/Images/icon/service2.png",
    description: "Description 2",
}, {
    id: v4(),
    title: "Service 3",
    image: "/assets/Images/icon/service3.png",
    description: "Description 3",
}, {
    id: v4(),
    title: "Service 4",
    image: "/assets/Images/icon/service4.png",
    description: "Description 4",
}, {
    id: v4(),
    title: "Service 5",
    image: "/assets/Images/icon/service5.png",
    description: "Description 5",
}, {
    id: v4(),
    title: "Service 6",
    image: "/assets/Images/icon/service6.png",
    description: "Description 6",
}]