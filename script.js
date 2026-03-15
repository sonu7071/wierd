function checkPin(){

let pin=document.getElementById("pin").value

if(pin.length==6){

document.getElementById("pinresult").innerHTML=
'<img src="showthisafterpincodeentered.png" height="20"> Delivery Available'

}else{

document.getElementById("pinresult").innerText="Invalid Pincode"

}

}


function buyNow(){

document.querySelector(".container").style.display="none"

document.getElementById("addressPage").style.display="block"

}


function showSummary(){

let name=document.getElementById("name").value
let address=document.getElementById("address").value
let city=document.getElementById("city").value
let state=document.getElementById("state").value
let pin=document.getElementById("pincode").value

let full=name+" , "+address+" , "+city+" , "+state+" - "+pin

document.getElementById("showAddress").innerText=full

document.getElementById("addressPage").style.display="none"

document.getElementById("summaryPage").style.display="block"

}


function payment(){

document.getElementById("summaryPage").style.display="none"

document.getElementById("paymentPage").style.display="block"

}


function confirmPayment(){

let id=document.getElementById("txnid").value

if(id==""){

alert("Enter Transaction ID")

return

}

document.getElementById("paymentPage").style.display="none"

document.getElementById("orderPage").style.display="block"

generateOrder()

}


function generateOrder(){

let num1=Math.floor(100+Math.random()*900)

let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let l1=letters[Math.floor(Math.random()*26)]
let l2=letters[Math.floor(Math.random()*26)]

let num2=Math.floor(100000+Math.random()*900000)

document.getElementById("orderid").innerText=
num1+l1+l2+num2

}
