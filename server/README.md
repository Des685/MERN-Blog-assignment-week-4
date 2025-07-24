# MERN Blog

![MERN Stack Logo](https://img.shields.io/badge/MERN-Stack-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A full-stack blog application built with the MERN (MongoDB, Express.js, React, Node.js) stack, featuring user authentication, post management, and a modern, responsive user interface.

## 🚀 Project Overview

This project is a personal blog application designed to showcase the capabilities of the MERN stack. It allows users to register, log in, create, view, and manage blog posts. The backend is built with Node.js and Express.js, handling API requests and interacting with a MongoDB database. The frontend is a responsive single-page application developed with React, using Vite for a fast development experience and Tailwind CSS for styling.

**Current Status:** The project is in active development. Core functionalities like user authentication and basic post management are implemented.

## ✨ Features Implemented

**Backend (API):**
* **User Authentication:**
    * User registration (`/api/auth/register`)
    * User login (`/api/auth/login`) with JWT-based authentication
    * JWT token generation and verification
* **Post Management:**
    * Create new posts (`/api/posts`) (requires authentication)
    * Fetch all posts (`/api/posts`)
    * Fetch a single post by ID (`/api/posts/:id`)
    * (Extendable to: Update post by ID, Delete post by ID)
* **Database Integration:**
    * MongoDB with Mongoose ODM for data modeling and interaction.

**Frontend (React App):**
* **Responsive UI:** Built with Tailwind CSS.
* **Homepage:** Displays a welcome message.
* **Posts Listing Page:** Fetches and displays all blog posts from the API.
* **Basic Navigation:** Links between Home and Posts pages using React Router.
* (Future: User dashboard, Single post view, Post creation form, User profiles, Comments, Categories)

## 🛠️ Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
* [MongoDB](https://www.mongodb.com/try/download/community) (Community Server)
* [Git](https://git-scm.com/downloads)
* (Optional but Recommended: [VS Code](https://code.visualstudio.com/) with [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) for API testing)

### 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone [https://github.com/Des685/MERN-Blog-assignment-week-4.git](https://github.com/Des685/MERN-Blog.git)
cd MERN-Blog