import { join, dirname } from "path";
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url)); // SERVER/CONFIG
const root = join(currentDir, "../");
const audioDirectory = join(root, "audio");
const publicDirectory = join(root, "public");

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDirectory,
    publicDirectory,
    fxDirectory: join(audioDirectory, "fx"),
    songsDirectory: join(audioDirectory, "songs"),
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "/home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    },
  },
};
