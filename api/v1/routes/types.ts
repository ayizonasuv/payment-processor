// types.ts

type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY';
type TransactionStatus = 'pending' | 'success' | 'failed';

interface PaymentMethod {
  id: string;
  name: string;
  type: 'credit-card' | 'bank-transfer' | 'paypal';
}

interface Transaction {
  id: string;
  amount: number;
  currency: CurrencyCode;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  date: Date;
}

interface CardDetails {
  number: string;
  expiryMonth: number;
  expiryYear: number;
  cvc: string;
}

interface BankAccountDetails {
  accountNumber: string;
  sortCode: string;
  holderName: string;
}

interface PayPalAccountDetails {
  email: string;
}

type PaymentDetails = CardDetails | BankAccountDetails | PayPalAccountDetails;