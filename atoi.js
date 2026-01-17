function atoi(str) {
  let res = 0;

  for (let ch of str) {
    if (ch < "0" || ch > "9") {
      return -1; 
    }
    res = res * 10 + (ch - "0");
  }

  return res;
}

console.log(atoi("3210"));
