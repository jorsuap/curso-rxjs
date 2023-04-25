import { asyncScheduler, fromEvent, interval } from "rxjs";
import { debounceTime, distinctUntilChanged, filter,map, pluck, sample, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


//sample Emite el ultimo valor emitido del primer observable despues de que se emite un valor en el segundo observable
const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log)


