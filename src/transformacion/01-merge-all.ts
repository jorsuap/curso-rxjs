import { fromEvent, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { debounceTime, filter,map, mergeAll, pluck, tap } from 'rxjs/operators'; 


//MergeAll un observable que emite observables // Flattening Operator
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const showUser = (users:any[]) => {
    orderList.innerHTML = '';
    for(const user of users){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver pagina';
        anchor.href = user.html_url;
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + '');
        li.append(anchor);

        orderList.append(li);
    }
}

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
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent>('target', 'value'),
    map(txt => ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)),
    mergeAll(),
    pluck('items')
).subscribe((resp:any) =>{
    console.log(resp);
    showUser(resp)
})

//El MergeAll mezcla los observables cuando estos estan anidados

