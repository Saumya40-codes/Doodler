import { io } from "socket.io-client";

const ENDPOINT = process.env.ENDPOINT || 'http://localhost:5000';
const socket = io(ENDPOINT);

export default socket;