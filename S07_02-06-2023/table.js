var details = [
  {
    image:
      "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    name: "Shiv Pandey",
    gender: "male",
    city: "Bhopal",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
    name: "Ayushi Verma",
    gender: "female",
    city: "Delhi",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    name: "Rohan Sharma",
    gender: "male",
    city: "Pune",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    name: "Shiv Pandey",
    gender: "male",
    city: "Bhopal",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
    name: "Ayushi Verma",
    gender: "female",
    city: "Delhi",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
    name: "Rohan Sharma",
    gender: "male",
    city: "Pune",
  },
];

function createTrs(tbody) {
  details.forEach((ele) => {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    var img = document.createElement("img");
    img.src = ele.image;
    img.width = "100";
    img.height = "100";

    td1.appendChild(img);
    td2.innerText = ele.name;
    td3.innerText = ele.gender;
    td4.innerText = ele.city;

    tbody.appendChild(tr);
  });
}

function createTable() {
  document.getElementById("radios").style.display = "block";

  //create table element
  var table = document.createElement("table");

  //create thead and tbody
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");

  //create tr for thead
  var tr1 = document.createElement("tr");

  //create th for tr1
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");

  //Add content in th1 to th4
  th1.innerText = "IMAGE";
  th2.innerText = "NAME";
  th3.innerText = "GENDER";
  th4.innerText = "CITY";

  //append th1 to th4 in tr1
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  tr1.appendChild(th4);

  //append tr1 in thead
  thead.appendChild(tr1);

  thead.style.backgroundColor = "black";
  thead.style.color = "white";

  createTrs(tbody);

  //append thead and tbody as a child to table
  table.appendChild(thead);
  table.appendChild(tbody);

  //Configure frame,width and rule attribute for table
  table.frame = "box";
  table.rules = "all";
  table.width = "800px";
  table.style.marginTop = "50px";

  //append table inside body as child
  document.getElementById("body").appendChild(table);
}
