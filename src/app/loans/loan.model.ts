export interface Loan {
  id?: number;
  customerId: number;
  loanDate: string;       // data do empréstimo
  dueDate: string;        // data de vencimento
  currency: string;       // moeda
  amount: number;         // valor original
  exchangeRate?: number;   // taxa de câmbio
  amountInBRL?: number;    // valor convertido para BRL
  months?: number;         // quantidade de meses do empréstimo
  finalAmount?: number;    // valor final
  paid: boolean;          // pago ou não
}
