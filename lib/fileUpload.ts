import path from "path";
import { promises as fs } from "fs";

export async function fileUpload(file: File, directory: string) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", directory, file.name);

  await fs.writeFile(filePath, buffer);
}
