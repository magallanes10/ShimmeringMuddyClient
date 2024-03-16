const express = require('express');
const { spotify } = require('betabotz-tools');

const app = express();
const port = 3000; // Choose your desired port

app.get('/spt', async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is missing' });
        }

        const results = await spotify(query);
        console.log(results); // Output results to console
        return res.json(results); // Return results as JSON
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
