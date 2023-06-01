console.log("Event Fired")
let watch = document.querySelector('.watch');
let audioArr=document.getElementsByTagName('audio');
const rotate = document.querySelector('.display')
let rotatedeg = 30;
 

watch.addEventListener('mouseenter',()=>{
    audioArr[0].play()
     
});




const car = ['https://www.frontendforever.com/uploads/assets/heat1-removebg-preview.png','images\\2.png','images\\3.png','images\\4.png','images\\5.png','images\\6.png','images\\7.png','images\\8.png','images\\9.png','images\\10.png','images\\11.png','images\\12.png','images\\13.png','images\\14.png','images\\15.png','images\\16.png','images\\17.png']
let currentimg=0;
const firstimg=0;
const lastimg=car.length;

const img = document.querySelector('#images');

img.addEventListener('click',function(){
    audioArr[0].play()
    

    rotatedeg=rotatedeg+30;
    rotate.style.transform=`rotateZ(${rotatedeg}deg)`;
    rotate.style.transition='.3s';

     currentimg++;
     if(currentimg>=lastimg){
        currentimg=0;
     }
     img.src = car[currentimg]
    
      
})