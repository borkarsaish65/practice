function serverRequest(query, callback){

  console.log(query);
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  },5000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);
let value = 5;

console.log(value);


value = value + 199;

console.log(value);


value = 1;

while(value < 100)
{


  console.log(value)
value++
}