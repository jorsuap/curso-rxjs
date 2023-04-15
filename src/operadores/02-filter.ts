import { fromEvent, range, of, from } from 'rxjs'; // algo para crear observables
import { filter,map } from 'rxjs/operators'; 

//filter sirve para filtrar las emicione de los valores que emite el observable



range(1,10).pipe(
    filter((data,i) => {
       console.log('index',i)
        return data  % 2 === 1;
    })
).subscribe(console.log)

interface Personaje  {
    type:string,
    name: string
}

const characters: Personaje []=[ 
    {
        type:'heroe',
        name: 'Batman'
    },
    {
        type:'villano',
        name: 'Spiderman'
    },
    {
        type:'heroe',
        name: 'Iron Man'
    },
    {
        type:'heroe',
        name: 'Robin'
    },
]

from(characters).pipe(
    filter(character => character.type === 'heroe')
)//se puede crear varios PIPE
.subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(keyup => keyup === 'Enter')
)

keyup$.subscribe(console.log)