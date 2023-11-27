<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import * as THREE from "three";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

type Session = {
    title: string;
    description: string;
    image: string;
    calendly: string;
    price: number;
};
const sessions = ref<Session[]>([
    {
        title: "30 Minute Session",
        description:
            "A 30 minute video call. Enough time to get to know each other and discuss your goals.",
        image: "/images/sessions/30.png",
        calendly: "https://calendly.com/green-mindful-coach/30-minute-session",
        price: 50,
    },
    {
        title: "60 Minute Session",
        description:
            "A 60 minute video call. Enough time to get to know each other and discuss your goals.",
        image: "/images/sessions/60.png",
        calendly: "https://calendly.com/green-mindful-coach/60-minute-session",
        price: 100,
    },
    {
        title: "2 Hours In Person",
        description:
            "A 2 hour in person session. We'll go over any current conditions you have, your eating habits, and form a plan to get you on track.",
        image: "/images/sessions/120.png",
        calendly: "https://calendly.com/green-mindful-coach/90-minute-session",
        price: 150,
    },
]);

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
    const texture = textureLoader.load("images/textures/earth_4k.jpg"); // Replace with the path to your texture file

    // Create a green sphere
    const geometry = new THREE.SphereGeometry(2, 256, 256);
    const material = new THREE.MeshBasicMaterial({ map: texture }); // Green color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Position the camera
    camera.position.z = 5;

    // Position the sphere
    sphere.position.x = -2;
    sphere.position.y = -2;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the sphere
        sphere.rotation.x += 0.0005;
        sphere.rotation.y += 0.001;

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
    <Head title="Welcome" />

    <div class="flex flex-col flex-nowrap min-h-[100vh] bg-gray-100">
        <header
            class="grid place-content-center text-center p-6 bg-green-800 text-green-100"
        >
            <div class="mx-auto flex items-center gap-4">
                <img
                    src="/images/logo.webp"
                    alt="Health Coaching Logo"
                    class="h-20 w-20 rounded-full overflow-hidden shadow-xl"
                />
                <div>
                    <h1 class="text-4xl font-bold">Celeste Horsley</h1>
                    <p class="text-xl">RN & Plant-Based Certified</p>
                </div>
            </div>
        </header>

        <div class="grow pb-16 px-4 relative overflow-hidden">
            <div
                class="absolute bottom-0 left-0 opacity-50"
                ref="threeSceenRef"
            />
            <div class="grid gap-4 max-w-5xl mx-auto z-20 relative">
                <section class="border-b mb-6 border-green-800 py-6">
                    <h2 class="text-3xl font-bold md:text-center">
                        Embrace a Holistic Approach to Wellness
                    </h2>
                    <p class="text-lg mt-4">
                        With over 25 years of experience in healthcare, I bring
                        a deep understanding of the interconnectedness of diet,
                        lifestyle, and health. My approach is collaborative and
                        tailored to your unique needs, empowering you to make
                        sustainable changes for improved wellness.
                    </p>
                </section>

                <section class="border-b mb-6 border-green-800 py-6">
                    <h2 class="text-3xl font-bold md:text-center">
                        The Power of Plant-Based Nutrition
                    </h2>
                    <p class="text-lg mt-4">
                        As a certified expert in plant-based nutrition, I guide
                        you through the transformative journey of adopting a
                        diet rich in vegetables and whole foods. Discover the
                        health benefits and experience a newfound vitality with
                        mindful eating.
                    </p>
                </section>

                <section class="border-b mb-6 border-green-800 py-6">
                    <h2 class="text-3xl font-bold md:text-center">
                        Mindfulness & Well-Being
                    </h2>
                    <p class="text-lg mt-4">
                        Integrating mindfulness into daily life enhances overall
                        well-being. I offer strategies and practices that help
                        you cultivate a mindful approach to health and life,
                        fostering balance and inner peace.
                    </p>
                </section>

                <section class="py-6 grid md:grid-cols-3 gap-8 md:text-center">
                    <h2 class="text-3xl font-bold col-span-full">
                        Book a session
                    </h2>
                    <a
                        v-for="session in sessions"
                        :key="session.title"
                        class="mx-auto p-4 grid grid-cols-3 md:grid-cols-1 items-start gap-4 bg-white border-2 border-green-700 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
                        :href="session.calendly"
                    >
                        <div class="col-span-1 grid place-content-center">
                            <img
                                :src="session.image"
                                :alt="session.title"
                                class="aspect-square rounded-lg shadow-lg border-2 border-gray-300/50"
                            />
                        </div>

                        <h3 class="col-span-2 md:col-span-1 grid">
                            <span class="text-2xl font-bold">{{
                                session.title
                            }}</span>
                            <span class="text-lg font-light"
                                >${{ session.price }}</span
                            >
                        </h3>

                        <div
                            class="col-span-full md:min-h-[200px] flex items-end"
                        >
                            <p class="text-lg">{{ session.description }}</p>
                        </div>
                    </a>
                </section>
            </div>
        </div>

        <footer
            class="grid items-center text-center p-6 bg-green-800 text-green-100"
        >
            <h2 class="text-3xl font-bold">Get in Touch</h2>
            <p class="text-lg mt-4">
                Ready to start your journey to better health?
                <a href=""> Contact me for a consultation. </a>
            </p>
            <p class="flex gap-1 mx-auto">
                <a href="mailto:celeste@greenmindfulcoach.com">
                    celeste@greenmindfulcoach.com
                </a>
                <span>|</span>
                <a href="tel:7735468672" class="text-lg">(773) 546-8672</a>
            </p>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer a {
    @apply text-blue-200 hover:underline;
}
</style>
