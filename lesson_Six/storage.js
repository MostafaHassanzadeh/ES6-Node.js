'use strict';
const
    config = require('./config'),
    userList = require('./user-List.json'),
    {writeFile} = require('fs'),
    updateUser = (user) =>{
        userList[user.id] = {
        ...userList[user.id],
        ...user,
        }
        save();
    },

    getUser = (userId) =>{
        return userList[userId];
    },

    save = () =>{
        const fileContent = JSON.stringify(userList, null, 2);
        writeFile('./user-List.json',fileContent);
        if(err) console.log('Storage Save: ',err);
    }
;
module.exports = {
    updateUser,
    getUser,
    save,
}
