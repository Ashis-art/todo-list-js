let write = document.getElementById("write");
let todoList = document.getElementById("todo-list");

write.addEventListener(
    "keyup",(e) => {
        if(e.key == "Enter"){
            console.log(this.value);
        }
    }
)