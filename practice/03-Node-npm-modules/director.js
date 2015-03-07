var Director = function(nameDirector){
	var hashmap = {
		name : nameDirector
	};
   return {
   	set : function(attr,value){
	    hashmap[attr] = value;
	},
	get : function(attr){
		return hashmap[attr];	
	},
	speak : function(){
		var speak = hashmap["name"] + " says " + hashmap["quotes"].join();
		console.log(speak);
	}
   }
};

module.exports = Director;
		