# 🚀 Campus Lost and Found System (Project Hanap)

Welcome to the **Project Hanap** frontend repository fork! This branch contains the converted EJS templates and updated UI components for the web application.

---

## 📌 Project Overview
This repository holds the frontend layout and EJS dynamic templates developed for the **Campus Lost and Found System** capstone project.

---

## 🛠️ Contributed Features & Files

I have converted and updated the following key frontend pages into **EJS (Embedded JavaScript)** format for backend and server-side integration:

* 📄 `index.ejs` - The main public home landing page for lost and found items navigation.
* 📄 `report.ejs` - The user item reporting page for submitting lost/found items.
* 📄 `admin-claims.ejs` - The administrative dashboard and claims management view.
* 🎨 `style.css` - Custom styling for UI consistency across components.
* 📜 `script.js` - Client-side interaction and functionality scripts.

---

## 🧑‍💻 Development Team & Committee
* **Merly Simbulan** - Frontend Development & EJS Templating
* **Jake** - Project Lead & Backend Developer
* **Janel** - Development Team Member
* **John Paul Rendon** - Project Committee Member

---

## 🔧 How to Run / Integrate
1. Ensure **Node.js** and **Express.js** are installed in your project environment.
2. Place the EJS files in your `views/` directory.
3. Render pages through Express controllers:
   ```javascript
   res.render('index');
   res.render('report');
   res.render('admin-claims');
