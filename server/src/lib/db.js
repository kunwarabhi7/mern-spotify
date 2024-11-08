import mongoose from 'mongoose';

const connectToDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB , db: " + conn.connection.host);
    } catch (error) {
        console.log(error.message + "error connecting to eb");
        process.exit(1);
    }
}

export default connectToDb;