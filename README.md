# 💬 Real-Time Chat Application

A real-time chat application built with **MERN stack** and **Socket.IO**, featuring authentication, profile management, online user tracking, and instant messaging with image sharing.

---

## 🚀 Features

- 🔐 User authentication (signup/login with JWT)
- 📝 Profile update with Cloudinary image upload
- 🟢 Real-time online/offline user status
- 💬 Instant messaging with text and image support
- 🔔 Message notifications and unseen message count
- 🌐 Responsive UI with React and Tailwind CSS
- ⚡ Powered by **Socket.IO** for real-time communication

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Hot Toast, Socket.IO Client  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Socket.IO  
- **Cloud Storage:** Cloudinary (for images)  
- **Authentication:** JWT (JSON Web Token)  


## Setup Instructions

# 1️⃣ Clone Repository

git clone https://github.com/your-username/your-repo.git

cd your-repo

# ▶️ Frontend Setup

cd client

npm install

npm run dev

Runs on: http://localhost:5173

# ▶️ Backend Setup

cd server

npm install

npm run dev


Backend runs on: http://localhost:5000

# 🔧 Environment Variables

Create a .env file inside server/:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=xxxx

CLOUDINARY_API_KEY=xxxx

CLOUDINARY_API_SECRET=xxxx


For client, create .env:

VITE_API_URL=http://localhost:5000


## Screenshots

# Login

<img width="1029" height="517" alt="image" src="https://github.com/user-attachments/assets/bbc1a3c7-78ca-43b3-b601-42c8fed93c94" />

# Sending message

<img width="1011" height="586" alt="image" src="https://github.com/user-attachments/assets/6bc3ff80-d04c-491c-b3d9-23374dc1fd75" />

# Reciving message

<img width="995" height="559" alt="image" src="https://github.com/user-attachments/assets/355516a6-f505-4183-8f81-0da16c7673d6" />


📜 License

This project is licensed under the ISC License.

🤝 Contributing

PRs & suggestions are welcome.
