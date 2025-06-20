import axios from "axios";

const baseURL = process.env.JSONBIN_API_URL;
const apiKey = process.env.JSONBIN_API_KEY;
const binId = process.env.JSONBIN_BIN_ID;

const instance = axios.create({
  baseURL,
  headers: {
    "x-master-key": apiKey,
  },
});

export { apiKey, baseURL, binId, instance as jsonBinService };
