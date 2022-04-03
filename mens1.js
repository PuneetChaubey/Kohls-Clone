var mens_data=[
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3910467_Bright_Blue?wid=240&hei=240&op_sharpen=1",sale_price:"$10.99",name:"Men's Sonoma Goods For Life® Supersoft Solid Crewneck Tee"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3583992_Signal_Blue?wid=600&hei=600&op_sharpen=1",sale_price:"$44.99",name:"Men's Nike Sportswear Club Fleece Pullover Hoodie"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4341799_Black_Black?wid=240&hei=240&op_sharpen=1",sale_price:"$19.99",name:"Men's Tek Gear® Open Bottom Tricot Pant"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4952247_ALT?wid=240&hei=240&op_sharpen=1",sale_price:"$17.99",name:"Men's Tek Gear® Ultra Soft Fleece Joggers"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4972082_ALT?wid=240&hei=240&op_sharpen=1",sale_price:"$17.99",name:"Men's Tek Gear® Ultra Soft Fleece Hoodie"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5178_Light_Blue?wid=240&hei=240&op_sharpen=1",sale_price:"$48.65",name:"Men's Levi's® 505™ Regular Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5190352_Black?wid=240&hei=240&op_sharpen=1",sale_price:"$21.00",name:"Men's Eddie Bauer Resolution Classic-Fit Performance Crewneck Tee"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5192044_Andorra_Red?wid=240&hei=240&op_sharpen=1",sale_price:"$45.50",name:"Men's Eddie Bauer Rainier Regular-Fit Performance ..."},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3979888_New_White?wid=96&hei=96&op_sharpen=1",sale_price:"$14.39",name:"Men's Croft & Barrow® Easy-Care Pique Polo in Regular and Slim Fit"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4632125_Black?wid=240&hei=240&op_sharpen=1",sale_price:"$15.00",name:"Men's Under Armour Tech Graphic Shorts"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3450298_ALT?wid=240&hei=240&op_sharpen=1",sale_price:"$19.99",name:"Men's Under Armour Tech Graphic Shorts"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/2310989_Afrobeat?w",sale_price:"$48.65",name:"Men's Levi's® 505™ Regular-Fit Stretch Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4471841?wid=240&hei=240&op_sharpen=1",sale_price:"$48.65",name:"Big & Tall Levi's® 559™ Relaxed Straight-Fit Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/1989834_Native_Cali?wid=96&hei=96&op_sharpen=1",sale_price:"$48.65",name:"Men's Levi's® 541™ Athletic Taper Stretch Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/424153_Rigid_Indigo?wid=96&hei=96&op_sharpen=1",sale_price:"$48.65",name:"Big & Tall Levi's® 501™ Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3597690_Studio_White?wid=240&hei=240&op_sharpen=1",sale_price:"$34.99",name:"Men's Apt. 9® Premier Flex Slim-Fit Spread-Collar Dress"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5172_Stonewash?wid=240&hei=240&op_sharpen=1",sale_price:"$48.65",name:"Men's Levi's® 550™ Relaxed-Fit Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5516162_Gray?wid=600&hei=600&op_sharpen=1",sale_price:"$23.99",name:"Men's Croft & Barrow Side-Elastic Cargo Shorts"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/2143062_Bastion?wid=240&hei=240&op_sharpen=1",sale_price:"$69.50",name:"Men's Levi's® 513™ Slim Straight Stretch Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/187242_Black?wid=240&hei=240&op_sharpen=1",sale_price:"$48.65",name:"Big & Tall Levi's® 505™ Regular Fit Jeans"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3910467_Bright_Blue?wid=240&hei=240&op_sharpen=1",sale_price:"$10.99",name:"Men's Sonoma Goods For Life® Supersoft Solid Crewneck Tee"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3996847_Gray_Chambray?wid=240&hei=240&op_sharpen=1",sale_price:"$34.99",name:"Men's Lee® Extreme Comfort Flat-Front Shorts"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/3260037_Silver_Lining?wid=240&hei=240&op_sharpen=1",sale_price:"$35.00",name:"Men's Grand Slam Off Course Expandable"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/5005424_Annie_Red?wid=240&hei=240&op_sharpen=1",sale_price:"$9.99",name:"Big & Tall Sonoma Goods For Life® Tee"},
    {img_url:"https://media.kohlsimg.com/is/image/kohls/4485528_ALT?wid=240&hei=240&op_sharpen=1",sale_price:"$24.99",name:"Men's adidas Designed 2 Move Shorts"},

]

window.addEventListener("load", function () {
    // displayData(appliedJobs);
    sort(mens_data)
  });
var sortby=document.querySelector("#sortby1")
sortby.addEventListener("change",mysort)
function rem(price1){
    sum1=""
    for(i=0;i<price1.length;i++){
        if(price1[i]=="$"){
            continue;
        }
        else{
sum1=sum1+price1[i]
        }

    }
    return sum1
}

