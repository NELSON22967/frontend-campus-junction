
fetch('http:/localhost:3010/api/store')
 .then(res=>res.json())
 .then(data=>{
    console.log(data)
 })










const text=document.querySelector('textarea');
const count=document.querySelector('.count')
const alert=document.querySelector('.alert')
text.addEventListener('input',handlechange)

function handlechange(e){
    const value=e.target.value;
   const num= value.split("").length;
   count.textContent=num

   if(num<=2){
    alert.textContent='Enter min 2'
   }else if(num===20){
    alert.textContent='maximum limit reached'
   }else{
    alert.textContent=''
   }
   return value;
}
const param=document.querySelector('.param')
 param.textContent=value