# Unhandled Error: Missing JSON Body Validation in Express.js

This repository demonstrates a common error in Express.js applications: the lack of proper validation and error handling for JSON request bodies.  Without this, the application can crash or exhibit unexpected behavior if it receives malformed JSON data.

## Bug
The `bug.js` file contains an Express.js route that handles POST requests to `/user`.  It expects a JSON body containing user data but lacks any error handling for cases where the request body is empty or invalid JSON.

## Solution
The `bugSolution.js` file provides a corrected version of the route. It uses `express.json()` middleware and incorporates error handling to gracefully manage invalid JSON requests.