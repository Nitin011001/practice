'use strict';
/*
const names = document.querySelector('.names');
const Nmae = ['Nitin', 'rahul', 'KAshish', 'aditya', 'selmon'];
// Nmae.forEach(function (name,i) {
//   setInterval(function () {
//     names.textContent = `${Nmae[i]}`;
//   }, 2000);
// });
// Nmae.forEach(function (name) {
//     names.textContent = `${setInterval(function () {
//     name
//   }, 100)} learn javascript`;

// });

// const watch=setInterval(function () {
//   const now = new Date();
// const option = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
//  console.log( new Intl.DateTimeFormat('en-US', option).format(now));
// }, 1000);
// console.log(watch);

// ------------------------------------------replace string by time-----------------------------------
// ------------------------------------------------------------------------
//=============================================================================
// const replace=setInterval(function(){
// Nmae.forEach(function(name,i){names.textContent=`please ${Nmae[i]} Learn html css jS`})},2000);

// let i = 0;
// const timer = setInterval(function () {
//   names.textContent = `please ${Nmae[i++]} learn html,css and js`;
// }, 1000);
//=====================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++
// let arr=[];
// for(let i=0;i<31;i++){
//     if(i%2===1){
// arr.push(i)}
// }
// let n=1;
// for(let i=0;i<arr.length;i++){
//     console.log(`${arr[i]} ${arr[i+n]}`)
// }
// ------------------SPREAD OPERator__________------------

// const spreadArray = [...arr];
// const spreadObject = { ...Name };
// console.log(spreadArray);
// console.log(spreadObject);
// // ============REST OPERATOR+++++++++++++++++++++++
// const [...spreadArray3] = [ ...arr[arr.length - 2]];
// console.log(spreadArray3);
// const {...address}=Name.address;
// console.log(address);
// ---------------------rest parameter-------------------
// const number=[1,2,3,34,4,55,566]
// const add=function(sum,...number){
//     console.log('sum',sum)
//     console.log('number',number)
// }
// // ---------------short cuirting-----------------------------
// // Or return true value

// const Name2=Name.name==='Niitn'||'Nitin';
// // const Name2=Name.name==='Niitn'?Name.name==='Nitin':'Singh'
// console.log(Name2)

// // ANd return falsy value
// console.log(Name.name==='Niitn'&&Name.name==='Niitn')

// // ---------------------nullish operator--------------------------------
// const NameCorrect=Name.name??'Niitn'
// console.log(NameCorrect)

const arr = [
  'a',
  'b',
  1,
  2,
  4,
  true,
  2.44,
  [1, 2, 3, 4, [4, 6]],
  { name: 'Nitin', lastName: 'chauhan' },
];
const details = ['Name', 'LastName', 'Address', 'Company'];
const Name = {
  [details[0]]: { firstName: 'Niitn' },
  [details[1]]: { middleName: 'singh', lastName: 'Chauhan' },
  [details[2]]: {
    unit: 1302,
    st: 'hurontario',
    city: 'Missisauga',
  },
  [details[3]]: {
    field: 'computer Science',
    status: 'ongoing',
    employee: {
      WDC: 50000,
      SDC: 4000,
    },
  },
};
const rest1 = { name: 'cpri', numGuest: 20, owner: 'n' };
const rest2 = { name: 'singhRes', owner: 'givon' };
// -------------------OR assignment operator----------------
// rest1.numGuest=rest1.numGuest||10;
// rest2.numGuest=rest2.numGuest||10;
console.log((rest1.numGuest ||= 10));
console.log((rest2.numGuest ||= 10));
//--------------------And assignment operator-----------------
console.log((rest1.owner &&= 'nitin'));
console.log((rest2.owner &&= 'nitin'));

console.log(rest1);
console.log(rest2);
// -----------------------for-of loop------------------
const Arr = [{ Name: 'Nitin' }, 'Singh', 'Chauhan', 'Rahul', 'Dagar'];
// for (let i = 0; i < Arr.length; i++) console.log(Arr[i]);//normal for loop
for (const i of Arr) {
  console.log(i);
}
// for-of loop to give an array of element with index number each
for (const i of Arr.entries()) {
  console.log(i);
}
// for-of loop to return the element with index number
for (const [index, element] of Arr.entries()) {
  console.log(`${index + 1}:${element}`);
}
console.log(Name);
// --------------optional chaining----------------------------
if (Name.Company && Name.Company.employee)
  console.log(Name.Company.employee.WDC); //writing this in if statement

console.log(Name.Company.employee?.WDC); //optional chaining
// for methods
console.log(Name.address?.car ?? 'Method not exist');
// for array
console.log(Arr[0]?.Name ?? 'arra');
// ---------looping over object keys,values and entries-----------
// ----------------------object.key()-------------------------
for (const employee of Object.keys(Name.Company)) {
  console.log(employee);
}
//----------------------object.values()------------------------
for (const details of Object.values(Name)) {
  console.log(details);
}
// ----------------------object.entries()-----------------------
for (const both of Object.entries(Name)) {
  console.log(both);
}
const entries = Object.entries(Name);
// ------------all in one obejct properties-------------------
for (const [keys, { value1, value2 }] of entries) {
  console.log(`${keys} and ${value1} ${value2}`);
}
// --------------sets--------------------------
const orderSet = new Set([
  'Nitin',
  'Nitin',
  'Nitin',
  'Nitin',
  'Singh',
  'Chauhan',
  'Rahul',
  'Dagar',
  'Kashish',
]);
console.log(orderSet);

console.log(orderSet.has('Nitin'));
console.log(orderSet.add('selmon'));
console.log(orderSet.delete('selmon'));
console.log(orderSet.clear());
// --------------------Maps----------------------------------
const rest = new Map();
rest.set(2465, 'hurontario'),
  rest.set('Name', 'Nitin'),
  rest.set('country', 'canada'),
  rest.set('company', 'YouRArt'),
  rest.set('street', 2465).set('indian', true);
console.log(rest);
console.log(rest.delete('indian', rest.has(2465, 'hurontario')));
console.log(rest);
// -------------------------Map iteration---------------------
const question = new Map([], [], [], []);
const NewMap = new Map(Object.entries(Name));
console.log(NewMap);
// ------------------------higher function-------------
const OneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
const transform = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`tranformed string: ${fn(str)}`);
  console.log(`Transformed string: ${str}`);
};
transform('JavaScript is the best', upperFirstWord);
// -----------------function returning other function------------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
};
const greeting = greet('hey');
greeting(' Nitin');
//-------------------arrow function------------------
const greetA = greeting => name => console.log(`${greeting},${name}`);
// --------------------bind method----------------------
// bind the property of one object with other object
const addTax = (rate, value) => value + value * rate;

const addHst = addTax.bind(null, 0.13);
console.log(addHst(1300));
// ----------------------Array Methods--------------------------------
const NewArr = [
  'Nitin',
  'Singh',
  1,
  2,
  4,
  5,
  2.44,
  true,
  { Name: 'Nitin', class: 10 },
  ['learn', 'JavaScript'],
];
console.log(NewArr.slice(3));
console.log(NewArr.slice(1, 8));
console.log(NewArr.slice(-2));
// console.log(NewArr.slice(0).concat(NewArr.splice(0).reverse()));
// console.log(NewArr.reverse());
console.log(NewArr.join(' '));
console.log(NewArr.at('Nitin'));
// ---------------------looping Array----------------------------
console.log('----------------looping Array----------------');
NewArr.forEach(function (currentElement, indexNumber) {
  console.log(`${indexNumber}:${currentElement}`);
});
const list = function () {
  rest.forEach(function (values, keys) {
    return `${keys}:${values}`;
  });
};
// names.insertAdjacentHTML('afterbegin',list)

// --------------------map method----------------------------
console.log('--------------------map method----------------------------');
const Inr = 59.01;
const cad = [45, 600, 3345, 2345, 567, 678, 234, 678000, 789090];
const convertCADtoInr = cad
  .map(function (dollar, i) {
    return `coversion${
      i + 1
    }:CAD ${cad[i]} is equal to ${Math.trunc(dollar * Inr)} rupees`;
  })
  .forEach(function (conv) {
    console.log(conv);
  });
// --------------------filter method-----------------------------
console.log('--------------------filter method-----------------------------');
const filteCad = cad
  .filter(function (mov) {
    return mov > 1000;
  })
  .forEach(function (mov) {
    console.log(`${mov} is value greater than 1000`);
  });
console.log('--------------------reduce Method--------------------');
const totalvalue = cad.reduce(function (acc, mov) {
  return acc + mov;
}, 0);
console.log(
  `total dollar ${totalvalue} and also it is equal to ${Math.trunc(
    totalvalue * Inr
  )} rupees`
);
console.log('------------------chaining all the methods------------');
const chaining = cad
  .filter(mov => mov > 1000)
  .map(mov => mov * Inr)
  .reduce((acc, mov) => acc + mov, 0);
console.log(chaining);
console.log('------------------find Method------------------------');

const find = cad.find(mov => mov === 600);
console.log(find);
console.log('-------------------findIndex-------------------------');
console.log('almost the same way like find method but it returns index number');
console.log('-----------------------flat and flatMap----------------------');
const consArr = [1, 2, 3, 4, 5, 6, , 7, 8, , 9, 0, 1, 2, 5];
console.log(consArr.flat(3));
console.log(consArr.flatMap(value => value * 2));
console.log('---------------sorting---------------------');
console.log(`${consArr.sort((a, b) => a - b)} ascending order`);
console.log(`${consArr.sort((a, b) => b - a)} decending order`);
console.log('---------------array mixed method-----------------');
const movements = [222, 30033, [42345, -3456], -567, -89754, 30456.34];
const calcMov = movements
  .flatMap(acc => acc)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(calcMov);
const numDeposite1000 = movements
  .flatMap(acc => acc)
  .reduce((count, cur) => (cur > 1000 ? ++count : count), 0);
console.log(numDeposite1000);
const sums = movements
  .flatMap(acc => acc)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposit += cur) : (sums.withdrawal += cur);
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(sums);
console.log('----------------intl---------------');
const now = new Date();
const option = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  Year: 'numeric',
  weekday: 'long',
};
console.log(new Intl.DateTimeFormat('en-US', option).format(now));
const newNum = 2222.22;
const options = { style: 'currency', unit: 'celsius', currency: 'EUR' };
console.log('US:',new Intl.NumberFormat('en-US').format(newNum))
// L.mapquest.key = 'OHaA49oWBGulUJSMs0ryPKbnEcQbKUJq';
// var baseLayer = L.mapquest.tileLayer('dark');

// const map = L.mapquest.map('map', {
//   center: [53.480759, -2.242631],
//   layers: L.mapquest.tileLayer('map'),
//   zoom: 12,
// });
// L.marker([53.480759, -2.242631], {
//   icon: L.mapquest.icons.marker({
//     primaryColor: '#22407F',
//     secondaryColor: '#3B5998',
//     shadow: true,
//     size: 'md',
//     symbol: 'A'
//   })
// })
// .bindPopup('This is Manchester!')
// .addTo(map);
// --------------------weather forecast------------------------
$.getJSON(
  'https://api.openweathermap.org/data/2.5/weather?q=Ontario&units=imperial&APPID=6e729b9d906e8e62324e1d83646f6ac6',
  function (data) {
    console.log(data);

    var icon =
      'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var temp = Math.trunc(data.main.temp);
    var weather=data.weather[0].main
    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.weather').append(weather)
  }
);
// -------------------------mapquest API----------------------
L.mapquest.key = 'OHaA49oWBGulUJSMs0ryPKbnEcQbKUJq';


// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 12,
});
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Manchester!')
.addTo(map);

console.log(map);
console.log(L);
console.log();
// -----------------------new york times-----------------------------
// Defining a baseURL and key to as part of the request URL

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'pwQS5KUqMXZSj1OJ0od3UADDYfN9EZnD';

// Grab references to all the DOM elements you'll need to manipulate
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// Event listeners to control the functionality
searchForm.addEventListener('submit', submitSearch);

function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();

  // Assemble the full URL
  let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}&fq=document_type:("article")`;

  if (startDate.value !== '') {
    url = `${url}&begin_date=${startDate.value}`;
  }

  if (endDate.value !== '') {
    url = `${url}&end_date=${endDate.value}`;
  }
}
const BankAcc = function (AccountName, AccountNumber, Pin, movements) {
  this._AccountName = AccountName;
  this.AccountNumber = AccountNumber;
  this.Pin = Pin;
  this.movements = [];
};
BankAcc.prototype.deposits = function (move) {
  return this.movements.push(move);
};
BankAcc.prototype.withdraw = function (mov) {
  return this.deposits(-mov);
};
BankAcc.prototype.Balance = function () {
  return this.movements.reduce((acc, mov) => acc + mov, 0);
};
const Nitin = new BankAcc('NitinSingh', 9650891311, 1234);
console.log(Nitin);
Nitin.deposits(300);
console.log(Nitin);
Nitin.withdraw(300);
console.log(Nitin);
console.log(Nitin.Balance());
console.log(Nitin._AccountName);

// ------------------es6 classes---------------------------------------------------
class BankAccCL {
  constructor(AccountName, AccountNumber, Pin, movements) {
    this.AccountName = AccountName;
    this.AccountNumber = AccountNumber;
    this.Pin = Pin;
    this.movements = [];
    this.langugage = navigator.language;
    console.log(
      `Thanks for create the account in our Bank ${this.AccountName}`
    );
  }
  deposits(mov) {
    return this.movements.push(mov);
  }
  withdraw(mov) {
    return this.deposits(-mov);
  }
  Balance() {
    return this.movements.reduce((acc, mov) => acc + mov, 0);
  }
  approveLoan() {
    return true;
  }
  requestLoan(mov) {
    if (this.approveLoan(mov)) {
      this.deposits(mov);
      console.log('loan is approved!!!');
    }
  }
  Branch(name) {
    if (name === 'IND') console.log('Your branch is in India');
    else if (name === 'CAD') console.log('Your branch is in CANADA');
    else console.log('YOur branch is in United State of America');
  }
}
const NitinSingh = new BankAccCL('Nitin singh chauhan', 1234567, 1234);
console.log(NitinSingh);
NitinSingh.deposits(900);
console.log(NitinSingh);
NitinSingh.withdraw(1);
console.log(NitinSingh.movements);
NitinSingh.requestLoan(900000);
console.log(NitinSingh.movements);
console.log(NitinSingh);
NitinSingh.deposits(NitinSingh.Balance());
console.log(NitinSingh.movements);
NitinSingh.Branch('IND');
// -------------------------------------------Object.create---------------------------------------------
const Steve = Object.create(BankAccCL);
console.log(Steve);

const StevePro = Object.create(BankAcc);
console.log(StevePro);

//------------------------------------inheritance of classes----------------------------------------------

class BankAccCL {
  #movements;
  constructor(AccountName, AccountNumber, Pin) {
    this.AccountName = AccountName;
    this.AccountNumber = AccountNumber;
    this.Pin = Pin;
    this.#movements = [];
    this.langugage = navigator.language;
    console.log(
      `Thanks for create the account in our Bank ${this.AccountName}`
    );
  }
  deposits(mov) {
    return this.#movements.push(mov);
  }
  withdraw(mov) {
    return this.deposits(-mov);
  }
  Balance() {
    return this.#movements.reduce((acc, mov) => acc + mov, 0);
  }
  approveLoan() {
    return true;
  }
  requestLoan(mov) {
    if (this.approveLoan(mov)) {
      this.deposits(mov);
      console.log('Loan is approved!!!');
    }
  }
  Branch(name) {
    console.log(`this is now your ${name} Branch Name`);
  }
}

class Account extends BankAccCL {
  constructor(AccountName, AccountNumber, Pin, movements, Address) {
    super(AccountName, AccountNumber, Pin, movements);
    this.Address = Address;
  }
}
const sanjay = new Account(
  'Sanjay sharma',
  1234567,
  123,
  [],
  '2465 hurontario st'
);

sanjay.deposits(900);
console.log(sanjay.movements);
sanjay.withdraw(8);
console.log(sanjay.movements);
sanjay.requestLoan(45678);
console.log(sanjay.movements);
console.log(sanjay.AccountNumber);
console.log(sanjay);
// -------------------------------website Project--------------------------------
const btnopen = document.querySelector('.fa-bars');
const btnclose = document.querySelector('.fa-times');
const navLinks = document.querySelector('.nav-links');
const about = document.querySelector('.About');
btnopen.addEventListener('click', function () {
  navLinks.style.right = '0';
});
btnclose.addEventListener('click', function () {
  navLinks.style.right = '-200px';
});
document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();

  about.classList.toggle('hidden');
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// ---------------------------color transition on hover--------------------------------------
const h3 = document.querySelectorAll('h3');
const span = document.querySelectorAll('span');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
const randomrgb = function () {
  this.style.color = `rgb(${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )}, ${randomInt(0, 255)})`;
};
// h1.forEach(h => h.addEventListener('onload', randomrgb));
h3.forEach(h => h.addEventListener('mouseenter', randomrgb));
span.forEach(spa => spa.addEventListener('mouseenter', randomrgb));

// ------------------------changing color by time----------------------------------

const h1 = document.querySelector('.title');
const getRandomColor = function () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = function () {
  h1.style.color = getRandomColor();
};
setInterval(changeColor, 1000);

// ---------------------------------cards trasition------------------------------
const courseCard = document.querySelectorAll('.course-col');


//  rating star
//-----------------------unfinished--------------------------------
/*const star = [...document.querySelectorAll('.star')];
star.map(str => {
  str.addEventListener('click', function () {
    let i = star.indexOf(str);
    if (str.classList.contains('fa-star-o')) {
      for (let i; i >= 0; --i) {
        star[i].classList.add('fa-star');
        // star[i].classList.remove('fa-star-o');
      }
    } else {
      for (let i; i < star.length; ++i) star[i].classList.add('fa-star-o');
    }
  });
});*/

