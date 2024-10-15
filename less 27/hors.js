// дано три неизменяемых переменных 
// hors = лошадь
// computer = компьютер
// pig = свинья

// создай функцию fucn, которая принимает в себя один аргумент string и переделывает его в новый string
// Например func('лошадь') => 'лош   адь'
// Например func('компьютер') => 'ком   пьютер'
// Например func('свинья') => 'сви   нья'


const hors = 'лошадь'
const computer = 'компьютер'
const pig = 'свинья'

function separator(text){
    const rezult = text.slice(0,3) + '   ' + text.slice(3);
    console.log(rezult) 
}

separator(hors);
separator(computer);
separator(pig);
