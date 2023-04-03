import { range, of, asyncScheduler } from 'rxjs'; // algo para crear observables

//primer parametro es desde donde comienza, segundo parametro es cantidad de emiciones
const src$ = range(1,5, asyncScheduler);//asyncScheduler tranforma cualquier funcion en asyncrona

console.log('inicio____')
src$.subscribe(console.log)
console.log('fin____')

