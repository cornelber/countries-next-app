"use client"

import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(2, {message: "Username must be at least 2 characters"}),
    password: z.string().min(4, { message: "Password must be at least 4 characters." }),
})

export type LoginSchemaType = z.infer<typeof loginSchema>