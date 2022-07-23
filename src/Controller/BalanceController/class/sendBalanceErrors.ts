import { EndPoint } from "../../../Core/shared/endpoint";

export class SendBalanceErrors {

    balanceNotEnough(): EndPoint {
        return {
            success: false,
            error: 'The Account Balance is not enough',
            statusCode: 400
        }
    }

}