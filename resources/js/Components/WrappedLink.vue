<script lang="ts" setup>
import { Link, usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const routes = {
    home: {
        href: "/",
        text: "Home",
        component: Link,
    },
    services: {
        href: "/#services",
        text: "Services",
        component: "a",
    },
    blogs: {
        href: "/blogs",
        text: "Blogs",
        component: Link,
    },
    login: {
        href: "/login",
        text: "Log in",
        component: Link,
    },
    register: {
        href: "/register",
        text: "Sign up",
        component: Link,
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

const linkComponent = computed(() => {
    return routes[props.routeName].component;
});

const page = usePage();
const isActive = computed(() => {
    const routeUrl = href.value;
    const currentUrl = `${page.url}`;
    return currentUrl === routeUrl || currentUrl.startsWith(routeUrl + "/");
});
</script>

<template>
    <component
        :is="linkComponent"
        :href="href"
        :class="[isActive ? activeClass : inactiveClass]"
        replace
        v-text="text"
    />
</template>
