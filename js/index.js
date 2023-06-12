let a = '' //first number
let oldA = ''
let b = '' //second number
let sign = '' //action
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'x', '/']

//screen
const out = document.querySelector('.calc__screen p')
const result = document.querySelector('.calc__screen-result p')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0
    result.textContent = 0
    
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.calc__buttons').onclick = (event) => {
    //pressed not button
    if (!event.target.classList.contains('calc__button')) return
    //pressed ac
    if (event.target.classList.contains('ac')) return

    out.textContent = ''
    result.textContent = ''

    //get pressed button
    const key = event.target.textContent

    //if pressed 0-9 or . button
    if (digit.includes(key)) {
        if (b === '' && sign === '' && a.length < 6) {
            a += key
            console.log(a, b, sign)
            out.textContent = a
            result.textContent = a 
            return
        }
        else if (b === '' && sign === '' && a.length == 6) {
            a = a.substring(0, 6);
            out.textContent = a
            result.textContent = a 
            return
        }
        else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = a + sign
            result.textContent = a
            return
        }
        else if (b.length == 6) {
            b = b.substring(0, 6);
            out.textContent = a + sign + b
            result.textContent = b 
            return
        }
        else {
            b += key
            out.textContent = a + sign + b
            result.textContent = b
        }
        console.log(a, b, sign)
        return
    }

    //if pressed action button 

    if (action.includes(key)) {
        sign = key
        out.textContent = a + sign
        result.textContent = sign
        console.log(a, b, sign)
        
        return
    }

    //pressed equal
    if (key === '=') {
        if (b === '')
            b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = (+a) - (+b)
                break
            case 'x':
                a = (+a) * (+b)
                break
            case '/':
                a = (+a) / (+b)
                break
        }
        
        finish = true
        out.textContent = a + sign + b + '=' + a
        result.textContent = a
        console.log(a, b, sign)
    }
    
    // if (a.length >= 6) {
    //     a = a.substring(0, 6);
    //     return
    // }


}