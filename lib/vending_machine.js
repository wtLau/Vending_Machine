const payload = require('../api/payload')

class vending_machine {
    //functionality for printing inventory
    printInventory() {
        return payload.products
    };

    
    // functionality for refilling inventory
    refillingInventory(refillNumber) {
        return payload.products.filter(N => N.quantity += refillNumber)
        
    }
    // functionality for re-supplying money
    
    // functionality for dispensing inventory based on payment
    // functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)
  
  }

  module.exports = vending_machine

