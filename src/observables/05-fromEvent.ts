import { fromEvent } from 'rxjs'; // algo para crear observables

/**
 * Eventos del DOm
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');//Se debe tipar para tener acceso a las propiedades
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');//Se debe tipar para tener acceso a las propiedades

const observer = {
    next: val => console.log('next', val)
}
src1$.subscribe(({x,y}) =>{

    console.log(x,y);
});
src2$.subscribe(event => console.log(event.key))