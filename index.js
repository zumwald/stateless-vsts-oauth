const { configureApp } = require('./utils');

configureApp().listen(port, () => {
    console.log(`app listening on port ${port}!`)
});