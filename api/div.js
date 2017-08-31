var contract = require('truffle-contract');
var record_artifacts = require('../build/contracts/Record.json');
var web3=require('../address.js')
var Record = contract(record_artifacts);
var accounts;
var account;

var errorMessage = "";
function start() {
	var self = this;
	Record.setProvider(web3.currentProvider);
	web3.eth.getAccounts(function(err, accs) {
		if (err != null) {
			errorMessage = "There was an error fetching your accounts.";
			return;
		}
		if (accs.length == 0) {
			errorMessage = "Couldn't get any accounts! Make sure your Ethereum client is configured correctly.";
			return;
		}
		accounts = accs;
		account = accounts[0];
	});
}

module.exports = {
	div: function(req, res, next) {
		start();
		var self = this;
		var num1 = parseInt(req.body.num_1);
		var num2 = parseInt(req.body.num_2);
	    var record;
		Record.deployed().then(function(instance) {
			record = instance;
			return record.div.call(num1,num2);
		}).then(function(response) {
			res.json({message: "Success",result: response});
		}).catch(function(e) {
			res.json({message: "Failure", Error: e, errorMessage: errorMessage})
		});
	}
}