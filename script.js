// NeetCode: Contains Duplicate using a set
let nums = [1, 2, 3, 4, 5, 5, 6];
function findDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(findDuplicate(nums)); // dont forget to console.log
//remember,  the difference between for in loops and for of loops is that a for in loop will return the index of the values in the array, while for of loop will return the values and not the indexes..

let words = ["moon", "sun", "star", "moon"];
function findCopy(words){
  const viewed = new Set();
  for(let word of words){
    if (viewed.has(word)){ 
      return true;
    }
    viewed.add(word)
  }
  return false;
}
console.log(findCopy(words))

/* pseudocode
1. Start with an array of strings.
2. Create an empty Set to track what we've already seen.
3. Loop through each string in the array using a for...of loop.
4. For each string:
   a. If the Set already has it, return true (we found a copy).
   b. If not, add it to the Set.
5. If the loop finishes without finding a copy, return false.
 */

/*
REFRESHER ON SETS
sets are like containers that only hold unique values and automatically ignores duplicates. 
SET METHODS: 
.add(value): adds to the set 
.has(value): checks if value is in set 
.delete(value): deletes value from set 
.clear(): removes all values from set
.size:  returns the number of unique items 
.values: prints the values of the set to the console (or wherever)
 */