function mysort(){
    var selected=sortby.value
    console.log(selected)
    if(selected=="Price-h-t-l"){
    mens_data.sort(function(a,b){
       
        
        return (rem(b.sale_price)-rem(a.sale_price))
    })
    sort(mens_data)
    }
    if(selected=="price-l-t-h"){
        mens_data.sort(function(a,b){
            return(rem(a.sale_price)-rem(b.sale_price))
        })
        sort(mens_data)
    }
//     if(selected=="few1"){
// sort(mens_data)
//     }
}

var sortby1=document.querySelector("#show")
sortby1.addEventListener("change",mysort1)
function mysort1(){
var selected1=sortby1.value
console.log(selected1)
if(selected1=="5"){
    var arr=[]
    for(i=0;i<selected1;i++){
arr.push(mens_data[i])
    }
    sort(arr)
}
if(selected1=="10"){
    var arr1=[]
    for(j=0;j<selected1;j++){
arr1.push(mens_data[j])
    }
    sort(arr1)
}
if(selected1=="15"){
    var arr2=[]
    for(k=0;k<selected1;k++){
arr2.push(mens_data[k])
    }
    sort(arr2)
}
}

var cartdata=JSON.parse(localStorage.getItem("cart"))||[]


// sort(mens_data)
function sort(mens_data){
    document.querySelector("#newone").innerHTML=""
mens_data.map(function(el){
  
var box=document.createElement("div")
document.querySelector("#newone").append(box)
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
var cart=document.createElement("button")
cart.innerText="Add to cart"
cart.addEventListener("click",addtocart)
function addtocart(){
    cart.style.backgroundColor="blue"
    storedata(el)
}
box.append(im,first,name,cart)

})
}
function storedata(el){
    console.log(el)
    cartdata.push(el)
    // window.location.href="cart.html" 
    console.log(cartdata)
    localStorage.setItem("cart",JSON.stringify(cartdata))
}

var t=document.querySelector("#cat")
    if(t.innerText=="+"){
        t.addEventListener("click",myfun)
    }
   function myfun(){
       console.log("hello")
       display("#catagory","Outter wear","Underwear(29)","Tops(50290","Bottoms(856)","Clothing Sets(1)","Dress Suits(10)","Outerwear(221)","Sleepwer(228)","Socks & Hosiery(19)","Swimsuits(47)")
       t.innerText="-"
       if( t.innerText=="-" ){
        t.addEventListener("click",function(){
document.querySelector("#catagory").innerHTML=""
t.innerText="+"
window.location.reload()
        })
       }
   }

var p=document.querySelector("#cat2")
    if(p.innerText=="+"){
        p.addEventListener("click",myfun1)
    }
   function myfun1(){
       console.log("hello")
       display("#catagory2","Big & Tall(3110)","Long(1)","Narrow(2)","Slim(6)","XLT(10)","2XLT(221)","Lt(228)","MT(19)","2X(47)",)
       p.innerText="-"
       if( p.innerText=="-" ){
        p.addEventListener("click",function(){
document.querySelector("#catagory2").innerHTML=""
p.innerText="+"
window.location.reload()
        })
       }
   }
var q=document.querySelector("#cat1")
    if(q.innerText=="+"){
        q.addEventListener("click",myfun2)
    }
   function myfun2(){
       console.log("hello")
       display("#catagory1","adidas(161)","Apt. 9(79)","ASICS(7)","Avengers(12)","Bespoke(2)","Caliville(5)","Champion(2)","caliville(5)","Cartoon Network(10)","Colosseum(26")
       q.innerText="-"
       if( q.innerText=="-" ){
        q.addEventListener("click",function(){
document.querySelector("#catagory1").innerHTML=""
q.innerText="+"
window.location.reload()
        })
       }
   }
var k=document.querySelector("#cat4")
    if(k.innerText=="+"){
        k.addEventListener("click",myfun4)
    }
   function myfun4(){
       console.log("hello")
       display("#catagory4","XS(161)","S(79)","M(7)","L(12)","XL(2)","2XL(5)","3XL(2)","4XL(5)","5XL(10)","6XL(26")
       k.innerText="-"
       if( k.innerText=="-" ){
        k.addEventListener("click",function(){
document.querySelector("#catagory4").innerHTML=""
k.innerText="+"
window.location.reload()
        })
       }
   }
var l=document.querySelector("#cat3")
    if(l.innerText=="+"){
        l.addEventListener("click",myfun3)
    }
   function myfun3(){
       console.log("hello")
       display("#catagory3","Classic(16825)","Extra Slim(3)","Fitted(22)","Loose(22)","Modern(103)","Loose(12)","Modern(103)","regular(939)","Relaxed(55)","Skinny(15")
       l.innerText="-"
       if( l.innerText=="-" ){
        l.addEventListener("click",function(){
document.querySelector("#catagory3").innerHTML=""
l.innerText="+"
window.location.reload()
        })
       }
   }
