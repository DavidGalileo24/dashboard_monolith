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
        ? 'w-full block p-2 border-l-4 border-teal-600 text-gray-900 bg-teal-500 text-md font-medium text-teal-900 hover:bg-teal-500 transition duration-150 ease-in-out'
        : 'w-full block p-2 text-white border-transparent text-md font-medium hover:bg-teal-900 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
    <slot />
    </Link>
</template>
