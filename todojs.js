let toggleBtn = document.getElementsByClassName("fa-solid");

let blurr = document.getElementById('blur')
let showbox = document.getElementsByClassName("showbox")[0];
const task =[];
let another = document.getElementsByClassName('another')[0];
let defaultMessage =document.getElementById('dafaultMessage')
let itemCount=1;

let showbox4 = document.getElementsByClassName('showbox2')[0];
let showbox5 = document.getElementsByClassName('showbox3')[0];



function display(){

    if(showbox.style.display=="none"){
        showbox.style.display="block";
        blurr.classList.toggle('active');   

      
    }
    else{
        showbox.style.display="none";
      
}
}






function addTask(){
    
    const name = document.getElementById("inputbox").value;
    const tempObj ={
        id: Date.now(),
        taskname:name
    }
    task.push(tempObj);
    console.log(task);
    createCard();

    if(showbox.style.display=="block"){
        showbox.style.display="none";
        blurr.classList.remove('active'); 
    }
    defaultMessage.style.display="none";
  

}

function closebtn(){
    let closebtn = document.getElementById("close")
    if(showbox.style.display=="block"){
        showbox.style.display="none";
        blurr.classList.remove('active'); 
    }
  
}


function createCard(){

 let ele = document.createElement('div');
 ele.setAttribute('class','child');
 ele.id = itemCount++;
 let previous =document.getElementById('parent')
 previous.appendChild(ele);

 let title = task[task.length-1].taskname;

 

 
 ele.innerHTML=`<p onclick="expand(this)" class="cardTitle">${title}</p>
 <hr class="line">

<img class="trashimg" onclick='del(this)' id="1664721206029" src="./trash.png">
<img class="plusimg" onclick='getCard(event),showbox2()' src="./plus.png">`




}

function del(card){
    card.parentElement.remove();

}
let cardid =''
function getCard(event1){
    cardid= event1.target.parentElement.id;
    console.log("hello")
   
      

}

function addItem(){

    const name1 = document.getElementById("inputItem").value;
    let para = document.createElement('p');
    document.getElementById(cardid).appendChild(para);
    para.innerHTML=`<span>${name1}</span>
    <button onclick="strike(this)">Mark Done</button>
    `
    if(showbox4.style.display=="block"){
        showbox4.style.display="none";
        blurr.classList.remove('active'); 
    }
}

function showbox2(){
    
    if(showbox4.style.display=="none"){
        showbox4.style.display="block";
        blurr.classList.toggle('active');   

      
    }
    else{
        showbox4.style.display="none";
      

}

}

function strike(btn){
    btn.parentElement.classList.add('mark');
    btn.classList.add('hide')
}



function expand(card){
    let body = document.getElementsByTagName("body")[0]
    let hold =document.createElement("section")
    hold.innerHTML = body.innerHTML
    body.innerHTML = ``
    body.append(hold)
    let div = document.createElement("div")
    div.className = "popup"
    div.innerHTML = 
    `<header class="item_expand_header">
      <div class="expBack" onclick="expClose()">
        <i class="fa-solid fa-circle-chevron-left"></i>
        <span>Back</span>
      </div>
      <span id="itemExpTitleID" class="itemExpTitle">${card.innerText}</span>
      <div class="expAdd" onclick="popup1()">
        <i class="fa-solid fa-circle-plus"></i>
        <span>Add</span>
      </div>
    </header>
    <div class="content">
        <div id="itemDetail" class="item_Detail">
            ${card.parentElement.innerHTML}
        </div>
    </div>`
  body.append(div)

};

