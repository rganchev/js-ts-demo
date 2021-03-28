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
    console.log(this.fileUtils.concat(this.files));
  }
}

const fileUtils = new FileUtils();
new Main(fileUtils).run();
