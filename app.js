var express = require("express");
var app = express();
let port = process.env.PORT || 3000

app.get("/", (req,res)=>{
	res.send("Created by Ömer Fatih AĞIN</br> Sikke Company®™ All rights reserved");
});

app.get("/compile_and_get_metadata", (req,res)=>{
	var code = req.query.code;
	res.send(code);
});



app.listen(port, () => {
 console.log("Server running on port 80");
});
