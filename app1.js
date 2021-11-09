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
        // $.each(tasks, function(task, index){
        //     if (taskItem.textContent === task){
        //         tasks.splice(index, 1);
        //     };
        // });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    function storeTaskInLocalStorage(task) {
        let tasks;
    
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    
        tasks.push(task);
    
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTask(){
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        $.each(tasks, function(task){
            let tagLi = $("<li class='list-group-item d-flex justify-content-between'></li>");
            let tagI = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>");
            $('.list-group').append($(tagLi).append(tasks[task]).append(tagI));
        });
};   
getTask();

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
    storeTaskInLocalStorage(inputTask)
})

$('.list-group').click(function(e){
    if (e.target.parentElement.classList.contains('list-group-item')) {
        e.target.parentElement.remove();
        removeTaskFromLocalStorage(e.target.parentElement);};
})

const btnClear = $('.clear-tasks');
$(btnClear).click(function(){
if(confirm('آیا مطمئن هستید که میخواهید تمام تسکها پاک شود؟')){
    $('.list-group').empty();
   console.log(localStorage.tasks)
   localStorage.removeItem('tasks')
}
});
})







