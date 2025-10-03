// 1
function push(stack, value) {
    // [1,2,3,4]
    // [[1,2,3,4]]
    // return [...stack, value]
    return stack.push(value);
}
function pop(stack) {
    if (stack.length === 0) return;
    return stack.pop();
}
function peek(stack) {
    if (stack.length === 0) return;
    return stack[stack.length - 1]
}


// 2

function enqueue(queue, value) {
    return queue.push(value);
}
function dequeue(queue) {
    if (queue.length === 0) return;

    //const [primeiro, ...fila] = queue
    // return fila 
    return queue.shift();
}
function front(queue) {
    if (queue.length === 0) return;
    return queue[0];
}

// 3
function isBalanced(str) {
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (const ch of str) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else if (ch === ')' || ch === ']' || ch === '}') {
            if (stack.pop() !== pairs[ch]) return false;
        }
    }
    return stack.length === 0;
}



// 4 
function reverseString(str) {
    const stack = [];
    for (const ch of str) stack.push(ch); // O(n)
    let out = '';
    while (stack.length) out += stack.pop(); // O(n)
    return out;
}

// 5
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    // [2, 3, 9, 20, 50, 70]
    // i=2 => 9
    arr.sort((a, b) => a + b);
    let inicio = 0, fim = arr.length - 1;
    while (inicio <= fim) {
        const meioArray = Math.floor((inicio + fim) / 2) // 2;
        if (arr[meioArray] === target) return meioArray;
        if (arr[meioArray] < target) l = meioArray + 1;
        else fim = meioArray - 1;
    }
    return -1;
}


// 6
const entrada = [];
const saida = [];

function enqueue2(value) {
    entrada.push(value);                   // O(1)
}

function dequeue2() {
    if (saida.length === 0) {
        while (entrada.length) saida.push(entrada.pop()); // move todos (amort. O(1))
    }
    return saida.pop();                 // O(1)
}

function front2() {
    if (saida.length === 0) {
        while (entrada.length) saida.push(entrada.pop());
    }
    return saida[saida.length - 1];
}


// 7 
function isPalindrome(str) {
    const s = str.normalize('NFC');
    const stack = [];
    const queue = [];
    for (const ch of s) {
        stack.push(ch);
        queue.push(ch);
    }
    while (queue.length) {
        const a = stack.pop();   // topo
        const b = queue.shift(); // frente
        if (a !== b) return false;
    }
    return true;
}

// 8


function evalRPN(expr) {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            // divisão inteira ao estilo “trunc toward zero”
            const q = a / b;
            return q < 0 ? Math.ceil(q) : Math.floor(q);
        }
    };

    console.log(expr.split(/\s+/))

    const stack = [];
    for (const caracter of expr.split(/\s+/)) {
        if (caracter in ops) {
            if (stack.length < 2) throw new Error('Expressão inválida');
            const b = stack.pop();
            const a = stack.pop();
            stack.push(ops[caracter](a, b));
        } else {
            const num = Number(caracter);
            if (Number.isNaN(num)) throw new Error(`caracteren inválido: ${caracter}`);
            stack.push(num);
        }
    }
    if (stack.length !== 1) throw new Error('Expressão inválida');
    return stack[0];
}

evalRPN("5 1 2 + 4 * + 3 -")

