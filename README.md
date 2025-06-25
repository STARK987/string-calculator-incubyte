# String Calculator - Incubyte TDD Assessment

This project is a solution to the **String Calculator TDD Kata** from Incubyte's coding assessment. It demonstrates **Test-Driven Development (TDD)** using **Node.js** and **Jest**, and progressively builds a string-based calculator through small, test-driven steps.

---

## Features

- Return `0` for an empty string
- Return a single number as-is
- Add multiple comma-separated numbers
- Support newline (`\n`) as a delimiter
- Support custom single-character delimiter:  
  Example: `//;\n1;2`
- Throw an exception for negative numbers:  
  Example: `negative numbers not allowed: -1, -3`
- Ignore numbers greater than `1000`
- Support custom multi-character delimiters:  
  Example: `//[***]\n1***2***3`
- Support multiple custom delimiters:  
  Example: `//[*][%]\n1*2%3`
- Support multiple multi-character delimiters:  
  Example: `//[***][%%%]\n1***2%%%3`

---

## Project Structure

string-calculator/
├── calculator.js # Main calculator logic
├── calculator.test.js # Unit tests using Jest
├── package.json
└── README.md

## TO RUN TEST CASES
npm test