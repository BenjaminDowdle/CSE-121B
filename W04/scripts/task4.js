/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
let personalInformation = {
    'name': 'Benjamin Dowdle',
    'photo': 'images/BenjaminDowdle.jpg',
    'favoriteFoods': ['Pizza', 'Ice Cream', 'Brownies', 'Chicken', 'Waffles'],
    'hobbies': ['Video Games', 'Reading', 'Working on cars', 'Hanging out with family'],
    'placesLived': [
        magna = {
            'place': 'Magna, UT',
            'length': '18 years'
        },
        portugal = {
            'place': 'Portugal',
            'length': '2 years'
        },
        westValley = {
            'place': 'West Valley City, UT',
            'length': '3 years'
        }
    ]
}




/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = personalInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', personalInformation.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = personalInformation.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let foods = personalInformation.favoriteFoods;
for (let i = 0; i < foods.length; i++) {
    var ul = document.getElementById("favorite-foods");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(foods[i]));
    ul.appendChild(li);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbies = personalInformation.hobbies;
for (let i = 0; i < hobbies.length; i++) {
    var ul = document.getElementById("hobbies");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(hobbies[i]));
    ul.appendChild(li);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLived = personalInformation.placesLived;
for (let i = 0; i < placesLived.length; i++) {
    let dl = document.querySelector('#places-lived')
    let dt = document.createElement('dt')
    let dd = document.createElement('dd')

    place = personalInformation.placesLived[i].place
    length = personalInformation.placesLived[i].length

    dt.appendChild(document.createTextNode(place))
    dd.appendChild(document.createTextNode(length))

    dl.appendChild(dt)
    dl.appendChild(dd)
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
