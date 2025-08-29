# Bajaj Finserv Test API

A REST API that processes arrays and returns various computed results as part of Bajaj Finserv technical assessment.

## Developer Details

- **Name:** ASNEEM ATHAR SHAIK
- **Registration Number:** 22BCE8807
- **College:** VIT University
- **GitHub:** [asneem1234](https://github.com/asneem1234)

## API Endpoint

- **POST** `/bfhl`
- Expected status code for successful requests: 200
- Also supports GET method for browser testing

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
4. Handles error cases gracefully with appropriate status codes
5. Follows REST API best practices

## Technology Stack

This project demonstrates my proficiency with:

- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for creating RESTful APIs
- **JavaScript ES6+** - Modern JavaScript features (async/await, arrow functions, etc.)
- **Regular Expressions** - For efficient string pattern matching
- **Error Handling** - Comprehensive error handling with try-catch blocks
- **Environment Variables** - For configuration management with dotenv
- **Git/GitHub** - Version control and project management
- **RESTful API Design** - Following best practices for endpoint design

## Implementation Approach

1. **Planning**: Analyzed requirements thoroughly before coding
2. **Architecture**: Created a modular, maintainable structure
3. **Development**: Implemented core functionality with clean code
4. **Testing**: Created test cases to verify functionality
5. **Deployment**: Configured for easy deployment on various platforms
6. **Documentation**: Added comprehensive README and comments

## Local Development

1. Clone this repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   FULL_NAME=asneem_athar_shaik
   DOB=ddmmyyyy
   EMAIL=your_email@example.com
   ROLL_NUMBER=22BCE8807
   ```
4. Run the server with `npm start` or `npm run dev` for development

## Deployment

This API has been deployed on Vercel and is live at:

**Live API URL:** https://bajaj-test-asneem.vercel.app/bfhl

You can test it by sending POST requests to this endpoint with the required data format.

The API is also configured for deployment on other cloud platforms:
- **Railway**: Ready for containerized deployment
- **Render**: Configured for web service deployment
- **Heroku**: Set up with Procfile for easy deployment

See the `VERCEL_DEPLOYMENT.md` file for more details about the deployment and testing information.

## Testing

Run the included test script to validate functionality:

```
node test.js
```

Or use tools like Postman to test the API manually.

## Code Quality

The code follows these principles:
- Clean, readable, and maintainable
- Properly structured with appropriate error handling
- Optimized for performance
- Well-documented

## License

ISC
