// test.js - Simple test script for the API
const fetch = require('node-fetch');

// Test cases from the problem statement
const testCases = [
  {
    data: ["a", "1", "334", "4", "R", "$"]
  },
  {
    data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
  },
  {
    data: ["A", "ABcD", "DOE"]
  }
];

// Function to make a POST request
async function testAPI(testData) {
  try {
    const response = await fetch('http://localhost:3000/bfhl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    console.log(`STATUS: ${response.status}`);
    
    const data = await response.json();
    console.log('Response:', data);
    console.log('------------------------------');
  } catch (error) {
    console.error(`Problem with request: ${error.message}`);
  }
}

// Run tests
async function runTests() {
  console.log('Running API tests...');
  console.log('------------------------------');

  for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    console.log('Request:', testCases[i]);
    await testAPI(testCases[i]);
  }
}

runTests();
