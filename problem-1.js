function getCommonChars(arr) {
    let frequencyChar = {}
    let result = []

    for (let i = 0; i < arr.length; i++) {

        let charArray = arr[i].replace(/ /g, "").split('')

        for (let j = 0; j < charArray.length; j++) {
            let char = charArray[j]

            if (frequencyChar[char]) {
                if (!frequencyChar[char].index.includes(i)) {
                    frequencyChar[char].count += 1
                    frequencyChar[char].index.push(i)
                }
            } else {
                frequencyChar[char] = {}
                frequencyChar[char] = {
                    count: 1,
                    index: [i]
                }
            }
        }
    }
    for (const key in frequencyChar) {
        if (frequencyChar[key].count === arr.length) {
            result.push(key)
        }
    }
    return result
}

let arr = [
    "geeksforgeeks",
    "gemkstones",
    "acknowledges",
    "aguelikes",
];
console.table(getCommonChars(arr))
