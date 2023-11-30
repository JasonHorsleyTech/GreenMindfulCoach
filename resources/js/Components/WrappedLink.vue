<script lang="ts" setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const routes = {
    home: {
        href: "/",
        text: "Home",
    },
    services: {
        href: "/#services",
        text: "Services",
    },
    blogs: {
        href: "/blogs",
        text: "Blogs",
    },
    login: {
        href: "/login",
        text: "Log in",
    },
    register: {
        href: "/register",
        text: "Sign up",
    },
};

const props = withDefaults(
    defineProps<{
        routeName: keyof typeof routes;
        activeClass?: string;
        inactiveClass?: string;
    }>(),
    {
        activeClass: "text-green-500",
        inactiveClass: "text-black",
    }
);

const href = computed(() => {
    return routes[props.routeName].href;
});

const text = computed(() => {
    return routes[props.routeName].text;
});

const page = usePage();
const isActive = computed(() => {
    const routeUrl = href.value;
    const currentUrl = `${page.url}`;
    return currentUrl === routeUrl || currentUrl.startsWith(routeUrl + "/");
});
</script>

<template>
    <Link
        :href="href"
        :class="[isActive ? activeClass : inactiveClass]"
        v-text="text"
    />
</template>
