# 🌦️ Dynamic Weather Dashboard (React Assignment 4)

## 🌐 Live Demo
Check out the live application here: [Dynamic Weather Dashboard Live](https://weatherdashboard-kappa-black.vercel.app/)

A highly visual, dynamic weather application built with React. This project demonstrates advanced API integration using **Async/Await** and **Fetch**, robust **Error Handling**, and complex **Conditional Rendering** to create a stunning, responsive User Interface that reacts to live weather data.

---

## 🚀 Features
* **🌍 Real-Time Weather Data:** Integrates with the OpenWeatherMap API to fetch current temperature, humidity, wind speed, and sunrise/sunset times.
* **🎨 Dynamic Glassmorphism UI:** The background smoothly transitions based on real-time conditions:
  * **☀️ Sunny Day:** Warm, vibrant gradients.
  * **☁️ Cloudy Day:** Cool, peach-tinted sky gradients.
  * **🌙 Starry Night:** Deep twilight blues with a custom CSS starry overlay.
  * **🌧️ Rain Effect:** Dark, moody skies with a live, continuous CSS digital rain animation.
* **⏳ Smooth UX:** Features custom loading spinners during data fetching.
* **🛡️ Robust Error Handling:** Gracefully catches and displays API errors (e.g., "City not found", "Invalid API key") directly to the user.

---

## 📂 Technical Concepts Applied
* \useState\ & \useEffect\ Hooks
* External REST API Integration (\OpenWeatherMap\)
* Asynchronous JavaScript (\sync\ / \wait\ / \etch\)
* Advanced CSS (Keyframe animations, complex radial/linear gradients, box-shadow rendering)
* Epoch/Unix time conversion to local time strings

---

## 🛠️ Installation & Running Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository:**
   \\\ash
   git clone https://github.com/nilimeshbasu/weather-dashboard.git
   \\\

2. **Navigate into the project folder:**
   \\\ash
   cd weather-dashboard
   \\\

3. **Install dependencies:**
   \\\ash
   npm install
   \\\

4. **Add your API Key:**
   * Open \src/App.js\
   * Replace the \API_KEY\ variable with your own OpenWeatherMap API key.

5. **Start the development server:**
   \\\ash
   npm start
   \\\

---

## 👨‍💻 Author
* **Nilimesh Basu**
