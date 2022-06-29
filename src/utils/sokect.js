import { io } from "socket.io-client";

const backendUrl = process.env.BACKEND_URL

const socket = io.connect(backendUrl);

export default socket;
