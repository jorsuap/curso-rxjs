import {  from, interval } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take } from 'rxjs/operators'; 

//scan aplica una funcion acumuladora producida por mi obcerbable, pero emite los valores a medida que los recibe

const numbers = [1,2,3,4,5];

const total = (acc:number, crr:number)=>acc+crr;




from(numbers).pipe(
    take(4),
    reduce(total)
)
.subscribe(console.log)

from(numbers).pipe(
    take(4),
    scan(total)
)
.subscribe(console.log)

//Redux



// {
//     next: val=> console.log('next', val),
//     complete:()=> console.log('complete')
// }