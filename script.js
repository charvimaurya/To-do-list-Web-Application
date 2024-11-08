const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7 ';
        li.appendChild(span);
    }
    
    inputBox.value ="";
    saveData();
}

//click function

    document.addEventListener("click", function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);


//save datafunction - local storage set item when add a task, save data will be called
function saveData(){
localStorage.setItem("data", listContainer.innerHTML);

}

//showtask when data on website is opened get item
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
//