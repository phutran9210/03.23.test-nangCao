



let mainComment = [
    'hay',
    'ko hay',
    'hay vl',
    'chán',
    'chán bình thường',
    'chán vl',
    'yêu',
    'ko yêu',
    'yêu bình thường'
];

let listComment =JSON.parse(localStorage.getItem('listComment'));
if (listComment===null) {
    listComment=[];
    for (let i=0;i<mainComment.length;i++){
        listComment.push(mainComment[i])
    }
    localStorage.setItem('listComment',JSON.stringify(listComment));
    renderProduct();
} else {
    localStorage.setItem('listComment',JSON.stringify(listComment));  
    renderProduct();
}
console.log(listComment);
function getKey1(){
    let result = listComment[0];
    document.getElementById('render').innerHTML = result;
    document.querySelector('.inputValue').value = result;
}function getKey2(){
    let result = listComment[1];
    document.getElementById('render').innerHTML = result;
   
}function getKey3(){
    let result = listComment[2];
    document.getElementById('render').innerHTML = result;
   
}function getKey4(){
    let result = listComment[3];
    document.getElementById('render').innerHTML = result;
    
}function getKey5(){
    let result = listComment[4];
    document.getElementById('render').innerHTML = result;
 
}function getKey6(){
    let result = listComment[5];
    document.getElementById('render').innerHTML = result;
  
}function getKey7(){
    let result = listComment[6];
    document.getElementById('render').innerHTML = result;
   
}function getKey8(){
    let result = listComment[7];
    document.getElementById('render').innerHTML = result;

}function getKey9(){
    let result = listComment[8];
    document.getElementById('render').innerHTML = result;
 
}function getKey10(){
    let result = listComment[9];
    document.getElementById('render').innerHTML = result;
    
}

 function inputComment(){
   var  inValue = document.querySelector('.inputValue').value;
    console.log(inValue);
    let result='';
    result+=`<div>${inValue}</div>`
    document.getElementById('render').innerHTML = result;
    
 }