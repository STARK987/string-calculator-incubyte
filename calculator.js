function add(numbers) {
    if (!numbers) return 0;

    let delimiters = [",", "\n"];
    let numberString = numbers;

    // Handle custom delimiters
    if (numbers.startsWith("//")) {
        const delimiterSectionEnd = numbers.indexOf("\n");
        const delimiterSection = numbers.substring(2, delimiterSectionEnd);

        if (delimiterSection.startsWith("[")) {
            // Multiple or multi-char delimiters: //[*][%] or //[***]
            const regex = /\[(.+?)\]/g;
            let match;
            delimiters = [];

            while ((match = regex.exec(delimiterSection)) !== null) {
                delimiters.push(match[1]);
            }
        } else {
            delimiters = [delimiterSection];
        }

        numberString = numbers.substring(delimiterSectionEnd + 1);
    }

    // Escape delimiters for RegExp and create a split regex
    const escapedDelimiters = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const splitRegex = new RegExp(escapedDelimiters.join('|'));

    const nums = numberString.split(splitRegex).map(n => parseInt(n)).filter(n => !isNaN(n));

    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
}

module.exports = { add };