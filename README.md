# talha-innovaxel-bilal

# URL Shortener API  

## 🛠 Environment  

This project is built using:  
- **Node.js** - JavaScript runtime environment  
- **Express.js** - Web framework for handling API requests  
- **MongoDB with Mongoose** - Database for storing URLs and short codes  
- **Postman** - Used for API testing  

## 📌 Design Pattern: MVC  

This project follows the **Model-View-Controller (MVC)** design pattern for better **code organization, scalability, and maintainability**.  

- **Model (`model/schema.js`)**  
  Defines the database schema for storing URLs, short codes, and access counts.  
- **Controller (`controllers/urlController.js`)**  
  Handles business logic like generating short URLs, retrieving original URLs, and updating short codes.  
- **Routes (`routes/urlRoute.js`)**  
  Defines API endpoints and links them to controller functions.  
- **Server (`index.js`)**  
  Initializes Express, connects to MongoDB, and sets up middleware.  

### 🔄 **Why MVC?**  
- **Separation of Concerns** - Keeps business logic, data handling, and request handling separate.  
- **Scalability** - Easily add new features without modifying core functionality.  
- **Reusability** - Controllers and models can be reused in different parts of the application.  

## 🚀 API Endpoints  

### 1️⃣ **Generate Short URL**  
- **Method:** `POST`  
- **Endpoint:** `/shorten`  
- **Description:** Creates a short URL from a given long URL.  

### 2️⃣ **Get Original URL**  
- **Method:** `GET`  
- **Endpoint:** `/shorten/:shortId`  
- **Description:** Retrieves the original URL from the short code and increments the access count.  

### 3️⃣ **Update Short URL**  
- **Method:** `PUT`  
- **Endpoint:** `/shorten/:shortId`  
- **Description:** Updates an existing short URL with a new generated short code. 

### 4️⃣ Delete Short URL**  
- **Method:** `DELETE`  
- **Endpoint:** `/shorten/:shortId`  
- **Description:** Updates an existing short URL with a new generated short code.  


## WORKING
- First start project with **npm start**
- Then open MongoDB and connect with localserver
- Open POSTMAN and write url **localhost:8001/shorten**
- Select POST and then select RAW in BODY tag and Select JSON
- Write a JSON object having attribute *url* and write your long URL
- On hitting *SEND*, your URL objected is created with SHORT CODE
- From there, use GET, PUT and DELETE APIs with link **localhost/8001/shorten/*shortcode*** and you will get your desired output
---

## 📸 API Implementation (Screenshots)  

### 1️⃣ Create Short URL  
![Create Short URL](https://github.com/iTalhaBilal/talha-innovaxel-bilal/blob/dev/screenshots/create.PNG?raw=true)  

### 2️⃣ Get Original URL  
![Get Original URL with Count Increment](https://github.com/iTalhaBilal/talha-innovaxel-bilal/blob/dev/screenshots/get.PNG?raw=true)  

### 3️⃣ Update Short URL  
![Update Short URL](https://github.com/iTalhaBilal/talha-innovaxel-bilal/blob/dev/screenshots/update.PNG?raw=true)  

### 4️⃣ Delete Short URL  
![Delete Short URL](https://github.com/iTalhaBilal/talha-innovaxel-bilal/blob/dev/screenshots/delete.PNG?raw=true)  


