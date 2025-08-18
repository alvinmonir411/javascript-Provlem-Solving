//  Problem 1   make the str revers
function makerevers(str) {
  let revers = "";
  for (let index = str.length - 1; index >= 0; index--) {
    revers += str[index];
  }
  return revers;
}

// console.log(makerevers("hello"));
// Problem 2: Count Vowels in a String
function countVowel(sentence) {
  let vowel = "aeiou";
  let coutnt = 0;
  for (const char of sentence) {
    if (vowel.includes(char)) {
      coutnt++;
    }
  }
  return coutnt;
}
// console.log(countVowel("programming"));
// Problem 3: Check for Palindrome

function isPalindrome(text) {
  let mainText = text;
  let revversed = "";
  for (let index = text.length - 1; index >= 0; index--) {
    revversed += text[index];
  }
  if (mainText === revversed) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome("hello"));

function FindLargetNum(arr) {
  let lergeNumb = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lergeNumb) {
      lergeNumb = arr[i];
    }
  }
  return lergeNumb;
}
// console.log(FindLargetNum([5, 1, 9, 3]));
// Problem 5: Remove Duplicates from an Array
function MakeUnique(arr) {
  let uniqearr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqearr.includes(arr[i])) {
      uniqearr.push(arr[i]);
    }
  }
  return uniqearr;
}
// console.log(MakeUnique([1, 2, 2, 3, 4, 4]));
// Problem 6: Sum of All Numbers in an Array

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
// console.log(sum([1, 2, 3, 4, 5]));

// Problem 7: Find Even Numbers in an Array
function evenNumber(arr) {
  let EvenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      EvenNum.push(arr[i]);
    }
  }
  return EvenNum;
}
// console.log(evenNumber([1, 2, 3, 4, 5, 6]));
// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}
// console.log(capitalizeWords("hello world"));
// Problem 9: Find the Factorial of a Number

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));
// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();
