//1.получаем текущее время
const time = document.querySelector('.time')
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime
    setTimeout(showTime, 1000);
    //обновление даты(рекурсивный setTimeout)
    showDate()
    //обновление функции по времени
    showGreeting()
}
showTime()

//получаем дату
function showDate() {
    const month = document.querySelector('.date')
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const currentDate = date.toLocaleDateString('en-En', options)
    month.textContent = currentDate
}



//2.получение приветствия по часам
//узнаем время суток
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) {
        return "Good Morning,"
    } else if (hours >= 12 && hours < 18) {
        return "Good Afternoon,"
    } else if (hours >= 18 && hours < 24) {
        return "Good Evening,"
    } else {
        return "Good Night,"
    }
}
//показываем приветствие
function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const timeOfDay = getTimeOfDay();
    greeting.textContent = timeOfDay
}


//ввести свое имя
const name = document.querySelector('.name')
//работа с local storage
//перед перезагрузкой или закрытием страницы сохранить данные
function setLocalStorage() {
    //метод сохрю данные в локалсторадж(имя значения, значение)
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

//перед загрузкой страницы воостановить и показать данные
function getLocalStorage() {
    //метод получ.данные их локалсторадж(имя. под которым сохраняется значение)
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)



//3.загрузка рандомных фото на фон
let randomNum
//получаем рандомное число от 1 до 20 включая и если меньще 10, то добавляем ноль
function getRandomNum() {
    let min = Math.ceil(1)
    let max = Math.floor(20)
    return Math.floor(Math.random() * (max - min + 1)) + min

}
randomNum = getRandomNum()
//получаем рандомное фото из гитхаб
let timeDay = ''

function setBg(bgNum) {
    if (bgNum < 10) {
        bgNum = ('0' + bgNum)
    }
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) {
        timeDay = 'morning'
    } else if (hours >= 12 && hours < 18) {
        timeDay = 'afternoon'
    } else if (hours >= 18 && hours < 24) {
        timeDay = 'evening'
    } else {
        timeDay = 'night'
    }
    let body = document.querySelector('.body')
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/alena636/stage1-tasks/assets/images/${timeDay}/${bgNum}.jpg')`
}
setBg(randomNum)


//переключатель фото вперед
function getSlideNext() {
    if (randomNum < 20) {
        randomNum = randomNum + 1
    }
    else {
        randomNum = 1
    }
    setBg(randomNum)
}
const slideNext = document.querySelector('.slide-next')
slideNext.addEventListener('click', getSlideNext)

//переключатель фото назад
function getSlidePrev() {
    if(randomNum > 1 ) {
        randomNum = randomNum -1
    } else {
        randomNum = 20
    }
    setBg(randomNum)
}
const slidePrev = document.querySelector('.slide-prev')
slidePrev.addEventListener('click', getSlidePrev)