import {  from, fromEvent, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap,first, takeWhile , map} from 'rxjs/operators'; 

//takeWhile si cumple la condicion emite el valor


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map(({x,y})=> ({x,y})),
    //takeWhile(({y})=>y<=150)
    takeWhile(({y})=>y<=150, true)// el segundo parametro es apra emitir el valor que hace que se cumpla la condicion, por defecto es false
)
.subscribe({
    next:val => console.log('nex', val),
    complete:()=> console.log('complete')
})