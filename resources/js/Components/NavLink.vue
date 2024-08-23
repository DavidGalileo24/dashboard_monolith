<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'w-full block p-2 mt-2 border-l-4 border-yellow-600 bg-yellow-500 text-md font-medium text-yellow-900 hover:bg-yellow-500 transition duration-150 ease-in-out'
        : 'w-full block p-2 border-transparent text-md font-medium hover:bg-yellow-900 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
