import { fromEvent, range, of, from } from 'rxjs'; // algo para crear observables
import { filter,map, tap } from 'rxjs/operators'; 

//tap puede disparar efectos secundarios ejemplo disparar acciones y no afecta el return

const number$ = range(1,5)

number$.pipe(
    tap(x => {
        console.log('antes',x)
        return 100
    }),
    map(val => val*10),
    tap({
        next:valor => console.log('despues', valor),
        complete:()=> console.log('se termino')
    })
).subscribe(val => console.log('subsw', val))