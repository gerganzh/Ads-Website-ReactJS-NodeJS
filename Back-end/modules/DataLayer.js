'use strict'
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcrypt');
let data = ''
const db = new sqlite3.Database('./mystuff.db', (err) => {
	if (err) return console.error(err.message)
	console.log('Connected to the "MyStuff.db" SQlite database.')
})
module.exports.create_user = (user, pass, email, callback) => {
    
    let sql = `INSERT INTO users(username, password, email)
    VALUES("${user}", "${pass}", "${email}");`
    db.run(sql, err => {
    if(err){ 
        console.log(err);}
        else{
            return callback(null,true)
        }

    })
}

module.exports.loadAds = (callback) => {
    let sql = `SELECT * FROM postings;`
    db.all(sql, (err, result) => {
        if (err){
            throw err;
        }
        return callback(null, result)
    })
}

 module.exports.loadSpecificAds = (userID, callback) => {
     console.log(userID)
    let sql = `SELECT * FROM postings WHERE user_id = ?;`
    db.all(sql, [userID], (err, result) => {
        if (err){
            throw err;
        }
        return callback(null, result)
    })
} 

module.exports.loadSaved = (userID, callback) => {
    let sql = `SELECT * FROM lists WHERE user_id = ?;`
    db.all(sql, [userID], (err, result) => {
        if (err){
            throw err;
        }
        return callback(null, result)
    })
}

module.exports.loadMessages = (userID, callback) => {
    let sql = `SELECT * FROM messages WHERE receiver_id = ?;`
    db.all(sql, [userID], (err, result) => {
        if (err){
            throw err;
        }
        return callback(null, result)
    })
}

module.exports.save = (userID,postingID, title, description,  price, callback) => {
    let sql = `INSERT INTO lists(user_id,posting_id, title, description,  price) VALUES ("${userID}", "${postingID}", "${title}", "${description}", "${price}");`
    db.run(sql, err => {
        if(err){ 
            console.log(err);}
            else{
                return callback(null,true)
            }
        })
    }

    module.exports.sendMessage = (senderID, receiverID, title, message, senderName, receiverName, postingID, callback) => {
        console.log("Me reach")
        let sql = `INSERT INTO messages(sender_id, receiver_id, title, message, sender_name, receiver_name, posting_id) VALUES ("${senderID}", "${receiverID}", "${title}", "${message}", "${senderName}", "${receiverName}", "${postingID}");`
        db.run(sql, err => {
            if(err){ 
                console.log(err);}
                else{
                    return callback(null,true)
                }
            })
        }


module.exports.deleteAds = (userID1, adID, callback) => {
    console.log("reaching datalayer")
    let sql = 'DELETE FROM postings WHERE user_id = ? AND posting_id = ?;'
    console.log("deleting")
    db.run(sql, [userID1, adID], err =>{
        if(err){ 
            console.log(err);}
            else{
                return callback(null,true)
            }
    })
}

module.exports.createPosting = (title, description, category, condition, city, price, features, image, userID, username, callback) => {
    console.log("I reach the datalayer")
    let sql = `INSERT INTO postings(title, description, category, condition, city, price, features, image, user_id, username)
    VALUES("${title}", "${description}", "${category}", "${condition}", "${city}", "${price}", "${features}", "${image}", "${userID}", "${username}");`
    db.run(sql, err => {
    if(err){ 
        console.log(err);}
        else{
            return callback(null,true)
        }
    })
}

module.exports.Password_Validation = (user, pass, callback) => {
let sql = ''
	if(pass != '' && user != '') {
		sql = `SELECT * FROM users WHERE username = ? AND password = ?;`
	}
	db.all(sql,[user,pass], (err, row) => {
        if(err) {console.error(err.message);
            return callback(null,false);}
        if (row.length >= 1) {
            // success
            return callback(null, true)
        } else {
            //  not found
            return callback(null, false)
        } 
    })
}


module.exports.check_username = (user, callback) => {
    let sql = ''
    
            sql = `SELECT * FROM users WHERE username = ?;`
        db.all(sql,[user], (err, row) => {
            if(err) {
                console.error(err.message);
                return callback(null,false);
            }
            console.log(row)
            if (row.length >= 1) {
                
                return callback(null, true)}
                else{
                    return callback(null, false)
                }
        })
    }
    module.exports.check_email = (email, callback) => {
        let sql = ''
        
                sql = `SELECT * FROM users WHERE email = ?;`
            db.all(sql,[email], (err, row) => {
                if(err) {console.error(err.message);
                    return callback(null,false);}
                if (row.length >= 1) {
                    // success
                    return callback(null, true)
                }
                else{
                    return callback(null, false)
                } 
            })
        }
        module.exports.GetID = (user, callback) => {
            let sql = ''
                    sql = `SELECT * FROM users WHERE username = ?;`
                db.get(sql,[user], (err, result) => {
                    if(err)console.error(err.message)
                        const Data = {
                            Res: true,
                            ID: result.id
                        }
                        return callback(null, Data);
                   
                })
            }

            module.exports.GetUsername = (email, callback) => {
                let sql = ''
                        sql = `SELECT * FROM users WHERE email = ?;`
                    db.get(sql,[email], (err, result) => {
                        if(err)console.error(err.message)
                            return callback(null, result.username);
                       
                    })
                }
            