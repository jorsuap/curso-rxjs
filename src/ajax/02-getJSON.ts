import { ajax } from "rxjs/ajax";
import { auditTime, debounceTime, distinctUntilChanged, filter,map, pluck, sample, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


const url  = 'https://httpbin.org/delay/1';


const obs$ = ajax.getJSON(url, {
    'Content-Type':'application/json',
    'mi-token':'ABC123'
});
obs$.subscribe(data => console.log('data', data))

