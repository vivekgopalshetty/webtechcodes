var events=require('events');
var util=require('util');

var person=function(name){
	this.name=name;
};

util.inherits(person,events.EventsEmitter);

person.on('speak',function(msg){
	console.log(msg);
});

var v=new person('vivek');
v.emit('speak','nwenfrnfs');

