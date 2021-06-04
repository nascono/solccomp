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


app.use("/", (req,res)=>{
	//res.send("Created by Ömer Fatih AĞIN</br> Sikke Company®™ All rights reserved");
	//console.log(req.body.toString());
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
	res.send(JSON.stringify(input));
	
	
//	var to_compile_start ='{"language":"Solidity","sources":{"sol.sol":{"content":"';
//	var to_compile_end = '"}},"settings":{"outputSelection":{"*":{"*":["*"]}}}}';
//	var to_compile=to_compile_start+code+to_compile_end;
//	res.send(to_compile);
	//var output = JSON.parse(solc.compile(to_compile));
	//res.send(JSON.stringify(output.contracts['sol.sol']));
});

/*app.use("/compile_and_get_metadata", (req,res)=>{
	var code = req.body.toString();
	code = code.replaceAll("\\","\\\\");
	code = code.replaceAll("\"","\\\"");
	
	
	var to_compile_start ='{"language":"Solidity","sources":{"sol.sol":{"content":"';
	var to_compile_end = '"}},"settings":{"outputSelection":{"*":{"*":["*"]}}}}';
	var to_compile=to_compile_start+code+to_compile_end;
	
	var output = JSON.parse(solc.compile(to_compile));
	res.send(JSON.stringify(output.contracts['sol.sol']));
	//res.send(req.body);
	
	
	
	
});*/



app.listen(port, () => {
 console.log("Server running on port 80");
});
