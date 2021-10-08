const express = require('express');
const app = express();
require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();
const geolib = require('geolib');
//geolib
/*app.post("/nearest",async (req,res,next)=>{
  const current = req.body.current;
  const array = [];
  //const mechanicLocation = [];
  console.log(current);
  const snapshot1 = await db.collection("location")
  .get()
  .then( (snapshot) => {
    const data1 = snapshot.docs.map((doc) => ({ id:doc.id,...doc.data() }));
   // res.status(200).json(data1); 
    // console.log(data1);
    for (const points of data1) {
      array.push(points.data.location);
    }
  //  res.status(200).json(array);
   nearest = geolib.findNearest(current,array);
    const nearestLat = nearest.latitude;
    const nearestLong = nearest.longitude;
   // res.status(200).json(nearest);
   // console.log(nearest);
   console.log(nearestLong);
      const response = [];
     for( coords of data1){
      const results = coords;
     // console.log(results);
      let longitude = results.data.location.longitude;
      
      if(longitude == nearestLong){
        console.log(`results:${results}`);
        
        response.push(results);
      }      
  }
  console.log(`response:${response}`);
  //res.status(200).json(Object.assign({}, response));
  res.status(200).json(response);
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
  
  //});
//get about 
app.get("/orders",async (req,res,next)=>{
  const snapshot = await db.collection("orders2")
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
app.get("/orders/:id",async (req,res,next)=>{
  const id = req.params.id;
  const snapshot = await db.collection("orders2")
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
app.post("/orders",async (req,res,next) =>{
  const data = req.body;
    let snapshot= await db.collection("orders2")
        .add(data)
        .then(
           (snapshot) => {
            //var postID = snapshot.key();
            const id = snapshot.id;
            res.status(200).json({"id":id,"message":"Done"});
            
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
    let snapshot= await db.collection("orders2")
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
  let snapshot= await db.collection("orders2")
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