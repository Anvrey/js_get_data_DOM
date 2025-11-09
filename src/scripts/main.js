'use strict';

const elements = [...document.querySelectorAll('.population')].map((a) =>
  Number(a.textContent.split(',').join('')),
); // eslint-disable-line

const total = elements.reduce((a, b) => a + b);
const avrg = Math.round(total / elements.length);
const finishTotal = total.toLocaleString('en-US');
const finishAvrg = avrg.toLocaleString('en-US');
const totalHtml = document.querySelector('.total-population');
const avrgHtml = document.querySelector('.average-population');

totalHtml.replaceWith(finishTotal);
avrgHtml.replaceWith(finishAvrg);
