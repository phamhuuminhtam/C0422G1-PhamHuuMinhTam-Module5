//nhập vị trí số fibo trong chuỗi
let fibonaci =(n: number): number =>{
    if (n == 0) return 0;
    if (n == 1 || n == 2)
        return 1;
    return fibonaci(n - 1) + fibonaci(n - 2);
}

let i = 10;
let sum = 0;
for (var j = 0; j < i; j++) {
    console.log(fibonaci(j));
    sum += fibonaci(j);
}
alert(sum)