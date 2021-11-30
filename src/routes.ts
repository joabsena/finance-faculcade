import { Router } from 'express';
import { CreateCategoriesController } from './controllers/CreateCategoriesController';
import { CreateTransactionController } from './controllers/CreateTransactionController';
import { FinancialExportController } from './controllers/FinancialExportController';
import { ListAllCategoriesController } from './controllers/ListAllCategoriesController';
import { ListAllTransactionsController } from './controllers/ListAllTransactionController';

const router = Router();

const createCategoriesController = new CreateCategoriesController();
const createTranslationController = new CreateTransactionController();

const listAllTransactionsController = new ListAllTransactionsController();
const listAllCategoriesController = new ListAllCategoriesController();

const financialController = new FinancialExportController();

router.post('/category', createCategoriesController.handle);
router.get('/category', listAllCategoriesController.handle);

router.post('/transaction', createTranslationController.handle);
router.get('/transaction', listAllTransactionsController.handle);

router.get('/exportcsv', financialController.handle);

export { router };