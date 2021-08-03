const app = require('./server/server');
const port = 3000;


app.listen(port, ()=> console.log(`\nExpress now departing at port ${port}!\n`));