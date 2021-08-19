const express = require('express');
const app = express();
require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();
const geolib = require('geolib');
//geolib
app.post("/nearest",async (req,res,next)=>{
  const current = req.body.current;
  const array = [];
  //const mechanicLocation = [];
  console.log(current);
  const snapshot1 = await db.collection("location")
  .get()
  .then( (snapshot) => {
    const data1 = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data() }));
    //res.status(200).json(data1); 
   // console.log(data1);
    for (const points of data1) {
      array.push(points.data.location);
    }
    nearest = geolib.findNearest(current,array);
    const nearestLat = nearest.latitude;
    const nearestLong = nearest.longitude;
 //   console.log(nearest);
      
      for( coords of data1){
      const results = coords;
      let longitude = results.data.location.longitude;
      
      if(longitude.includes(nearestLong)){
        console.log(results);
        res.status(200).json(results);
        //response.push(results);
      }      
  }
  }
   
  )
  .catch( 
    error => {
    res.status(500).json({error:error})                   
  });  
  //console.log(array);
 
  //console.log(nearestLat);
  //console.log(nearest);
  //console.log(nearestLong);
  /*console.log(  
    geolib.findNearest(current,array)
    ); */
  /*const response = [];   
  for( coords of mechanicLocation){
      const results = coords;
      let longitude = results.data.location.longitude;
      
      if(longitude.includes(nearestLong)){
        console.log(results);
        //response.push(results);
      }      
  }*/
  // res.status(200).json(response);
  
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