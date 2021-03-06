import fs from 'fs';
import path from 'path';
import { FileUtils } from './file-utils.js';

class Main {
  private files: string[];

  constructor(private fileUtils: FileUtils) {
    const fileNames = fs.readdirSync('./data');
    this.files = fileNames.map(fileName => path.join('./data', fileName))
    this.fileUtils = fileUtils;
  }

  async run() {
    try {
      const data = await this.fileUtils.concat(this.files);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

const fileUtils = new FileUtils();
new Main(fileUtils).run();
