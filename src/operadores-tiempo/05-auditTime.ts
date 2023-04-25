import { asyncScheduler, fromEvent, interval } from "rxjs";
import { auditTime, debounceTime, distinctUntilChanged, filter,map, pluck, sample, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


//auditTime 

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x})=> x),
    tap(val => console.log('val', val)),
    auditTime(1000)
).subscribe(console.log)

