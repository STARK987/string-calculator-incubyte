function add(numbers) {
    if (!numbers) return 0;

    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const delimiter = parts[0].slice(2);
        delimiters = [delimiter];
        numbers = parts[1];
    }

    const regex = new RegExp(`[${delimiters.join("")}]`);
    const nums = numbers.split(regex).map(n => parseInt(n));

    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, n) => sum + (isNaN(n) ? 0 : n), 0);
}

module.exports = { add };
