const fetch = require('node-fetch');

const testCases = [
  { data: ["a", "1", "334", "4", "R", "$"] },
  { data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] },
  { data: ["A", "ABcD", "DOE"] }
];
async function testAPI(testData) {
  try {
    const response = await fetch('http://localhost:3000/bfhl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });
    
    console.log(`STATUS: ${response.status}`);
    const data = await response.json();
    console.log('Response:', data);
    console.log('------------------------------');
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
  }
}

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
