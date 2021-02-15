const elements = [
  {tag: 'p', text: 'Frase 1'},
  {tag: 'div', text: 'Frase 2'},
  {tag: 'footer', text: 'Frase 3'},
  {tag: 'section', text: 'Frase 4'},
];

function createTag(tag) {
  const createdTag = document.createElement(tag);
  return createdTag;
}

const container = document.querySelector(".container");
const div = createTag("div");

for (let i = 0; i < elements.length; i++) {
  const {tag, text} = elements[i];
  const createdTag = createTag(tag);
  
  createdTag.innerText = text;
  div.appendChild(createdTag);
}

container.appendChild(div);