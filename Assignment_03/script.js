
const fs = require ('fs')


function countOfWords(text) {
  const words = text.trim().split(/\s+/)
  const filteredWords = words.filter(word => word !== '');

  const lengthOfWords = filteredWords.length
  return lengthOfWords
}

const text = fs.readFileSync('data.txt','utf8')

const result = countOfWords(text)

console.log("Number of Words in text are ===",result)