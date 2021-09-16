const express = require('express');
const userRouter = require('./router/user');
const taskRouter = require('./router/task');

const port = 3000;
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server started .. ');
});

