function cardspace(){
    var carddigit = document.getElementById('cardno').value;
if(carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14){
    document.getElementById('cardno').value = carddigit+' ';
    document.getElementById('cardno').max = 1;
}
}

function addSlashes(){
    var expire_date = document.getElementById('validtill').value;
    if(expire_date.length == 2){
           document.getElementById('validtill').value = expire_date+'/';
           document.getElementById('validtill').max = 1;
}
}
let but=document.querySelector(".pay");
but.onhover=
but.onclick=()=>{
    // but.classList.add("dark");

    let a=alert("Payment Successfully Received");
    console.log(a);
}
