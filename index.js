require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route for the root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Bajaj Finserv test API',
    instructions: 'Use POST /bfhl endpoint to submit your data'
  });
});

// GET route for /bfhl
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
    is_success: true,
    message: "This is the GET endpoint for /bfhl. Please use POST method with a 'data' array to process data."
  });
});

// POST route for /bfhl
app.post('/bfhl', (req, res) => {
  try {
    // Extract data from request body
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. Please provide an array in the "data" field.'
      });
    }

    // Initialize arrays
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;

    // Process each element in the array
    data.forEach(item => {
      // Convert to string if not already
      const strItem = String(item);
      
      // Check if item is a number (integers only)
      if (/^-?\d+$/.test(strItem)) {
        const num = parseInt(strItem);
        
        // Add to sum
        sum += num;
        
        // Check if odd or even
        if (num % 2 === 0) {
          evenNumbers.push(strItem);
        } else {
          oddNumbers.push(strItem);
        }
      } 
      // Check if item is a pure alphabetical string
      else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem.toUpperCase());
      } 
      // If not a number or pure alphabet, it's a special character
      else {
        specialCharacters.push(strItem);
      }
    });

    // Create concatenated string of alphabets in reverse order with alternating caps
    let concatString = '';
    const allChars = alphabets.join('');
    
    // Reverse the string
    const reversedChars = allChars.split('').reverse().join('');
    
    // Apply alternating caps
    for (let i = 0; i < reversedChars.length; i++) {
      const char = reversedChars[i];
      if (i % 2 === 0) {
        concatString += char.toUpperCase();
      } else {
        concatString += char.toLowerCase();
      }
    }

    // Construct response
    const response = {
      is_success: true,
      user_id: `${process.env.FULL_NAME}_${process.env.DOB}`,
      email: process.env.EMAIL,
      roll_number: process.env.ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: concatString
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({
      is_success: false,
      message: 'Internal server error'
    });
  }
});

// Start server
try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
  });
} catch (error) {
  console.error('Error starting server:', error);
}
