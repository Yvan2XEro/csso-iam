import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, uuid, text, decimal, uniqueIndex } from 'drizzle-orm/pg-core';
import postgres from 'postgres';

const client = postgres(process.env.POSTGRES_URL as any);


export const db = drizzle(client);

export const UserTable = pgTable(
    'users',
    {
        id: uuid('id').primaryKey(),
        name: text('name').notNull(),
        password: text('password').notNull(),
        email: text('email').notNull(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(users.email),
        };
    },
);

export const GlobalTable = pgTable(
    'globals',
    {
        id: uuid('id').primaryKey(),
        icon: text('icon'),
        description: text('description').notNull(),
        facebook: text('facebook').notNull(),
        instagram: text('instagram').notNull(),
        x: text('x').notNull(),
        linkedin: text('linkedin').notNull(),
        adress: text('adress').notNull(),
        phone: text('phone').notNull(),
        email: text('email').notNull(),
        lng: decimal('lng'),
        lat: decimal('lat'),
        getInTouchText: text('getInTouchText').notNull(),
        ourVisionTitle: text('ourVisionTitle').notNull(),
        visionDescription: text('visionDescription').notNull(),
        missionDescription: text('missionDescription').notNull(),
        heroTitle: text('heroTitle').notNull(),
        heroDescription: text('heroDescription').notNull(),
        heroImage: text('heroImage').notNull(),
        whyUsTitle: text('whyUsTitle').notNull(),
        whyUsImage: text('whyUsImage').notNull(),
        whyUsDescription: text('whyUsDescription').notNull(),
        aboutSectionTitle: text('aboutSectionTitle').notNull(),
        aboutSectionDescription: text('aboutSectionDescription').notNull(),
        aboutSectionImage: text('aboutSectionImage').notNull(),
        aboutTeamDescription: text('aboutTeamDescription').notNull(),
        serviceTitle: text('serviceTitle').notNull(),
        servicesDescrption: text('servicesDescrption').notNull(),
        howWeWorkTitle: text('howWeWorkTitle').notNull(),
        howWeWorkImage: text('howWeWorkImage').notNull(),
        howWeWorkDescription: text('howWeWorkDescription').notNull(),
        docsLink: text('docsLink').default(""),
        ctaTitle: text('ctaTitle').default(""),
        ctaDescription: text('ctaDescription').default(""),
        faqSectionTitle: text('faqSectionTitle').default(""),
        faqSectionDescription: text('faqSectionDescription').default(""),
    }
);


export const bannerTable = pgTable(
    'banners',
    {
        id: uuid('id').primaryKey(),
        about: text('about').notNull(),
        service: text('service').notNull(),
        contact: text('contact').notNull(),
        blog: text('blog').notNull(),
        team: text('team').notNull(),
        cta: text('cta').default(""),
    }
);

export const ServiceTable = pgTable(
    'services',
    {
        id: uuid('id').primaryKey(),
        title: text('title').notNull(),
        image: text('image').notNull(),
        description: text('description').notNull(),
    }
);

export const MemberTable = pgTable(
    'members',
    {
        id: uuid('id').primaryKey(),
        title: text('title').notNull(),
        image: text('image').notNull(),
        description: text('description').notNull(),
    }
);

export const ReasonTable = pgTable(
    'reasons',
    {
        id: uuid('id').primaryKey(),
        title: text('title').notNull(),
        image: text('image').notNull(),
        description: text('description').notNull(),
    }
);


export const FaqTable = pgTable(
    'faqs',
    {
        id: uuid('id').primaryKey(),
        question: text('question').notNull(),
        response: text('response').notNull(),
    }
);

// $inferInsert, .$inferSelect
export type Globals = Omit<Omit<Omit<typeof GlobalTable.$inferInsert, " $inferInsert">, " $inferSelect">, "_">