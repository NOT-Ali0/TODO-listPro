const parent = document.querySelector("ul");
const input = document.querySelector("input");
let todoListItems = [{
    id:1,
    title:"Pizza",
    isChecked:true,
},
{
    id:2,
    title:"Coffe",
    isChecked:false,
},
{
    id:3,
    title:"Pepsi",
    isChecked:false,
}
];

let todoListState = "";


const resetinputValue = () =>{

    todoListState = "";
    input.value ="";
}
const reRender = () =>{

    // removing
    parent.innerHTML= "";



    // adding items
    todoListItems.forEach(item => {

    addNewTodoItem(item.title,item.isChecked,item.id);
    
})
}
// remove element
const removeItem = (id) => {
    todoListItems = todoListItems.filter(item => item.id  != id);
    reRender();
    
}

// listen on input changes
input.addEventListener("input", (ev) =>{

    todoListState =ev.target.value;
});

// listen for enter
input.addEventListener("keypress", (ev) =>{

    if (ev.key == "Enter"){

        addNewTodoItem(todoListState , isChecked = false);

        resetinputValue();
    }

});




// reset the state 

const addNewTodoItem = (title,isChecked,id) =>{

    const li = document.createElement("li");

    li.innerHTML = `
                <li class="group cursor-pointer p-2 rounded-lg hover:bg-gray-200  duration-200 ease-in bg-gray-100 mt-1 flex items-center gap-2 ">
                <div onclick="removeItem('${id}')" class="w-0 overflow-hidden group-hover:w-5  rounded-lg duration-200 ease-in ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser-icon lucide-eraser text-red-400"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></svg>
                </div>

                
                <span class="flex-1 ${isChecked ? "line-through text-gray-400" : ""
                }">${title}</span>
                
                <div class="${isChecked ? " bg-green-400" : "bg-gray-200"} p-1 rounded-full border border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="${isChecked ? "text-white" : "text-gray-500"} lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                </li>
    

    `

    parent.appendChild(li);

    
}
reRender();
