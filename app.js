document.getElementById("change").addEventListener("click",exchangeThem);
function exchangeThem(){
const xhr = new XMLHttpRequest();
xhr.open("GET","https://api.exchangerate.host/latest",true);

xhr.onload = function(){
    if(this.status){
        const response = JSON.parse(this.responseText);
        const rate = response.rates.TRY;
        console.log(rate);
        let euro = document.getElementById("amount").value;
        document.getElementById("tl").value = rate*euro;
    }
}
xhr.send();
}