const axios = require('axios').default;
app.post("/text",async (req,res,next) =>{
    const phone = req.body.data.phone;
    axios.post("https://bulk.api.mobitechtechnologies.com/api/sendsms", {
    "api_key":"YOUR_API_KEY",
    "username":"YOUR_USER_NAME",
    "sender_id":"YOUR_ASSIGNED SENDER ID",
    "message":req.body.message,
    "phone":req.body.phone
                      });
}
