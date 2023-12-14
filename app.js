// could not overwrite previous dom elements, that is why delete is not working.  -_-

let info = [
  "Fahim",
  "Ahmed",
  "018934",
  "Dhaka Cantonment",
  "Rifat",
  "Ahmed",
  "046868",
  "Dhaka City",
  "Mehadi",
  "Hasan",
  "0167934",
  "Dhaka Cantonment",
];
let newInfo = [];

let username;
let surname;
let number;
let address;
let dltCounter = 0;
// username.addEventListener("change", function (event) {
//   info.push(username.value);
//   console.log(info);
// });
$("#name").change(function () {
  username = this.value;
});
$("#surname").change(function () {
  surname = this.value;
});
$("#number").change(function () {
  number = this.value;
});
$("#address").change(function () {
  address = this.value;
});

$("form").submit(function (event) {
  event.preventDefault();
  info.push(username);
  info.push(surname);
  info.push(number);
  info.push(address);
  alert("Information added!");
  let addresses = document.querySelector(".info");
  let newh = document.createElement("p");
  let dlt = document.createElement("button");
  newh.innerText = `Name: ${username}`;
  addresses.append(newh);
  let newp = document.createElement("p");
  newp.innerText = `Surname: ${surname}`;
  addresses.append(newp);
  let newp1 = document.createElement("p");
  newp1.innerText = `Phone Number: ${number}`;
  addresses.append(newp1);
  let newp2 = document.createElement("p");
  newp2.innerText = `Address: ${address}`;
  addresses.append(newp2);
  dlt.innerText = "Delete";
  addresses.append(dlt);
});

let addresses = document.querySelector(".info");
let count = 0;
for (i = 0; i < info.length; i++) {
  if (count === 4) {
    count = 0;
  } else if (count === 1) {
    let newh = document.createElement("p");

    newh.innerText = `Name: ${info[i - 1]}`;
    addresses.append(newh);

    let newp = document.createElement("p");

    newp.innerText = `Surname: ${info[i]}`;
    addresses.append(newp);
  } else if (count === 2) {
    let newp = document.createElement("p");

    newp.innerText = `Phone Number: ${info[i]}`;
    addresses.append(newp);
  } else if (count === 3) {
    let newp = document.createElement("p");
    newp.innerText = `Address: ${info[i]}`;
    addresses.append(newp);
    let dlt = document.createElement("button");

    dlt.innerText = "Delete";
    addresses.append(dlt);
  }
  count++;
}

let search;
let searchedInfo = [];
$("#search").change(function () {
  search = this.value.toLowerCase();
});

let counter = 10;
$("#btn").click(function () {
  for (j = 0; j < info.length; j++) {
    if (info[j].toLowerCase() === search) {
      searchedInfo.push(info[j]);
      counter = 0;
    } else if (counter < 3) {
      searchedInfo.push(info[j]);
      counter++;
    }
    // if (counter === 4) {
    //   break;
    // }
  }

  for (n = 0; n < searchedInfo.length; n += 4)
    if (searchedInfo.length != 0) {
      let addresses = document.querySelector(".result");
      let newh5 = document.createElement("h5");
      newh5.innerText = `Result: `;
      addresses.append(newh5);
      let newh = document.createElement("p");
      newh.innerText = `Name: ${searchedInfo[n]}`;
      addresses.append(newh);
      let newp = document.createElement("p");
      newp.innerText = `Surname: ${searchedInfo[n + 1]}`;
      addresses.append(newp);
      let newp1 = document.createElement("p");
      newp1.innerText = `Phone Number: ${searchedInfo[n + 2]}`;
      addresses.append(newp1);
      let newp2 = document.createElement("p");
      newp2.innerText = `Address: ${searchedInfo[n + 3]}`;
      addresses.append(newp2);
    } else {
      let addresses = document.querySelector(".result");
      let newh = document.createElement("p");
      newh.innerText = `Not Found!`;
      addresses.append(newh);
    }
});

//delete section

let deleteItems = document.querySelectorAll(".info button");
let delCounter = 0;
deleteItems.forEach(function (button, index) {
  button.addEventListener("click", function () {
    dltCounter = index;

    let delCalc = dltCounter * 4 - 4;
    newInfo = [];

    // let dlt = document.createElement("button");

    for (m = 0; m < info.length; m++) {
      if (m >= delCalc && m < dltCounter * 4) {
        continue;
      } else {
        newInfo.push(info[m]);
        let addresses = document.querySelectorAll(".info");
        let newh = document.createElement("p");

        newh.innerText = `${info[m]}`;
      }
    }
    info = [...newInfo];
    console.log(info);
  });
});
