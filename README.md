# Bajaj Finserv Test API

Hey there! 👋 I'm ASNEEM ATHAR SHAIK, and this is my implementation of the Bajaj Finserv array processing API challenge.

**💻 Live API: [https://bajaj-test-asneem.vercel.app/bfhl](https://bajaj-test-asneem.vercel.app/bfhl)**

I built this REST API that takes arrays and transforms them in various ways - separating numbers, finding odd/even values, handling special characters, and more!

## Developer Details

- **Name:** ASNEEM ATHAR SHAIK
- **Registration Number:** 22BCE8807
- **College:** VIT University
- **GitHub:** [asneem1234](https://github.com/asneem1234)

## Try It Out!

Feel free to test my API right away:

```bash
# Using curl
curl -X POST -H "Content-Type: application/json" -d '{"data": ["a", "1", "334", "4", "R", "$"]}' https://bajaj-test-asneem.vercel.app/bfhl

# Or just visit in your browser for info
https://bajaj-test-asneem.vercel.app/bfhl
```

## API Details

- **POST** `/bfhl` - The main endpoint that processes your array data
- Returns clean JSON with a 200 status code when successful
- Also supports GET method for easy browser testing

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

Here's what I used to build this project:

- **Node.js** - Fast and efficient JavaScript runtime
- **Express.js** - My go-to framework for building clean APIs
- **JavaScript ES6+** - Love using modern features like async/await
- **Regular Expressions** - Perfect for the string pattern matching needed here
- **Error Handling** - Made sure the API handles issues gracefully
- **Environment Variables** - For secure configuration
- **Git/GitHub** - For version control and collaboration
- **RESTful API Design** - Focused on clean endpoints and responses

## My Approach

I tackled this project in a straightforward way:

1. **Planning**: First, I read through the requirements carefully to understand exactly what was needed
2. **Architecture**: Sketched out a clean structure to make the code maintainable
3. **Development**: Wrote the core functionality with readability in mind
4. **Testing**: Created some test cases to make sure everything was working correctly
5. **Deployment**: Set up the project for simple deployment on Vercel
6. **Documentation**: Added this README so you can see what I did!

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

I've deployed this API on Vercel for lightning-fast performance and reliability! ⚡

**🚀 Live API:** [https://bajaj-test-asneem.vercel.app/bfhl](https://bajaj-test-asneem.vercel.app/bfhl)

Testing is super easy - just send a POST request with your data array to the endpoint above.

I've also made sure the project is ready for other platforms too:
- Could deploy to Railway with a few clicks
- Works great on Render's web services
- Ready for Heroku with the included Procfile

Check out `VERCEL_DEPLOYMENT.md` for more testing examples and deployment details.

## Want to Test?

There are a couple easy ways to test:

```bash
# Run my test script
node test.js

# Or just try it with your favorite API tool like Postman!
```

## About My Code

I focused on writing code that's:
- Clean and easy to read (no spaghetti code here!)
- Properly structured with good error handling
- Fast and efficient
- Clear and understandable

Feel free to browse through and let me know what you think!

## License

ISC
