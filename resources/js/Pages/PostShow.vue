<script lang="ts" setup>
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { Blog, Post } from "@/types";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import ArrowRight from "@/Components/Svgs/ArrowRight.vue";
import PrettyMarkdown from "@/Components/PrettyMarkdown.vue";

const props = defineProps<{
    blog: Blog;
    post: Post;
    nextPost?: Post;
    previousPost?: Post;
}>();
</script>
<template>
    <Head title="Blogs" />

    <DefaultLayout class="bg-[#fff7f1]">
        <div
            class="px-4 pt-0 pb-8 mx-auto max-w-6xl -mt-[5.5rem] sm:-mt-[4.5rem] md:mt-0"
        >
            <!-- TODO: Slot in default layout for "between the things for mobile only" -->
            <h2 class="text-3xl block md:hidden text-center pb-4 px-16">
                {{ blog.name }}
            </h2>

            <div class="flex flex-row flex-nowrap items-end">
                <Link
                    :href="previousPost?.route || '#'"
                    class="flex items-center mr-auto gap-2 lg:text-xl border-b border-black transition-all group hover:border-[#ec3a23] mb-1 pb-1 pr-8"
                    :class="{ 'pointer-events-none': !previousPost }"
                >
                    <ArrowRight
                        :class="[
                            previousPost
                                ? 'rotate-180 text-[#ec3a23]'
                                : 'invisible',
                        ]"
                    />
                    <h2
                        :class="[
                            previousPost
                                ? 'group-hover:text-[#ec3a23]'
                                : 'invisible',
                        ]"
                    >
                        <p class="space-x-1 uppercase">
                            <span>Previous</span>
                            <span class="hidden md:inline">article</span>
                        </p>
                    </h2>
                </Link>

                <Link
                    :href="blog.route"
                    class="grow mb-1 pb-1 border-b border-black text-center hover:border-[#ec3a23] hover:text-[#ec3a23]"
                >
                    <h2 class="text-3xl hidden md:inline">{{ blog.name }}</h2>
                </Link>

                <Link
                    :href="nextPost?.route || '#'"
                    class="flex items-center mr-auto gap-2 lg:text-xl border-b border-black transition-all group hover:border-[#ec3a23] mb-1 pb-1 pl-8"
                    :class="{ 'pointer-events-none': !nextPost }"
                >
                    <h2
                        :class="[
                            nextPost
                                ? 'group-hover:text-[#ec3a23]'
                                : 'invisible',
                        ]"
                    >
                        <p class="space-x-1 uppercase">
                            <span>Next</span>
                            <span class="hidden md:inline">article</span>
                        </p>
                    </h2>

                    <ArrowRight
                        :class="nextPost ? 'text-[#ec3a23]' : 'invisible'"
                    />
                </Link>
            </div>

            <div class="py-4 rounded-xl mx-auto grid place-content-center">
                <PrettyMarkdown :content="post.content" />
            </div>
        </div>
    </DefaultLayout>
</template>
