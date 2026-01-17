


let s = "()[]{}}" 


function validP(s){
        let stack= [];

        let map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }
        
        for (let char of s){
                if(char === '(' || char === '[' || char === '{'){
                    stack.push(char)
                }else{
                        if(stack.pop(char) !== map[char]){
                            return false
                        }
                }
        }


        return stack.length === 0

}

console.log(validP(s))