import * as THREE from "../threejs_moduls/three.module.js";

const canvas = document.getElementById("3d-context");
const Renderer = new THREE.WebGLRenderer({ canvas });

Renderer.setSize(window.innerWidth, window.innerHeight);

export default Renderer;