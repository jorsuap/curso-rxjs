import { Observable, Observer } from 'rxjs'; // algo para crear observables


const  observer:Observer<any> = {
    next: value => console.log('siguiente [Next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}
// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs =>{
    subs.next('Hola');
    subs.next('Mundo');
    // const a = undefined;
    // a.nombre = 'Fernando';
    subs.complete();// Termina de emitir valores
});

// obs$.subscribe(console.log); // manera simple de imprimir le valor en consola
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.error('error: ', error),
//     () => console.info('Completado')
    
// ); 

obs$.subscribe(observer)