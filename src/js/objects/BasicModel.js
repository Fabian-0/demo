import { GLTFLoader } from "../threejs_moduls/GLTFLoader.js";

export default class BasicModel {
  constructor() {
    this.model = null;
  }

  load(url) {
    return new  Promise((resolve, reject) => {
      new GLTFLoader().load(url, ( load ) => {
        this.model = load.scene;
        return resolve(load);
      }, () => {}, (error) => {
        return reject(error);
      });
    });
  }
}