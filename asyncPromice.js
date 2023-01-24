// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const promiceWifeBringingTickets = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve('ticket')
//     },3000);
// });

// const getPopcorn= promiceWifeBringingTickets.then((t) =>{
//     console.log('husband:we should go in');
//     console.log('wife:i am hungry');
//     return new Promise((resolve,reject) =>{
//         resolve(`${t} popcaron`)
//     });
// });

// const getButter= getPopcorn.then((t) =>{
//     console.log('husband:we should go in');
//     console.log('wife:i need buttenr on my popcorn');
//     return new Promise((resolve,reject) =>{
//         resolve(`${t} butter`)
//     });
// });

// const getColdDrinks= getButter.then((t) =>{
//     console.log('wife: i want some cold drinks');
//     console.log('husband: take it and please move')
//     return new Promise((resolve,reject) =>{
//         resolve(`${t} colddirks`)
//     });
// });

// getColdDrinks.then((t) =>{
//     console.log(t);
// })


// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');



    //aync await fn


console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async()=>{
    const promiceWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() =>resolve('ticket'),3000);
    });
    const getPopcorn= new Promise((resolve,reject) => resolve(`popcorn`));

    const getButter= new Promise((resolve,reject) => resolve(`butter`));

    const getColdDrinks= new Promise((resolve,reject) => resolve(`colddriks`));

    let ticket = await promiceWifeBringingTickets;

    console.log('husband:we should go in');
    console.log('wife:i am hungry');

    let popcorn =await getPopcorn;
    console.log('husband:we should go in');
    console.log('wife:i need buttenr on my popcorn');

    let butter = await getButter;
    console.log('husband:now go or not');
    console.log('wife:yes pleasse');

    let colddriks = await getColdDrinks;
    console.log('wife: i want some cold drinks');
    console.log('husband: take it and please move')
    return ticket;
}

preMovie().then((m) =>console.log(m));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');



//promice.all

// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const preMovie = async()=>{
//     const promiceWifeBringingTickets = new Promise((resolve,reject) =>{
//         setTimeout(() =>resolve('ticket'),3000);
//     });
//     const getPopcorn= new Promise((resolve,reject) => resolve(`popcorn`));

//     const getcandy= new Promise((resolve,reject) => resolve(`candy`));

//     const getColdDrinks= new Promise((resolve,reject) => resolve(`colddriks`));

//     let ticket = await promiceWifeBringingTickets;

//     let [popcorn,candy,colddirks] = await Promise.all([getPopcorn,getcandy,getColdDrinks])

//     console.log(`${popcorn},${candy},${colddirks}`);
//     return ticket;
// }

// preMovie().then((m) =>console.log(m));