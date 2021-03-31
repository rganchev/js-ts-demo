import fs from 'fs';
import path from 'path';
import { FileUtils } from './file-utils.js';

class Main {
  constructor(fileUtils) {
    const fileNames = fs.readdirSync('./data');
    this.files = fileNames.map(fileName => path.join('./data', fileName))
    this.fileUtils = fileUtils;
  }

  run() {
    const promise = this.fileUtils.concat(this.files);
    promise
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
}

const fileUtils = new FileUtils();
new Main(fileUtils).run();
