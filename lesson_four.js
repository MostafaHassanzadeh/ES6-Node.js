var method_name = 'sendMessage';
const
request = require('request'),
apiurl = 'https://api.telegram.org/bot',
token = '<token>/',
requestOption={
    method: 'post',
    url: `${apiurl}${token}${method_name}`,
    body: {
        "chat_id":87131919,
        "text":"hi Mostafa",
    },
    json: true,
},
sendMessage = (text) =>{
    return new Promise(
            (resolve,reject)=>{
                    console.log('sendmessage: %s',text);
                    requestOption.body.text = text;
                    request(requestOption,  (error, response, body)=> {
                        if(!error && body && body.ok) {
                            resolve(body);
                        }
                        else{
                            reject(error,body);
                        }
                    });
            }
    );
};
const run = async function(){
    for(let i=1;i<4;i++){
        await sendMessage('text:'+i);
    };
    console.log('done')
};
run();
