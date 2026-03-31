// types.ts

interface PaymentMethod {
  id: string;
  name: string;
}

interface Payment {
  id: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: 'pending' | 'completed' | 'failed';
}

interface PaymentMethodData {
  name: string;
  type: 'card' | 'bankTransfer';
}

interface BankTransferData {
  accountNumber: string;
  accountHolderName: string;
  swiftCode: string;
  branchCode: string;
}

interface CardData {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface PaymentProcessorConfig {
  apiKey: string;
  apiSecret: string;
  apiEndpoint: string;
}

interface PayResponse {
  paymentId: string;
  status: 'pending' | 'completed' | 'failed';
  message: string;
}

interface PayRequest {
  paymentMethod: PaymentMethod;
  amount: number;
  currency: string;
  paymentMethodData: CardData | BankTransferData;
  user: User;
}

interface PaymentProcessor {
  makePayment: (payRequest: PayRequest) => Promise<PayResponse>;
}

interface PaymentProcessorError {
  message: string;
  status: 'error';
}

type PaymentProcessorResult = PayResponse | PaymentProcessorError;