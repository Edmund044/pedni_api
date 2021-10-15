const express = require('express');
const app = express();

require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();


//get about 
app.get("/mpesa-transactions",async (req,res,next)=>{
  const nearestLong = 31.8912;
  const longitude = 'dnm5Xq7ePldaCWybuBeq';
  const snapshot2 = await db.collection("mpesa-transactions")   
                  //.where('data .mpesa-mpesa-transactions .longitude', '==', 31.8912)        
                  .get()
                  .then( (snapshot) => {
                    const data = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data() }));
                    res.status(200).json(data); 
                    console.log(data);
                  }
                   
                  )
                  .catch( 
                    error => {
                    res.status(500).json({error:error})                   
                  });
});
//get specific
app.get("/mpesa-transactions/:id",async (req,res,next)=>{
  const id = req.params.id;
  const snapshot = await db.collection("mpesa-transactions")
                 .where(admin.firestore.FieldPath.documentId(), "==", id) 
                 // .where("id", "==", id)
                  .get()
                  .then( (snapshot) => {
                    const data = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data() }));
                    res.status(200).json(data); 
                    console.log(data);
                  }
                   
                  )
                  .catch( 
                    error => {
                    res.status(500).json({error:error})                   
                  });
});
//post about
app.post("/mpesa-transactions",async (req,res,next) =>{
  const data = req.body;
    let snapshot= await db.collection("mpesa-transactions")
        .add(data)
        .then(
           (snapshot) => {
            res.status(200).json({id:snapshot.id,message:"Done"});
           } 
         
        )
        .catch(
            error => {
                res.status(500).json({error:error})                   
              }
        );

});
//update about

app.put("/mpesa-transactions",async (req,res,next)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    let snapshot= await db.collection("mpesa-transactions")
        .doc(id)
        .update({
           data      
                })
        .then(
           (snapshot) => {
             res.status(200).json({message:"Done"});
               } 
            )
        .catch(
            error => {
            res.status(500).json({error:error})                   
               }
              );        
 
});

//delete about
app.delete("/mpesa-transactions/:id",async (req,res,next) =>{
  const id = req.params.id;
  //delete req.body.id;
 // const data = req.body;
  let snapshot= await db.collection("mpesa-transactions")
      .doc(id)
      .delete()
      .then(
         (snapshot) => {
           res.status(200).json({message:"Done"});
             } 
          )
      .catch(
          error => {
          res.status(500).json({error:error})                   
             }
            );  
});

module.exports = app;