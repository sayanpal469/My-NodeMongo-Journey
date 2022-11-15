const app = require('./app');
const config = require('./Config/Config');
const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})