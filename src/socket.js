import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-oof7.onrender.com/' : 'http://localhost:4000';

export const socket = io(URL);
