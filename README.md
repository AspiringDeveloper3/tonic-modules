# Tonic JS

Tonic JS is a general purpose javascript library aimed at improving the speed at which javascript is written. It has a ton of methods that you can use for : -

- **DOM manipulation**
- **String accessibility**
- **Array methods**
- **Minimizing syntax**
- **Animations**

## Usage

First run the command : -
`npm i tonic-js`

Then you will be able to use the module.

The syntax will look as follows :-

```javascript
const tonic = require('tonic')

tonic.<method>(<parameter>)

```

## Methods

Tonic offers a variety of methods :-

### String methods

- #### kebabCase

  - `parameters`: string to be converted

  - `syntax`: kebabCase('hello world')

  - `output`: hello-world

- #### titleCase

  - `parameters`: string to be converted

  - `syntax`: titleCase('hello world')

  - `output`: Hello World

- #### snakeCase

  - `parameters`: string to be converted

  - `syntax`: snakeCase('hello world')

  - `output`: hello_world

- #### longestWord

  - `parameters`: string

  - `syntax`: longestWord("Hello Mountains")

  - `output`: Mountains

### Array methods

- #### contains

  - `aim`: Know if an array contains a value
  - `parameters`: array, value
  - `syntax`: contains([1,2,3], 3)
  - `output`: `true`

- #### strings

  - `aim`: Get all strings of an array
  - `parameters`: array
  - `syntax`: strings(["Hey", 6, 3])
  - `output`: [ Hey ]

- #### unique

  - `aim`: Get all unique values of array
  - `parameters`: array
  - `syntax`: unique(["Hey", "Hey", 3, 5, 5, 7])
  - `output`: [ Hey,3,5,7 ]

- #### numbers
  - `aim`: Get all numbers of an array
  - `parameters`: array
  - `syntax`: numbers(["Hey", 6, 3])
  - `output`: [ 6,3 ]

### DOM mainpulation

- #### tn

  - `aim`: Select items from DOM
  - `parameters`: query
  - `syntax`: tn("h1")
  - `output`: \<h1>Text\</h1>

- #### hasClass

  - `aim`: Check if an item has a class
  - `parameters`: element, class, callback **(optional)**
  - `syntax`: hasClass(_tn("h1")_ (this selects the "h1" element), ".hello") _You can also put an additional callback_
  - `output`: false

- #### removeClass

  - `aim`: Remove a class
  - `parameters`: element, class
  - `syntax`: removeClass(_tn("h1")_ (this selects the "h1" element), "hello") _You can also put an additional callback_
  - `output`: _"hello" class is removed from \<h1> element_

- #### addClass

  - `aim`: Add a class
  - `parameters`: element, class
  - `syntax`: addClass(_tn("h1")_ (this selects the "h1" element), "hello")
  - `output`: _"hello" class is added to the \<h1> element_

- #### setCss

  - `aim`: Change CSS properties
  - `parameters`: element, css property, changed value
  - `syntax`: setCss(_tn("h1")_ (This selects the "h1" element), "background-color", "red")
  - `output`: _Background becomes red for \<h1> element_

- #### setText

  - `aim`: Change text of an element
  - `parameters`: element, text
  - `syntax`: setText(_tn("h1")_ (This selects the "h1" element), "Hello World")
  - `output`: _Text becomes "Hello World" for \<h1> element_

- #### click

  - `aim`: Add a click event listener
  - `parameters`: element, callback
  - `syntax`: click(_tn("h1")_ (This selects the "h1" element), `function() {console.log("Hello World")}`)
  - `output`: _"Hello World" gets logged when \<h1> element is clicked_

- #### keypress
  - `aim`: Add a keypress event listener
  - `parameters`: element, callback
  - `syntax`: keypress(window , `function() {console.log("Hello World")}`)
  - `output`: _"Hello World" gets logged when a key is pressed (since we added the event listener to the window)_

### Animation

- #### blink

  - `aim`: add a fade-in and fade-out animation
  - `parameters`: element, timeout
  - `syntax`: blink(_tn("h1")_ (This selects the "h1" element), 300)
  - `output`: _Blink animatino set for \<h1> on load after 300 milliseconds (the timeout)_

- #### fadeIn

  - `aim`: add a fade-in animation
  - `parameters`: element, timeout
  - `syntax`: fadeIn(_tn("h1")_ (This selects the "h1" element), 300)
  - `output`: _\<h1> element fades in on load after 300 milliseconds (the timeout)_

- #### fadeOut
  - `aim`: add a fade-out animation
  - `parameters`: element, timeout
  - `syntax`: fadeOut(_tn("h1")_ (This selects the "h1" element), 300)
  - `output`: _\<h1> element fades out on load after 300 milliseconds (the timeout)_

### Minimizing Syntax

- #### repeat
  - `aim`: Run a `for` loop till a certain count
  - `parameters`: times to repeat, callback
  - `syntax`: repeat(9, function(index) {console.log(index)})
  - `explaination`: When you run this function, it loops a variable until it reaches the max limit. It also passes the variable as a parameter so that it can be used for array manipulation
  - `output`: _\<h1> element fades out on load after 300 milliseconds (the timeout)_
