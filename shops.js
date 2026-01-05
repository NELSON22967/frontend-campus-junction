 const display=document.querySelector('.display')



 let names;
 let type;
 let  price;
  



     

fetch('http://localhost:3000/api/pays')
  .then(res=>res.json())
  .then(data=>{
   
       console.log(data)
   
        
      
        const product=data.products;
        
         console.log(product)
        
         
        product.forEach(p=> {
          console.log(p)

           //display products
           const div=document.createElement('div')
       div.id='division'
           display.appendChild(div)  
          

           const img=document.createElement('img')
            div.appendChild(img)
              img.id='img'
             
              img.src='house2.jpeg'
              img.alt='API failure'
              img.onclick=()=>{
            console.log(p.type)
           console.log(p.name)
           console.log(p.price)
           console.log(p.link)
              }
             
  
       

   const para=document.createElement('p');
 div.appendChild(para);
    para.id='para'
      para.textContent=p.price

         const btn=document.createElement('button')
      btn.textContent='Order'
      btn.id='btn'
      div.appendChild(btn)

      
       btn.onclick=()=>{
               togglemenu()
            const prits=document.getElementById('price')
                   prits.textContent=p.price
        
       }
     
      
     
      
        });

  })



    
 function togglemenu(){
           const menu=document.getElementById('menut')
           menu.classList.toggle('hidden');
        
        
           
         
       }
      
       const close=document.querySelector('.close')
       close.onclick=()=>{
           const menu=document.getElementById('menut')
           menu.classList.toggle('hidden')
         
       }