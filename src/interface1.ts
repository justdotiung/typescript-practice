//optional property
interface Person2 {
    name: string
    age?: number
    [index: string]: any
}

function hello2(person: Person2): void {
    console.log(`안녕하세요 ! ${person.name} 입니다.`)
}

const p21: Person2 = {
    name: 'Mark',
}
const p22: Person2 = {
    name: 'potor',
    age: 23,
    sister: ['Anna', 'Kym'],
}
const p23: Person2 = {
    name: 'potor',
    age: 44,
    mather: p22,
    father: p21,
}

hello2(p21)
