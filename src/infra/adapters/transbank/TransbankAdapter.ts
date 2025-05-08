import { Injectable } from "@nestjs/common";
import { PaymentPort } from "../../../domain/contracts/PaymentPort";
import { TransbankService } from "./TransbankService";


@Injectable()
export class TransbankAdapter implements PaymentPort {
    constructor(private readonly transbank:TransbankService){}

    async createTransaction(input:any){
        return await this.transbank.createTransaction(
            input.amount,
            input.buyOrder,
            input.sessionId,
            input.returnUrl
        )
    }
}