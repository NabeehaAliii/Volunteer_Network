const express = require('express');
const bodyParser = require('body-parser');
const user = require('./src/routes/user');
const donation = require('./src/routes/donation');
const organization = require('./src/routes/organization');
const causes = require('./src/routes/causes');
const opportunities = require('./src/routes/opportunities');
const skills = require('./src/routes/skills');
const auth = require('./src/routes/authcontroller')
const path = require('path');
const cors = require('cors'); // Import cors package
const session = require('express-session');
const fs = require('fs'); // Import fs package to work with file system

// app.js
const app = express();

// Create the uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));
app.use('/uploads', express.static(uploadDir));

// Routes
app.use('/volunteer_network/user', user); // Ensure this path matches your frontend call
app.use('/volunteer_network/donations', donation);
app.use('/volunteer_network/organizations', organization);
app.use('/volunteer_network/opportunities', opportunities);
app.use('/volunteer_network/causes', causes);
app.use('/volunteer_network/skills', skills);
app.use('volunteer_network//auth', auth);

// Node App Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
