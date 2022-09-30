// function showMessage() {
//     alert('Нажали на кнопку')
// }



// let div = document.querySelector('#click');
// div.onclick = showMessage;




// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');

// let addBtn = document.querySelector('#add-btn');
// let remBtn = document.querySelector('#rem-btn');
// let mulBtn = document.querySelector('#mul-btn');
// let divBtn = document.querySelector('#div-btn');

// addBtn.onclick = add;
// remBtn.onclick = rem;
// mulBtn.onclick = mul;
// divBtn.onclick = div;

// function add() {
//     alert(Number(input1.value) + Number(input2.value));
// }
// function rem() {
//     alert(input1.value - input2.value);
// }
// function mul() {
//     alert(input1.value * input2.value);
// }
// function div() {
//     alert(input1.value / input2.value);
// }




// let btn = document.querySelector('#btn');
// btn.addEventListener('click' , function() {
//     alert('Нажали на кнопку')
// })




// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');

// let addBtn = document.querySelector('#add-btn');
// let remBtn = document.querySelector('#rem-btn');
// let mulBtn = document.querySelector('#mul-btn');
// let divBtn = document.querySelector('#div-btn');

// addBtn.addEventListener('click' , function() {
//     alert(Number(input1.value) + Number(input2.value));
// })
// remBtn.addEventListener('click' , function () {
//     alert(input1.value - input2.value);
// })

// mulBtn.addEventListener('click' , function () {
//     alert(input1.value * input2.value);
// })
// divBtn.addEventListener('click' , function () {
//     alert(input1.value / input2.value);
// })




// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');

// function handler1() {
//     alert('Handler 1')
// }

// function handler2() {
//     alert('Handler 2')
// }

// btn1.onclick = handler1;
// btn1.onclick = handler2;

// btn2.addEventListener('click' , handler1);
// btn2.addEventListener('click' , handler2);




// let testBtn = document.querySelector('#testBtn');
// let removeBtn = document.querySelector('#remove');

// function handler() {
//     alert('Обработчик события')
// }

// testBtn.addEventListener('click' , handler);

// removeBtn.addEventListener('click' , function() {
//     testBtn.removeEventListener('click' ,handler)
// })



// let taskNameInput = document.querySelector('#task-name-input') ;
// let addTuskButton = document.querySelector('#add-task-btn') ;
// let taskList = document.querySelector('.task-list'); 

// addTuskButton.addEventListener('click' , addTuskHandler);

// function createTask(text) {
//     let div = document.createElement('div');
//     div.classList.add('task');

//     let input = document.createElement('input');
//     input.type = 'checkbox';

//     let p = document.createElement('p');
//     p.innerHTML = text;

//     div.append(input);
//     div.append(p);

//     return div;
// }

// function addTuskHandler() {
//     let newTask = createTask(taskNameInput.value);
//     taskList.append(newTask);
//     alert('task added');
// }




// let buttons = document.querySelectorAll('button');

// buttons.forEach( btn => {
//     btn.addEventListener('click' , clickHandler)
// })
// function clickHandler() {
//     alert(this.textContent)
// }




let taskNameInput = document.querySelector('#task-name-input'); 
let addBtn = document.querySelector('#add-task-btn'); 
let startMessage = document.querySelector('#start-message'); 
let taskList = document.querySelector('.task-list'); 

addBtn.addEventListener('click' , addTaskHandler);

function createTask(text) {
    let div = document.createElement('div');
    div.classList.add('task');

    let input = document.createElement('input');
    input.addEventListener('click' , changeTaskState);
    input.type = 'checkbox';

    let p = document.createElement('p');
    p.innerHTML = text;

    div.append(input);
    div.append(p);

    return div;
}

function changeTaskState() {
    if(this.checked) {
        this.parentElement.classList.add('completed')
    }else{
        this.parentElement.classList.remove('completed');
    }
}

function addTaskHandler() {
    if(taskNameInput.value) {
        if(!startMessage.hidden) 
        startMessage.hidden = true;

        let newTask = createTask(taskNameInput.value);
        taskList.append(newTask);
        taskNameInput.value = '';
    } else {
        alert('Введите имя задачи')
    }
}