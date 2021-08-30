import * as THREE from "../threejs_moduls/three.module.js";
import Renderer from "./Renderer.js";
import Camera from "./Camera.js";
import Scene from "./Scene.js";
import BasicModel from "../objects/BasicModel.js";
import THREEx from "./THREEx.js";
import Loader from "./Loader.js";
import Particles from "../objects/Particles.js";

let Planet = null;
let AlienA = null;
let AlienB = null;

function main() {
  // Riseze canvas
  THREEx.WindowResize(Renderer, Camera);

  // Loader status
  Loader.isLoader(Camera, animate);

  // Load models

  Planet = new BasicModel();
  Planet.load("./3dmodels/planet.glb")
    .then((res) => {
      Planet.model.position.y = -0.2;
      Scene.add(Planet.model);
    })
    .catch((err) => console.error(err));

  AlienA = new BasicModel();
  AlienA.load("./3dmodels/alien_a.glb")
    .then((res) => {
      AlienA.model.position.y = -3.85;
      AlienA.model.position.x = 0.3;
      Scene.add(AlienA.model);
    })
    .catch((err) => console.error(err));

  AlienB = new BasicModel();
  AlienB.load("./3dmodels/alien_b.glb")
    .then((res) => {
      AlienB.model.position.y = -7.35;
      AlienB.model.position.x = -0.3;
      AlienB.model.rotateY(Math.PI);
      Scene.add(AlienB.model);
    })
    .catch((err) => console.error(err));

  // Create and add general ilumination

  const ligth = new THREE.AmbientLight("#fff", 2);
  Scene.add(ligth);

  // Add stars

  Scene.add(Particles);
}

function animate() {
  requestAnimationFrame(animate);

  Planet.model.rotateY(0.001);
  AlienA.model.rotateY(0.003);
  AlienB.model.rotateY(0.003);

  Renderer.render(Scene, Camera);
}

main();
