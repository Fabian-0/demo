import * as THREE from "../threejs_moduls/three.module.js";

const fov = 75;
const min = 0.1;
const max = 100;
const aspectRelation = window.innerWidth / window.innerHeight;

const Camera = new THREE.PerspectiveCamera(fov, aspectRelation, min, max);
Camera.position.z = 1.2;

export default Camera;
