const express = require('express');
const app = express();

require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();


//get about 
app.get("/location",async (req,res,next)=>{
  const nearestLong = 31.8912;
  const longitude = 'dnm5Xq7ePldaCWybuBeq';
  const snapshot2 = await db.collection("location")   
                  //.where('data .location .longitude', '==', 31.8912)        
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
app.get("/location/:id",async (req,res,next)=>{
  const id = req.params.id;
  const snapshot = await db.collection("location")
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
app.post("/location",async (req,res,next) =>{
  const data = req.body;
    let snapshot= await db.collection("location")
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

app.put("/location",async (req,res,next)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    let snapshot= await db.collection("location")
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
app.delete("/location/:id",async (req,res,next) =>{
  const id = req.params.id;
  //delete req.body.id;
 // const data = req.body;
  let snapshot= await db.collection("location")
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