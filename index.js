var repeat = function (timesToRepeat, callback) {
  for (var newVariable = 0; newVariable < timesToRepeat; newVariable++) {
    callback(newVariable);
  }
};
var hasClass = function (itemToCheck, classToCheck, callback) {
  itemToCheck.classList.forEach(function (clas) {
    if (clas === classToCheck) {
      return callback();
    } else {
      return false;
    }
  });
};
var setCss = function (item, cssProp, value) {
  item.style[cssProp] = value;
};
var tn = function (query) {
  var selected = document.querySelectorAll(query);
  if (selected.length > 1) {
    return document.querySelectorAll(query);
  } else {
    return document.querySelector(query);
  }
};
var setText = function (element, newText) {
  element.innerHTML = newText;
};
var blink = function (element, timeout) {
  element.style.transition = "all 0.8s ease";
  element.style.opacity = "0";
  setTimeout(function () {
    element.style.opacity = "1";
  }, timeout);
};
var click = function (element, callback) {
  element.addEventListener("click", function () {
    return callback();
  });
};
var keypress = function (element, callback) {
  element.addEventListener("keypress", function (event) {
    return callback(event.key);
  });
};
var fadeIn = function (element) {
  element.style.opacity = "1";
  element.style.transition = "all 0.6s ease-in-out";
};
var fadeOut = function (element) {
  element.style.opacity = "0";
  element.style.transition = "all 0.6s ease-in-out";
};

// Array methods

var contains = function (arr, v) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === v) return true;
  }
  return false;
};
var unique = function (target) {
  var arr = [];
  for (var i = 0; i < target.length; i++) {
    if (!contains(arr, target[i])) {
      arr.push(target[i]);
    }
  }
  return arr;
};
var strings = function (target) {
  var arr = [];
  target.forEach(function (value) {
    if (typeof value == "string") {
      arr.push(value);
    }
  });
  return arr;
};
var numbers = function (target) {
  var arr = [];
  target.forEach(function (value) {
    if (typeof value == "number") {
      arr.push(value);
    }
  });
  return arr;
};
var kebabCase = function (string) {
  return string.toLowerCase().split(" ").join("-");
};
var snakeCase = function (string) {
  return string.toLowerCase().split(" ").join("_");
};
var titleCase = function (str) {
  var result = [];
  str.split(" ").forEach(function (word) {
    var capitalLetter = word.split("").splice(0, 1).join("").toUpperCase();
    var smallLetters = word.split("").splice(1, word.length).join("");
    result.push(capitalLetter + smallLetters);
  });
  return result.join(" ");
};

module.exports = [repeat,titleCase,snakeCase,kebabCase,keypress,click,numbers,strings,contains,unique,fadeIn,fadeOut,tn,blink,setCss,setText,repeat,hasClass]
