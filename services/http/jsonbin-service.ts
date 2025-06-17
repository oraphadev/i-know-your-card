import axios from "axios";

const instance = axios.create({
  baseURL: process.env.JSONBIN_API_URL,
  headers: {
    "x-master-key": process.env.JSONBIN_API_KEY,
  },
});

const binId = process.env.JSONBIN_BIN_ID;

export { instance as jsonBinService, binId };
