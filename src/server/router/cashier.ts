import express from 'express';
import { createCashier, updateCashier, getCashier, deleteCashier, getAllCashiers, getTargetCashiers1 } from '../handler';

const cashier = express.Router();

cashier.post('/cashier', async (req, res, next) => {
  try {
    const { body } = req;

    if (!body) res.sendStatus(404).send('no body');

    const response = await createCashier(body);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

cashier.put('/cashier', async (req, res, next) => {
  try {
    const { body, query } = req;

    const cashierId = Number(query.id);

    if (!body && !cashierId) res.sendStatus(404).send('no body');

    const response = await updateCashier(body, cashierId);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

cashier.delete('/cashier', async (req, res, next) => {
  try {
    const { query } = req;

    const cashierId = Number(query.id);

    if (!cashierId) res.sendStatus(404).send('id not found');

    await deleteCashier(cashierId);

    res.send('Cashier has been deleted');
  } catch (error) {
    next(error);
  }
});

cashier.get('/cashier/:id', async (req, res, next) => {
  try {
    const { params } = req;

    const cashierId = Number(params.id);

    if (!cashierId) res.sendStatus(404).send('id not found');

    const response = await getCashier(cashierId);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

cashier.get('/cashiers', async (req, res, next) => {
  try {

    const response = await getAllCashiers();

    res.json(response);
  } catch (error) {
    next(error);
  }
});

cashier.get('/cashiers1', async (req, res, next) => {
  try {

    const response = await getTargetCashiers1();

    res.json(response);
  } catch (error) {
    next(error);
  }
});


export = cashier;
