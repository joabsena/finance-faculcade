import { getCustomRepository } from "typeorm";
import { TransactionRepositories } from "../repositories/TransactionRepository";
import json2csv from 'json2csv';
import fs from 'fs';

class FinancialExportService {
  async execute() {
    const transactionCategory = getCustomRepository(TransactionRepositories);

    const transactions = await transactionCategory.find({ relations: ['category'] });

    const datacsv = transactions.map((item) => {
      return {
        nome: item.name,
        descricao: item.description,
        tipo: item.type,
        preco: item.price,
        categoria: item.category.name,
        data: new Date(item.created_at).toLocaleDateString('pt-BR')
      }
    });


    const fields = ['nome', 'descricao', 'tipo', 'preco', 'categoria', 'data'];

    // const json2csvParser = new json2csv.Parser({ fields });
    const document = json2csv.parse(datacsv, { fields: fields });
    fs.writeFile('teste.csv', document, function(err) {
      if(err) {
        console.log(err);
        return;
      }

      return { message: 'Success generate csv' }
    })
  }
};

export { FinancialExportService };