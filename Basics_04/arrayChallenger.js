/*
1. Declare an array named `teaFlavors` that contains the strings `"green tea", "black tea", and "lemon tea"`.
Access the first elements of the array and store it in a variable named `firstTea`.
*/

const teaFlavors = ["Green tea", "black tea", "lemon tea"];
const firstTea = teaFlavors[0];
// console.log(teaFlavors);

/*
2. Declare an array named `cites` containing `"London", "Tokyo", "Paris", and "New York".
Access the third elements in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London0", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2]
// console.log(favoriteCity);

/*
3. You have an array named `teaTypes` containing `"herbal tea", "white tea", and "masala chai"`.
Change the second elements of the array to `"jasmine tea"`
*/

let teaTypes = ["herbal tea", "white tea", "masala tea"];

teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/*
4. Declare an array named `citiesVisited` containing `"Budhanilkantha" and "Baneshwor".
Add `"Bhaktapur"` to the array using the `push` method.
*/

let citiesVisited = ["Budhanilkantha", "Baneshwor"];
citiesVisited.push("Bhaktapur");
// console.log(citiesVisited);

/*
5. You have an array named `teaOrders` with `chai`,
`"iced tea", "matcha" and "earl grey".
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
teaOrders.pop();
// console.log(teaOrders);

/*
6. You have an array named `popularFruits` containing `"Apple", "Mango", and "Orange"`
create a soft copy of this array names `softCopyFruits`.
*/

const popularFruits = ["Apple", "Mango", "Orange"];
const softCopyFruits = popularFruits;
popularFruits.pop();
// console.log(softCopyFruits);
// console.log(popularFruits);

/*
7. You have an array named `topCities` containing `"Kathmandu", "Pokhara", and "lalitpur"`.
create a hard copy of this named `hardCopyCites`.
*/
const topCities = ["Kathmandu", "Pokhara", "Lalitpur"];

const hardCopyCites = [...topCities];
topCities.pop();
// console.log(hardCopyCites);
// console.log(hardCopyCites);

/**
 8. You have two arrays: `europeanCities` containing `"Paris"` and "Rome"` and `asianCities containing  `"Tokyo", and "Bangkok"`.
 Merge these two arrays into a new arrayy named `wordCites`
 */

const europeanCities = ["Paris", "Rome"];
const asianCities = ["Kathamandu", "Pokhara"];
const worldCities = [...europeanCities, ...asianCities]
const anotherWordCities = europeanCities.concat(asianCities);
// console.log(worldCities);
// console.log(anotherWordCities);


/*
9. You have any array names `colorList` containing `"Yellow". "Orange", "Blue"`.
Find the length of the array and store it in a variable names  `colorLength`
 */

let colorList = ["Yellow", "Orange", "Blue"];
console.log(colorList.length);

/*
10. Yoou have an array named `cityBucketList` containing `"kyoto", "London", "Cape Town", and "Vancouver"`.
check if `"London"` is in the array and store the result in a variable named `isLondonInList`
 */

const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
console.log(cityBucketList.includes("London"));



