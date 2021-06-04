var express = require("express");
var app = express();
let port = process.env.PORT || 3000

app.get("/", (req,res)=>{
	res.send("Hello World");
});


app.listen(port, () => {
 console.log("Server running on port 80");
});
