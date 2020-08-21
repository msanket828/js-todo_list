// author: sanket
var ip = document.querySelector('#ip'),
  add = document.querySelector('#add'),
  btn = document.querySelector('.add_btn'),
  div = document.querySelector('.result');

var arr=[],obj,y=0;
add.addEventListener('submit', function (e) {
  e.preventDefault();
  if(ip.value!="") {
    obj=[ip.value]
    storeData(ip);
    //to clear the ip field after submit
    ip.value="";
  } else {
      alert("please fill the value");
    } 
})

function storeData(ip) {
  arr.push(obj);  
  displayData(arr);
}

function displayData(arr) {    
  var uL=document.createElement('ul');
  for(var x in arr[arr.length-1]) {
    //for li    
    var Li=document.createElement('li');
    Li.setAttribute('class','delFunc');
    Li.textContent=(arr[arr.length-1][x]);
    //appending whole li to ul
    uL.appendChild(Li);    
    //for del button    
    var newLi=document.createElement('li');   
    var btn=document.createElement('button');
    btn.setAttribute('class','delBtn');    
    //appending btn to li
    newLi.appendChild(btn);
    uL.appendChild(newLi);
  } 

  //appending for each element ul into div
  div.appendChild(uL);
  btn.addEventListener('click',deleteData);
}

function deleteData() {  
  grandParent=this.parentNode.parentNode.parentNode;
  grandParent.removeChild(this.parentNode.parentNode);
}