
export const FizzBuzz = (number) => {
    if(typeof number != 'number') throw new Error('Paramater provided must be a number')
    if(Number.isNaN(number)) throw new Error('Paramater provided must be a number')

    //Si es múltiplo de 2 muestra tu nombre
    if(number % 2 == 0) 
    return 'acoray'
    //Si es múltiplo de 3 muestra tu primer apellido
    if(number % 3 == 0) 
    return 'bueno'
    //Si es múltiplo de 11 muestra tu segundo apellido.
    if(number % 11 == 0) 
    return 'mejias'


    /*const multiplies = {2:'acoray',3:'bueno',11:'mejias'}*/
    let output = ''


    return output == '' ? number : output
}