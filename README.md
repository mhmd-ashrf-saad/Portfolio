# 🌐 Angular Portfolio Website

[![Angular](https://img.shields.io/badge/Angular-20.0.0-DD0031?logo=angular)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)

A modern, responsive portfolio website built with Angular, showcasing my projects, skills, and professional experience. Features a clean design with dark mode aesthetics and a secure admin dashboard for content management.

![Portfolio Preview](public/image.png)

## 🚀 Live Demo

[View Portfolio Live](https://your-portfolio-link.com) <!-- Replace with your actual deployment link -->

## ✨ Features

- **Responsive Design**: Fully mobile-friendly interface with dark mode aesthetics
- **Dynamic Content**: Projects and skills sections with interactive elements
- **Admin Dashboard**: Secure login-protected admin area to manage content
  - Project management (add, edit, delete projects)
  - Blog post management
- **About Me**: Professional background and personal information
- **Skills Showcase**: Visual representation of technical skills
- **Contact Form**: Direct communication channel using EmailJS
- **CV Download**: Option to download resume in PDF format

## 🛠️ Technology Stack

- **Frontend**:

  - Angular 20.0.0
  - TypeScript 5.8.2
  - HTML5 & CSS3
  - Bootstrap 5.3.6
  - RxJS for reactive programming

- **Authentication**:

  - Custom auth service with route guards
  - Local storage for session management

- **Other Tools**:
  - EmailJS for contact form functionality
  - Bootstrap Icons for UI elements

## 📋 Project Structure

```
src/app/
├── about/           # About me section
├── admin/           # Admin dashboard and authentication
│   ├── dashboard/   # Content management interface
│   ├── login/       # Admin authentication
│   └── project-editor/ # Project management
├── components/      # Reusable UI components
├── contact/         # Contact form
├── guards/          # Authentication guards
├── home/            # Landing page
├── projects/        # Projects showcase
├── services/        # Data and authentication services
└── skills/          # Skills section
```

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/mhmd-ashrf-saad/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
ng serve
```

4. **Open in browser**

Navigate to `http://localhost:4200/`

## 🔐 Admin Access

The portfolio includes a secure admin dashboard for content management:

- **URL**: `/admin/login`
- **Default Credentials**:
  - Username: `admin`
  - Password: `admin123`

> ⚠️ **Note**: For production, it's recommended to implement proper backend authentication.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop displays
- Tablets
- Mobile devices

## 🚀 Deployment

Build the production version:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/portfolio/` directory.

## 👨‍💻 Author

**Mohamed Ashraf**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://www.linkedin.com/in/mohamed-ashraf-abdelbaset/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?logo=github)](https://github.com/mhmd-ashrf-saad)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

> 💻 Made with ❤️ using Angular
