// function imgSlider(anything){
//     document.querySelector('.starbucks').src = anything;
//   }


// let but=document.querySelector(".clickme");
// let body=document.querySelector("body");
// let currentMode="light";
// but.addEventListener("click",()=>{
//     if(currentMode==="light"){
//         currentMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currentMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
  }


let but=document.querySelector(".clickme");
let body=document.querySelector("body");
let currentMode="light";
but.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        var btn=document.getElementById("btn");
        btn.classList.add("btn-dark");
        btn.classList.remove("btn-light");
    }
    else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        var btn=document.getElementById("btn");
        btn.classList.add("btn-light");
        btn.classList.remove("btn-dark");
    }
});
