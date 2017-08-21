const vending_machine = require('../lib/vending_machine')


describe ('vending_machine', () => {

    describe ('Customer Experience', () => {
        it('should printing inventory', () => {
            const expected = [
                {
                    "id": 1,
                    "product": "potato_chip",
                    "price": "350",
                    "quantity": 9
                },
                {
                    "id": 2,
                    "product": "cookies",
                    "price": "170",
                    "quantity": 4
                },
                {
                    "id": 3,
                    "product": "BBQ_chip",
                    "price": "245",
                    "quantity": 0
                },
                {
                    "id": 4,
                    "product": "chocolate_bar",
                    "price": "055",
                    "quantity": 11
                }
            ]
            const inventoryData = new vending_machine()
            const received = inventoryData.printInventory()
            expect(received).toEqual(expected);
        });
        xit('should be dispensing inventory based on payment', () => {
            
        });
        xit('should returning change as coins (eg. $0.35 is 1 quarter and 1 dime)', () => {
            
        });
        xit('Dispense the smallest amount of coins when returning change)', () => {
            
        });
    });

    describe ('Machine Maintenance', () => {
        it('should refilling inventory for each product', () => {
            // 9,4,0,11            
            const expected = [
                {
                    "id": 1,
                    "product": "potato_chip",
                    "price": "350",
                    "quantity": 10
                },
                {
                    "id": 2,
                    "product": "cookies",
                    "price": "170",
                    "quantity": 5
                },
                {
                    "id": 3,
                    "product": "BBQ_chip",
                    "price": "245",
                    "quantity": 1
                },
                {
                    "id": 4,
                    "product": "chocolate_bar",
                    "price": "055",
                    "quantity": 12
                }
            ]
            const inventoryData = new vending_machine()
            const received = inventoryData.refillingInventory(1)
            expect(received).toEqual(expected);
        });
        xit('should re-supplying change', () => {
            
        });
    });

});

