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
    this.fileUtils.concat(this.files, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    });
  }
}

const fileUtils = new FileUtils();
new Main(fileUtils).run();
