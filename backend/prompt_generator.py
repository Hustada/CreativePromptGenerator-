from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests from the frontend

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

@app.route('/generate', methods=['POST'])
def generate_prompt():
    data = request.json
    genre = data['genre']
    theme = data['theme']
    character = data['character']
    setting = data['setting']

    # Construct the prompt
    prompt = (
        f"Generate a creative writing prompt.\n"
        f"Genre: {genre}\n"
        f"Theme: {theme}\n"
        f"Main Character: {character}\n"
        f"Setting: {setting}\n\n"
        f"Provide a concise and imaginative writing prompt that incorporates these elements."
    )

    # Call OpenAI API
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150,
        temperature=0.7
    )
    
    generated_prompt = response.choices[0].message.content
    return jsonify({'prompt': generated_prompt})

if __name__ == '__main__':
    app.run(debug=True)
