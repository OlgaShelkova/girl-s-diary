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