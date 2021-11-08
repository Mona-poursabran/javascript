$(document).ready(function(){

    // show list tasks which have been entered before:
    tasks = localStorage.tasks 
    if(tasks){
        tasks = JSON.parse(tasks)
        $.each(tasks, function(i, e){
            let tagLi = $("<li class='list-group-item d-flex justify-content-between'></li>");
            let tagI = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>");
            console.log(i," ", tasks[i]);
            $('.list-group').append($(tagLi).append(tasks[i]).append(tagI));     
        });

        iElement = $(".delete-item");  // TODO  i couldn't delete a task from the local storage :(
            if(iElement){
                $(iElement).click(function(){
                    $(this).parent().remove();
                    })};
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
           alert('تسک ذخیره شد  :)')
        };

        iElement = $(".delete-item");
        $(iElement).click(function(){
           $(this).parent().remove();
        })

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