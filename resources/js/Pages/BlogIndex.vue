<script lang="ts" setup>
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { Blog } from "@/types";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";

const props = defineProps<{
    blogs: Blog[];
}>();
</script>
<template>
    <Head title="Blogs" />

    <DefaultLayout>
        <div
            class="px-4 pt-0 pb-8 mx-auto max-w-6xl grid md:grid-cols-3 gap-6 place-content-center"
        >
            <Link
                v-for="blog in blogs"
                :key="blog.id"
                :href="blog.route"
                class="bg-gradient-to-b from-green-900 to-green-700/75 text-white rounded-xl shadow-xl hover:scale-[102%] transition-all overflow-hidden"
            >
                <img :src="blog.photo" />
                <div class="p-4 grid gap-4">
                    <h3 class="text-2xl">{{ blog.name }}</h3>
                    <p>{{ blog.description }}</p>
                </div>
            </Link>
        </div>
    </DefaultLayout>
</template>
