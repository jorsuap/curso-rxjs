import {  from, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap } from 'rxjs/operators'; 

//take limita la cantidad de emiciones de un observable

const numbers$ = of(1,2,3,4,5);





numbers$.pipe(
    tap(console.log),
    take(3),
)
.subscribe({
    next:val =>console.log('nex', val),
    complete:()=>console.log('comple')
})


