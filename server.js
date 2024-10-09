const e = require('express');
const path = require('path');
const port =  3000;
const app = e();
app.use(e.static(path.join(__dirname,'public')));

app.listen(port,()=>{
        console.log(`localhost:${port}`);
});




