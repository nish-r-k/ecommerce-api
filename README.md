#  E-commerce Web Application

A simple full-stack E-commerce platform built with Node.js, Express, MongoDB, and HTML/CSS/JS.

**Features**
**Admin Dashboard** — add, update, delete products.
**Customer Flow** — register/login, browse products, add to cart, update cart, create orders.
**Role-Based Auth** — admin & customer, protected routes with JWT.

---

##  Tech Stack

**Backend:** Node.js, Express, MongoDB (Mongoose)
**Frontend:** HTML, CSS,  JavaScript
**Auth:** JWT (JSON Web Token)

---

# How to Run Locally

1. **Clone the repository**
   
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME

# Install dependencies
npm install

# Create .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# Run the server
npm run dev


# Open Frontend Pages
http://localhost:5000/api/

register.html → Register as customer 

login.html → Log in to get JWT stored in localStorage

products.html → Browse products, search & pagination included!

cart.html → View & manage your shopping cart

admin.html → Admin dashboard for managing products

# User Roles
customer — default role when registering.

admin — must be created manually via Postman or 
 admin credentials
 email:admin2@gmail.com
 password:admin2@gmail.com