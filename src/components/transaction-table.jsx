import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useSearchParams } from 'react-router'

import { useGetTransactions } from '@/api/hooks/transaction'
import { formatCurrency } from '@/helpers/currency'

import TransactionTypeBadge from './transaction-type-badge'
import { DataTable } from './ui/data-table'

const columns = [
  {
    accessorKey: 'name',
    header: 'Título',
  },
  {
    accessKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => {
      console.log(transaction.type.toLowerCase())

      return <TransactionTypeBadge variant={transaction.type.toLowerCase()} />
    },
  },
  {
    accessKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) => {
      return format(new Date(transaction.date), "dd 'de' MMMM 'de 'yyyy", {
        locale: ptBR,
      })
    },
  },
  {
    accessKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) => {
      return formatCurrency(transaction.amount)
    },
  },
  {
    accessKey: 'actions',
    header: 'Ações',
  },
]

const TransactionsTable = () => {
  const [searchParams] = useSearchParams()
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const { data: transactions } = useGetTransactions({ from, to })
  if (!transactions) return null
  return <DataTable columns={columns} data={transactions} />
}

export default TransactionsTable
