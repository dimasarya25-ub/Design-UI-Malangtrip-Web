//animasi ganti background hero
const hero = document.getElementsByClassName("hero")[0];
const background = document.getElementById("hero_bg");
const bgImage = ["bgMalang1.jpg","R.jpg","bgMalang2.webp"];

let i =0;
function setBackground(){
    background.style.opacity ="0.5";
    setTimeout(()=>{
    background.style.backgroundImage = "url("+ bgImage[i] +")";
    background.style.opacity = "1";
    i++;
    if(i == bgImage.length){
      i=0;
    }
    },1000);
    
   
  }
setInterval(setBackground,5000);