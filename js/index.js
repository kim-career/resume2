let no=0;

window.onload=function(){
    img1.addEventListener("click",toBig1);
    img2.addEventListener("click",toBig2);
    img3.addEventListener("click",toBig3);
    glasses=document.querySelector("#glass img");

    lBtn.addEventListener("click", LBTN);
    rBtn.addEventListener("click", RBTN);
}

function toBig1(){
    glasses.src="./imgs/glass1_2.png";
}

function toBig2(){
    glasses.src="./imgs/glass1_1.png";   
}
function toBig3(){
    glasses.src="./imgs/glass1_0.png";
}

function LBTN(){
    if(no<2){
        no++;
    }
    else{
        no=0;
    }
    glasses.src="./imgs/glass1_"+no+".png";
}
function RBTN(){
    if(no==0){
        no=2;
    }
    else{
        no--;
    }
    //0부터 시작
    //0이면 2로감
    //2이면 1로감
    //1이면 0로감
    //0->2->1->0
    glasses.src="./imgs/glass1_"+no+".png";
}