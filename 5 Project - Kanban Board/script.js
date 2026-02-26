const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

const tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
        console.log("dragging", e);
        dragElement = task;
    })
})
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
    })
}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);


// const todo = document.querySelector("#todo");
// const progress = document.querySelector("#progress");
// const done = document.querySelector("#done");

// let dragElement = null;

// const tasks = document.querySelectorAll(".task");

// tasks.forEach((task) => {
//     task.addEventListener("dragstart", () => {
//         dragElement = task;
//         task.classList.add("dragging");
//     });

//     task.addEventListener("dragend", () => {
//         dragElement = null;
//         task.classList.remove("dragging");
//     });
// });

// const addDragEventsOnColumn = (column) => {

//     column.addEventListener("dragover", (e) => {
//         e.preventDefault(); // MUST HAVE
//     });

//     column.addEventListener("dragenter", () => {
//         column.classList.add("hover-over");
//     });

//     column.addEventListener("dragleave", () => {
//         column.classList.remove("hover-over");
//     });

//     column.addEventListener("drop", (e) => {
//         e.preventDefault();

//         if (dragElement) {
//             column.appendChild(dragElement);
//         }

//         column.classList.remove("hover-over");
//     });
// };

// addDragEventsOnColumn(todo);
// addDragEventsOnColumn(progress);
// addDragEventsOnColumn(done);