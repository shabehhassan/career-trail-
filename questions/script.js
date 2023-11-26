const inputBox = document.getElementById('inp-box')
const list = document.getElementById('list')

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
    }
    inputBox.value = "";
}