import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, filter,map, pluck, tap } from 'rxjs/operators'; 


//debounceTime base intervalos de tiempo, si sobrepasa el tiempo q le dimos, emite

const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000)
).subscribe(console.log)

//ejelplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<InputEvent>(input, 'input');

input$.pipe(
    debounceTime(1000),
   pluck('target', 'value'),
   distinctUntilChanged()
).subscribe(console.log)