import { from, of } from 'rxjs'; // algo para crear observables


/**
 * of = Toma argumentos y genera secuencia de valores
 * from = crea un observable en base a un array, promise, iterable, observer
 */

const observer = {
    next: val => console.log('next: ', val),
    complete:()=> console.log('complete')
};

//Un iterable

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer)

// for (let id of miIterable) {
//     console.log(id)
    
// }

// const sour$ = from([1,2,3,4,5,6]);
// const sour$ = of(...[1,2,3,4,5,6]);
// const sour$ = from('jorddi');
// const sour$ = of('jorddi');

// const sour$ = from(fetch('https://api.github.com/users/klerith'))
// sour$.subscribe(async (resp) =>{
//     const dataresp = await resp.json();
//     console.log(dataresp)

// });

// sour$.subscribe(observer)