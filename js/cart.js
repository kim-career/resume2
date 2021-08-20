window.onload=function(){
    img1.addEventListener("click",toBig1);
    img2.addEventListener("click",toBig2);
    img3.addEventListener("click",toBig3);
    glasses=document.querySelector("#glass img");


    join.addEventListener("click", popupJoin);
    login.addEventListener("click", popupLogin);

    closingLogin=document.querySelector(".closingLogin");
    closingLogin.addEventListener("click",closingFuncLogin);

    closingJoin=document.querySelector(".closingJoin");
    closingJoin.addEventListener("click", closingFuncJoin)
}

function toBig1(){
    glasses.src="../imgs/glass1_2.png";
}

function toBig2(){
    glasses.src="../imgs/glass1_1.png";   
}
function toBig3(){
    glasses.src="../imgs/glass1_0.png";
}
function closingFuncJoin(){
    popupJ.style.display="none";
}
function closingFuncLogin(){
    popupL.style.display="none";
}
function popupJoin(){
    popupJ.style.display="block";
}
function popupLogin(){
    popupL.style.display="block";
}
