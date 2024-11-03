document.addEventListener("DOMContentLoaded", function() {
    // Показываем приветственный экран после прелоадера
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("welcome-screen").style.display = "flex";
    }, 3000);

    // Добавляем обработчик для кнопки "Начать"
    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", function() {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-content").style.display = "block";
            renderChart();
        });
    }
});

// Функция отрисовки круговой диаграммы
function renderChart() {
    const ctx = document.getElementById("circleChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Проекты", "Аудитория", "Показатели"],
            datasets: [{
                label: "Data",
                data: [30, 50, 20],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            animation: {
                animateScale: true
            }
        }
    });
}


window.onload = function () {
    // Показать синий блок при загрузке страницы
    document.getElementById("welcome-block").classList.add("visible");
}

function closeWelcomeBlock() {
    // Скрыть синий блок
    document.getElementById("welcome-block").classList.remove("visible");
    // Показать кнопку "Начать"
    document.getElementById("start-button").style.display = "block";
}
