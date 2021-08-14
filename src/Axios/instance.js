import axios from "axios";
const url = "http://localhost:3000";

// const url = "happy-ramanujan-974a17.netlify.app";
export const server = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export const StudentSignUp = (data) =>
//   server.post(`${url}/student-signup`, data);
