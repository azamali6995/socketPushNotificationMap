import { io } from "socket.io-client";
const socket = io.connect("http://localhost:4002");
export default socket;