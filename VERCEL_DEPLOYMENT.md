# Vercel Deployment Information

## Deployment URL

Your API is now live at: https://bajaj-test-asneem.vercel.app

## Testing Your Deployment

To verify your deployment is working correctly, you can use these commands:

### GET Request Test
```bash
curl -X GET https://bajaj-test-asneem.vercel.app/bfhl
```

### POST Request Tests

Test Case 1:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}' \
  https://bajaj-test-asneem.vercel.app/bfhl
```

Test Case 2:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}' \
  https://bajaj-test-asneem.vercel.app/bfhl
```

Test Case 3:
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"data": ["A", "ABcD", "DOE"]}' \
  https://bajaj-test-asneem.vercel.app/bfhl
```

## For Evaluators

This API was built with Node.js and Express.js, following RESTful API design principles. The source code is available at: https://github.com/asneem1234/bajaj_test_asneem

### Key Features

- Handles both GET and POST methods
- Processes array data according to requirements
- Returns formatted JSON response
- Proper error handling
- Clean code organization
- Documentation

### Implementation Details

- Deployed using Vercel's serverless architecture
- Environment variables securely stored in Vercel
- API endpoint: `/bfhl`
- Status code for successful requests: 200

## Submission

The API URL has been submitted via the form at: https://forms.office.com/r/ZeVpUYp3zV
