// const age = [23, 4, 10, 60, 44];

// const sayMyName = (name) => { alert(`Hello ${name}`) };
// sayMyName('Egzon');


// const race = '100m dash';
// const winners = ['Egzon Gallapeni', 'Filan Fisteku'];
// const vendi = 'Barcelone';
// const win = winners.map((winner, i) => ({ name: winner, race, vendi, place: i + 1 }));

// console.table(win);

// const age = [23, 4, 10, 60, 44];

// const old = age.filter(age => age > 20);
// console.log(old);
// age.sort(function (a, b) {
//     return a - b;
// });
// console.log("sortimi i numrave : " + age);


// const div = document.createElement('div');
// let text = document.createTextNode("Tutorix is the best e-learning platform");
// div.appendChild(text);
// console.log(div.outerHTML);

// const old = age.filter(age => age > 20);
// console.log(old);


// function calculateBillTotal(total, tax = 0.13, tip = 0.15) {
//     return total + (total * tax) + (total * tip)
// }

// const totalBill = calculateBillTotal(100);
// console.log(totalBill);



// const items = Array.from(document.querySelectorAll('[data-time]'));

// const filtered = items.filter(item => item.textContent.includes('Flexbox'))

//     .map(item => item.dataset.time)
//     .map(timecode => {
//         const parts = timecode.split(':').map(part => parseFloat(part));
//         return (parts[0] * 60) + parts[1];
//     }).reduce((totalTime, seconds) => totalTime + seconds, 0);

// timeOnMinute = filtered / 60;

// console.log("Total jan " + Math.round(timeOnMinute) + " minuta");



// <body>
//     <ul>
//         <li data-time="7:50">Flexbox</li>
//         <li data-time="8:50">Flexbox</li>
//         <li data-time="4:25">Flexbox</li>
//         <li data-time="6:45">Flexbox</li>
//         <li data-time="5:20">Grid</li>
//     </ul>
//     <script type="text/javascript">
//         const person = { name: 'Egzon', mbiemri: 'Gallapeni' };

//         const markup = `
//         <div class="b">
//             <h2>
//                 Emri eshte  ${person.name} dhe mbiemri ${person.mbiemri}
//             </h2>
//         </div>

//         `;

//         document.body.innerHTML = markup;


//     </script>
//     <script type="text/javascript" src="scipt.js"></script>
// </body>



// const dogs = [
//     { name: 'Hulk', age: 3, location: 'Russian' },
//     { name: 'Shepard', age: 5, location: 'German' },
//     { name: 'Snowden', age: 2, location: 'Italy' }
// ];

// const markup = `
//     <ul class="dogs">
//         ${dogs.map(dog => `
//     <li>${dog.name} is ${dog.age * 7} years old and they are from ${dog.location}</li>`).join('')
//     }

//     </ul >

// `;

// document.body.innerHTML = markup;

// const song = {
//     name: 'Dying to live',
//     artist: '2pac',
//     featuring: 'Biggie Smalls'
// };


// const markup = `
//     <h1>Song name is ${song.name}</h1>
//     <h3>Song artist is ${song.artist}</h3>
//     ${song.featuring ? `(Featuring  ${song.featuring})` : ''}`;



// document.body.innerHTML = markup;


// const beer = {
//     name: 'Peja',
//     blew: 'Blewing',
//     keywords: ['une', 'ti', 'ne']
// };
// function renderKeywords(keywords) {
//     return `
//             ${keywords.map(keyword =>
//         `<ul><li>${keyword}</li></ul>`
//     ).join('')}
//         `;
// }

// const markup = `<h1>${beer.name} is the vendor of Restaurant</h1>
//                 <h2>${beer.blew} </h2>
//                 ${renderKeywords(beer.keywords)}`;


// document.body.innerHTML = markup;





// function highlight(strings, ...values) {
//     let str = "";
//     strings.forEach((string, i) => {
//         str += `${string}<span>${values[i] || ''}</span>`
//     });
//     return str;
// }

