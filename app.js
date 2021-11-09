$(document).ready(function(){

    function removeTaskFromLocalStorage(taskItem) {
        let tasks;
        console.log(taskItem)
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    
        tasks.forEach(function (task, index) {
            if (taskItem.textContent === task) {
                tasks.splice(index, 1);
            }
        });
    
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    // show list tasks which have been entered before:
    tasks = localStorage.tasks 
    if(localStorage.getItem('tasks') !== null){
        tasks = JSON.parse(tasks)
        $.each(tasks, function(i){
            let tagLi = $("<li class='list-group-item d-flex justify-content-between'></li>");
            let tagI = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>");
            console.log(i," ", tasks[i]);
            $('.list-group').append($(tagLi).append(tasks[i]).append(tagI));     
        });
        
        $('.list-group').click(function removeTask(e) {
            if (e.target.parentElement.classList.contains('list-group-item')) {
                if (confirm('Are You Sure?')) {
                    e.target.parentElement.remove();
                    removeTaskFromLocalStorage(e.target.parentElement); };};});
           };


  // onclick function=> Add tasks
    $('#task-form').on('submit', function(event){
        event.preventDefault();
        inputTask = $('#task').val().trim();
    
        if($.trim(inputTask)==''){
            // return null;
            alert('ابتدا تسک را وارد کرده و بعد دکمه اضافه را کلید کنید');
        }else{
           const tagLi = $("<li class='list-group-item d-flex justify-content-between'></li>");
           const tagI = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>");
           
           $('.list-group').append($(tagLi).append(inputTask).append(tagI));
        };
  
        $('.list-group').click(function removeTask(e) {
            if (e.target.parentElement.classList.contains('list-group-item')) {
                    e.target.parentElement.remove();
                    removeTaskFromLocalStorage(e.target.parentElement);};
          });
    
        
        //save tasks in localStorage:
        let tasks ;
        tasks = []
        if(localStorage.getItem('tasks') === null){
            tasks= [];
        }else{
            tasks =JSON.parse(localStorage.getItem('tasks'));
            
        }
        tasks.push(inputTask);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        
    });

    // onclick function => remove all tasks from the local storage :)
    const btnClear = $('.clear-tasks');
        $(btnClear).click(function(){
        if(confirm('آیا مطمئن هستید که میخواهید تمام تسکها پاک شود؟')){
            $('.list-group').empty();
           console.log(tasks)
           localStorage.removeItem('tasks')
        }
        });

});