import { Request, Response } from "express";
import { FinancialExportService } from "../services/FinancialExportService";

class FinancialExportController {
  async handle(request: Request, response: Response) {
    const financialExportService = new FinancialExportService();

    const data = await financialExportService.execute();

    response.status(200).send();
  }
}

export { FinancialExportController };