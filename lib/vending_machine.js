const payload = require('../api/payload')

class vending_machine {
    //functionality for printing inventory
    printInventory() {
        return payload.products
    };

    
    // functionality for refilling inventory
    refillInventory(refillNumber) {
        return payload.products.filter(N => N.quantity += refillNumber)
    }


    // functionality for re-supplying money
    refillMoney(coinRefilled) {
        return payload.coinBalance[0].Nickel.filter(N => N.quantity += coinRefilled) 
    }


    // functionality for dispensing inventory based on payment
    dispenseProductOnPay(itemName, payment) {
        const productReduceBy = 1;
        const update = payload.products.map(obj => {
          // clone the current object
          const newObj = Object.assign({}, obj);
          // update the new object
          if (newObj.product === itemName && newObj.price === payment) newObj.quantity -= productReduceBy;
          return newObj;
        });
        return update
    }


    // functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)
    // paymentChange(payment) {
    //     const paymentInCoin= 
    // }
//   take a payment from 5.00 to.05 
//   have a fucntion to breakdown values into coins
//   distribute coins base on avaliabilty 
//   then dispense change from largest amount $2 to smallest sum
  }

  module.exports = vending_machine

