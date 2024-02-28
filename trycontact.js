// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

let but=document.querySelector(".btn");
but.onclick=()=>{
  // but.classList.add("dark");
  let a=alert("The form is submitetd");
  console.log(a);
}

let btn=document.querySelector(".sub");



let currentMode="light";
btn.addEventListener("click",()=>{
  if(currentMode==="light"){
      currentMode="light";
      btn.classList.add("dark");
      btn.classList.remove("light");
      console.dir(btn.innerText);
      btn.innerText = "Subscirbed";  
  }
  else{
      currentMode==="dark";
      body.classList.add("light");
      body.classList.remove("dark");
  }

  }
);