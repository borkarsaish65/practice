const btn = document.querySelector('.button');

btn.addEventListener('drag',function(e){
    console.log(e);
    console.log('hi')
})


btn.addEventListener('focus',function(){
    console.log('bye')
    console.log(e);
    e.addEventListener("keyup", event => {
        console.log(event);
        // do something
      });
})

