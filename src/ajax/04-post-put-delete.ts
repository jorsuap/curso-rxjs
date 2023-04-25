import { of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { auditTime, catchError, debounceTime, distinctUntilChanged, filter,map, pluck, sample, sampleTime, tap, throttleTime } from 'rxjs/operators'; 


const url  = 'https://httpbin.org/delay/1';

// ajax.put(url,{
//     id:1,
//     name:'Jorddi'
// },{
//     'mi-token':'ABC123'
// }).subscribe(console.log)

ajax({
    url,
    method:'PUT',
    headers:{
        'mi-token':'ABC123'
    },
    body:{
        id:1,
        name:'Fernando'
    }
}).subscribe(console.log)