// const name = "Hulk";
// const age = 2;

// const sentence = highlight`My dog name is ${name} and he is ${age}`;

// document.body.innerHTML = sentence;


// const dict = {
//         HTML: 'HyperText Markup Language',
//         CSS: 'Cascading stylesheet',
//         JS: 'Javascript'
//     };

//     function addAbbreavetion(strings, ...values) {
//         const abbreviated = values.map(value => {
//             if (dict[value]) {
//                 return `<abbr title="${dict[value]}">${value}</abbr>`
//             }

//             return `${value}`;
//         });

//         return strings.reduce((sentence, string, i) => {
//             return `${sentence}${string}${abbreviated}`;
//         }, '');
//     }

//     const first = 'Egzon';
//     const second = 'Gallapeni';
//     const sentence = addAbbreavetion`Hello my fullname is ${first} ${second} and
//         i love to code in ${'HTML'} , ${'CSS'} and ${'JS'}`;

//     const bio = document.querySelector('.bio');
//     const p = document.createElement('p');
//     p.innerHTML = sentence;
//     bio.appendChild(p);


//SAnitizng:

// function sanitize(strings, ...values) {
//         const dirty = strings.reduce((prev, next, i) =>
//             `${prev}${next}${values[i] || ''}`, '');
//         return DOMPurify.sanitize(dirty);
//     }

//     const first = 'Egzon';
//     const aboutMe = `I love coding <img src="index.jpg" alt="img" alert('you have been hacked')`;

//     const html = sanitize`<h3>${first}</h3>
//                         <p>${aboutMe}</p>`;

//     const bio = document.querySelector('.bio');
//     bio.innerHTML = html;



//Kontrollimi i inputit nga useri me DOMPurify;
// npm install dompurify;

//     Kontrollimi i charactereve me build in functions

// const flightNumber = '20-BCCC123';
// const account = '5421025622';

// a = course.startsWith('JF');
// b = flightNumber.startsWith('C1', 5);
// c = course.endsWith('B1');
// d = flightNumber.endsWith('-B');
// e = course.includes('F');
// f = flightNumber.includes('RT');
// g = course.repeat(5);

// console.log(g + " ->");


//Regex ne js :
// const string = 'we are gonna check this with regex';
// const regex = /gonna [a-z]+/;
// const match = regex.exec(string);
// console.log(match);
//loopat-

// const peoples = ['Egzon', 'Filan', 'Fisteku'];
// a = document.querySelectorAll('.bio');

// for (const people of peoples) {
//     console.log(people);
// }

// for (const people of peoples.entries()) {
//     console.log(people[0], people[1]);
// }
// Destruktimi ne loop-en for of
// for (const [i, people] of peoples.entries()) {
//     console.log(`${people} is ${i + 1}`);
// }

// const name = 'Egzon';
// for (char of name) {
//     console.log(char);
// }


//EVent listener me loopen for
//const ps = document.querySelectorAll('p');
// // console.log(ps);
// for (const paragrapf of ps) {
//     paragrapf.addEventListener('click', () => {
//         console.log('Paraf was selected');
//     })
// }



// for (clothe in clothes) {
//     console.log(clothe);
//     const values = clothes[clothe];
//     console.log(values);
// }


// for (const cloth of Object.keys(clothes)) {
//     console.log(cloth + ": " + clothes[cloth]);
// }

//lopp for of with entity
// const obj1 = {
//     a: 'First value',
//     b: 'Second value'
// }

// for (const [key, value] of Object.entries(obj1)) {
//     console.log(`${key} and value is ${values}`);
// };



// const ps = document.querySelectorAll('p');
// let names = ['A', 'B', 'c'];



//Loop for
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//loop foreach

// names.forEach((person) => {
//     console.log(person);
// })

//loop for in
// for (const name in names) {
//     console.log(names[name]);
// }

// const clothes = {
//     color: 'red',
//     size: 'medium',
//     stock: 20
// }


