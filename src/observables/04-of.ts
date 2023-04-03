import { of } from 'rxjs'; // algo para crear observables

// const obs$ = of(1,2,3,4,5,6);//sincrona
// const obs$ = of([1,2,3,4,5,6]);//sincrona
const obs$ = of(...[1,2,3,4,5,6]);//sincrona

//El of emitite los valores que van a fluir por el observable uno por uno de forma secuencial y asincrona

console.log('Inicio de obs')
obs$.subscribe(
    next => console.log('Next', next),
    null,
    ()=> console.log('Terminamos')
)
console.log('Fin de obs')