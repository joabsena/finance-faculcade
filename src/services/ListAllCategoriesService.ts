import { getCustomRepository } from 'typeorm';
import { CategoryRepositories } from '../repositories/CategoriesRepository';

class ListAllCategoriesService {
  async execute() {
    const categoriesRepository = getCustomRepository(CategoryRepositories);

    const categories = categoriesRepository.find();
    
    return categories;
  }
}

export { ListAllCategoriesService }