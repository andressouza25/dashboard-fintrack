import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCreateTransaction } from '@/api/hooks/transaction'

import { createTransactionFormSchema } from '../schemas/transaction'

export const useCreateTransactionForm = ({ onSucess, onError }) => {
  const { mutateAsync: createTransaction } = useCreateTransaction()

  const form = useForm({
    resolver: zodResolver(createTransactionFormSchema),
    defaultValues: {
      name: '',
      amount: undefined,
      date: new Date(),
      type: undefined,
    },
    shouldUnregister: true,
  })

  const onSubmit = async (data) => {
    try {
      await createTransaction(data)
      onSucess()
    } catch (error) {
      console.log(error)
      onError()
    }
  }

  return { form, onSubmit }
}
