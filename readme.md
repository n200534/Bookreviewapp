# 📚 Book Review Platform Frontend

This is the frontend of a **Book Review Platform** built using **React** and **Material UI (MUI)**. It allows users to view books, read and submit reviews, manage profiles, and authenticate (login/register) before accessing the main content.

---

## 🚀 Features

- ✅ **User Authentication** (Login/Register)
- 🏠 Home Page with Hero Banner and Highlights
- 📚 Book Listing Page with **Search and Filter**
- 📖 Individual Book Detail Page with **Ratings and Reviews**
- 👤 User Profile Page
- ✍️ Review Submission Modal

---


---

## 🧩 Routing Logic (Updated in `App.js`)

- When the app starts, it checks if the user is authenticated.
- If **not logged in**, the `AuthPage` is shown.
- On **successful login/register**, user is redirected to the **Home Page**.
- Navigation handled with conditional rendering (`useState`) and custom logic.
- Pages include: `HomePage`, `BooksListPage`, `BookDetailPage`, `UserProfilePage`, and `ReviewForm`.

---

## 🔌 Backend Integration
This frontend is designed to integrate with a backend API supporting routes such as:

- POST /api/auth/register

- POST /api/auth/login

- GET /api/books

- GET /api/books/:id

- POST /api/books/:id/reviews

- GET /api/user/profile

Adjust fetch or axios calls in services accordingly to connect with your backend.

---

## 🧪 Mock Data

All books, users, and reviews are currently fetched from `src/data/mockData.js` for demo purposes.

---

## 💡 Future Improvements

- 🔐 Connect to real backend API for authentication and data.
- 🔍 Advanced filtering and pagination on book list.
- 📝 Form validation and rating system improvements.
- 🌍 Deploy frontend with Vercel/Netlify and connect to backend.

---
