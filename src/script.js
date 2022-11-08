import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// POSITION
// mesh.position.normalize(); // Results in 1
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// Same thing as above
mesh.position.set(0.7, -0.6, 1);

// SCALE
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5); // Same thing as above

// Distance between the center of the scene and the object position
console.log(mesh.position.length());

// Axes helper
const axesHelper = new THREE.AxesHelper(2); // Creates the lines. Parameter is how long the lines should be
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// Distance between the camera and the object position
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Render is like a screenshot. Don't apply anything after this
renderer.render(scene, camera);
