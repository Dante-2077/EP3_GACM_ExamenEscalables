import mongoose from "mongoose";

export const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
            dbName: 'notas-db'  
        });
        console.log("Base de datos conectada con exito");
    }catch (error){
        console.log(error);
    }

}
