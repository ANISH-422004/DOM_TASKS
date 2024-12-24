
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var btn = document.querySelector("button");


btn.addEventListener("click",function(){
     let img1src = img1.getAttribute("src");//It takes out the mentioned attribute's value in the H T M L tag
     let img2src = img2.getAttribute("src");
     img1.setAttribute("src",img2src);//It sets value in the mentioned attribute's value
     img2.setAttribute("src",img1src);
})
