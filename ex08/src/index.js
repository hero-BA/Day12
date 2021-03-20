var contacts = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"],
  },
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"],
  },
  {
    "firstName": "Richard",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"],
  },
  {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop){
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";

    // Only change code above this line
}

console.log(lookUpProfile("Richard", "likes")); // Change this line
module.exports = lookUpProfile;