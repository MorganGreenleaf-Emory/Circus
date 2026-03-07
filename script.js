const btn = document.getElementById('greet-btn');
const message = document.getElementById('message');

const greetings = [
  'Hello there!',
  'Hey, World!',
  'Greetings, traveler!',
  'Hi from JavaScript!',
  'Howdy!',
];

let index = 0;

btn.addEventListener('click', () => {
  message.textContent = greetings[index % greetings.length];
  index++;
});
