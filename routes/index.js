var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco cat"
  } );
});

module.exports = router;

/* POST the form data */
router.post('/', function(req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText),
    message2: reverseString(req.body.userText),
    message3: reverseStringAbc(req.body.userText)
  })
})

function checkPalindrome(phrase){
  phrase = phrase.replace(/ |\?|\.|,|:|;|!|'|"/gi, "")
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase() === temp.toLowerCase() ){
  return true
  }
  else {
    return false
  }
}

function getResultDescription(phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}

function reverseString(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  return temp;
}

function reverseStringAbc(phrase){
  phrase = phrase.replace(/ |\?|\.|,|:|;|!|'|"/gi, "")
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  return temp.toLowerCase();
}