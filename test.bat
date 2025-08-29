@echo off
echo Testing API with curl...
echo.

echo Test Case 1:
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" http://localhost:3000/bfhl
echo.
echo.

echo Test Case 2:
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"2\", \"a\", \"y\", \"4\", \"&\", \"-\", \"*\", \"5\", \"92\", \"b\"]}" http://localhost:3000/bfhl
echo.
echo.

echo Test Case 3:
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"A\", \"ABcD\", \"DOE\"]}" http://localhost:3000/bfhl
echo.
