
var Movie = function(){
	var hashmap = {};
	require("./director.js");
	return {
			play : function(){
			   		console.log("Playing ");
			},
			stop : function(){
				   	console.log("Stopped ");
			},
			set : function(attr,value){
					    hashmap[attr] = value;
			},
			get : function(attr){
					   return hashmap[attr];	
			},
	}
};

module.exports = Movie;
		