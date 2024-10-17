const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(express.json()); 
app.use(cors()); 

const mongoURI = 'mongodb+srv://aman88sh:7mDAMzyMflF7rvK7@cluster0.hjgxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';  
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
});
  
const User = mongoose.model('User', userSchema);
  

app.post('/api/save-data', async (req, res) => {
  const { username, email, phone, message } = req.body;

  // Simple validation
  if (!username || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newUser = new User({ username, email, phone, message });
    await newUser.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});