const express = require('express');
const app = express();
require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();
const geolib = require('geolib');
//geolib
app.post("/nearest",async (req,res,next)=>{
  const current = req.body.current;
  const snapshot1 = await db.collection("orders")
  .get()
  .then( (snapshot1) => {
    const data1 = snapshot.docs.map((doc) => ({ latitude:doc.latitude,longitude:doc.longitude })); 
    const array = data1;   
    console.log(data);
  }
  )
  .catch( 
    error => {
    res.status(500).json({error:error})                   
  });  
  nearest = geolib.findNearest(current,array);
  nearestLat = nearest.latitude;
  nearestLong = nearest.longitude;
  console.log(nearestLat);
  console.log(nearestLong);
  res.status(200).json(  
    geolib.findNearest(current,array)
    ); 
    const snapshot2 = await db.collection("orders")
                  .where("longitude", "==", nearestLong)
                  .get()
                  .then( (snapshot2) => {
                    const data2 = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data() }));
                    res.status(200).json(data2); 
                    console.log(data2);
                  }
                   
                  )
                  .catch( 
                    error => {
                    res.status(500).json({error:error})                   
                  });  
  });
//get about 
app.get("/orders",async (req,res,next)=>{
  const snapshot = await db.collection("orders")
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
app.post("/orders",async (req,res,next) =>{
  const data = req.body;
    let snapshot= await db.collection("orders")
        .add(data)
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
//update about

app.put("/orders",async (req,res,next)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    let snapshot= await db.collection("orders")
        .doc(id)
        .update({
          data:data      
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
app.delete("/orders/:id",async (req,res,next) =>{
  const id = req.params.id;
  //const data = req.body;
  let snapshot= await db.collection("orders")
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