// practice using Map  (count how many times a mood appears )
const moods = ["joyful", "tired", "joyful", "confused", "tired", "joyful"];

function counting(moods){
  let count = new Map();
  for(mood of moods){
    if (count.has(mood)){
      count.set(mood, count.get(mood) +1)// need to use .get to access the mood being iterated over. 
    }else{
      count.set(mood,1)
    }
  }
 
   console.log(count.entries())
}
 counting(moods)
 
 // vowel counter. (how many vowels are in this sentence?)
const phrase = "This is a simple sentence for testing.";

function countVowel(phrase){
  phrase= phrase.toLowerCase() // convert and reassign
  let vowels = new Map([["a",0],["e",0],["i",0],["o",0],["u",0],]);
  for(char of phrase){
    if (vowels.has(char)){
      vowels.set(char, vowels.get(char)+1)
    }
  }
  console.log(vowels.entries())
}
countVowel(phrase)
 
