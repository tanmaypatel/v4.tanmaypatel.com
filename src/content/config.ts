import { defineCollection, z } from 'astro:content';

const aboutMeSchema = z.object({
    about: z.string(),
    thingsILove: z.string().array()
});

const aboutMe = defineCollection({
    schema: aboutMeSchema
});

const roleSchema = z.object({
    role: z.string(),
    from: z.string(),
    to: z.string(),
    skills: z.string().array(),
    responsibilities: z.string().array()
});

const experienceSchema = z.object({
    compnay: z.string(),
    roles: z.array(roleSchema)
});

const experience = defineCollection({
    schema: experienceSchema
});

export const collections = { experience };
