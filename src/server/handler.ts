import { Cashier } from '../db/entity/Cashier';
import { Cashier as Body } from '../models/index';
import { getManager, getRepository } from 'typeorm';

export const createCashier = async(body: Body): Promise<Body> => {
  try {
    const cashier = getRepository(Cashier).create(body);

    const result = await getRepository(Cashier).save(cashier);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCashier = async(params: number): Promise<Body | null> => {
  try {
    const cashier = await getRepository(Cashier).findOne(params);

    if (!cashier) return null;

    return cashier;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCashier = async(body: Body, query: number): Promise<string> => {
  try {
    const cashier = await getRepository(Cashier).findOne({ where: { id: query } });

    if (!cashier) return 'Not found';

    getRepository(Cashier).merge(cashier, body);
    await getRepository(Cashier).save(cashier);

    return 'Cashier updated!';
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCashier = async(query: number): Promise<string> => {
  try {
    await getRepository(Cashier).delete(query);

    return 'Cashier has been deleted';
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllCashiers = async(): Promise<Body[] | null> => {
  try {
    const cashiers = await getRepository(Cashier).find();

    if (!cashiers) return null;

    return cashiers;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTargetCashiers1 = async(): Promise<Body[] | null> => {
    try {
      const entityManager = getManager();
      const cashiers = await entityManager.query(`SELECT "firstName", "lastName" FROM Cashier WHERE "experience" > 5 AND "previousPlaceOfWork" = 'Silpo' OR "previousPlaceOfWork" = 'Arsen' AND "shopId" = (SELECT "id" FROM Shop WHERE "name" = 'ATB')`);

      return cashiers;
    } catch(error) {
      console.error(error);
      throw error;
    }
};

export const getTargetCashiers2 = async(): Promise<Body[] | null> => {
  try {
    const entityManager = getManager();
    const cashiers = await entityManager.query(`SELECT "firstName", "lastName" FROM Cashier WHERE "worksInShifts" = 'night' AND "shopId" = (SELECT "id" FROM Shop WHERE "name" = 'ATB' AND "address" = 'Shevchenka100') AND "id" = (SELECT "cashierId" FROM CashRegister WHERE "id" %2 != 0)`);

    return cashiers;
  } catch(error) {
    console.error(error);
    throw error;
  }
};
