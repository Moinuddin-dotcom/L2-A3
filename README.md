# 📚 Library Management API

A RESTful API built with **Express.js**, **TypeScript**, and **MongoDB** to manage books and borrow records efficiently.

---

## 🚀 Features

- 📖 Create, Read, Update, Delete (CRUD) for books
- 🔍 Filtering & Sorting (by genre, creation date)
- 📦 Borrow book with quantity check & update
- 📊 Borrow summary using MongoDB Aggregation
- ✅ Validation with Mongoose Schema
- ⚙️ Static methods & Middleware

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── models/
│   │   ├── book.model.ts
│   │   └── borrow.model.ts
│   └── route/
│       ├── book.route.ts
│       └── borrow.route.ts
├── index.ts
├── server.ts
.env
.gitignore
package.json
tsconfig.json
README.md
```

---

## 📦 Tech Stack

- **Framework:** Express.js  
- **Language:** TypeScript  
- **Database:** MongoDB with Mongoose  
- **Validation:** Mongoose Schema + Custom Middleware  
- **Tooling:** ts-node-dev, dotenv

---

## 🔧 Getting Started

### 1️⃣ Clone & Navigate

```bash
git clone https://github.com/yourusername/library-api.git
cd library-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/library
```

> ⚠️ `.env` is already listed in `.gitignore`

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

## 📮 API Endpoints

### ✅ Books

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/api/books`         | Create a new book            |
| GET    | `/api/books`         | Get all books (filterable)   |
| GET    | `/api/books/:bookId` | Get a single book by ID      |
| PUT    | `/api/books/:bookId` | Update book info             |
| DELETE | `/api/books/:bookId` | Delete a book                |

### ✅ Borrow

| Method | Endpoint       | Description                            |
|--------|----------------|----------------------------------------|
| POST   | `/api/borrow`  | Borrow a book (with quantity update)   |
| GET    | `/api/borrow`  | Get borrow summary using aggregation   |

---

## 📊 Aggregated Borrow Summary Example

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
```

---

## 📽️ Video Explanation

👉 [Click here to watch the video explanation](https://drive.google.com/file/d/1M2O0-yrA0_wgquwS95h24pL6w_Lvtyep/view?usp=drive_link)

---

## 🧑‍💻 Author

- **Name:** Md Moinuddin Chowdhury 
- **Email:** moinchy7@gmail.com  
- **GitHub:** [Moinuddin-dotcom](https://github.com/Moinuddin-dotcom)



