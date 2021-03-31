import fs from 'fs';

export class FileUtils {
  concat(files) {
    return files
      .map(file => fs.readFileSync(file))
      .join('');
  }
}
