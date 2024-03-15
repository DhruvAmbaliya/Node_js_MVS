import {connectDB} from "./data/database.js"
import {app} from "./app.js"

connectDB();

app.listen(4000,()=>{
    console.log("server is working")
})