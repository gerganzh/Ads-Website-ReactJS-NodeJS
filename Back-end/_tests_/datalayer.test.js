const datalayer = require('../modules/DataLayer')

describe('<INSERT QUERIES>', () => {
    
     test('CREATING A NEW POSTING', () =>{
        datalayer.createPosting('Test Title', 'Description', 'Electricity', 'Mint', 'Coventry', '75', 'test features', 'test image', '100', 'testusername',
            (err,result) => { 
                expect.assertions(1);
             expect(result).toBe(true);
          })
    })

    test('CREATING A NEW USER', () =>{
        datalayer.create_user('testusername', 'testpassword', 'test@gmail.com',
            (err,result) => { 
                expect.assertions(1);
             expect(result).toBe(true);
          })
    })

    test('SENDING MESSAGE', () =>{
        datalayer.sendMessage("1000","1001", "test title", "test message", "Mr. Test", "Mrs. Test", "1001",
            (err,result) => { 
                expect.assertions(1);
             expect(result).toBe(true);
          })
    })

    test('SAVING AD', () =>{
        datalayer.save("123", "321", "test title", "test description", "test price",
            (err,result) => { 
                expect.assertions(1);
            expect(result).toBe(true);
        })
    })

})

describe('<SELECT QUERIES>', () => {

    test('TESTING LOGIN', () =>{
        datalayer.Password_Validation('kim', '123',
            (err,result) => { 
                expect.assertions(1);
             expect(result).toBe(true);
          })
    })

})

describe('<DELETE QUERIES>', () => {

    test('DELETE ADS', () =>{
        datalayer.deleteAds("1000", "1001", 
            (err,result) => { 
                expect.assertions(1);
             expect(result).toBe(true);
          })
    })


})