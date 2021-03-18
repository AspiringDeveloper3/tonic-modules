const repeat = function (timesToRepeat, callback) {
  for (
    const newconstiable = 0;
    newconstiable < timesToRepeat;
    newconstiable++
  ) {
    callback(newconstiable);
  }
};
const hasClass = function (itemToCheck, classToCheck, callback) {
  callback = callback || null;
  itemToCheck.classList.forEach(function (clas) {
    if (clas === classToCheck) {
      if (callback) {
        return callback();
      } else {
        return true;
      }
    } else {
      return false;
    }
  });
};
const addClass = (element, classToAdd) => {
  document.querySelector(element).classList.add(classToAdd);
};
const removeClass = (element, classToRemove) => {
  document.querySelector(element).classList.remove(classToRemove);
};
const setCss = function (item, cssProp, value) {
  item.style[cssProp] = value;
};
const tn = function (query) {
  const selected = document.querySelectorAll(query);
  if (selected.length > 1) {
    return document.querySelectorAll(query);
  } else {
    return document.querySelector(query);
  }
};
const setText = function (element, newText) {
  element.innerHTML = newText;
};
const blink = function (element, timeout) {
  element.style.transition = "all 0.8s ease";
  element.style.opacity = "0";
  setTimeout(function () {
    element.style.opacity = "1";
  }, timeout);
};
const click = function (element, callback) {
  element.addEventListener("click", function () {
    return callback();
  });
};
const keypress = function (element, callback) {
  element.addEventListener("keypress", function (event) {
    return callback(event.key);
  });
};
const fadeIn = function (element) {
  element.style.opacity = "1";
  element.style.transition = "all 0.6s ease-in-out";
};
const fadeOut = function (element) {
  element.style.opacity = "0";
  element.style.transition = "all 0.6s ease-in-out";
};

// Array methods

const contains = function (arr, v) {
  for (const i = 0; i < arr.length; i++) {
    if (arr[i] === v) return true;
  }
  return false;
};
const unique = function (target) {
  const arr = [];
  for (const i = 0; i < target.length; i++) {
    if (!contains(arr, target[i])) {
      arr.push(target[i]);
    }
  }
  return arr;
};
const strings = function (target) {
  const arr = [];
  target.forEach(function (value) {
    if (typeof value == "string") {
      arr.push(value);
    }
  });
  return arr;
};
const numbers = function (target) {
  const arr = [];
  target.forEach(function (value) {
    if (typeof value == "number") {
      arr.push(value);
    }
  });
  return arr;
};

// String methods
const longestWord = (string) => {
  let longestWord = string.split(" ")[0];
  let longestWordLength = longestWord.length;
  string.split(" ").forEach((word) => {
    if (word.length > longestWordLength) {
      longestWord = word;
      longestWordLength = word.length;
    }
  });
  return longestWord;
};
const kebabCase = function (string) {
  return string.toLowerCase().split(" ").join("-");
};
const snakeCase = function (string) {
  return string.toLowerCase().split(" ").join("_");
};
const titleCase = function (str) {
  const result = [];
  str.split(" ").forEach(function (word) {
    const capitalLetter = word.split("").splice(0, 1).join("").toUpperCase();
    const smallLetters = word.split("").splice(1, word.length).join("");
    result.push(capitalLetter + smallLetters);
  });
  return result.join(" ");
};

module.exports = {
  repeat,
  titleCase,
  snakeCase,
  kebabCase,
  keypress,
  click,
  numbers,
  strings,
  contains,
  unique,
  fadeIn,
  fadeOut,
  tn,
  blink,
  setCss,
  setText,
  repeat,
  hasClass,
  longestWord,
  addClass,
  removeClass
};
