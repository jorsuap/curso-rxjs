import { interval, timer } from 'rxjs'; // algo para crear observables

const observer = {
    next : val => console.log('next:', val),
    complete: ()=> console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds()+5)

const inter$ = interval(1000)
// const time$ = timer(2000, 1000)// primer argumento es tiempo para comenzr a lanzar, segundo valor el la frecuencia con que se emite
const time$ = timer(hoyEn5)

console.log('inicio')
// inter$.subscribe(observer);
time$.subscribe(observer)
console.log('fin')

