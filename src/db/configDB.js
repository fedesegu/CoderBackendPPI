import mongoose from "mongoose";

const URI="mongodb+srv://federicosegu:Abeyp231@cluster0.gjwkb4d.mongodb.net/DB_Coder_PrimeraPI?retryWrites=true&w=majority";

mongoose.connect(URI)
.then(()=>console.log("Connected to DB_Coder_PrimeraPI"))
.catch((error)=> console.log(error));