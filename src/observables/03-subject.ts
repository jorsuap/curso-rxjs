import { Observable, Observer, Subject } from 'rxjs'; // algo para crear observables

const  observer:Observer<any> = {
    next: value => console.log('[Next]: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const invervalo$ = new Observable<number>(subs =>{
    const internalID = setInterval(
        ()=> subs.next(Math.random()), 1000);
    
    return () => {
        clearInterval (internalID)
        console.log('Intervallo destruido')
    }
});


/**
 * 1- Casteo multiple (distribuye la misma informaciona todos los subscriptores)
 * 2- Tambien es un observer
 * 3- Next, error, complete
 */

const subject$ = new Subject();
const sbscription = invervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

// const subs1 = invervalo$.subscribe(rnd => console.log('Subs1', rnd));
// const subs2 = invervalo$.subscribe(rnd => console.log('Subs2', rnd));

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    sbscription.unsubscribe()
}, 3500);

