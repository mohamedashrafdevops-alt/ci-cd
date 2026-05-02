const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        service: 'Telemedicine API',
        timestamp: new Date().toISOString()
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Telemedicine Backend running on port ${PORT}`);
    });
}

module.exports = app; 
