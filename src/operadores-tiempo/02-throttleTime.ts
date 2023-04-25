import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter,map, pluck, tap, throttleTime } from 'rxjs/operators'; 


//throttleTime emite el primer valor, luego espera el tiempo que se seteo e ingnora todo lo que se emite en ese lapso de tiempo,
//pasado el tiempo emite nuevamente 

const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
).subscribe(console.log)

//ejelplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<InputEvent>(input, 'input');

input$.pipe(
   throttleTime(3000, asyncScheduler,{
    leading:true,
    trailing:true
   }),
   pluck('target', 'value'),
   distinctUntilChanged()
).subscribe(console.log)