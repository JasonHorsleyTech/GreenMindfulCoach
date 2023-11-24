<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div class="flex flex-col flex-nowrap min-h-[100vh]">
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

        <div class="grow grid divide-gray-100 divide-y-2 max-w-xl mx-auto">
            <section class="p-6">
                <h2 class="text-3xl font-bold text-center">
                    Embrace a Holistic Approach to Wellness
                </h2>
                <p class="text-lg mt-4">
                    With over 25 years of experience in healthcare, I bring a
                    deep understanding of the interconnectedness of diet,
                    lifestyle, and health. My approach is collaborative and
                    tailored to your unique needs, empowering you to make
                    sustainable changes for improved wellness.
                </p>
            </section>

            <section class="p-6">
                <h2 class="text-3xl font-bold text-center">
                    The Power of Plant-Based Nutrition
                </h2>
                <p class="text-lg mt-4">
                    As a certified expert in plant-based nutrition, I guide you
                    through the transformative journey of adopting a diet rich
                    in vegetables and whole foods. Discover the health benefits
                    and experience a newfound vitality with mindful eating.
                </p>
            </section>

            <section class="p-6">
                <h2 class="text-3xl font-bold text-center">
                    Mindfulness & Well-Being
                </h2>
                <p class="text-lg mt-4">
                    Integrating mindfulness into daily life enhances overall
                    well-being. I offer strategies and practices that help you
                    cultivate a mindful approach to health and life, fostering
                    balance and inner peace.
                </p>
            </section>
        </div>

        <footer class="text-center p-6 bg-green-800 text-green-100">
            <h2 class="text-3xl font-bold">Get in Touch</h2>
            <p class="text-lg mt-4">
                Ready to start your journey to better health? Contact me for a
                consultation.
            </p>
            <a href="mailto:HorsleyCeleste@gmail.com" class="text-blue-200"
                >HorsleyCeleste@gmail.com</a
            >
            |
            <span class="text-lg">(773) 546-8672</span>
        </footer>
    </div>
</template>
