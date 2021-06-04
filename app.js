var express = require("express");
var solc = require('solc');
var app = express();
let port = process.env.PORT || 3000

app.get("/", (req,res)=>{
	res.send("Created by Ömer Fatih AĞIN</br> Sikke Company®™ All rights reserved");
});

app.get("/compile_and_get_metadata", (req,res)=>{
	//var base_64_code = req.query.code;
	//var base_64_buffer = Buffer.from(base_64_code, 'base64');
	//var code = base_64_buffer.toString('ascii');
	//code = code.replace("\"", "\\\"");
	var code = req.body;
	
	var to_compile_first ='{"language":"Solidity","sources":{"sol.sol":{"content":"';
	var to_compile_last = '"}},"settings":{"outputSelection":{"*":{"*":["*"]}}}}';
	
	//var output = JSON.parse(solc.compile(to_compile));
	//res.send(JSON.stringify(output.contracts['sol.sol']));
	res.send(code);
	
});



app.listen(port, () => {
 console.log("Server running on port 80");
});
