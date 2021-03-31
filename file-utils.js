import fs from 'fs';

export class FileUtils {
  concatSync(files) {
    return files
      .map(file => fs.readFileSync(file))
      .join('');
  }

  async concat(files) {
    const promises = files.map(file => fs.promises.readFile(file));
    const fileContents = await Promise.all(promises);
    return fileContents.join('');
  }
}
