<script lang="ts" setup>
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { Blog, Post } from "@/types";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import ArrowRight from "@/Components/Svgs/ArrowRight.vue";

const props = defineProps<{
    blog: Blog;
    posts: Post[];
}>();
</script>
<template>
    <Head title="Blogs" />

    <DefaultLayout class="bg-[#fff7f1]">
        <div
            class="bg-cover bg-center bg-no-repeat py-12 md:pb-24"
            :style="`background-image: url('${blog.background_photo}')`"
        >
            <div class="mx-auto max-w-6xl px-4 grid md:grid-cols-3 bg-cover">
                <div
                    class="col-span-2 shadow-md border-4 border-black/25 rounded-xl bg-[#fff7f1] py-4 px-12"
                >
                    <div class="flex flex-row flex-nowrap">
                        <h2 class="grow text-3xl pr-8" v-text="blog.name" />
                        <div
                            class="grid text-right shrink-0 place-content-start"
                        >
                            <p v-text="blog.published_at" />
                            <p>Celeste Horsley</p>
                        </div>
                    </div>

                    <p
                        class="text-lg mt-2 pt-2 border-t"
                        v-text="blog.description"
                    />
                </div>
            </div>
        </div>

        <div class="w-full border-b pb-4 mb-4" />

        <div
            class="px-4 grid md:grid-cols-3 gap-4 lg:gap-12 place-content-center"
        >
            <Link
                v-for="post in posts"
                :key="post.id"
                :href="post.route"
                class="block bg-white rounded-2xl overflow-hidden transition-all shadow hover:shadow-lg hover:scale-[102%] border border-black/25"
            >
                <img :src="post.photo" class="w-full aspect-square" />
                <div
                    class="px-4 py-2 grid gap-4 place-content-start min-h-[16rem] relative"
                >
                    <h3 class="text-lg text-center">{{ post.title }}</h3>
                    <p class="text-sm">{{ post.description }}</p>
                    <div
                        class="absolute h-36 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white"
                    />
                </div>
            </Link>
        </div>
    </DefaultLayout>
</template>
