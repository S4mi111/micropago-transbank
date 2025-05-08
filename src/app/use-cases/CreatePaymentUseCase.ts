import { Inject, Injectable } from "@nestjs/common";
import { PaymentPort } from "../../domain/contracts/PaymentPort";

@Injectable()
export class CreatePaymentUseCase {
    constructor(
        @Inject('PaymentPort')
        private readonly paymentPort:PaymentPort,
    ) {}
    async execute(input:{
        amount: number;
        buyOrder: string;
        sessionId: string;
        returnUrl: string;
    }){
        return await this.paymentPort.createTransaction(input);
    }
}