import { io } from "socket.io-client";

const socket = io("https://doodler-api.vercel.app/");

export default socket;