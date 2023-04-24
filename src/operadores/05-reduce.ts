import {  interval } from 'rxjs'; // algo para crear observables
import {  reduce,take } from 'rxjs/operators'; 

//reduce aplica una funcion acumuladora producida por mi obcerbable, pero no se completa sino hasta cuando se termine el observable

const numbers = [1,2,3,4,5];

const total = (acc:number, crr:number)=>{
    return acc+crr;
}


interval(1000).pipe(
    take(4),//completa el observable despues de tomar esas cantidad de veces
    reduce(total)
)
.subscribe({
    next: val=> console.log('next', val),
    complete:()=> console.log('complete')
})