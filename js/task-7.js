// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const { DEPOSIT, WITHDRAW } = Transaction;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const userTransaction = {
      sum: amount,
      userType: type,
    };

    return userTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const type = DEPOSIT;
    this.balance += amount;
    this.createTransaction(amount, type);
    this.transactions.push(this.createTransaction(amount, type));

    return `Счёт пополнен на: ${amount}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const type = WITHDRAW;
    if (amount < this.balance) {
      this.balance -= amount;

      this.createTransaction(amount, type);
      this.transactions.push(this.createTransaction(amount, type));
      return `снятие ${amount} сo cчёта`;
    } else {
      return `снятие такой суммы не возможно, недостаточно средств`;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let index of this.transactions) {
      if ((index = this.transactions.indexOf(id))) {
      }
    }
    return this.transactions[id];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transTotal = [];
    for (let total of this.transactions) {
      if (total.userType === type) {
        transTotal.push(total);
      }
    }
    return transTotal;
  },
};

console.log(account.createTransaction(350, DEPOSIT));
console.log(account.deposit(350));
console.log(account.deposit(110));
console.log(account.deposit(220));
console.log(account.transactions);

// console.log(account.deposit(50));
// //Счет пополнен на 50
console.log(account.withdraw(22));
console.log(account.withdraw(100));

// //Со счета снято 22
// console.log(account.getBalance());
// // Баланс: 28
// console.log(account.withdraw(7));
// // Со счета снято 7
// console.log(account.getTransactionDetails(1));
// // { id: 2, type: "withdraw", amount: 7 }
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// // Транзакций deposit на сумму 50
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// //Транзакций withdraw на сумму 29
