import fs from 'fs';

export class FileUtils {
  concat(files) {
    let result = '';
    for (let i = 0; i < files.length; i++) {
      result += fs.readFileSync(files[i]);
    }

    return result;
  }
}
