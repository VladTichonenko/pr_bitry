// script.js

function showTools() {
    const toolsInfo = document.getElementById("tools-info");
    toolsInfo.classList.add("active");
}

function closeTools() {
    const toolsInfo = document.getElementById("tools-info");
    toolsInfo.classList.remove("active");
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("subscriber-input");
    const tgOnlyCheckbox = document.getElementById("tg-only");
    const tiktokTgCheckbox = document.getElementById("tiktok-tg");
    const botsCheckbox = document.getElementById("with-bots");
    const warningMessage = document.getElementById("warning-message");

    // Обработчик для добавления 1000 при изменении значения
    inputField.addEventListener("input", function() {
        if (inputField.value % 1000 !== 0) {
            inputField.value = Math.round(inputField.value / 1000) * 1000;
        }
        checkMinimumSubscribers();
    });

    // Проверка на минимальное значение подписчиков
    function checkMinimumSubscribers() {
        if (parseInt(inputField.value) < 10000) {
            warningMessage.style.display = "block";
        } else {
            warningMessage.style.display = "none";
        }
    }

    // Обработчики для блокировки выбора опций
    tgOnlyCheckbox.addEventListener("change", function() {
        if (tgOnlyCheckbox.checked) {
            tiktokTgCheckbox.disabled = true;
        } else {
            tiktokTgCheckbox.disabled = false;
        }
    });

    tiktokTgCheckbox.addEventListener("change", function() {
        if (tiktokTgCheckbox.checked) {
            tgOnlyCheckbox.disabled = true;
        } else {
            tgOnlyCheckbox.disabled = false;
        }
    });

    // Функция для расчета стоимости
    function calculateCost() {
        const subscribers = parseInt(inputField.value);
        let costPer10k = 0;

        // Условие стоимости
        if (tgOnlyCheckbox.checked) {
            costPer10k = 60;
        } else if (tiktokTgCheckbox.checked) {
            costPer10k = 85;
        }

        // Уменьшение стоимости при наличии аудитории с ботами
        if (botsCheckbox.checked) {
            costPer10k -= 15;
        }

        // Итоговая стоимость
        const totalCost = Math.floor(subscribers / 10000) * costPer10k;
        alert(`Стоимость продвижения: ${totalCost}$\n - Свяжитесь с менеджером для точного определнния бюджета и подбора наилучшей стратегии`);
    }

    // Привязываем функцию расчета к кнопке
    window.calculateCost = calculateCost;
});


