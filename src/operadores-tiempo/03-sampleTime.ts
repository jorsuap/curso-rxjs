import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter,map, pluck, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


//sampleTime emite el ultimo valor que pasa por el flujo de informacion durante el lapso de tiempo que se configura.
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000),
    map(({x,y} )=> ({x,y}))
).subscribe(console.log)

