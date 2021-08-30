import { getRandomParticelPos } from "../helpers/helpers.js";
import * as THREE from "../threejs_moduls/three.module.js";

const loader = new THREE.TextureLoader();

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(getRandomParticelPos(2000), 3));
const material = new THREE.PointsMaterial({
  transparent: true,
  size: 0.05,
  map: loader.load("./img/star.png")
});

const Particles = new THREE.Points(geometry, material);

export default Particles;