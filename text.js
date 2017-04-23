
function sendTextMessage() {
    var accountSid ='AC4851e7938c2970194bcc3821db6ff655';
    var authToken ='64d897277252702e1671cce391870663';

    var client = require('twilio')(accountSid,authToken);


    client.messages.create({

        to: "+17133576031",
        from: "+16198701485",
        body: "Mary Smith 555444333 is route to Station ",
    }, function(err,message){
        if(err){
            console.log(err);
        }else{
         console.log(message.sid);
         }
    });
}
