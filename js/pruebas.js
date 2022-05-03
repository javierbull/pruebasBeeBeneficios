// "use strict";

$(document).ready(function() {

  const countdown = new Date("Jan 1, 2021");

  function getRemainingTime(endtime) {
    const milliseconds = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return {
      'total': milliseconds,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
    };
  }

  function initClock(id, endtime) {
    const counter = document.getElementById(id);
    const hoursItem = counter.querySelector('.js-countdown-hours');
    const minutesItem = counter.querySelector('.js-countdown-minutes');
    const secondsItem = counter.querySelector('.js-countdown-seconds');

    function updateClock() {
      const time = getRemainingTime(endtime);

      hoursItem.innerHTML = ('0' + time.hours).slice(-2);
      minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
      secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

      if (time.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  initClock('js-countdown', countdown);

});
