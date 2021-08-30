import { audioControls, scrollEvent } from "../helpers/helpers.js";
import * as THREE from "../threejs_moduls/three.module.js";

const Loader = {};

Loader.isLoader = (camera, cb) => {
  const loaderElement = document.getElementById("loaderId");
  const contentContainer = document.getElementById("containerId");

  THREE.DefaultLoadingManager.onLoad = function () {
    contentContainer.classList.remove("hidden");
    loaderElement.remove();

    audioControls();
    scrollEvent(camera);

    cb();
  };

  THREE.DefaultLoadingManager.onError = function (url) {
    loaderElement.innerHTML = `
      <div class="error-load">
        <p class="error-info">
          An expected error, please reload the page. <i class="fas fa-exclamation-triangle"></i>
        </p>
      </div>
    `;
  };
};

export default Loader;
