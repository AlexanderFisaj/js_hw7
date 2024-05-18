/* Задание 1 (тайминг 125 минут)
1. Создание медиа плеера
2. Создать файл index.html
3. Создать папку img в которую загрузить изображение
кнопок play, pause
4. Скачать произвольное видео из интернета
5. Добавить Тег видео в html
6. Продумать внешний вид progress и volume
7. Продумать время проигрывателя
8. Реализовать функционал своего собственного видео-
плеера */

// Дооформить видеоплеер, дополнить элементами.

const containerEl = document.querySelector(".container");

const contentEl = document.createElement("div");
contentEl.classList.add("content");
containerEl.appendChild(contentEl);

const videoEl = document.createElement("video");
videoEl.src = "./video/chronos.mp4";
videoEl.setAttribute("onTimeUpdate", "progressUpdate()");
videoEl.classList.add("video");

const navigateEl = document.createElement("div");
navigateEl.classList.add("navigate");

const rangeEl = document.createElement("input");
rangeEl.classList.add("progress");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.value = 0;

const playEl = document.createElement("div");
const playIco = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>`;
playEl.innerHTML = playIco;
playEl.classList.add("play");

const pauseEl = document.createElement("div");
const pauseIco = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>`;
pauseEl.innerHTML = pauseIco;
pauseEl.classList.add("pause");

const stopEl = document.createElement("div");
const stopIco = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>`;
stopEl.innerHTML = stopIco;
stopEl.classList.add("stop");

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.value = 0;

playEl.addEventListener("click", (e) => {
  videoEl.play();
});
pauseEl.addEventListener("click", (e) => {
  videoEl.pause();
});
stopEl.addEventListener("click", (e) => {
  videoEl.pause();
  videoEl.currentTime = 0;
});
videoEl.addEventListener("click", (e) => {
  alert(
    "Для управления воспроизведением видео\n предусмотрены кнопки под видео."
  );
});

const durationBar = document.createElement("div");
durationBar.classList.add("durationBar");
const positionBar = document.createElement("div");
positionBar.classList.add("positionBar");
const displayStatus = document.createElement("span");
durationBar.appendChild(positionBar);
positionBar.appendChild(displayStatus);

function progressUpdate() {
  positionBar.style.width =
    (videoEl.currentTime / videoEl.duration) * 100 + "%";
  displayStatus.innerHTML =
    Math.round(videoEl.currentTime * 100) / 100 + " сек";
}

rangeEl.addEventListener("change", (e) => {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});
videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.value = Math.round((videoEl.currentTime / videoEl.duration) * 100);
});

videoEl.addEventListener("loadeddata", (e) => {
  volumeEl.value = videoEl.volume * 100;
});
volumeEl.addEventListener("input", (e) => {
  videoEl.volume = e.target.value / 100;
});

contentEl.appendChild(videoEl);
contentEl.appendChild(rangeEl);
contentEl.appendChild(durationBar);
contentEl.appendChild(navigateEl);
navigateEl.appendChild(playEl);
navigateEl.appendChild(pauseEl);
navigateEl.appendChild(stopEl);
navigateEl.appendChild(volumeEl);
