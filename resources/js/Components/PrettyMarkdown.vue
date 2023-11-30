<script lang="ts" setup>
import MarkdownIt from "markdown-it";
import "@/../scss/MarkdownItStyleOverrides.scss";
import { computed, onMounted } from "vue";

const props = defineProps<{
    content: string;
}>();

const md = new MarkdownIt();
const formatted = computed(() => {
    return md.render(props.content);
});
</script>

<template>
    <div
        id="pretty-markdown"
        class="prose dark:prose-invert w-full"
        v-html="formatted"
    ></div>
</template>
