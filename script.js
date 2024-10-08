container = document.getElementsByClassName('main')[0];
document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('click', event => {

        switch(event.target.innerHTML) {
            case "Daily":
                document.getElementById('listContainer').innerHTML = localStorage.getItem("daily");
              break;
            case "Weekly":
                document.getElementById('listContainer').innerHTML = localStorage.getItem("weekly");
              break;
            case "Achievements":
                document.getElementById('listContainer').innerHTML = localStorage.getItem("achievements");
                break;
            case "Instances":
                document.getElementById('listContainer').innerHTML = localStorage.getItem("instances");
                break;
            case "Collections":
                document.getElementById('listContainer').innerHTML = localStorage.getItem("collections");
                break;
          }

        title.innerHTML = event.target.innerHTML;
        for(i = 0; i < 5; i++) {
            tabs = document.getElementsByClassName('tab')[i];
            tabs.classList.remove("selected");
        }
        event.target.classList.add("selected");
        if(event.target.classList.contains('selected')){
            container.classList.remove('hidden');
            document.getElementsByClassName("containerTop")[0].classList.remove("hidden");
        }
        grabListElements();
    })
  })

listContainer = document.getElementById('listContainer');

function showButtons() {
    getContainer = document.getElementsByClassName('containerBot')[0];
    plusBtn = document.getElementsByClassName('showButtons')[0];
    if(plusBtn.classList.contains("fa-plus")) {
        getContainer.classList.remove('noDisplay');
        plusBtn.classList.remove("fa-plus")
        plusBtn.classList.add("fa-minus")
    } else {
        getContainer.classList.add('noDisplay');
        plusBtn.classList.add("fa-plus")
        plusBtn.classList.remove("fa-minus")
    }
}


function addCat() {
    let cat = prompt("Add Category");
if (cat == "" || cat == null) {
    alert("Did you forget to type something in? Or are you just wasting my time?")
} else {
    let header = document.createElement("h3");
    header.innerHTML = cat;
    listContainer.appendChild(header);
    header.classList.add("list");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    header.appendChild(span);
    span.classList.add("hide");
    grabListElements();
}
myfunc();
}


function addSubCat() {
    let subCat = prompt("Add Category");
if (subCat == "" || subCat == null) {
    alert("Did you forget to type something in? Or are you just wasting my time?")
} else {
    let header = document.createElement("h4");
    header.innerHTML = subCat;
    listContainer.appendChild(header);
    header.classList.add("list");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    header.appendChild(span);
    span.classList.add("hide");
    grabListElements();
}
myfunc();
}

function uncheckAll() {
    liElements = document.getElementsByTagName("li");
    for(x = 0; x < liElements.length; x++) {
        if(liElements[x].classList.contains("checked") === true)
            liElements[x].classList.remove("checked");
    }
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
    myfunc();
}



listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    myfunc();
}, false);


function getListElements(){
    var h3 = listContainer.getElementsByTagName("h3");
    for (let x = 0; x < h3.length; x++) {
        h3[x].onmousedown = pickItem;
        h3[x].onmouseover = moveItem;
    }
    var li = listContainer.getElementsByTagName("li");
    for (let x = 0; x < li.length; x++) {
        li[x].onmousedown = pickItem;
        li[x].onmouseover = moveItem;
    }
    var h4 = listContainer.getElementsByTagName("h4");
    for (let x = 0; x < h4.length; x++) {
        h4[x].onmousedown = pickItem;
        h4[x].onmouseover = moveItem;
    }
myfunc();
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





function saveDaily() {
    localStorage.setItem("daily", listContainer.innerHTML);
}

function showDaily(){
    listContainer.innerHTML = localStorage.getItem("daily");
}



function saveWeekly() {
    localStorage.setItem("weekly", listContainer.innerHTML);
}

function showWeekly() {
    listContainer.innerHTML = localStorage.getItem("weekly");
}



function saveAchievements() {
    localStorage.setItem("achievements", listContainer.innerHTML);
}

function showAchievements() {
    listContainer.innerHTML = localStorage.getItem("achievements");
}



function saveInstances() {
    localStorage.setItem("instances", listContainer.innerHTML);
}

function showInstances() {
    listContainer.innerHTML = localStorage.getItem("instances");
}



function saveCollections() {
    localStorage.setItem("collections", listContainer.innerHTML);
}

function showCollections() {
    listContainer.innerHTML = localStorage.getItem("collections");
}

title = document.getElementById('title');
function myfunc() {
    switch(title.innerHTML) {
        case "Daily":
            localStorage.setItem("daily", listContainer.innerHTML);
          break;
        case "Weekly":
            localStorage.setItem("weekly", listContainer.innerHTML);
          break;
        case "Achievements":
            localStorage.setItem("achievements", listContainer.innerHTML);
            break;
        case "Instances":
            localStorage.setItem("instances", listContainer.innerHTML);
            break;
        case "Collections":
            localStorage.setItem("collections", listContainer.innerHTML);
            break;
      }
}


setInterval(getTasks, 100)
function getTasks() {
    var tasks = document.getElementsByTagName('li');
    var taskAmount = document.getElementById("taskAmount");
    var checked = document.getElementsByClassName("checked");

    taskAmount.innerHTML = checked.length + " / " + tasks.length;
}
