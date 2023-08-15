// document.addEventListener('DOMContentLoaded' ,()=>{
// document.querySelector('form').onsubmit = () =>{
//   fetch('https://api.exchangerate.host/latest?base=USD').
//   then(response=> response.json()).
//   then(data=> {
//     const currency = document.querySelector('#currency').value.toUpperCase();
//     const rate = data.rates[currency];
//     if(rate !== undefined){
//     document.querySelector('#result').innerHTML =`1 USD is ${rate.toFixed(3)} ${currency}` ;  
//     }else{
//         document.querySelector('#result').innerHTML =`Invalid Currency` ;  
//     }
//   }).catch(
//     error => {
//       console.log("Errot :",error);
//     }
//   )

//   return false
// }
// });

document.addEventListener('DOMContentLoaded', ()=>{

    fetch('https://api.exchangerate.host/latest?base=USD')
    .then(response => response.json())
    .then(data=>{
        const rateObject = data.rates;
        for(const property in rateObject){
            //select
           const option= document.createElement('option');
           option.innerHTML = property ;
           document.querySelector('select').append(option)
            //console.log(`${property}: ${rateObject[property]}`);
        }
    })


    document.querySelector('form').onsubmit = () =>{
  fetch('https://api.exchangerate.host/latest?base=USD').
  then(response=> response.json()).
  then(data=> {
    const currency = document.querySelector('#currency').value.toUpperCase();
    const rate = data.rates[currency];
    if(rate !== undefined){
    document.querySelector('#result').innerHTML =`1 USD is ${rate.toFixed(3)} ${currency}` ;  
    }else{
        document.querySelector('#result').innerHTML =`Invalid Currency` ;  
    }
  }).catch(
    error => {
      console.log("Errot :",error);
    }
  )

  return false
}


})