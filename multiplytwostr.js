function multiplyStrings(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let m = num1.length, n = num2.length;
    let res = new Array(m + n).fill(0);

    // Multiply from last digit of each number
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + res[i + j + 1];

            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }

    // Convert array to string, skip leading zeros
    while (res[0] === 0) res.shift();
    return res.join('');
}
