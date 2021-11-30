import { getCustomRepository } from "typeorm";
import { Category } from "../entities/Category";
import { TransactionRepositories } from "../repositories/TransactionRepository";

interface ICreateTransactionRequest {
  name: string;
  description: string;
  categoryId: string;
  price: number;
  type: "entrada" | "saida";
}

class CreateTransactionService { 
  async execute({ name, description, categoryId, price, type }: ICreateTransactionRequest ) {
    const transactionCategory = getCustomRepository(TransactionRepositories);

    const transaction = transactionCategory.create({ name, description, categoryId, price, type });

    await transactionCategory.save(transaction);

    return transaction;
  }
}

export { CreateTransactionService  }