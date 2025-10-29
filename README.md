# JWT Authentication Banking API

### Overview
This project demonstrates secure API authentication using **JSON Web Tokens (JWT)** in Express.js.

### Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /login | Returns a JWT if credentials are correct |
| GET | /balance | Returns current balance (requires token) |
| POST | /deposit | Deposits money (requires token) |
| POST | /withdraw | Withdraws money (requires token) |

### Usage
1. Login to get a token:
   ```bash
   curl -X POST http://localhost:3000/login \
   -H "Content-Type: application/json" \
   -d '{"username":"user1","password":"password123"}'
