import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function App() {
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState('');
  const [character, setCharacter] = useState('');
  const [setting, setSetting] = useState('');
  const [writingPrompt, setWritingPrompt] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/generate', {
        genre,
        theme,
        character,
        setting
      });
      setWritingPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error generating prompt:', error);
    }
  };

  // Function to clear form fields
  const clearForm = () => {
    setGenre('');
    setTheme('');
    setCharacter('');
    setSetting('');
    setWritingPrompt('');
  };

  return (
    <Container>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          textAlign: 'center', 
          marginTop: 2,
          color: '#3f51b5',               // Blue text
          fontWeight: 'bold',              // Bold font weight
          letterSpacing: '0.1rem',         // Slight letter spacing for elegance
          textTransform: 'uppercase',      // Uppercase text for a strong title
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)' // Subtle text shadow for depth
        }}
      >
        Creative Writing Prompt Generator
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Main Character"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Setting"
          value={setting}
          onChange={(e) => setSetting(e.target.value)}
          margin="normal"
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Generate Prompt
          </Button>
          <Button variant="outlined" color="secondary" onClick={clearForm}>
            Clear Form
          </Button>
        </Box>
      </Box>

      {writingPrompt && (
        <Box 
          sx={{ 
            mt: 4, 
            p: 2, 
            backgroundColor: '#f5f5f5', // Light background for contrast
            borderRadius: 2,             // Rounded corners
            boxShadow: 3,                // Light shadow for depth
            border: '1px solid #e0e0e0', // Border for definition
            textAlign: 'center'          // Center the text
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ color: '#3f51b5', fontWeight: 'bold', mb: 2 }} // Blue header with bold text and margin
          >
            Generated Writing Prompt:
          </Typography>
          <Typography 
            sx={{ color: '#333', fontSize: '1.2rem', fontStyle: 'italic' }} // Italicized prompt text for emphasis
          >
            {writingPrompt}
          </Typography>
        </Box>      
      )}
    </Container>
  );
}

export default App;
