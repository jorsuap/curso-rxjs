import { of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { auditTime, catchError, debounceTime, distinctUntilChanged, filter,map, pluck, sample, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


const url  = 'https://httpbinxx.org/delay/1';

const error = (resp: AjaxError)=>{
    console.warn('error:', resp.message);
    return of ({
        ok: false,
        usuarios:[]
    })
}


// const obs$ = ajax.getJSON(url).pipe(
//     catchError(error)
// );

// const obs2$ = ajax(url).pipe(
//     catchError(error)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('data', data))
obs$.pipe(
    catchError(error)
).subscribe({
    next:val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete:()=> console.log('complete')
});

