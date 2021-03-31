import fs from 'fs';

export class FileUtils {
  concatSync(files) {
    return files
      .map(file => fs.readFileSync(file))
      .join('');
  }

  concat(files) {
    const promises = files.map(file => fs.promises.readFile(file));
    return Promise.all(promises)
      .then(fileContents => fileContents.join(''));
  }
}
