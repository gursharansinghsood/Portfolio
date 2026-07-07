# 🚀 Personal Portfolio

A modern, responsive, and interactive personal portfolio built with **React (Vite)** for the frontend and **Node.js + Express** for the backend. The application features a desktop-inspired interface, smooth animations, project showcase, terminal widget, and a fully functional contact form powered by an Express API.

---

## ✨ Features

- 🎨 Modern desktop-inspired user interface
- 🌙 Light & Dark theme support
- 📱 Fully responsive across devices
- ⚡ Smooth page transitions and animations
- 💻 Interactive terminal widget
- 📂 Project showcase with detailed pages
- 📧 Contact form with email integration
- 🧩 Reusable React components
- 🚀 Optimized performance with Vite

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

### Backend

- Node.js
- Express.js
- Nodemailer

### Tools

- npm
- ESLint
- Git & GitHub

---

## 📁 Project Structure

```text
Portfolio/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   └── package.json
│
├── assets/
├── README.md
└── .gitignore
```

---

# ⚙️ Getting Started

## Prerequisites

- Node.js 18+
- npm

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/portfolio.git

cd portfolio
```

---

## 2️⃣ Backend Setup

```bash
cd server

npm install
```

Create a **.env** file inside the **server** directory.

```env
PORT=5000

EMAIL_SERVICE=Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Start the backend server.

```bash
npm start
```

---

## 3️⃣ Frontend Setup

Open a new terminal.

```bash
cd client

npm install

npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🌐 Environment Variables

### Backend (`server/.env`)

```env
PORT=5000

EMAIL_SERVICE=Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend (`client/.env`)

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> **Never commit your `.env` files or sensitive credentials to GitHub.**

---

# 🚀 Production Build

Generate the frontend build.

```bash
cd client

npm run build
```

The production files will be generated inside:

```text
client/dist
```

Deploy the frontend to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Deploy the backend to:

- Render
- Railway
- Heroku
- VPS
- DigitalOcean

---

# 📸 Screenshots

Place your screenshots inside the **assets/** directory.

```text
assets/
├── 1.png
├── 2.png
├── 3.png
├── 4.png
├── 5.png
├── 6.png
├── 7.png
├── 8.png
├── 9.png
└── 10.png
```

Example:

```md
![Lock](./assets/1.png)

![Home](./assets/2.png)

![Skills](./assets/3.png)

![Projects](./assets/4.png)

![Gallery](./assets/5.png)

![About](./assets/6.png)

![Contact](./assets/7.png)

![Setting](./assets/8.png)

![Terminal](./assets/9.png)
```

---

# 📬 Contact

If you'd like to collaborate or have any questions, feel free to reach out through the contact form available on the portfolio.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
