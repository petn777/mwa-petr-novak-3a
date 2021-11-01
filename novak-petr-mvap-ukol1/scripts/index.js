const array1 = ['Lodash', 'React', 'Next', 'Strapi', 'Axios', 'Typescript']

for(let i =0; i<array1.length;i++)
{
    console.log(array1[i]);
}

array1.reverse();
for(let i =0; i<array1.length;i++)
{
    console.log(array1[i]);
}

array1.sort();
for(let i =0; i<array1.length;i++)
{
    console.log(array1[i]);
}


const car = {brand:"Škoda", model:"Octavia 2.0 TDI", year:2015};

const {brand, model, year} = car;

console.log(brand, model, year);

const number = Math.floor(Math.random()*556);

console.log("Náhodné číslo je: "+number);
