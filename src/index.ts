import { fromEvent, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { debounceTime, filter,map, mergeAll, pluck, tap } from 'rxjs/operators'; 


//MergeAll un observable que emite observables // Flattening Operator
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent >(textInput,'keyup');
// input$.pipe(
//     debounceTime(500),
//     map(event => {
//         const txt = event.target['value'];
//         return ajax.getJSON(
//             `https://api.github.com/users/${txt}`
//         );
//     })
// ).subscribe(resp =>{
//     resp
//     .pipe(
//         pluck('url')
//     )
//     .subscribe(console.log)
// })

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(txt => ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)),
    mergeAll(),
    pluck('items')
).subscribe(resp =>{
    console.log(resp)
})



