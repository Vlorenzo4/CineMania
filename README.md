# Cinemania App

Full stack web application that allows users to add and visualize movies. Users can submit movie information through a form and see the movies displayed as dynamic cards.

---

## 🚀 Features

- Add movies through a form
- Input validation for movie data
- Display movies as dynamic cards
- Store movie information in MongoDB
- Full stack application (Frontend + Backend)

---

## 🛠 Technologies

### Backend
- Node.js
- Express.js
- MongoDB

### Frontend
- JavaScript
- HTML
- CSS
- Bootstrap

---

## ⚙️ Installation & Setup

```bash
git clone <your-repository-url>
cd CineMania

## Backend Setup
cd back
npm install

## Environment variables

Create a .env file inside the back folder.
DB_USER=your_user
DB_PASSWORD=your_password
DB_CLUSTER=your_cluster
DB_NAME=your_database

MONGO_URI=your_connection_string

## Run backend
npm start

## 💻 Frontend Setup

The frontend is built with static HTML, CSS and JavaScript.
To run it, open the HTML files directly in your browser:

index.html
movies.html
addMovies.html

Or use a live server extension for better experience.

## 📌 Usage

- Navigate to the application  
- Add a movie using the form (title, director, duration, genre, rating, image) 
- Submit the form
- View movies displayed as dynamic cards
