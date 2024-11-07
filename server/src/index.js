import experss from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = experss()
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})