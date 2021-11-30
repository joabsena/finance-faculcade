import { Request, Response } from "express";
import { ListAllTransactionsService } from "../services/ListAllTransactionsService";

class ListAllTransactionsController {
  async handle(request: Request, response: Response){
    const listAllTransactionsService = new ListAllTransactionsService();

    const allTransactions = await listAllTransactionsService.execute();

    return response.json(allTransactions);
  }
}

export { ListAllTransactionsController };