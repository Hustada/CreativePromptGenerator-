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
```

2. Install the required Python packages:
```bash
pip install -r requirements.txt
```
3. Create a .env file in the backend folder with your OpenAI API key:
```bash
OPENAI_API_KEY=your-api-key-here
```
4. Run the Flask backend:
```bash
python app.prompt_generator.py
```
By default, the Flask server will run on http://localhost:5000

### Frontend Setup(React)
1. Navigate to the frontend folder(writing-prompt-generator):
```bash
cd writing-prompt-generator
```

2. Install the required packages using npm:
   ```bash
   npm install
   ```
3. Start the React frontend:
   ```bash
   npm start
   ```
By default, the React app will be running on http://localhost:3000

## Usage

#### 1. Open the React app in your browser at http://localhost:3000.
#### 2. Enter values for genre, theme, main character, and setting in the form.
### 3. Click "Generate Prompt" to get a creative writing prompt based on your inputs.
### 4. To clear the form, click the "Clear Form" button

## Technologies Used
### Frontend:
  ### React: For building the user interface.
  ### Material UI (MUI): For styling the components and making the UI responsive.
  ### Axios: For making HTTP requests to the Flask backend.
  
## Backend:
  ### Flask: For creating the API to serve the writing prompts.
  ### Flask-CORS: For handling Cross-Origin Resource Sharing between the frontend and backend.
  ### OpenAI: For generating creative writing prompts using the GPT-3.5 model.
  ### python-dotenv: For managing environment variables.


  
