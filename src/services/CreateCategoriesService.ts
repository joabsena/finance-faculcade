import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../repositories/CategoriesRepository";

interface ICreateCategoriesRequest {
  name: string;
  description: string;
}

class CreateCategoriesService { 
  async execute({ name, description }: ICreateCategoriesRequest ) {
    const categoriesRepository = getCustomRepository(CategoryRepositories);

    const categoryAlreadyExists = await categoriesRepository.findOne({ name });

    if(categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    const category = categoriesRepository.create({ name, description });

    await categoriesRepository.save(category);

    return category;
  }
}

export { CreateCategoriesService  }