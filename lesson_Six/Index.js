'use strict'
const
    bot = require('./bot'),
    config = require('./config'),
    storage = require('./storage'),
    init = () => {
        registerAllcommand();
    },

    registerAllcommand = () => {
        bot.onMessage(new RegExp('^/start','i'),commandStart);
        bot.onMessage(new RegExp('^/GetInviteLink$','i'),commandGetInviteLink);
        bot.onMessage(new RegExp('^/classList$','i'),commandClassList);
        console.log('All Command Registred');
    },

    inviteCodeRegExp = new RegExp('^/start ([0-9]+)'),

    commandStart = async (msg) =>{
        const regExpPars = inviteCodeRegExp.exec(msg.text);
        let inviteCode;
        if(regExpPars){
            inviteCode = regExpPars[1];
        }
        await bot.sendMessage({
            chat_id: msg.chat.id,
            text: 'سلام، خوش آمدید',
        });
        await updateUser(msg.from,inviteCode);
        // if(inviteCode){
        //     await bot.sendMessage({
        //     chat_id: msg.chat.id,
        //     text: 'کد دعوت شما: '+inviteCode,
        //     });
        // }
    },

    commandGetInviteLink = (msg) =>{
        const inviteLink = `${config.botUrl}?start=${msg.from.id}`;
        bot.sendMessage({
            chat_id: msg.chat.id,
            text:'لینک دعوت شما: \n\n' + inviteLink,
        });
    },

    commandClassList = (msg) =>{
            bot.sendMessage({
            chat_id: msg.chat.id,
            text: 'لیست دوره ها: \n\n'+'Node.js',
            });
    },

    updateUser = (user,inviteCode) =>{
        user.inviteCode = inviteCode;
        user.registerDate = Date.now();
        storage.updateUser(user);
        console.log(storage.getUser(user.id));
    }
;

init();
