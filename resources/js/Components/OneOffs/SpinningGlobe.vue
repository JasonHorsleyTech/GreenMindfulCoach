<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";

const threeSceenRef = ref<HTMLDivElement | null>(null);

function createScene(el: HTMLDivElement) {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true makes the background transparent

    // Set the size of the renderer and add it to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("images/textures/grass.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);

    // Create a green sphere
    const geometry = new THREE.SphereGeometry(2, 256, 256);
    const material = new THREE.MeshLambertMaterial({
        map: texture,
    }); // Green color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Position the camera
    camera.position.z = 5;

    // Position the sphere
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.rotation.x = 0.5;

    let repeat = 2;
    // Animation function
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the sphere
        // sphere.rotation.y += 0.001;
        repeat += 0.01;
        camera.position.z -= 0.01;
        texture.repeat.set(repeat, repeat);

        // Render the scene
        renderer.render(scene, camera);
    }

    // Start the animation loop
    animate();

    // Handle window resize
    window.addEventListener(
        "resize",
        () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },
        false
    );
}

onMounted(() => {
    if (!threeSceenRef.value) return;
    createScene(threeSceenRef.value);
});
</script>
<template>
    <div class="absolute left-0 right-0">
        <div class="opacity-50" ref="threeSceenRef" />
    </div>
</template>
