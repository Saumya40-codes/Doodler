import { io } from "socket.io-client";

const NEXT_PUBLIC_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || 'http://localhost:5000';
const socket = io(NEXT_PUBLIC_ENDPOINT);

export default socket;