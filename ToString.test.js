
import { describe,expect,it } from "vitest";
import { SETTINGs } from "../SETTINGs/SETTINGs";

/*Vamos realizar un código que realice una transformación de un string a otro que cumpla exclusivamente 
con las siguientes condiciones:
-Debe devolver un boleano true o false
-Debe tener el mismo numero de letras; ej: ab -->def
-Debe tener el mismo numero de letras diferentes (únicas); ej: abb -->abc 
*/
describe('SETTINGs',()=>{
    //Debe devolver un boleano true o false
    it('Should return a boolean',()=>{
        expect(SETTINGs('a','b')).toBeTypeOf('boolean')
    })
    //Debe tener el mismo numero de letras; ej: ab -->def
    it('Should return a false if strings provided have not the same number of letters',()=>{
        expect(SETTINGs('ab','def')).toBe(false)
    })
    //Debe tener el mismo numero de letras diferentes (únicas); ej: abb -->abc
    it('Should return false if strings provided have not the same number of different (unique) letters',()=>{
        expect(SETTINGs('abb','abc')).toBe(false)
    })
   
})