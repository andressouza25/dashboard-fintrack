import z from 'zod'

export const signupFormSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: 'O Nome é obrigatório.',
    }),
    lastName: z.string().trim().min(1, {
      message: 'O sobrenome é obrigatório.',
    }),
    email: z
      .string()
      .email({
        message: 'O E-mail é obrigatório.',
      })
      .trim()
      .min(1, {
        message: 'O E-mail é obrigatório.',
      }),
    password: z.string().trim().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres.',
    }),
    passwordConfirmation: z.string().trim().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres.',
    }),
    terms: z.boolean().refine((value) => value === true, {
      message: 'Você precisa aceitar os termos.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem.',
    path: ['passwordConfirmation'],
  })

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: 'O E-mail é obrigatório.',
    })
    .trim()
    .min(1, {
      message: 'O E-mail é obrigatório.',
    }),
  password: z.string().trim().min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  }),
})
