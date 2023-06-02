function createUl() {
  // Create Ul Element
  var ulRef = document.createElement("ul"); //<ul>  </ul>

  //create li element
  var li1 = document.createElement("li"); //<li>  </li>
  var li2 = document.createElement("li"); //<li>  </li>
  var li3 = document.createElement("li"); //<li>  </li>
  var li4 = document.createElement("li"); //<li>  </li>

  //Add the data or content inside li
  li1.innerText = "Iphone 14";
  li2.innerText = "Iphone 13 pro";
  li3.innerText = "Iphone 12 Pro max";
  li4.innerText = "Iphone 11 Pro plus";

  //Keep All li's inside ul
  ulRef.appendChild(li1); // <ul><li></li></ul>
  ulRef.appendChild(li2); // <ul><li></li><li></li></ul>
  ulRef.appendChild(li3); // <ul><li></li><li></li><li></li></ul>
  ulRef.appendChild(li4); // <ul><li></li><li></li><li></li><li></li></ul>

  //Add ul inside body
  document.getElementById("root").appendChild(ulRef);
}
