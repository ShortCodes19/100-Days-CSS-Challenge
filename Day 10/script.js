var dateElement = document.querySelector(".date");

var currentDate = new Date();

var options = {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
};

var formmatedDate = currentDate.toLocaleDateString("en-US", options);

dateElement.innerText = formmatedDate;

var timeElement = document.querySelector(".time");

function updateTime() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var formmatedTime = hours + ":" + minutes + ":" + seconds;

  timeElement.innerText = formmatedTime;
}

updateTime();
setInterval(updateTime, 1000);
