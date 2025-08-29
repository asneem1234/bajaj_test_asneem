# What Do I Need To Do?

## Requirements

Build and host a REST API with a POST method that processes arrays and returns specific information.

## API Requirements

- **Method**: POST
- **Route**: /bfhl
- **Success Status Code**: 200

## What The API Should Do

The API should take an array as input and return:

1. Success status (`is_success`: true/false)
2. User ID in format: {full_name_ddmmyyyy} (lowercase)
3. Email ID
4. College Roll Number
5. Array of even numbers
6. Array of odd numbers
7. Array of alphabets (converted to uppercase)
8. Array of special characters
9. Sum of all numbers
10. Concatenated alphabetical characters in reverse order with alternating caps

## Tech Stack Options

- Node.js
- Python
- Java

## Hosting

Deploy to any provider:
- Vercel
- Railway
- Render
- Or any other REST API hosting

## Important Notes

- All numbers must be returned as strings (e.g., "1" not 1)
- Push code to a public GitHub repository
- Submit the hosted API endpoint in the provided form

## Examples

### Example Input
```json
{
  "data": ["a","1","334","4","R", "$"]
}
```

### Expected Output
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Submission

- Submit API endpoint URL at in the form .
- Make sure the URL has the logic at "/bfhl" route
- Fastest valid submissions will be considered
