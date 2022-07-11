import { io } from "socket.io-client";

const backendUrl = process.env.BACKEND_URL

const socket = io.connect(backendUrl.slice(0, -7));

export default socket;
