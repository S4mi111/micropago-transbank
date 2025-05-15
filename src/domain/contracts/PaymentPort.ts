export interface PaymentPort {
    createTransaction(input: any): Promise<any>;
    confirmTransaction(token: string): Promise<any>;
  }
  