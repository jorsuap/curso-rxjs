import { fromEvent, interval, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { debounceTime, filter,map, mergeAll, mergeMap, pluck, take, takeUntil, tap } from 'rxjs/operators'; 


//MergeMap  es un operador de aplanamiento y retorna varios observables internos y todos pueden estar activos al mismo tiempo
const letras$ = of('a','b','c');


letras$.pipe(
    mergeMap((letra)=> interval(1000).pipe(
        map(i => letra+i),
        take(3)
    ))
)
// .subscribe({
//     next:val => console.log('next: ', val),
//     complete: () => console.log('Complete')
// })

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)