//--------------------------DataStructure------------------------------------------------------------------

const restaurant = {
  name: 'TRD Restaurant',
  location: '2465 hurontario street, missisauga,ontario',
  categories: ['Sweet', 'Spiecy', 'veg', 'non-veg'],
  starterMenu: ['rosogulla', 'paneer tikka', 'butter-chicken', 'rassmalai'],
  mainMenu: ['paneer pizza', 'momos', 'biryani'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: { open: 12, close: 22 },
    sat: { open: 12, close: 22 },
  },
  date: new Date(),
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = this.date,
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious butter chicken ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};
// ----------------------------REST Operator-----------------------------------
// spread is at the right side of the =
const arr = [1, 2, ...[3, 4]];

// Rest, because it is left hand side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b, others);

const [paneer, , mos, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(paneer, mos, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

/*
//////////////////////////////////////////////
//spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'lessanMasala'];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Nitin';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Chauhan`)//this is not place for  spred operator

// const ingredients = [
//   prompt("let's make butter chicken Ingredient 1"),
//   prompt('Ingredient2'),
//   prompt('Ingredient3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Object with spread operator

const newRestaurant = { FoundedIn: 1998, ...restaurant, founder: 'Nitin' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'NN';
console.log(restaurantCopy.name);
console.log(restaurant.name);
restaurant.orderDelivery({
  time: '22:30',
  address: '2470 shoppers',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: '2222 lakeshore',
  starterIndex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variable

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

// Nested Destructuring
const nested = [2, 4, [22, 34, 53], 24, 56, 77];
const [a1, , [a2]] = nested;
console.log(a1, a2);
//default values
const [p=1,q=1,r=1]=[8,9]
console.log(p,q,r)*/
