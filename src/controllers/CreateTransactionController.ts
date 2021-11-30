import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { name, description, categoryId, price, type } = request.body;

    const createTransactionService = new CreateTransactionService();

    const transaction = await createTransactionService.execute({name, description, categoryId, price, type});

    return response.status(200).json(transaction);
  }
}

export { CreateTransactionController }