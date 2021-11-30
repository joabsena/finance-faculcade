import { getCustomRepository } from 'typeorm';
import { TransactionRepositories } from '../repositories/TransactionRepository';

class ListAllTransactionsService {
  async execute() {
    const transactionCategory = getCustomRepository(TransactionRepositories);

    const transactions = transactionCategory.find({ relations: ['category'] });
    
    return transactions;
  }
}

export { ListAllTransactionsService }