var cartdata=JSON.parse(localStorage.getItem("cart"))
cartdata.map(function(el){
  var main=document.querySelector("#newone")
  var box=document.createElement("div")
main.append(box)
var im=document.createElement("img")
im.src=el.img_url
var first=document.createElement("div")
var price1=document.createElement("div")
var one=document.createElement("span")
one.innerText="sale"

var two=document.createElement("span")
two.innerText=el.sale_price

price1.append(one,two)

// var price2=document.createElement("span")
first.append(price1)
// price2.innerText="regular"+el.regulat
var name=document.createElement("p")
name.innerText=el.name

box.append(im,first,name)

})