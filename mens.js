var m=document.querySelectorAll("button")
for(i=0;i<m.length;i++){
    var a=m[i]
    m[i].addEventListener("click",function(){
        window.location.href="mens1.html"
    })
}
var x=document.querySelectorAll(".tomen")

for(j=0;j<x.length;j++){
    x[j].addEventListener("click",my)
    function my(){
        console.log(x[j])
        window.location.href="mens1.html"  
    }
}

var s=document.querySelector("#backtotop")
s.addEventListener("click",totop)

function totop(){
    window.scroll(0,0)
}
