import fs from 'fs';

export class FileUtils {
  concatSync(files: string[]): string {
    return files
      .map(file => fs.readFileSync(file))
      .join('');
  }

  async concat(files: string[]): Promise<string> {
    const promises = files.map(file => fs.promises.readFile(file));
    const fileContents = await Promise.all(promises);
    return fileContents.join('');
  }
}
