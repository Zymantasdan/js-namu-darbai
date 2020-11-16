// console.log(889234);
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis


// const x = 5;
// const y = 8;
// const tiesa ='pomidoras';
// const netiesa ='Bandykite kitą kartą.'

// if (x < y) {
//     console.log(tiesa);
    
// } else { 
//     console.log(netiesa);
// }

// kuris mažesnis

// const x = 5;
// const y = 8;
// const tiesa ='pomidoras';
// const netiesa ='Bandykite kitą kartą.'


// if (x < y) {
//     console.log(tiesa);
// } else {
//     console.log(netiesa);
//  }


// ar jie lygūs

// const x = 13;
// const y = 13;
// const tiesa ='pomidoras';
// const netiesa ='Bandykite kitą kartą.'

// if (x == y) {
//     console.log(tiesa);

// } else {
//     console.log(netiesa);
// }

// ar jie nelygūs

// const x = 7;
// const y = 3;
// const tiesa ='pomidoras';
// const netiesa ='Bandykite kitą kartą.'

// if (x !== y) {
//     console.log(tiesa);
    
// } else {
//     console.log(netiesa);
    
// }

// kuris didesnis arba lygus


// const x = 7;
// const y = 7;
// const tiesa ='pomidoras';
// const netiesa ='Bandykite kitą kartą.'

// if (x <= y) {
//     console.log(tiesa);
    
// } else {
//     console.log(netiesa);
    
// }

// Išvesti teksto tipo kintamųjų ilgius


const tekstas1 ='Išvesti teksto tipo kintamųjų ilgius';
const tekstas2 ='Tipo kintamųjų ilgius';

console.log(tekstas1.length);
console.log(tekstas2.length);

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius : 
// kuris didesniskuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

const tekstoIlgis = tekstas1.length;
console.log(tekstoIlgis);
const tekstoIlgis2 = tekstas2.length;
console.log(tekstoIlgis2);


if (tekstoIlgis > tekstoIlgis2) {
    
    console.log('ilgesnis teksts - ' + tekstas1);
    
} else {
    console.log('ilgesnis tekstas - ' + tekstas2);
    
}

if (tekstoIlgis < tekstoIlgis2) {
    
    console.log('mazesnis tekstsas - ' + tekstas1);
    
} else {
    console.log('mazesnis tekstas - ' + tekstas2);
    
}



// Išvesti sąrašo tipo kintamųjų ilgius

const sarasoIlgis = ['Alytus', 'Kaunas', 'Vilnius', 'Klaipeda'];
const sarasoilgis2 = ['Alytus', 'Kaunas', 'Vilnius', 'Klaipeda', 'Kedainiai'];

const ilgiai1 = sarasoIlgis.length;
console.log(ilgiai1);
const ilgiai2 = sarasoilgis2.length;
console.log(ilgiai2);

// kuris didesnis
// kuris mažesnis

if (ilgiai1 > ilgiai2) {
    console.log(`${ilgiai1} > ${ilgiai2}`);
    console.log('tiesa ' + sarasoIlgis);
    
} else {
    console.log(`${ilgiai1} > ${ilgiai2}`);
    console.log('netiesa ' + sarasoilgis2);
    
};
console.clear();

console.log('------------- ciklai-------------');

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 0; i <= 0; i++) {
    console.log(i);
}

for (let i = 0; i <= 4; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i++ ) {
    console.log(i);
}

for (let i = 574; i <= 815; i++) {
    console.log(i);


}for (let i = -50; i <= 50; i++) {
    console.log(i);
}

for (let i = -70; i <= 30; i++) {
    console.log(i);
}

console.clear();

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

const abc =['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(abc.length);

for (let i = abc.length - 1; i >= 0; i-- )  {
    console.log(abc[i]);
}