// const people = document.querySelectorAll('.bio p');
//  console.log(people);
// const peopleasarray = Array.from(people);
//  console.log(peopleasarray);
//  const names = peopleasarray.map(person => person.textContent);
//  console.log(names);
// const peoplearr = Array.from(people, person => { return person.textContent });
// console.log(peoplearr);




//me function me i marr argumentet me i ba array qe i mbledh me reduce
// function sumAll() {
//     const nums = Array.from(arguments);
//     return nums.reduce((prev, next) => prev + next, 0);
// }
// let a = sumAll(15, 15, 15, 10, 12);
// console.log(a);


//aaray of
// const age = Array.of(5, 4, 2, 5, 6);
// console.log(age);

//array find

// posts = [{
//     number: 5,
//     id: 2,
//     content: 'Shaolin'
// },
// {
//     number: 2,
//     id: 4,
//     content: 'Gang'
// },
// {
//     number: 2,
//     id: 9,
//     content: 'Gang Gang shaolin'
// }];

// const user = posts.find(post => {
//     // console.log(post);
//     if (post.id != 2) {
//         return 'su gjet';
//     }
//     return false;
// })
//find tek arrayit e gjen vetem te parin dhe e paraqet
//per me i gjet me shume se 1 duhet filter ne nje array
// idp = 9;
// const post = posts.find(post => post.id == idp);


//perdorimi i filter qe te gjejm me shume se 1 element
// const postwithfilete = Array.from(posts);
// const postwithfileter = postwithfilete.filter(post => post.id = idp);
// console.log(post);
// console.log(postwithfileter);

// console.log(user);


//const postwithfilete = Array.from(posts);
// console.log(postwithfilete);
// postwithfilete.forEach(post => {
//     console.log(post);
//     const postIndex = posts.findIndex(post => post.id = idp);
//     console.log(postIndex);
// })


//Perdorimi i some dhe every tek arrayit
// const ages = [15, 20, 22, 44];
// const oldenoough = ages.some(age => age > 53);
// console.log(oldenoough);

// const allareoldenoug = ages.every(age => age > 18);
// console.log(allareoldenoug);


// const taste = ['deep dish', 'pepe'];
// const special = ['meat', 'cheese'];

// taste.push(...special);
// console.log(taste);

// const deepBish = {
//     pizza: 'Napoli',
//     ingridients: ['cheese', 'kackaval', 'tomato sos']
// }
// const shoppingList = ['Milk', 'Flour', ...deepBish.ingridients, 'Ketchup'];
// console.log(shoppingList);

//USING FINDINDEX TO FIND THE PAIR OF CONDITION AND USING SPLICE FROM 0 TILL THAT ITEM AND FROM THAT ITEM TILL THE END OF IT
// const comments = [{ id: 2010, text: 'A week ago', year: 1790 },
// { id: 2015, text: 'A month ago', year: 1990 },
// { id: 2022, text: 'A year ago', year: 1585 }];
// const year = 1990;
// const RequiredYear = comments.findIndex(comment => comment.year = year);
// const Verifiedyear = [...comments.slice(0, RequiredYear), ...comments.slice(RequiredYear + 1)];
// console.log(Verifiedyear);

//using spread operator to merge 2 arrays into a new one
// const inventory = ['Newton', 'Einstain', 'Tesla'];
// const newInventory = ['Musk', 'Job'];
// inventory.push(...inventory);
// console.log(inventory);

// const fullname = ['Egzon', 'Gallapeni', 1994];
//using spread to when u give function parameters to give as array using ...
// function sayHi(first, last, year) {
//     alert(`Hey there from ${first} ${last} and i was born in ${year}`);
// }
// sayHi(...fullname);



//Rest Params
// function convertCurrency(rate, tax, tip, ...amounts) {
//      console.log(rate + ' rate ', tax + ' tax ', tip + ' tip ');
//      var sum = amounts.reduce(function (a, b) { return a + b; }, 0);
//         console.log('shuma eshte '+ sum);

//     return amounts.map(amount =>

