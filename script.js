console.log("Event Fired")
let watch = document.querySelector('.watch');
let audioArr=document.getElementsByTagName('audio');
console.log(audioArr);
watch.addEventListener('mouseenter',()=>{
    audioArr[0].play()
});

const img = document.getElementById('images');

let toggle = true;

const car = ['https://www.frontendforever.com/uploads/assets/heat1-removebg-preview.png','images\\2.png','images\\3.png','images\\4.png','images\\5.png','images\\6.png','images\\7.png','images\\8.png','images\\9.png','images\\10.png','images\\11.png']
img.addEventListener('click',function(){
    audioArr[0].play()
   
    toggle=!toggle;
    
    if(toggle){
        img.src = car[0]
    }else
    {
        img.src = car[1]  
    }  
     
})