(function onLoad() {
  document.getElementById("focus").focus();
})();

const listen = document.getElementById('container')
const show = document.querySelector('.btn-show')
const ul = document.querySelector('ul')
const add = document.querySelector('.btn-add')
const hide = document.querySelector('.btn-hide')
const input = document.querySelector('input')

// Event Listeners
listen.addEventListener('click', (e) => console.log(e))
//show.addEventListener('click', () => ul.style.display= "block")
hide.addEventListener('click', () => ul.style.display= "none")

add.addEventListener('click', () => {
  if(input.value === '') return
  const todoItem = input.value;
  ul.style.display= "block"
  const node = document.createElement('li')
  const text = document.createTextNode(todoItem)
  node.appendChild(text);
  document.getElementById("list").appendChild(node);
  input.value = '';
})