# 💼 Professional Spring Boot E-Commerce Application

A comprehensive full-stack eCommerce application built using **Spring Boot** (Backend) and **React with Redux** (Frontend). This project covers everything from user authentication, product and cart management, order placement, payment gateway integration (Stripe), to role-based access and secured routes.

---

## 🔧 Tech Stack

### 🚀 Backend

* Java 21
* Spring Boot
* Spring Security + JWT
* Spring Data JPA + Hibernate
* PostgreSQL
* Stripe API (Payment Gateway)

### 📃 Frontend

* React (Hooks + Redux)
* Axios
* Tailwind CSS / Material UI

---

## 💡 Features

### User

* Signup/Login/Logout
* JWT-based authentication
* Role-based access (`User`, `Admin`)

### Product

* Add, Update, Delete Products (Admin only)
* View products by keyword, category, filters
* Pagination, Sorting

### Cart

* Add to cart / remove item
* Increase/decrease quantity
* Dynamic cart ticker (toast + live updates)

### Address

* Add, update, delete addresses
* Address selection during checkout

### Order

* Complete checkout process
* Step-by-step UI (select address, payment, summary)
* View order history (user)
* Admin can view all orders

### Payments

* Stripe payment integration
* Generate Stripe client secret
* View transaction on Stripe dashboard

### UI Pages

* Home (sliding banners, handpicked products)
* Products
* About
* Contact
* Cart
* Login / Register
* Checkout (guarded route)

---

## 📒 REST API Endpoints

### 🔐 Authentication

* `POST /api/auth/signup`
* `POST /api/auth/signin`
* `POST /api/auth/signout`
* `GET /api/auth/user`
* `GET /api/auth/username`

### 🌟 Products

* `POST /api/admin/categories/{id}/product`
* `PUT /api/admin/products/{id}`
* `PUT /api/products/{id}/image`
* `DELETE /api/admin/products/{id}`
* `GET /api/public/products`
* `GET /api/public/products/keyword/{keyword}`
* `GET /api/public/categories/{id}/products`

### 📂 Categories

* `POST /api/public/categories`
* `PUT /api/public/categories/{id}`
* `DELETE /api/admin/categories/{id}`
* `GET /api/public/categories`

### 🛒 Cart

* `POST /api/carts/products/{productId}/quantity/{qty}`
* `GET /api/carts`
* `GET /api/carts/users/cart`
* `PUT /api/cart/products/{productId}/quantity/{operation}`
* `DELETE /api/carts/{cartId}/product/{productId}`

### 🏡 Addresses

* `POST /api/addresses`
* `PUT /api/addresses/{id}`
* `DELETE /api/addresses/{id}`
* `GET /api/addresses`
* `GET /api/addresses/{id}`
* `GET /api/users/addresses`

### 📦 Orders

* `POST /api/order/users/payments/CARD`
* `POST /api/order/stripe-client-secret`
* `GET /api/orders/user`
* `GET /api/orders` *(admin only)*

---

## 📚 Project Structure

````
com.ecommerce.project
├── config         # App-wide configurations
├── controller     # REST APIs
├── exceptions     # Custom exception handling
├── model          # JPA entities
├── payload        # DTOs for request/response
├── repositories   # Spring Data JPA Repositories
├── security       # JWT, filters, user details
├── service        # Business logic
├── util           # Helper utilities
└── SbEcomApplication.java  # Main app class


---

## 🏠 Demo Highlights

- Homepage with banner + handpicked products
- Products with stock and add-to-cart state
- Search, filter, and sort products
- Login required for checkout (route protection)
- Cart updates reflected globally (toast + badge)
- Checkout flow: Address > Payment > Summary > Stripe
- Stripe payment details stored and confirmed
- Admin-level order access (optional)

---



## 📅 How to Run

### Backend

```bash
git clone <repo-url>
cd backend
mvn spring-boot:run
````

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Update `application.properties` with DB config and Stripe keys.

---
