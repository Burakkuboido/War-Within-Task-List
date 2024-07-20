container = document.getElementsByClassName('container')[0];
document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('click', event => {
        title.innerHTML = event.target.innerHTML;


        for(i = 0; i < 5; i++) {
            tabs = document.getElementsByClassName('tab')[i];
            tabs.classList.remove("selected");
        }
        event.target.classList.add("selected");
        if(event.target.classList.contains('selected')){
            container.classList.remove('hidden');
        }
    })
  })
showTask();
grabListElements();


listContainer = document.getElementById('listContainer');

function addCat() {
    let cat = prompt("Add Category");
if (cat == "" || cat == null) {
    alert("Did you forget to type something in? Or are you just wasting my time?")
} else {
    let header = document.createElement("h5");
    header.innerHTML = cat;
    listContainer.appendChild(header);
    header.classList.add("list");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    header.appendChild(span);
    span.classList.add("hide");
    grabListElements();
}
saveData();
}

function grabListElements() {
    list = document.querySelectorAll('.list');
    document.querySelectorAll('.list').forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.target.querySelector('span').classList.remove('hide')
        })
    })
    document.querySelectorAll('.list').forEach(item => {
        item.addEventListener('mouseleave', (event) => {
            event.target.querySelector('span').classList.add('hide')
        })
    })    
}



function addTask() {
    let task = prompt("Add Task");
    if (task == "" || task == null) {
        alert("Did you forget to type something in? Or are you just wasting my time?")
    } else {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    saveData();
}



listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);


function getListElements(){
    var h5 = listContainer.getElementsByTagName("h5");
    for (let x = 0; x < h5.length; x++) {
        h5[x].onmousedown = pickItem;
        h5[x].onmouseover = moveItem;
    }
    var li = listContainer.getElementsByTagName("li");
    for (let x = 0; x < li.length; x++) {
        li[x].onmousedown = pickItem;
        li[x].onmouseover = moveItem;
}
    saveData();
}


setInterval(getListElements, 1000);
//// Get the list items inside of the dragable list

//// Item to move
var pick;
//// Where to drop item
var target;
//// Save CSS style of picked up item
var lastStyle;
// END VARIABLES //

// Add an event listener to each item in the draggableList


// Moves the item
function moveItem () {
  target = this
  target.location = event.clientY;
  if(pick)
    if(pick.location > target.location) // Insert before if moving up
      target.parentNode.insertBefore(pick, target)
    else  // Insert after if moving down
      target.parentNode.insertBefore(pick, target.nextSibling)
}
 
// Selects the item to move
function pickItem () {
  pick = this;
  lastStyle = pick.style;
  // Used to see if moving up or down the list
  pick.location = event.clientY;  
  
  // Stop text from being selected when dragging
  document.body.classList.add("noSelect");
  this.style.backgroundColor = "rgb(37, 37, 37)";
  
  // Adds an event to the DOM when an item is picked up
  document.onmouseup = dropItem;
}

// Places the item and clears the pick and event listeners
function dropItem () {
  pick.style = lastStyle;
  pick = '';
  document.body.classList.remove("noSelect");
  document.removeEventListener("onmouseup", dropItem)
}





function saveData() {
    localStorage.setItem("daily", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("daily");
}