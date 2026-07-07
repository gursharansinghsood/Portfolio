import app from "./src/app.js"
import config from "./src/config/config.js"

const startServer = () => {
    app.listen(config, () => console.log('Server is Running'))
}

startServer()