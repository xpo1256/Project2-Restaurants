# Project2-Restaurants

# Description 

## 🍽️ Restaurant Management App

This project is a full-stack web application for managing a restaurant. It includes features for user authentication, role-based access (Admin/Normal User), restaurant management, reviews, and order handling. The system is designed with modular architecture using 4 main models.

# 🏗️ Features

## 👤 User Management
User registration and login
Role-based access control:
Admin: Can manage restaurants, approve or delete reviews, and view all orders
Normal User: Can browse restaurants, place orders, and leave reviews
Ability for Admin to change a user’s role

## 🍴 Restaurant
Add, update, and delete restaurant entries (Admin only)
Display restaurant details including name, menu items, and ratings

## ⭐ Reviews
Users can write reviews for restaurants
Admins can manage (approve/delete) reviews
Average rating calculation for each restaurant

## 🛒 Orders
Users can place food orders
Order history and tracking
Admin can view all orders

## 🗂️ Models
User – Manages authentication, profile, and roles
Restaurant – Stores restaurant details and menus
Review – Handles user reviews for restaurants
Order – Handles placing and tracking orders

## flowchart TD
    A[User Registers/Logs In] --> B{Role}
    B -->|Normal User| C[Browse Restaurants]
    C --> D[Place Order]
    D --> E[Write Review]
    B -->|Admin| F[Manage Restaurants]
    F --> G[View Orders]
    G --> H[Approve/Delete Reviews]
    H --> C

## 🛠️ Tech Stack
Backend: Node.js, Express
Frontend: React / JSX Views
Database: MongoDB + Mongoose
Authentication: JWT, bcrypt
View Engine: JSX-View-Engine (for server-side rendering)

## 🚀 Getting Started
Clone the repository
Install dependencies:

npm install

Set up environment variables for MongoDB, JWT secret, etc.
Run the server:
npm start
Access the app at http://localhost:3000


# That Link for Table Routes:
 https://docs.google.com/document/d/1eZJ9Lz1sFzFg-surZFfXkDEcc9xrP4nTmDnsdCI0Pj8/edit?usp=sharing