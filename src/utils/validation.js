import { z } from 'zod';

export const validation = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  subject: z.string().optional(),
  message: z.string().nonempty('Message is required'),
});
