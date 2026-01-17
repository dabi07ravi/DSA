let a = "listens";

let b = "silent";

let stra = a.split("").sort().join("");
let strb = b.split("").sort().join("");

if (stra === strb) {
  console.log("anagram");
}



// using hashmap
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let s1 = new Map();

  for (let i = 0; i < str1.length; i++) {
    s1.set(str1[i], (s1.get(str1) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    s1.set(str2[i], (s1.get(str2[i]) || 0) - 1);
    if (s1.get(str2[i]) === 0) {
      s1.delete(str2[i]);
    }
  }

  if (s1.size === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagram("silentt", "listenf"));
