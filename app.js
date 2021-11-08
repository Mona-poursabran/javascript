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

 

});