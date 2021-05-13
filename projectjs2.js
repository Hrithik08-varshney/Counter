const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
const btn3=document.querySelector('#btn3');
const count=document.getElementById('count');
var value=0;
const Decrease=()=>{
    value=value-1;
    count.innerHTML=`${value}`;
    
    if(value>0){
        count.style.color="green";
    }else if(value<0){
        count.style.color="blue";
    }else{
        count.style.color="black"
    }
};
const Reset=()=>{
    value=0;
    count.innerHTML=`${value}`;
    if(value>0){
        count.style.color="green";
    }else if(value<0){
        count.style.color="blue";
    }else{
        count.style.color="black"
    }
} ;
const Increase=()=>{
    value=value+1;
    count.innerHTML=`${value}`;
    if(value>0){
        count.style.color="green";
    }else if(value<0){
        count.style.color="blue";
    }else{
        count.style.color="black"
    }
};

btn1.addEventListener('click',Decrease);
btn2.addEventListener('click',Reset);
btn3.addEventListener('click',Increase);
