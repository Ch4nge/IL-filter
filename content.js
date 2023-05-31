// Words to filter
let filterWords = ['syöpä']; 

let newsTitles = document.querySelectorAll('.front-title');

for (let title of newsTitles) {
  for (let word of filterWords) {
    if (title.textContent.toLowerCase().includes(word.toLowerCase())) {
      title.parentElement.parentElement.parentElement.style.display = 'none';
      break;
    }
  }
}