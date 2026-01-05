      //web responsive ai
    const disp=document.getElementById('disp');
    const klala=document.getElementById('klala')
          klala.addEventListener('click',function(){
        const input=document.createElement('input')
       input.type='text'
       input.id='txt'
           const button=document.createElement('button')
           button.textContent='Ask'
         const button2=document.createElement('button')  
         button2.textContent="Clear"

        const esc=document.createElement("button")
         esc.textContent='X'
         esc.className='esc'
        
         

       const disps=document.createElement('div');
       disps.className='disps'
       disps.appendChild(esc)
       disps.appendChild(input)
       disp.appendChild(disps)
       disps.appendChild(button)
        disps.appendChild(button2)

        esc.onclick=function(){
           location.reload();
        }
         
        button2.onclick=function(){
          input.value=''
        }

       button.onclick=function(){
         const  mess=input.value;
         
         if(mess){
           if(mess.includes('hello')){
             const span=document.createElement('span');
             span.textContent="Hello there how may i help you"
             span.className="mess2"
             const span2=document.createElement('span');
             span2.textContent="Hello there how may i help you"
            span2.className='mess'
             span2.textContent=`${mess}:~`
             disps.appendChild(span2)
             disps.appendChild(span)
           }
            
         }else{
          alert("input cannot be null")
         }
       }

    });
   //end of

   //toggle menu
   function togglemenu(){
     const menu=document.getElementById('menu');
     menu.classList.toggle('hidden')
   }
    
   document.addEventListener('click',function(event){
     const panel=document.getElementById("menu");
     const toggle=document.getElementById('menu-toggle');

     if(!panel.classList.contains('hidden')&&!panel.contains(event.target)&&!toggle.contains(event.target)){
      panel.classList.add('hidden')
     }
   })
   
  const prid= document.getElementById('pri')
  function priv(){
    alert('hello')
  }

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
         document.querySelector('.counter2').textContent=product.length
        
         
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
             
    const description=document.createElement('p')
    description.textContent=`Name:${p.name}__Type:${p.type}\t\t Description:${p.description}`
       div.appendChild(description)

   const para=document.createElement('p');
 div.appendChild(para);
    para.id='para'
      para.textContent=p.price

         const btn=document.createElement('button')
      btn.textContent='Order'
      btn.id='btn'
      div.appendChild(btn)

      
       btn.onclick=()=>{
               
            const prits=document.getElementById('price')
                   prits.textContent=p.price
        
       }
     
      
     
      
        });

  })



    
