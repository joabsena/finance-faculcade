import { Request, Response } from "express";
import { ListAllCategoriesService } from "../services/ListAllCategoriesService";

class ListAllCategoriesController {
  async handle(request: Request, response: Response){
    const listAllCategoriesService = new ListAllCategoriesService();

    const categories = await listAllCategoriesService.execute();

    return response.json(categories);
  }
}

export { ListAllCategoriesController };