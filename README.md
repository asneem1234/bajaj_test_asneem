# Bajaj Finserv Test API

A REST API that processes arrays and returns various computed results.

## API Endpoint

- **POST** `/bfhl`
- Expected status code for successful requests: 200

## Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Features

The API processes the input array and:
1. Categorizes elements into even numbers, odd numbers, alphabets, and special characters
2. Calculates the sum of numbers
3. Creates a concatenated string of alphabets in reverse order with alternating caps

## Local Development

1. Clone this repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   FULL_NAME=your_name
   DOB=ddmmyyyy
   EMAIL=your_email@example.com
   ROLL_NUMBER=your_roll_number
   ```
4. Run the server with `npm start` or `npm run dev` for development

## Deployment

This API can be deployed to platforms like Vercel, Railway, or Render.

## License

ISC
