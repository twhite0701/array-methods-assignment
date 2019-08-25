/**
 * Useful links:
 * - Array methods documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Iteration_methods
 *
 */

/** #1 DONE
 * @difficulty easy, ~2 minutes
 *
 * Write a function that accepts
 * - an array of strings or numbers
 * - and a `thingToFind` which is either a string or number
 * The function looks through the array and returns true if the thing is inside the array. The function returns false if the thing isn't found.
 *
 * HINTS:
 * - use the arrays `.includes` method
 * - pass the `thingToFind` into the `.includes` method
 * - return the result
 *
 * @param {array of elements} array containing strings and numbers
 * @param {string or number} thingToFind
 * @returns {boolean} true if the array contains the thing to find, false otherwise
 */
function arrayIncludes(array, thingToFind) { 
    return array.includes(thingToFind);
}

/** #2 DONE
 * @difficulty easy, ~2 minutes
 *
 * Write a function that returns a subset of an array, starting at the beginning.
 * The function accepts two arguments:
 * - the array
 * - and the number of items to select from the beginning of the array.
 *
 * HINTS:
 * - Use the array `.slice` method starting at `0` and counting up to `howManyItems`.
 * - Return the result.
 *
 * @param {array} array of items
 * @param {number} howManyItems to return at the start of the array
 * @returns {array} containing the `howManyItems` of items at the start of the array.
 */

 const items = ["hello", "world", "how are you","just kidding"];

function head(items, howManyItems) {
    return items.slice(0, howManyItems)
};


/** #3 DONE
 * @difficulty easy, ~3 minutes
 *
 * Write a function that accepts an input array and squares each number in the array, returning the result.
 *
 * HINT:
 * - Use the array's `.map` method
 * - Within the mapping function, return the square of each number
 * - Use the exponent operator with 2 to calculate the square, `** 2`
 * - Return the result of mapping
 *
 * @param {array} array of numbers
 * @returns {array} where each number is the square of the original array.
 */

 const array = [1,2,3,4,5,6,];

function newArray(array) {
    return array.map(entry => entry**2)};


/** #4 DONE !
 * @difficulty easy, ~3 minutes
 *
 * Write a function that checks if an array contains any odd numbers, return true if it does.
 *
 * HINTS:
 * - use the array's `.some` method
 * - within the some's argument (the function)
 * - return if any items when modulo of 2 equals 1.
 * - return the result of the some method.
 *
 * @param {array} array of numbers
 * @returns {boolean} true if the array contains any odd numbers
 */

const array = [1,2,3,4,5,6,];

function arrayContainsOddNumbers(array) {
    return array.some(item => item %2 === 1);
};
    

/** #5 DONE ?? - double  check
 * @difficulty easy, ~3 minutes
 *
 * Write a function that removes all of the "falsey" values from a given array.
 *
 * HINTS:
 * - use the array's `.filter` method
 * - check if each item in the array passes an if. For example, `if (item)`
 * - filter for only items that pass the condition, thus removing falsey items
 * - return the result of the array filter
 *
 * @param {array} array of mixed values: numbers, strings, booleans, null, undefined, objects, arrays, etc...
 * @returns {array} where all the falsey values have been removed
 */

const array = [0,1,2,3,4,5,6,7,];

