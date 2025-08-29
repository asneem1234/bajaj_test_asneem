require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Bajaj Finserv test API',
    instructions: 'Use POST /bfhl endpoint to submit your data'
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
    is_success: true,
    message: "This is the GET endpoint for /bfhl. Please use POST method with a 'data' array to process data."
  });
});

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. Please provide an array in the "data" field.'
      });
    }

    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;

    data.forEach(item => {
      const strItem = String(item);
      
      if (/^-?\d+$/.test(strItem)) {
        const num = parseInt(strItem);
        sum += num;
        
        if (num % 2 === 0) {
          evenNumbers.push(strItem);
        } else {
          oddNumbers.push(strItem);
        }
      } 
      else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem.toUpperCase());
      } 
      else {
        specialCharacters.push(strItem);
      }
    });

    let concatString = '';
    const allChars = alphabets.join('');
    const reversedChars = allChars.split('').reverse().join('');
    
    for (let i = 0; i < reversedChars.length; i++) {
      const char = reversedChars[i];
      if (i % 2 === 0) {
        concatString += char.toUpperCase();
      } else {
        concatString += char.toLowerCase();
      }
    }

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

try {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
  });
} catch (error) {
  console.error('Error starting server:', error);
}
