const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
    
            return balance;
        },
        withdraw:
        amount => {
            balance -= amount;
    
            return balance;
        }
    }
}

const mofizBank = bank('Mofiz');
// const sahilBank = bank('Sahil');
console.log(mofizBank.deposit(100));
console.log(mofizBank.deposit(200));
console.log(mofizBank.withdraw(200));

// console.log(sahilBank(200));