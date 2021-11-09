
const form = document.getElementById('task-form')
form.addEventListener('submit', addTask);
function addTask(e){

    e.preventDefault();
    inputTask = document.getElementById('task');
    inputTask = inputTask.value.trim();
    if (inputTask == ''){
        alert('ابتدا تسک را وارد کرده و بعد دکمه اضافه را کلید کنید ');
        
    }
    else{
        const li = document.createElement('li')
              li.className = "list-group-item d-flex justify-content-between";

        const tagI = document.createElement('i')
              tagI.className = "fas fa-times text-danger mr-auto delete-item"

        const textNode = document.createTextNode(inputTask)
        li.appendChild(textNode)
        li.appendChild(tagI)

        ul = document.querySelector('.list-group');
        ul.appendChild(li);

    };

    // remove one by one
    iElement = document.querySelector('ul.list-group')
    iElement.addEventListener('click' ,function(e){
        if(e.target.className.search('delete-item') != -1){
            e.target.parentElement.remove(); 
        };
    });
  
}


btnClrear = document.querySelector('.clear-tasks')
btnClrear.addEventListener('click', function(e){
    e.preventDefault();
    if (confirm('Are you sure?')){
    lst = document.querySelector('.list-group')
    lst.innerHTML = '';}
})

