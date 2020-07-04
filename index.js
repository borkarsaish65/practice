let counter = 0;

const getDate = () =>{
//calls api and gets data

console.log('fetching data...',counter++)
}

const dosomemagic = (fn,delay)=>{

  return function () {
setTimeout(() => {
  getDate();
}, delay);



  }

}






const betterfunction = dosomemagic(getDate,300);

