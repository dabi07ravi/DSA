


function subsequence(str) {

    let result = [];


    function helper(index, current) {


        if (index === str.length) {
            result.push(current)
            return
        }

        // exclude the char
        helper(index + 1, current)

        // include the char

        helper(index + 1, current + str[index])


    }


    helper(0, '')

    return result


}


console.log(subsequence('abc'))