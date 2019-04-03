const {
    configureApp
} = require('./utils');

const {
    app,
    config: {
        port
    }
} = configureApp();

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
});