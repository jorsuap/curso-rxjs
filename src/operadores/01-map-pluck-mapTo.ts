import { fromEvent, range } from 'rxjs'; // algo para crear observables
import { map, pluck, mapTo } from 'rxjs/operators'; 

//map

range(1,5).pipe(
    map<number, string>(val => (val * 10).toString())// tener tipado de retorno ayuda a evitar errores
)
.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

//mapTo
const keyMapTo$ = keyup$.pipe(
    mapTo('jorddi')
);
//pluck
const keyPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')// se puede obtener un atributo directamente o un atributo dentro de un objeto
);

keyup$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map', code));
keyPluck$.subscribe(code => console.log('pluck', code));
keyMapTo$.subscribe(code => console.log('mapTo', code));//dfd

const data = {}
const asda = structuredClone(data)
