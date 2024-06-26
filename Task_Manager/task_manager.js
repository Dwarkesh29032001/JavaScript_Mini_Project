const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeSound = document.getElementById("complete-sound"); // Reference to the audio element

function addTask(){
    if(inputBox.value === ''){
        alert("You have to add Task here !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);


    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            completeSound.play(); // Play sound if task is marked as completed
        }
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();