var h=document.querySelector("#cat5")
    if(h.innerText=="+"){
        h.addEventListener("click",myfun5)
    }
   function myfun5(){
       console.log("hello")
       display1("#catagory5","Long Sleeve(4714)","3/4 Sleeve(3)","Short Sleeve(13151)","Sleeveless(666)")
       h.innerText="-"
       if( h.innerText=="-" ){
        h.addEventListener("click",function(){
document.querySelector("#catagory5").innerHTML=""
h.innerText="+"
window.location.reload()
        })
       }
   }
   var r=document.querySelector("#cat6")
   if(r.innerText=="+"){
       r.addEventListener("click",myfun6)
   }
  function myfun6(){
      console.log("hello")
      display("#catagory6","Active(545)","Casual(17503)","Christmas(296)","Dress(99)","Halloween(937)","Formalwear(12)","Winter(165)","work & Safety(122)","Fathers Day(867)","Patriotic(72)")
      r.innerText="-"
      if( r.innerText=="-" ){
       r.addEventListener("click",function(){
document.querySelector("#catagory6").innerHTML=""
r.innerText="+"
window.location.reload()
       })
      }
  }
   var n=document.querySelector("#cat7")
   if(n.innerText=="+"){
       n.addEventListener("click",myfun7)
   }
  function myfun7(){
      console.log("hello")
      display("#catagory7","Beig(545)","Black(17503)","Blue(296)","Blue(99)","Brown(937)","Green(12)","Grey(165)","Orange(122)","Other clrs(867)","Pink(142)")
      n.innerText="-"
      if( n.innerText=="-" ){
       n.addEventListener("click",function(){
document.querySelector("#catagory7").innerHTML=""
n.innerText="+"
window.location.reload()
       })
      }
  }
   var s=document.querySelector("#cat8")
   if(s.innerText=="+"){
       s.addEventListener("click",myfun8)
   }
  function myfun8(){
      console.log("hello")
      display1("#catagory8","Under $10(28)","$10 to $25 (11102)","$25 to $50 (7819)","$50 to $100 (248)")
      s.innerText="-"
      if( s.innerText=="-" ){
       s.addEventListener("click",function(){
document.querySelector("#catagory8").innerHTML=""
s.innerText="+"
window.location.reload()
       })
      }
  }
    function display(m,a,b,c,d,e,f,g,h,i,j){
    var span1=document.createElement("span")
   var span2=document.createElement("span")
   var span3=document.createElement("span")
   var span4=document.createElement("span")
   var span6=document.createElement("span")
   var span7=document.createElement("span")
   var span9=document.createElement("span")
   var span8=document.createElement("span")
   var span10=document.createElement("span")
   var span11=document.createElement("span")
    
    span1.innerText=a
    span2.innerText=b
    span3.innerText=c
    span4.innerText=d
    span6.innerText=e
    span7.innerText=f
    span8.innerText=g
    span9.innerText=h
    span10.innerText=i
    span11.innerText=j

    var input1=document.createElement("input")
    var input2=document.createElement("input")
    var input3=document.createElement("input")
    var input4=document.createElement("input")
    var input6=document.createElement("input")
    var input7=document.createElement("input")
    var input8=document.createElement("input")
    var input9=document.createElement("input")
    var input10=document.createElement("input")
    var input11=document.createElement("input")
    input1.setAttribute("type","checkbox")
    input2.setAttribute("type","checkbox")
    input3.setAttribute("type","checkbox")
    input4.setAttribute("type","checkbox")
    input6.setAttribute("type","checkbox")
    input7.setAttribute("type","checkbox")
    input8.setAttribute("type","checkbox")
    input9.setAttribute("type","checkbox")
    input10.setAttribute("type","checkbox")
    input11.setAttribute("type","checkbox")
    
var div1=document.createElement("div")
var div2=document.createElement("div")
var div3=document.createElement("div")
var div4=document.createElement("div")
var div6=document.createElement("div")
var div7=document.createElement("div")
var div8=document.createElement("div")
var div9=document.createElement("div")
var div10=document.createElement("div")
var div11=document.createElement("div")

div1.append(input1,span1)
div2.append(input2,span2)
div3.append(input3,span3)
div4.append(input4,span4)
div6.append(input6,span6)
div7.append(input7,span7)
div8.append(input8,span8)
div9.append(input9,span9)
div10.append(input10,span10)
div11.append(input11,span11)

    document.querySelector(m).append(div1,div2,div3,div4,div6,div7,div8,div9,div10,div11)
   
}
    function display1(m,a,b,c,d){
    var span1=document.createElement("span")
   var span2=document.createElement("span")
   var span3=document.createElement("span")
   var span4=document.createElement("span")
  
    
    span1.innerText=a
    span2.innerText=b
    span3.innerText=c
    span4.innerText=d
    

    var input1=document.createElement("input")
    var input2=document.createElement("input")
    var input3=document.createElement("input")
    var input4=document.createElement("input")
    
    input1.setAttribute("type","checkbox")
    input2.setAttribute("type","checkbox")
    input3.setAttribute("type","checkbox")
    input4.setAttribute("type","checkbox")
   
    
var div1=document.createElement("div")
var div2=document.createElement("div")
var div3=document.createElement("div")
var div4=document.createElement("div")


div1.append(input1,span1)
div2.append(input2,span2)
div3.append(input3,span3)
div4.append(input4,span4)


    document.querySelector(m).append(div1,div2,div3,div4)
   
}

var s=document.querySelector("#backtotop")
s.addEventListener("click",totop)

function totop(){
    window.scroll(0,0)
}