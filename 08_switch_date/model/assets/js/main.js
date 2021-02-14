function getWeekDay(day) {
  switch (day) {
    case 0:
      return "Domingo";
    case 1:
      return "segunda-feira";
    case 2:
      return "terça-feira";
    case 3:
      return "quarta-feira";
    case 4:
      return "quinta-feira";
    case 5:
      return "sexta-feira";
    case 6:
      return "sábado";
    default:
      return "Dia inválido";
  }
}

function getFullMonth(month) {
  switch (month) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}

function getFormatHour(num) {
  return num >= 10 ? num : `0${num}`;
}

function getFormatedDate(date) {
  return `${getWeekDay(date.getDay())}, ${date.getDate()} de ${getFullMonth(date.getMonth())} de ${date.getFullYear()} ${getFormatHour(date.getHours())}:${getFormatHour(date.getMinutes())}`;
}

function setHtml(text) {
  const date = document.querySelector(".container h1");
  date.innerHTML = '';

  date.innerHTML = text;
}

const date = new Date();

const dateText = getFormatedDate(date);

setHtml(dateText);