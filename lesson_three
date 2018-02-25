const
request= require('request'),
requestOption={
    method: 'post',
    url: 'https://api.telegram.org/bot<token>/sendMessage',
    body: { 
        "chat_id":<chatid>,
        "text":"hi Mostafa",
    },
    json: true,
},
requestCallback=(error,respons,body)=>{
    if(error){
        console.log('Error:',error);
        return;
    }
    if(!(body&&body.ok)){
        console.log('Error:not ok',body);
        return;
    }
    console.log('ok');

},
makeRequest = () => {
        request(requestOption,requestCallback);  
};
makeRequest();          
