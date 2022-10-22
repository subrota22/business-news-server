
const express = require("express") ;
const app = express() ;
const port = process.env.PORT || 3020 ;
const cors = require("cors") ;
const category = require("../category.json") ;
const news = require("../news.json") ;
app.use(cors()) ;
app.listen(port , (req , res) =>{
console.log("Your port running on :" + port);
})
app.get("/" , (req , res) => {
res.send("This is home page") ;
})
app.get("/category" , (req , res) => {
 res.send(category) ;
})

app.get("/category/:id" , (req , res) => {
    const id = parseInt( req.params.id );
      const showData =  news.filter(cat => cat.category_id === id ) ;
      res.send(showData) ;
   })

   app.get("/news" , (req , res) => {
    res.send(news) ;
   })

   app.get("/single-news/:_id" , (req , res) => {
    const _id = parseInt(req.params._id );
    const selectedNews = news.find(data => data._id === _id) ;
     res.send(selectedNews) ;
   } )