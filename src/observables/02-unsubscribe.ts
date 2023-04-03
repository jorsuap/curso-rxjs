import { Observable, Observer } from 'rxjs'; // algo para crear observables


const  observer:Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    let contador = 0;
    const inteval = setInterval(()=>{
        contador++;
        subs.next(contador)
    }, 1000)

    return () => {
        clearInterval(inteval);
        console.log('INtervalo tereminado')
    }
});

 const  subs1 = intervalo$.subscribe(console.log);
 const  subs2 = intervalo$.subscribe(console.log);
 const  subs3 = intervalo$.subscribe(console.log);
    //otra forma de unsubscribe
subs1.add(subs2)
subs2.add(subs3)
 setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
 }, 3000); 