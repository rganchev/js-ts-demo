import fs from 'fs';

export class FileUtils {
  concatSync(files) {
    return files
      .map(file => fs.readFileSync(file))
      .join('');
  }

  concat(files, callback) {
    const result = [];
    let counter = 0;
    files.forEach((file, index) => {
      fs.readFile(file, (error, data) => {
        if (error) {
          callback(error, null);
          return;
        }

        result[index] = data;
        counter++;
        if (files.length === counter) {
          callback(null, result.join(''));
        }
      });
    });
  }
}
