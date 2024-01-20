function getToday() {
    // Получаем текущую дату
    let today = new Date();
    // Проверяем, что объект Date был создан корректно
    if (isNaN(today)) {
        throw new Error("Ошибка при получении текущей даты");
    }
    // Получаем год
    let year = today.getFullYear();
    // Получаем месяц
    let month = (today.getMonth() + 1).toString().padStart(2, '0');  // Поскольку месяцы нумеруются с 0, добавляем 1
    let day = today.getDate().toString().padStart(2, '0');
    // Получаем день месяца
    let dayOfWeek = today.getDay();
     // Получаем день недели
    let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let dayOfWeekString = daysOfWeek[dayOfWeek];
// Выводим дату на страницу
   let dateDisplay = document.getElementById("dateDisplay");
   dateDisplay.textContent = `Сегодня: ${day}.${month}.${year}. ${dayOfWeekString}`;
}
    // Функция для добавления выбранной картинки в клетку
function addImage() {
    // Получаем выбранную картинку
    let selectedImage = document.querySelector("#image-list img.selected");
    // Проверяем, что выбрана какая-либо картинка
    if (selectedImage) {
        // Создаем новый элемент картинки
        let newImage = document.createElement("img");
        newImage.src = selectedImage.src;
        newImage.alt = selectedImage.alt;
        // Находим клетку для добавления картинки
        let imageCell = document.getElementById("image-grid");
        // Проверяем, что клетка существует
        if (imageCell) {
            // Добавляем картинку в клетку
            imageCell.appendChild(newImage);
        } else {
            console.error("Клетка для изображения не найдена");
        }
    } else {
        console.error("Картинка не выбрана");
    }
}
// Обработчик события для выбора картинки
let images = document.querySelectorAll("#image-list img");
images.forEach(function(image) {
    image.addEventListener("click", function() {
        // Удаляем класс "selected" у всех картинок
        images.forEach(function(img) {
            img.classList.remove("selected");
        });
        // Добавляем класс "selected" выбранной картинке
        this.classList.add("selected");
    });
})
//Добавляем функцию советы//
function toggleAdvice() {
    try {
        // Массив с советами
        const adviceList = [
            "Ты сильнее, чем ты думаешь, лучше, чем кажешься и умнее, чем думаешь.",
            "Ты заслуживаешь быть счастливым и здоровым, позволь себе добро.",
            "Сегодня тот день, когда ты сможешь добиться всего, о чем мечтаешь.",
            "Все будет хорошо, иногда нам просто нужно подождать и поверить.",
            "Не забывай, что каждое усилие приближает тебя к твоей цели.",
            "Ты можешь преодолеть все трудности, так как у тебя великая сила внутри.",
            "Здесь и сейчас сконцентрируйся на том, что в твоих силах.",
            "Не бойся ошибок, они ведут к росту и самосовершенствованию.",
            "Ты уникален и ценен, мир нуждается в твоей светлой энергии.",
            "Ты делаешь прогресс, и это замечательно. Продолжай двигаться вперед.",
            "Позволь себе быть начисто с самим собой, ты достоин любви и понимания.",
            "Лучшее впереди! Ты способен на большее, чем ты представляешь.",
            "Не умаляй своих достижений, ты сделал уже так много.",
            "Сфокусируйся на решениях, а не на проблемах - ты найдешь свой путь.",
            "Ты вдохновляешь других своим примером. Продолжай свою благородную миссию.",
            "Сегодняшний день - это возможность начать все заново и сделать его прекрасным.",
            "Помни, что каждый новый день открывает двери для новых возможностей.",
            "Твоя улыбка - твоя мощная сила. Иди вперед и дари ее всему миру.",
            "Твои мечты могут стать реальностью, работай на них, а не просто мечтай.",
            "Ты делаешь этот мир лучше, даже если это незаметно. Твое присутствие важно.",
        ];

        // Получаем случайный индекс из массива советов
        const adviceIndex = Math.floor(Math.random() * adviceList.length);

        // Получаем совет по случайному индексу
        const advice = adviceList[adviceIndex];

        // Обновляем текстовое содержимое элемента с id "advice" с полученным советом
        const adviceElement = document.getElementById("advice");
        if (adviceElement) {
            adviceElement.textContent = advice;
        } else {
            throw new Error("Элемент для отображения совета не найден");
        }
    } catch (error) {
        console.error('Произошла ошибка: ', error.message);
    }
}