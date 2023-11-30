<script lang="ts" setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import WrappedLink from "@/Components/WrappedLink.vue";

const burgerOpen = ref(false);
</script>
<template>
    <div class="flex flex-col flex-nowrap min-h-[100vh] font-montserrat">
        <header class="fixed z-50 w-full h-24 px-4">
            <div
                class="mx-auto max-w-5xl flex flex-nowrap gap-4 items-center py-4"
            >
                <div class="h-14 w-14 rounded-[15%] overflow-hidden shrink-0">
                    <img
                        class="scale-[105%]"
                        src="/images/logos/minimal.png"
                        alt="Green Mindful Coach"
                    />
                </div>

                <div class="grow grid place-content-center">
                    <ul
                        class="hidden md:flex flex-nowrap place-content-center text-center rounded-full bg-white shadow-xl"
                    >
                        <WrappedLink routeName="home" class="w-24 py-2 hover:font-bold cursor-pointer transition-all" />
                        <WrappedLink routeName="services" class="w-24 py-2 hover:font-bold cursor-pointer transition-all" />
                        <WrappedLink routeName="blogs" class="w-24 py-2 hover:font-bold cursor-pointer transition-all" />

                    </ul>
                </div>

                <div class="shrink-0 relative">
                    <div class="bg-white h-8 relative">
                        <ul
                            v-if="burgerOpen"
                            class="absolute grid w-48 -top-2 -right-2 bg-white rounded-lg shadow-xl border-2 [&>*:first-child]:mr-12"
                        >
                            <Link
                                href="/"
                                class="p-3 hover:font-bold cursor-pointer"
                            >
                                Home
                            </Link>
                            <Link
                                href="/#services"
                                class="p-3 hover:font-bold cursor-pointer"
                            >
                                Services
                            </Link>
                            <Link
                                href="/blogs"
                                class="p-3 hover:font-bold cursor-pointer"
                                >Blogs</Link
                            >

                            <Link
                                href="/login"
                                class="p-3 hover:font-bold cursor-pointer"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                class="p-3 hover:font-bold cursor-pointer"
                            >
                                Sign up
                            </Link>
                        </ul>
                        <div
                            @click="burgerOpen = !burgerOpen"
                            class="absolute right-0 h-8 w-8 bg-[#484f52] border rounded-full grid place-content-center gap-1 group cursor-pointer transition-all"
                            :class="[burgerOpen ? 'hover:scale-110' : '']"
                        >
                            <div
                                class="h-[2px] w-5 rounded-md bg-white transition-all"
                                :class="[
                                    burgerOpen
                                        ? 'translate-y-[6px] rotate-[45deg]'
                                        : 'rotate-0',
                                ]"
                            />
                            <div
                                class="h-[2px] w-5 rounded-md bg-white transition-all"
                                :class="[
                                    burgerOpen ? 'opacity-0' : 'opacity-100',
                                ]"
                            />
                            <div
                                class="h-[2px] w-5 rounded-md bg-white transition-all"
                                :class="[
                                    burgerOpen
                                        ? 'translate-y-[-6px] rotate-[-45deg]'
                                        : 'rotate-0',
                                ]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="grow relative mt-24">
            <div class="max-w-7xl mx-auto">
                <slot />
            </div>
        </div>

        <footer
            class="grid items-center text-center p-3 py-6 bg-gray-100 border-t"
        >
            <h2 class="text-3xl font-bold">Get in Touch</h2>
            <p class="mt-4">Ready to start your journey to better health?</p>
            <p class="flex flex-col md:flex-row gap-1 mx-auto">
                <a href="mailto:celeste@greenmindfulcoach.com">
                    celeste@greenmindfulcoach.com
                </a>
                <span class="hidden md:inline">|</span>
                <a href="tel:7735468672">(773) 546-8672</a>
            </p>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
footer a {
    @apply text-brand-2 underline;
}
</style>
