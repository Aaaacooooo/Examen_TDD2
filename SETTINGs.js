
export const SETTINGs = (from,to)=>{
    
    //EXEPCIONES
    if(typeof from != 'string') throw new Error('From is not a string')
    if(typeof to != 'string') throw new Error('To is not a string')
    
    //CONTROL DEL TAMAÑO
    const isSameLength = from.length == to.length
    if(!isSameLength) return false

    //CONTROL MISMO NUMERO DE LETRAS DIFERENTES(ÚNICAS)
    const hasSameUniqueLetters = new Set(from).size == new Set(to).size
    if(!hasSameUniqueLetters) return false

    //TRAMSFORMACIONES
    const transformations = {}

    for(let i = 0; i < from.length; i++){
        const fromLetter = from[i]
        const toLetter = to[i]
        const storedLetter = transformations[fromLetter]

        if(storedLetter && storedLetter != toLetter) return false
        transformations[fromLetter] = toLetter
    }

    return true
}
