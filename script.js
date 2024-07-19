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




listContainer = document.getElementById('listContainer');

function addCat() {
    let cat = prompt("Add Category");
if (cat == "") {
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
}
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
    if (task == "") {
        alert("Did you forget to type something in? Or are you just wasting my time?")
    } else {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
}



listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);