#  LearnKeyToKeys

A modern online piano learning platform that allows users to explore piano courses, make secure payments, and gain access to premium course materials after successful payment verification.

Designed with a clean, responsive interface and built using modern web technologies, LearnKeyToKeys provides a smooth learning experience for aspiring pianists.

---

## Live Demo

**Website:** https://learnkeytokeys.com

---



---

# Features

- Beautiful and responsive landing page
- 📚 Piano course showcase
- 💳 Secure Paystack payment integration
- 🔐 Protected premium course access
- ✅ Payment verification before granting access
- MongoDB payment record storage
- ⚡ Fast React frontend
-  Express.js REST API
- 📱 Mobile-friendly design
- 🎨 Modern UI with Tailwind CSS

---

# Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- JavaScript (ES6+)
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Paystack API
- Dotenv

---

# 📁 Project Structure

```
learnkeytokeys/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

#  Installation

## Clone the repository

```bash
git clone https://github.com/Ademola-giod/Key-to-keys.git
```

Move into the project

```bash
cd learnkeytokeys
```

---

## Install Frontend

```bash
cd client

npm install

npm run dev
```

---

## Install Backend

```bash
cd server

npm install

npm run dev
```

---

#  Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

PAYSTACK_SECRET_KEY=your_secret_key

PAYSTACK_PUBLIC_KEY=your_public_key

FRONTEND_URL=http://localhost:5173
```

---

#  Payment Flow

1. User selects a piano course.
2. User enters their email.
3. Payment is initialized with Paystack.
4. User completes payment securely.
5. Backend verifies the transaction.
6. Payment is stored in MongoDB.
7. User gains access to premium course content.

---

# 📚 Course Access

Premium course materials are only accessible after successful payment verification.

This ensures secure access and protects premium educational content.

---

# 📱 Responsive Design

The application is fully responsive across:

- Desktop
- Tablet
- Mobile devices

---

# 🔒 Security

- Server-side payment verification
- Environment variables for sensitive keys
- MongoDB database storage
- Protected premium resources

---

# Future Improvements

- User authentication
- Student dashboard
- Course progress tracking
- Certificates
- Video streaming
- Instructor dashboard
- Multiple courses
- Wishlist
- Reviews and ratings
- Email notifications

---

#  Contributing

Contributions are welcome!

If you'd like to improve LearnKeyToKeys:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

#  Author

**Ademola Idowu**

Frontend & Full Stack Developer

- React
- Node.js
- Express.js
- MongoDB
- Tailwind CSS

---

## Support

If you found this project helpful or inspiring, please consider giving it a **⭐ Star** on GitHub. Your support helps increase the project's visibility and motivates continued development.

---

Made with ❤️ for aspiring pianists around the world.
