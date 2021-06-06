var express = require("express");
var solc = require('solc');
var bodyParser  = require("body-parser");


var app = express();
var getRawBody = require('raw-body')
let port = process.env.PORT || 3000

var options = {
  inflate: true,
  limit: '100kb',
  type: '*/*'
};
app.use(bodyParser.raw(options));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/", (req,res)=>{
	console.log(typeof(req.body.toString()));
	if(req.body.toString()=="")
	{
		res.send("Created by Ömer Fatih AĞIN</br> Sikke Company®™ All rights reserved</br>Free solidty compiler api</br>Just send code in raw_body</br>Solidity Version:0.8.4+commit.c7e474f2.Emscripten.clang");
		
		return;
	}
	
	var code = req.body.toString();
	code = code.split("\r\n").join("");
	code = code.split("\t").join("");
	
	var input = {
	language: 'Solidity',
	  sources: {
		'sol.sol': {
		  content: 'contract C { function f() public { } }'
		}
	  },
	  settings: {
		outputSelection: {
		  '*': {
			'*': ['*']
		  }
		}
	  }
	};
	input.sources['sol.sol'].content = code;
	var output = JSON.parse(solc.compile(JSON.stringify(input)));
	var end = output.contracts['sol.sol'];
	////
	delete end["SafeMath"];
	var keys = [];
	for(var k in end){keys.push(k); break;};
	end = end[keys[0]];
	////
	var abi = end["abi"];
	var bytecode = end["evm"]["bytecode"]["object"];
	var to_send =[abi,bytecode];
	res.send(to_send);

});



app.listen(port, () => {
 console.log("Server running on port 80");
});
