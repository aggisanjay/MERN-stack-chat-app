import express from "express"

import "dotenv/config"
import cors from 'cors'
import http from 'http'
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import {Server} from 'socket.io'
//create express app and http server

const app=express();
const server=http.createServer(app)

//intialize socket.io server

export const io=new Server(server,{
    cors:{origin:'*'}
})

//store online users

// export const userSocketMap={}; //{userId:socketId}


// //socket.io connection handler

// io.on('connection',(socket)=>{

//     const userId=socket.handshake.query.userId;
//     console.log('User Connected',userId);

//     if(userId) userSocketMap[userId]=socket.id;

//     //emit online users to all connected clients

//     io.emit('getOnlineUsers',Object.keys(userSocketMap));

//     socket.on('disconnect',()=>{
//         console.log('User Disconnected',userId)
//         delete userSocketMap[userId];
//         io.emit('getOnlineUsers',Object.keys(userSocketMap))
//     })

// })

// store online users (userId => Set of socketIds)
export const userSocketMap = {}; 

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    console.log('User Connected:', userId, socket.id);

    if (userId) {
        if (!userSocketMap[userId]) {
            userSocketMap[userId] = new Set();
        }
        userSocketMap[userId].add(socket.id);
    }

    // emit online users
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('User Disconnected:', userId, socket.id);

        if (userId && userSocketMap[userId]) {
            userSocketMap[userId].delete(socket.id);

            if (userSocketMap[userId].size === 0) {
                delete userSocketMap[userId];
            }
        }

        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});


//middleware setup

app.use(express.json({limit:'4mb'}))
app.use(cors())


app.use('/api/status',(req,res)=>res.send("Server is live"))
app.use('/api/auth',userRouter)
app.use('/api/messages',messageRouter)

//connect to mongoDB

await connectDB()

if(process.env.NODE_ENV !=='production'){
 const PORT=process.env.PORT||5000;

server.listen(PORT,()=>console.log('Server is running on PORT: '+ PORT))
}

// Export server for vercel
export default server
