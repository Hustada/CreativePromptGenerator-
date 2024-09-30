# Creative Writing Prompt Generator

This project is a full-stack application that generates creative writing prompts based on user input (genre, theme, character, and setting). The frontend is built with **React** and styled using **Material UI (MUI)**. The backend is built using **Flask** and the **OpenAI GPT-3.5 Turbo** API for generating the writing prompts.

## Features
- User-friendly form to input **genre**, **theme**, **main character**, and **setting**.
- Generates a creative writing prompt using the **OpenAI API**.
- **Clear Form** button to reset the input fields.
- Responsive and visually appealing UI with **Material UI** components.

---

## Project Structure

/creative-writing-prompt-generator (root directory) ├── /creative-writing-prompt-generator (React app) │ ├── /src │ │ ├── App.js │ │ ├── index.js │ └── package.json ├── /backend (Flask app) │ ├── app.py │ ├── .env │ └── requirements.txt └── README.md

---

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (for running the React frontend)
- **Python 3.x** (for running the Flask backend)
- **pip** (Python package manager)

---

## Setup

### Backend Setup (Flask)
1. Navigate to the `backend` folder:
```bash
cd backend

###Install the required Python packages
```bash
pip install -r requirements.txt

