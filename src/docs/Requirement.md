# 🏡 ReactJS Frontend Development Assignment

## 🎯 Objective

Build a Real Estate Web Application based on the provided Figma design.  
The application should fetch property listings from an API and implement authentication using Firebase.

📅 **The deadline for submission is 4 days.**

---

## 🔹 Requirements

### 1. 📑 Pages to Build (from Figma)

**Figma Link: assignment**

- 🏠 **Home Page**

  - Hero section with banner.
  - “What We Do” section (4 cards).
  - Featured Properties (API data).
  - Properties available for sale and rent (API data).
  - Newsletter subscription section.
  - Footer.

- 🏘️ **Property Listing Page**

  - Display list of properties fetched from API.
  - Filter by property type (sale / rent).

- 📝 **Signup Page**

  - Form with name, email, password, confirm password.
  - On success → register user using Firebase Authentication.
  - Redirect user to login page.

- 🔑 **Login Page**
  - Form with email + password.
  - On success → authenticate with Firebase Authentication.
  - Store user session (localStorage/Context).
  - Redirect user to homepage.

---

### 2. 🌐 API for Properties

Use this API: https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing

Each property should have:

```json
{
  "createdAt": "2025-09-02T19:04:31.145Z",
  "name": "Lester Hackett",
  "buildingNumber": "764",
  "cardinalDirection": "South",
  "city": "Andersonfurt",
  "country": "Tajikistan",
  "countryCode": "HM",
  "latitude": -68.6896,
  "longitude": -9.4525,
  "state": "New Jersey",
  "timeZone": "America/Belize",
  "image": "https://picsum.photos/seed/rko0Qcmc/1736/389",
  "ownerName": "Christy Hane",
  "contactNumber": "1-839-606-5135 x9492",
  "id": "1"
}
```

### ⚙️ Technical Guidelines

- ⚛️ Use React.js (Functional Components + Hooks).
- 🧭 Use React Router for navigation.
- 🔐 Use Firebase Authentication for signup & login.
- 🎨 CSS Framework: TailwindCSS / Bootstrap (or plain CSS).
- 📱 Make the design responsive (desktop & mobile).
- 💾 Store logged-in user state (Context API / localStorage).

---

## 📂 Deliverables

A GitHub repository with:

- 📦 `src/components/` → reusable UI components (Navbar, Footer, Card, Form, etc.)
- 📄 `src/pages/` → page-level components (Home, Listings, Login, Signup)
- 🔧 `src/services/` → Firebase configuration + API helpers

A **README.md** file with:

- 📖 Setup instructions (how to run the app)
- 🔥 Firebase setup steps
- 🖼️ Screenshots of each page

🎥 A link to the video demonstration of the assignment has been created.  
Please upload the video of the project to the drive and share the link with us.

🚀 Deploy the website on any free platform (e.g. Vercel, Netlify, etc.) and share its link with us

---

## ✅ Evaluation Criteria

- 🎯 Pixel-perfect UI (close to Figma design).
- 🔑 Proper Firebase Authentication integration.
- 🌐 API data integrated dynamically (no hardcoded listings).
- 🧹 Code structure & readability.
- 🤝 Responsive and user-friendly.