//         amount * rate
//     );

//  }

//const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
// console.log(amounts);

// let sum = 0;
// amounts.forEach(value => {
//     sum += value;
// })


//when using object literal upgrade and u want to make an object of values if value and key have same name u can
// writte only one of them and followed by , .

// const first = 'Hulky';
// const last = 'Russian';
// const age = 5;
// const breed = 'King Charly';

// const dog = {
//     firstName: first,
//     last,
//     age,

// }
// console.log(dog);


// Old way of making a new object using key and value as variables

// const key = 'pocketColor';
// const value = '#ff12ga';

// const tShirt = {
//     [key]: value
// };
// console.log(tShirt);

//New way of making object using the variables (dynamically
//second parameter inventColor-> can be also variable or function
// const key = 'pocketColor';
// const value = '#ff12ga';
// const inventColor = 'red';

// const tShirt = {
//     [key]: value,
//     [`${key}-opposite`]: `${inventColor}`
// };
// console.log(tShirt);

//merge of two arrays with same indexes

// const key = ['size', 'color', 'weight'];
// const values = ['m', 'red', '10kg'];

// const jacket = {
//     [key.shift()]: values.shift(),
//     [key.shift()]: values.shift(),
//     [key.shift()]: values.shift()
// }
// console.log(jacket);


//infity and - infinity
// a = 100 / 0;
// console.log(a);
// b = 100 / -0;
// console.log(b);

// Promises
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = 2;
//         if (a = 2) {
//             resolve('succes sepse a eshte 2 ');
//         }
//         else {
//             reject('failed sepse a nuk eshte 2')
//         }

//     }, 5000);

// });
// console.log('a ');
// p.then(msg => {
//     console.log(msg);
// }).catch(err => {
//     console.error(err);
// });

// console.log('b');



// const posts = [{ title: 'i love js ', author: 'Egzon', id: 1 },
// { title: 'CSS', author: 'Chris', id: 2 },
// { title: 'Dev Tool', author: 'Jimmy', id: 3 },
// { title: 'Full-stack ', author: 'Endrit', id: 4 }
// ];

// const authors = [{ name: 'Egzon', twitter: '@egzonn1', bio: 'albanian' },
// { name: 'Chris', twitter: '@chris', bio: 'italian' },
// { name: 'Dev Tool', twitter: '@devjimmytool', bio: 'german' }
// ];

// function getPostById(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const post = posts.find(post => post.id == id);
//             if (post) {
//                 resolve(post);
//             }
//             else {
//                 reject(Error('No Post was found with that id '));
//             }
//         })
//     });
// }

// function hydrateAuthor(post) {
//     return new Promise((resolve, reject) => {
//         const authorDetails = authors.find(author => author.name == post.author);
//         if (authorDetails) {
//             post.author = authorDetails;
//             resolve(post);
//         }
//         else {
//             resolve(post);
//         }
//     });
// }
// getPostById(4).then(post => {
//     return hydrateAuthor(post);
// }).then(post => {
//     console.log(post);
// }).catch(err => {
//     console.log(err);
// })

// <div class="bio">
//         <p>
//                 Hello world
//         </p>
//         <p>
//                 Well
//         </p>
//         <p>
//                 Lets see
//         </p>
// </div>

 // Using of promise and chaining two of them 
            // const weather = new Promise(resolve => {
            //     setTimeout(() => {
            //         resolve({ temp: 29, condtion: 'Sunny Cloud' })
            //     }, 400);
            // });

            // const tweets = new Promise(resolve => {

            //     resolve(['i like cake', 'bbq is good']);

            // });

            // Promise.all([weather, tweets])
            //     .then(responses => {
            //         console.log(responses);
            //         const [weatherInfo, twetInfo] = responses;
            //         console.log(weatherInfo, twetInfo)
            //     });

        //     < !-- < p class="w-25" >
        // Paragrafi i pare dhe i fundit
        // </p >
        // <p class="alert alert-danger">
        //         Here we go
        // </p>

