// Words to filter
let filterWords = ['syöpä', 'syövän', 'syöpää']; 

// IL
let newsTitlesIL = document.querySelectorAll('.front-title');

for (let title of newsTitlesIL) {
  for (let word of filterWords) {
    if (title.textContent.toLowerCase().includes(word.toLowerCase())) {
      title.parentElement.parentElement.parentElement.style.display = 'none';
      break;
    }
  }
}

// IS
// Main articles
let articlesIS = document.getElementsByTagName('article');

for (let article of articlesIS) {
  const spansArticles = article.getElementsByTagName('span');
  for (let span of spansArticles) {
    for (let word of filterWords) {
      if (span.textContent.toLowerCase().includes(word.toLowerCase())) {
        article.style.display = 'none';
        break;
      }
    }
  }
}