const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(string => {
    let finalStringWithSpace = "" //test
    let stringCut = string.split(" ")
    let upperCasedWordArray = stringCut.map(word =>{
      let firstLetter = word.substring(0, 1).toUpperCase()
      let restOfWord = word.substring(1)
      let finishedWord = firstLetter += restOfWord
      return finishedWord
    })

    for (const word of upperCasedWordArray){
      finalStringWithSpace += word + " " 
    }
    return finalStringWithSpace.substring(0, finalStringWithSpace.length - 1)
  })
}

//console.log(titleCased)