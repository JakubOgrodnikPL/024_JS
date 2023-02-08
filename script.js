let score
const even = () => {
    console.log(`Funkcja jest parzysta`)
    // if(evenInput%2==0) console.log(`Liczba ${evenInput0}jest przysta`)    
}

const odd = () => {
    console.log(`Funkcja jest nieparzysta`)
    // if(oddInput%2!==0) console.log(`Liczba ${evenInput0}jest nieprzysta`)    
}

const add = (a,b) => {
    score = a+b
    if (score%2==0) even()
    else odd()
}

add(8,8)