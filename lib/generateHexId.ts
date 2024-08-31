import { randomBytes } from "crypto";

export function generateHexId(length: number = 10) {
  return randomBytes(length / 2).toString("hex");
}
