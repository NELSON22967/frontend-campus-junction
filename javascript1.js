 const form1= document.getElementById("form1");
    form1.addEventListener('submit',function (event){
        event.preventDefault();
        const productsdisplay=document.getElementById('productsdisplay');
         const dinput=document.getElementById('dinput');
        const productname=document.getElementById('productname').value;
        const newprice=document.getElementById('newprice').value;
        const oldprice=document.getElementById('oldprice').value;
        const description=document.getElementById('description').value;
     
        const descripter={dinput,productname,newprice,oldprice,description};
       console.log(descripter)
       console.log(descripter['newprice'])
        
        const imagedisplay=document.createElement("img")
      const para=document.createElement('p');
       productsdisplay.appendChild(para)
        para.appendChild(imagedisplay)
       para.className='p1'
    const price=descripter['newprice']
        
      
         const span=document.createElement('span');
         span.textContent=`KSH${price}`
         para.appendChild(span)
         span.className='span1'

         
      
         const files=dinput.files;
        for(i=0;i<files.length;i++){
        const file=files[i];
          
      imagedisplay.controls=true;
      imagedisplay.width='400'
      imagedisplay.className='imagedisplay'
     
       
            imagedisplay.src=URL.createObjectURL(file)
        }
    
         const view=document.createElement('button');
          view.textContent="View"
          view.onclick=function(){ window.location.href='product.html'}
           
          
          view.className='button2'
          para.appendChild(view)
     
     form1.reset();
     
      })  
 
   
       dinput.addEventListener("change",function (){
        const files=dinputs.files;
        for(i=0;i<files.length;i++){
        const file=files[i];
           const imagedisplay=document.createElement("img")
      imagedisplay.controls=true;
      imagedisplay.width='400'
      productsdisplay.appendChild(imagedisplay)
       
            imagedisplay.src=URL.createObjectURL(file)
        }
     })