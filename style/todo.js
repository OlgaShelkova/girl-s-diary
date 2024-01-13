// Функция для добавления новой задачи
function addNewTask(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskElement(taskText);
        taskInput.value = '';
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
        } else {
            taskTextElement.style.textDecoration = 'none';
        }
    });

    // Добавляем текст к задаче
    taskTextElement.textContent = taskText;

    // Добавляем элементы к контейнеру задачи
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskTextElement);

    // Добавляем контейнер задачи в область задач
    taskArea.appendChild(taskContainer);
}
