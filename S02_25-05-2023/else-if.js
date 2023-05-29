var details = [
  {
    id: 101,
    name: "Rajiv Shukla",
    experience: 5,
  },
  {
    id: 102,
    name: "Aditya Verma",
    experience: 15,
  },
  {
    id: 103,
    name: "Sneha Patil",
    experience: 2,
  },
  {
    id: 104,
    name: "Zoya Khan",
    experience: 8,
  },
];

function printDesignation(name, experience) {
  if (experience >= 0 && experience <= 2) {
    console.log(name, "is a Junior Developer ");
  } else if (experience >= 3 && experience <= 5) {
    console.log(name, "is a Senior Developer ");
  } else if (experience >= 6 && experience <= 8) {
    console.log(name, "is a Team Lead ");
  } else if (experience >= 9 && experience <= 12) {
    console.log(name, "is a Technical Manager ");
  } else if (experience >= 13) {
    console.log(name, "is a Software Architect ");
  }
}

printDesignation("Sagar", 2);