function isOdd(array) {
    return array.filter(item => 
        {if (item %2 !== 1) {
            return item}
    }
};

//answer: 
function compact(array) {
    return array.filter(item => !!(item))  
    // return array.filter(Boolean)
};

//is my answer the same as this answer? 
// is the answer saying: take array and filter out any items that do not meet the boolean logic that you 
// determine in the array.filter(Boolean)?
// falsey = anything that isn't considered true  (false, 0, undefined, null)


/** #6 DONE !
 * @difficulty easy, ~3 minutes
 *
 * Write a function that returns a subset of an array, removing a specified number of items from the start of the array.
 * The function accepts two arguments:
 * - the array
 * - and the number of items to remove (drop) from the beginning of the array.
 *
 * HINTS:
 * - Use the array `.slice` method starting at `number of items to drop` and counting up to the length of the array.
 * - Return the result.
 *
 * @param {array} array of items
 * @param {number} numberOfItemsToDrop, number of items to remove from the start of the array
 * @returns {array} where the first `numberOfItemsToDrop` have been removed
 */

const array = [1,2,3,4,5,6,7,];

function drop(array, numberOfItemsToDrop) { 
    return array.slice(numberOfItemsToDrop)
};

//answer: 
function drop(array, numberOfItemsToDrop) {
    return array.slice(numberOfItemsToDrop, array.length);
  };

//is this answer stating: 
// for the array, delete from specified index (numberOfItemsToDrop) up to the length of the array? or up until the length you 
// specify in the array?


/** #7 DONE ! 
 * @difficulty easy, ~2 minutes
 *
 * Write a function that searches through an array of numbers and returns the first even number.
 *
 * HINTS:
 * - use the array `.find` method
 * - check each item that the modulo of 2 equals 0, `x % 2 === 0`
 * - return the result of the find
 *
 * @param {array} array of numbers
 * @returns {number} first even number that was found withing the array
 */

const array = [1,2,3,4,5,6,7,];

function findFirstEvenNumber(array) { 
    return array.find(value => value % 2 === 0)
};

/** #8 DONE
 * @difficulty easy, ~2 minutes
 *
 * Wrire a function that accepts an array and a number. The return should be an array containing the X items at the end of the array.
 *
 * HINT:
 * -
 *
 * @param {array} array array of items
 * @param {number} howManyItems number of items to select at the end of the array
 * @returns {array} subset of the original array selecting items at the end
 */
const array = [1,2,3,4,5,6,7,];

function tail(array, howManyItems) {
    array.push(howManyItems)
    return array
};

//answer:

function tail(array, howManyItems) {
    return array.slice(
      array.length - howManyItems,
      array.length
    );
  }

// answer stating: 
// return to me the array, in between index:
// total length of the array - # items specified to total length of the array
//inverse of: 
function drop(array, numberOfItemsToDrop) {
    return array.slice(numberOfItemsToDrop, array.length);
  };



/** #9 SO CLOSE !!!!!!! 
 * @difficulty easy, ~3 minutes
 *
 * Write a function that returns the index number of an value within an array. The function accepts 2 arguments: the array and the value.
 *
 * HINTS:
 * - Use the array `.findIndex` method
 * - within the findIndex, check each item against the `itemToFind`
 * - return the result of the findIndex method
 *
 * @param {array} array of strings or numbers
 * @param {string or number} valueToFind within the
 * @returns {number} the index number of the location of the valueToFind OR `-1` if the value isn't found.
 */

const array = [1,2,3,4,5,6,7,];

function findMatchingIndex(array, valueToFind) {  
    return array.findIndex(
        value => value {valueToFind
        });
    };

// answer:

function findMatchingIndex(array, itemToFind) {
    return array.findIndex(item => item === itemToFind);
  }

/** #10 DONE ! - got it right ! 
 * @difficulty easy, ~3 minutes
 *
 * Write a function that accepts an input array and multiplies each number in the array by the multiplier, returning the result.
 *
 * HINT:
 * - Use the array's `.map` method
 * - Within the mapping function, return the multiple of each item
 * - Use the multiply operator and the `multiplier`
 * - Return the result of mapping
 *
 * @param {array} array of numbers
 * @param {number} multiplier to multiply each item in the array by
 * @returns {array} where each number is the multiplier multiplied by the item of the original array
 */

const array = [1,2,3,4,5,6,7,];

function multiplyItemsBy(array, multiplier) {
    return array.map(i=> i*multiplier)
};

  
/** #11 DONE ! SO CLOSE !!!!!! 
 * @difficulty easy, ~4 minutes
 *
 * Write a function which takes an array of strings. The function will sort the strings by order of length. For example a string of length 1, `'a'`, would be at the beginning and of length 4, `'aaaa'` would come after.
 *
 * HINTS:
 * - use the array `.sort` method
 * - for each iteration of the sort, compare the two items
 * - minus the length of one item by the length of the other item and return the result.
 * - return the result of sorting the array.
 *
 * @param {array} array of strings
 * @returns {array} original array where strings are organised from shortest length to longest
 */

const array = ['apple', 'banana', 'caterpiller', 'demon', 'every', 'function', "hello", "supercallafragilistic"];

function sortWordsByLength(array) {
    return array.sort(function(a,b) {
        return a.length-b.length
    });
};

//answer: 

function sortWordsByLength(array) {
    return array.sort((a, b) => a.length - b.length);
  };

sortWordsByLength(array);

/** #12
 * @difficulty easy, ~2 minutes
 *
 * Write a function that checks to see if every item in an array matches a given value. If all items match, return true, otherwise return false.
 *
 * HINTS:
 * - Use the array `.every` method
 * - Check each item in the array against the `thingToMatch`
 * - return the result
 *
 * @param {array} array of strings or numbers
 * @param {string or number} thingToMatch at each position in the array
 * @returns {boolean} true if all of the items in the array are the same as the `thingToMatch`, false otherwise.
 */

const array = [2, 4, 6, 8, 10,];

function all(array, thingToMatch) { 
    array.every(item => item === thingToMatch);
};


/** #13 ?? how do i connect the itemToOmit parameter? 
 * @difficulty easy, ~2 minutes
 *
 * Wrire a function that removes all occurances of a given value from an array.
 *
 * HINTS:
 * - Use the array `.filter` method
 * - Keep items in the array that aren't the same as the `itemToOmit`
 * - Return the result.
 *
 * @param {array} array of strings and/or numbers
 * @param {string or number} itemToOmit, value to remove all occurances of from the original array
 * @returns {array} where all occurances of the `itemToOmit` have been removed.
 */
const array = [2, 4, 5, 6, 8, 10, 12];

function omit(array, itemToOmit) { 
    return array.filter(item => item !== itemToOmit);
};

//return the array that is not equal to the itemToOmit

omit(array, 6);


/** #14 DONE ! GOT IT RIGHT !!! 
 * @difficulty easy, ~3 minute
 *
 * Write a function that accepts an array of strings, wraps each string inside a `<div></div>` string and returns the sum of all div strings.
 *
 * The function accepts an array of strings:
 *
 * ```js
 * [ 'one', 'two', 'foo', 'Hello, world!' ]
 * ```
 *
 * The above input should return the following:
 *
 * ```js
 * '<div>one</div><div>two</div><div>foo</div><div>Hello, world!</div>'
 * ```
 *
 * HINT:
 * - use the array `.map` method
 * - inside the map, return each item wrapped in divs, you can use a template string here.
 * - save the result of the map into a variable
 * - return the `.join` of the result of mapping
 *
 * @param {array of strings} arr array containing strings to put in divs
 * @returns {string} items wrapped in divs
 */

const array = ['hello', 'world', 'why', 'are', 'we', 'here',];

function getStringOfDivs(array) { 
    var arrayMap = array.map(item => `<div>${item}</div>`);
    return arrayMap.join('')
};

/** #15 DONE ! 
 * @difficulty easy, ~1 minute
 *
 * Write a function that adds up the numbers within an array.
 *
 * The function accepts an array of numbers. For example,
 * `[1, 2, 4, 6, 10, 1, 1, 123]`
 *
 * HINT:
 * - store the total in a variable starting at 0 - ??????????? array or #?
 * - use the array's `.forEach` method to iterate through the items in the array
 * - within the loop, add each item to the total
 * - return the total after the loop
 *
 * @param {array of numbers} arr array containing items to sum
 * @returns {number} total of items in array
 */

const array = [1, 2, 4, 6, 10, 1, 1, 123];

function getArrayTotal(array) {
    let total = 0;

    array.forEach(item => {
        total += item; 
    })

    return total; 
};

//return the sum of all items in the array
//total += item --> needs curly brackets 


/** #16 ???????????????????????????????
 * @difficulty easy, ~4 minutes
 *
 * Write a function that accepts an array of objects and a string.
 * Go through each object in the array and select the property matching the supplied string.
 * If any object doesn't have a key matching the property string, return null
 * Return the result array that should match the length of the original array.
 *
 * HINTS:
 * - use the array `.map` method
 * - in each iteration of the map, you can select the property from the object in the array.
 * - You can use square bracket property access. E.g. `object[property]`
 * - If the object doesn't contain the property as a key, return `null` for that iteration
 * - return the result of the map
 *
 * @param {array} arrayOfObjects, each object contains any properties
 * @param {string} property, to select in each object
 * @returns {array} of values picked out of each object
 * 
 */

 const arrayOfFamily = [
     {
     name: 'Taylor',
     birthYear: 1990,
    },
    {
        name: 'Spencer',
     birthYear: 1993,
    },
    {
        name: 'Heather',
     birthYear: 1994,
    },
 ];


function pick(arrayOfObjects, property) {
    return arrayOfObjects.map(object => object[property] || null);
};

pick(arrayOfFamily, 'name'); 

/* 
1. return a new array based of the arrayOfObjects
2. for each object in the arrayOfObjects, find the property labeled within object[property] and return the value.
3. OR if the value of the object[property] is empty, return null. 
4. array and property can be adjusted in parameters
*/
//pick(arrayOfFamily, 'name');  --> all properties, if a string, need to be passed through the call in quotes

/** #17
 * @difficulty easy, ~4 minutes
 *
 * Write a function that calculates the total of a shopping list
 *
 * The function accepts an array of objects, each object will have a property `price`. For example:
 *
 * ```js
 * [
 *  { price: 123 },
 *  { price: 321 },
 *  { price: 1.50 },
 *  { price: 99.99 },
 * ]
 * ```
 *
 * HINT:
 * - store the total in a variable starting at 0
 * - use the array `.forEach` method to iterate through the items in the array
 * - within the method, add each item's price to the total
 * - use dot property access to select the price for each item. For example: `item.price`
 * - return the total after the loop
 *
 * @param {array of numbers} arr array containing items to sum
 * @returns {number} total of items in array
 */

const shoppingListArray =  [
    { price: 123 },
    { price: 321 },
    { price: 1.50 },
    { price: 99.99 },
    ];


function getShoppingListTotalPrice(shoppingListArray) {
    let total = 0; 
    shoppingListArray.forEach(item => 
            total += item.price);
    return total;
};

//same as previous total example: 
// (except for add up all of the items that have the property .price)

function getArrayTotal(array) {
    let total = 0;

    array.forEach(item => {
        total += item; 
    })

    return total; 
};


/** #18
 * @difficulty easy, ~5 minute
 *
 * Write a function that accepts an array of strings, wraps each string inside an `<element></element>` string and returns the sum of all element strings.
 *
 * The function accepts an array of strings:
 *
 * ```js
 * [ 'one', 'two', 'foo', 'Hello, world!' ]
 * ```
 *
 * And an element string to wrap inside. For example, `'li'`.
 *
 * The above inputs should return the following:
 *
 * ```js
 * '<li>one</li><li>two</li><li>foo</li><li>Hello, world!</li>'
 * ```
 *
 * HINT:
 * - Very similar to wrapping in divs, now the element is dynamic.
 * - use the array `.map` method
 * - inside the map, return each item wrapped in elements, you can use a template string here.
 * - save the result of the map into a variable
 * - return the `.join` of the result of mapping
 *
 * @param {array of strings} array, containing strings to put in divs
 * @param {string} element to wrap each item inside
 * @returns {string} items wrapped in divs
 */
function getStringOfElements(array, element) {

}

/** #19
 * @difficulty easy, ~4 minutes
 *
 * Write a function that calculates the mean of the numbers in an array. The mean is the sum of all of the numbers divided by the number of numbers (array.length).
 *
 * HINTS:
 * - initialise a variable to store the total sum of all of the array items
 * - use a `.forEach` loop
 * - add each item to the total
 * - return the total divided by the size of the array
 * - if the array has no size, return 0
 *
 * @param {array} array of numbers
 * @returns {number} the mean average of array numbers or `0`
 */

const array = [1, 2, 4, 6, 10, 1, 1, 123];

function getMeanAverage(array) {
    let total = 0;
    array.forEach(item => 
        total += item);
    return total/array.length || 0;
};

// function name: getMeanAverage
// this function called getMeanAverage takes an array and tells it:
// let the total of the array = 0 (0 is the placeholder until you call the function)
// then use the nest function array.forEach (since the .forEach method accepts a function)
// to iterate through each item in the array and total the sun of all the items in the array
// return to me the mean OR return to me 0 (if else; in this case the if else is null)


/** #20 ! DONE - correct
 * @difficulty intermediate, ~5 minute
 *
 * Write a function that counts the occurances of a given value in an array.
 *
 * HINTS:
 * - Use the filter method to filter out occurances of the thingsToCountBy in the array
 * - Return the length of the new array
 *
 * @param {array} array of strings, numbers, booleans or nulls
 * @param {any} thingToCountBy: value to count occurances of
 * @returns {number} number of occurances of the `thingToCountBy` in the array.
 */

const thingsToCountBy =[1, 2, 4, 6, 10, 1, 1, 123];

function countItemsMatching(array, thingToCountBy) {
    const newArray = array.filter(item => (item === thingToCountBy));
    return newArray.length;
};

//solution:
function countItemsMatching(array, thingToCountBy) {
    const arrayOfMatchingItems = array.filter(item => (item === thingToCountBy));
    return arrayOfMatchingItems.length;
  }


/** #21
 * @difficulty hard, ~7 minute
 *
 * Write a function that returns true if all of the items in the array are unique.
 *
 * HINTS:
 * - You can use the `.every` method to check every item in the array
 * - Within the every method, you can filter based on items that are the same as the current value
 * - You can compare the length of the filtered array to see if an item is unique or not
 * - Return the result of the `.every`
 *
 * @param {array} array of any type
 * @returns {boolean} true if all of the items are unique in the array, false otherwise.
 */

const uniqueItems =[1, 2, 4, 6, 10, 1, 1, 123];

function areAllItemsUnique(array) {
    return array.every(function (item) {
        const uniqueItemsArray = array.filter(entry => entry !== item);
        return uniqueItemsArray.length === array.length;
    });
    };

    //solution:
    // take the array called array
    // return to me "true" if all items within the new filtered array do not equal each other
    // and if the array is the same size as the original array 
    // if every entry is different from one another
    // return to me the new array ??
function areAllItemsUnique(array) {
    return array.every(function (item) {
      const uniqueArray = array.filter(j => (j !== item));
  
      return uniqueArray.length === (array.length - 1);
    });
  }
  