# API Documentation

**Server:** http://localhost:3000

## Authentication

| Endpoint | Method | Description |
|--------|--------|------------|
| /api/auth/register | POST | Реєстрація користувача (email, password) |
| /api/auth/login | POST | Авторизація користувача |
| /api/auth/profile | GET | Отримати профіль користувача (Bearer token) |

## Products

| Endpoint | Method | Description |
|--------|--------|------------|
| /api/products | GET | Отримати список товарів |
| /api/products/:id | GET | Отримати товар по ID |

## Orders

| Endpoint | Method | Description |
|--------|--------|------------|
| /api/orders | POST | Створити замовлення |
| /api/orders | GET | Отримати замовлення користувача |

## Swagger

Swagger UI доступний за адресою:  
http://localhost:3000/api-docs

## Frontend Routes

| Route | Method | Description |
|-----|--------|------------|
| / | GET | Головна сторінка |
| /login | GET | Сторінка авторизації |
| /register | GET | Сторінка реєстрації |
| /products | GET | Сторінка товарів |
| /profile | GET | Профіль користувача |
