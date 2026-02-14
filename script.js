const ideas = [
  "Сделай сайт с погодой через API",
  "Создай ToDo список с сохранением",
  "Сделай таймер Pomodoro",
  "Создай генератор мемов",
  "Сделай мини игру кликер",
  "Создай сайт случайных фактов",
  "Сделай генератор паролей",
  "Создай сайт заметок",
  "Сделай галерею изображений",
  "Создай калькулятор",
  "Сделай сайт рецептов",
  "Создай генератор ников",
  "Сделай сайт цитат",
  "Сделай трекер привычек",
  "Создай музыкальный плеер"
];

const btn = document.getElementById("btn");
const ideaText = document.getElementById("idea");

btn.onclick = function(){
  const randomIndex = Math.floor(Math.random() * ideas.length);
  ideaText.textContent = ideas[randomIndex];
}
