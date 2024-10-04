# Bhoomy Height Property Page


This is a simple property page built using **React**, **Material UI**, **Json Server**, and **CSS**. It a fully functioning property page.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
4. [Project Structure](#project-structure)
5. [Contributing Guidelines](#contributing-guidelines)
6. [License](#license)

---

## Project Overview

This project simulates an e-commerce product page where users can:
- View products with details like name, price, and image.
- Add items to thier shopping cart.
- Update the quantity of items in the cart.
  
However, the project contains **intentional bugs** that provide a good learning opportunity for new developers. Debugging these will hlep you improve your problem-solving, DOM manipulation, and responsive desgn skills.

---

## Tech Stack

**Frontend:** ReactJs, CSS and Material UI
**Backend:** Json Server@0.17.1 and cors

---

## Setup Instructions

### Prerequisites:
- Node.js and npm installed. If you don't have them, download and install [Node.js](https://nodejs.org/).

### Steps:
1. Fork [this](https://github.com/sanskar1419/Uponly-Technology-Assessment.git) repository.

2. Clone the forked repository:
    ```bash
    git clone https://github.com/<your-username>/Uponly-Technology-Assessment.git
    ```

3. Navigate to the project directory:
    ```bash
    cd uponly_tecnologies
    ```

4. Install the dependencies for back end :
    ```bash
    npm install
    ```

5. Start the backend server:
    ```bash
    npm run server
    ```

    This will run the server in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

6. Navigate to frontend folder:
    ```bash
    cd frontend
    ```

7. Install frontend dependencies:
    ```bash
    npm install
    ```

9. Start the application:
    ```bash
    npm run dev
    ```

 This will run the application in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## Project Structure

```plaintext
uponly_tecnologies/
│
├── backend/
│   ├── server.js            # HTML template for the app
│
├── frontend/
│   ├── public/
│   │   ├── ProductCard.js   # Component for displaying a single product
│   │   ├── Cart.js          # Component for displaying the shopping cart
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry piont for the app
│   ├── styles.css           # Styling for the components




│
├── .gitignore               # Files and folder to be ignores will commits
├── db.json                  # Database in form of JSON
├── package-lock.json        # Project sub dependencies info.
├── package.json             # Project configuration and dependencies
└── README.md                # Documentation for the project

uponly_tecnologies/
│
├── public/
│   ├── index.html          # HTML template for the app
│
├── src/
│   ├── components/
│   │   ├── ProductCard.js   # Component for displaying a single product
│   │   ├── Cart.js          # Component for displaying the shopping cart
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry piont for the app
│   ├── styles.css           # Styling for the components
│
├── package.json             # Project configuration and dependencies
└── README.md                # Documentation for the project

```
---

