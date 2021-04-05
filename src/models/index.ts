enum Shifts {
  day,
  night
};

enum Status {
  enable,
  disable
};
interface Cashier {
    firstName: string;
    lastName: string;
    sex: string;
    age: number;
    experience: number;
    worksInShifts: Shifts;
    previousPlaceOfWork: string;
};

interface Shop {
  name: string;
  city: string;
}

interface CashRegister {
  status: Status;
}

export { CashRegister, Cashier, Shop };
