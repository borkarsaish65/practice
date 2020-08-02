var events = require('events');

var count = require('./count');

var myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent',function(msg){
    console.log(msg)
})


myEmmiter.emit('someEvent','This msg was emmited')

var util = require('util')


var Person = function (name)
{
    this.name = name;
}


util.inherits(Person,events.EventEmitter);


var James = new Person('James');

var Mary = new Person('Mary');

var Peter = new Person('Peter');

var people = [James,Mary,Peter];

people.forEach((person)=>{

    person.on('speak',function(msg)
    {
        console.log(person.name+'said:'+msg);
    })



})


James.emit('speak','Hello Peter!');

Peter.emit('speak','Hi! Hello Peter!');

Mary.emit('speak',"are you'll done saying hellos");

console.log(count.addNum(5,5));
