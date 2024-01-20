
function addNewTask(event) {
    event.preventDefault(); 

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskElement(taskText);
        taskInput.value = '';
    } else {
        alert('Вы не ввели дело в список');
    }
}

// Функция для создания элемента задачи
function createTaskElement(taskText) {
    const taskArea = document.querySelector('.taskArea');

    // Создаем элементы задачи
    const taskContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const taskTextElement = document.createElement('span');

    // Настраиваем чекбокс
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            taskTextElement.style.textDecoration = 'line-through';
            moveTaskToFinished(taskContainer);
        } else {
            taskTextElement.style.textDecoration = 'none';
        }
    });

    taskTextElement.textContent = taskText;
    taskTextElement.style.color = '#f14377';
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskTextElement);

    taskArea.appendChild(taskContainer);
}

// перемещение задачи в завершенные

function moveTaskToFinished(taskContainer) {
    const finishedTasksArea = document.querySelector('.finishedTasks .gif-container');
    finishedTasksArea.style.display = 'block'; 

    setTimeout(function () {
        finishedTasksArea.style.display = 'none'; 
        const taskText = taskContainer.querySelector('span').textContent;

        // Создаем элемент в завершенных
        const finishedTaskElement = document.createElement('div');
        finishedTaskElement.textContent = taskText;

        // Добавляем элемент в область завершенных задач
        finishedTasksArea.parentNode.insertBefore(finishedTaskElement, finishedTasksArea);
        
        // Удаляем задачу из области задач
        taskContainer.remove();

        const clearButton = document.getElementById('clearButton');
        clearButton.style.display = 'block';
    }, 1500);
}

// Обработчик для кнопки "Очистить"
document.getElementById('clearButton').addEventListener('click', function () {
    const finishedTasksArea = document.querySelector('.finishedTasks .gif-container');
    const clearButton = document.getElementById('clearButton');

    if (finishedTasksArea.parentNode.children.length > 1) {
        
        finishedTasksArea.parentNode.innerHTML = '';
    } else {
    
        finishedTasksArea.style.display = 'block';
        setTimeout(function () {
            finishedTasksArea.style.display = 'none'; 
        }, 2000);
    }

    clearButton.style.display = 'block';
});

//код для функции с советами
function toggleAdvice() {
    let boxAdvices = document.querySelector('.adviceContent');

    if (boxAdvices.style.visibility === 'hidden' || boxAdvices.style.visibility === '') {
        boxAdvices.style.visibility = 'visible';
        boxAdvices.style.opacity = '1';
    } else {
        boxAdvices.style.visibility = 'hidden';
        boxAdvices.style.opacity = '0';
    }
}