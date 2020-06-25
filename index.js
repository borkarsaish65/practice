const child = document.querySelector('#child');
const parent = document.querySelector('#parent');
const grandparent = document.querySelector('#grandparent');



//event listener for child div
child.addEventListener('click',function(e){
    console.log(e);
    e.stopPropagation();
    console.log('child is clicked')
},false);


//event listener for parent div
parent.addEventListener('click',function(e){

    console.log('parent is clicked')
},false);



//event listener for grandparent div
grandparent.addEventListener('click',function(e){
    console.log(e);
    console.log('grandparent is clicked')
},false);
