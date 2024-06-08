function transformString(s) {
    const length = s.length;

    if (length % 15 === 0) {
        // Perform both operations: reverse and then replace with ASCII codes
        const reversedStr = s.split('').reverse().join('');
        const asciiTransformed = Array.from(reversedStr).map(char => char.charCodeAt(0)).join(' ');
        return asciiTransformed;
    } else if (length % 3 === 0) {
        // Reverse the string
        return s.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return Array.from(s).map(char => char.charCodeAt(0)).join(' ');
    } else {
        // No transformation
        return s;
    }
}


// Example usage
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"