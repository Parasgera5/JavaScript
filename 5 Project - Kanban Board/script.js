let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

const columns = [todo, progress, done];

const addTask = (title, desc, column) => {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `;
    column.appendChild(div);
    div.addEventListener("drag", (e) => {
        dragElement = div;
    })
    
    const deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    })

    return div;
}

const updateTaskCount = () => {
    columns.forEach((col) => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(tasksData));
        console.log(tasksData);
        count.innerText = tasks.length;
    })
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    console.log(data);
    for (const col in data) {
        // console.log(col, data[col]);
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        })
    }
    updateTaskCount();
}

// progress.addEventListener("dragenter", (e) => {
//     progress.classList.add("hover-over");
// })
// progress.addEventListener("dragleave", (e) => {
//     progress.classList.remove("hover-over");
// })
// todo.addEventListener("dragenter", (e) => {
//     todo.classList.add("hover-over");
// })
// todo.addEventListener("dragleave", (e) => {
//     todo.classList.remove("hover-over");
// })
// done.addEventListener("dragenter", (e) => {
//     done.classList.add("hover-over");
// })
// done.addEventListener("dragleave", (e) => {
//     done.classList.remove("hover-over");
// })

const addDragEventsOnColumn = (column) => {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // as by default html browser won't allow to drop element to drop on any other element. we have to do this prevent default here.
    });
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log("dropped", dragElement, column);
        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        updateTaskCount();

    })
}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// model related logic
const toggleModelButton = document.querySelector("#toggle-model");
const modelbg = document.querySelector(".model .bg");
const model = document.querySelector(".model");
const addTaskButton = document.querySelector("#add-new-task");

toggleModelButton.addEventListener("click", () => {
    model.classList.toggle("active");
})
modelbg.addEventListener("click", () => {
    model.classList.remove("active");
})

addTaskButton.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector("#task-desc-input").value;

    addTask(taskTitle, taskDesc, todo);
    updateTaskCount();
    model.classList.remove("active");
    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
})

// model related logic
