
import { describe,expect,it } from "vitest";
import { FizzBuzz } from "../SETTINGs/FizzBuzz";

/*Vamos a escribir una funcion que al pasarle un número:
-Muestre "acoray" si es múltiplo de 2
-Muestre "bueno" si es múltiplo de 3
-Muestre "mejias" si es múltiplo de 11
*/

describe("FizzBuzz",() =>{

    //Si es múltiplo de 2 muestra tu nombre
    it('Should return acoray if number provided is multiple of 2',()=>{
        expect(FizzBuzz(2)).toBe('acoray')
    })
    //Si es múltiplo de 3 muestra tu primer apellido
    it('Should return bueno if number provided is multiple of 3',()=>{
        expect(FizzBuzz(3)).toBe('bueno')
    })
    //Si es múltiplo de 11 muestra tu segundo apellido.
    it('should return suarez if number provided is multiple of 11',()=>{
        expect(FizzBuzz(11)).toBe('mejias')
        
    })
    
})