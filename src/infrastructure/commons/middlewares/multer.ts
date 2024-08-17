import { type Request } from "express";
import multer, { type StorageEngine } from "multer";

export const storage: StorageEngine = multer.memoryStorage();

export const fileFilter = (req: Request, file: Express.Multer.File) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    // Pass
  } else {
    // Pass
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});
