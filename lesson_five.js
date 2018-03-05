var City,MaxTemp,MinTemp,WindSpeed,ClimateDescription,txt;
const
    token = '557766397:AAEGdq4UOO9p69kAIp84AL7hI2T0sek_WFM',
    TelegramBot = require('telegram-bot-api.js').default,
    bot = new TelegramBot(token,{ autoUpdate: true});
    getweather = require('city-weather');

    bot.on('update.message.text',async (msg) => {
        City = msg.text;
        
        await getweather.getMaximumTemp(City, (temp)=>{
            MaxTemp = temp;
        });
        await getweather.getMinimumTemp(City, (temp)=>{
            MinTemp = temp;
        });

        await getweather.getWindSpeed(City, (speed)=>{
            WindSpeed = speed;
        });

        await getweather.getClimateDescription(City, (description)=>{
            ClimateDescription = description;
        });        

        await bot.sendMessage({
            chat_id: msg.chat.id,
            text: `${City} \n MaxTemp:${MaxTemp} C^ \n MinTemp: ${MinTemp} \n WindSpeed: ${WindSpeed} \n ClimateDescription: ${ClimateDescription}`,
       });


    });


