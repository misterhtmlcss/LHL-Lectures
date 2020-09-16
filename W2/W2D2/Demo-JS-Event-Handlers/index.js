const el = document.querySelector('button')
// named functions
const eventHandler = function () {
  console.log('event handled')
  // el.parentElement().append()
};


el.addEventListener('click', eventHandler);

// we can also remove event handlers using a similar API
document
  .querySelector('button')
  .removeEventListener('click', eventHandler);


// const clickHandler = function (event) {
//   console.log(event.clientX, event.clientY);
// };

// document
//   .querySelector('body')
//   .addEventListener('click', clickHandler);

// we can also remove event handlers using a similar API
// document
//   .querySelector('body')
//   .removeEventListener('click', clickHandler);