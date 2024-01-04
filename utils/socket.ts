import { io } from "socket.io-client";

const socket = io("https://doodler-api.onrender.com/");

export default socket;