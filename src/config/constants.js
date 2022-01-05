export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://b-market-server.herokuapp.com"
    : "http://localhost:8080.com";
