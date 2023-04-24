import {  from, fromEvent, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap,first } from 'rxjs/operators'; 

//first toma el primer valor de emicion y completa la suscripcion o con una condicion q compla la primera condicion

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    tap(()=>console.log('tap')),
    first<MouseEvent>(evet => evet.clientY >= 150)
)
.subscribe({
    next:val => console.log('nex', val),
    complete:()=> console.log('complete')
})
