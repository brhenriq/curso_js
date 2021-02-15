const containerParagraph = document.querySelector('.paragrafos');
const paragraphs = containerParagraph.querySelectorAll('p');

const backgroundColorBody = getComputedStyle(document.body).backgroundColor;

for (const paragraph of paragraphs) {
  paragraph.style.backgroundColor = backgroundColorBody;
}