// Words to filter
let filterWords = ['syöpä']; 

let newsTitlesIL = document.querySelectorAll('.front-title');

for (let title of newsTitlesIL) {
  for (let word of filterWords) {
    if (title.textContent.toLowerCase().includes(word.toLowerCase())) {
      title.parentElement.parentElement.parentElement.style.display = 'none';
      break;
    }
  }
}

let articlesIS = document.getElementsByTagName('article');
console.log(articlesIS);

for (let article of articlesIS) {
  const spans = article.getElementsByTagName('span');
  for (let span of spans) {
    for (let word of filterWords) {
      if (span.textContent.toLowerCase().includes(word.toLowerCase())) {
        article.style.display = 'none';
        break;
      }
    }
  }
}