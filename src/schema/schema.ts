import * as z from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const ContactUsSchema = z.object({
  name: z.string().min(3, { message: "Name length should be at least 3 char long!" }),
  phone: z.string().regex(phoneRegex, 'Invalid Number!').min(10, { message: "Invalid Number !" }).max(14, { message: 'Invalid number!' }),
  email: z.string().email({ message: "Enter a valid email!" }),
  helpQuery: z.string().optional(),
});