// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// // plotly.newplot creates a new chart || plotArea is id of the div tag in index html

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);


// // this also works data is enclose in array in the variable assignment  

//  var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", trace, layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);


var trace = {
labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
"ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
type: 'pie'
};
var data = [trace];
var layout = {
title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);

// map() method will iterate over each element in js array 

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var numbers = [0,2,4,6,8]
var plusFive = numbers.map(function(int){
    return int + 5;
})

console.log(plusFive)

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// The filter()method operates on each element of the numbers array. So how does it differ from map()?

// The map() method transforms every element of the original array, and so the size of the transformed array is the same as that of the original array.

// The filter() method, on the other hand, returns an array of values that meet certain criteria. Values in the original array that do not fulfill the 
// condition are filtered out. In this case, specifically, the anonymous function called by filter() returns true if an argument is larger than 1, and false if it does not. 
// The filter() method runs the anonymous function on every element of the original numbers array. Only numbers that are larger than 1 are returned: [2,3,4,5]. 
// So whereas applying map() to the numbers array would have returned an array with five elements, applying this specific filter returned an array of only four elements.

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
