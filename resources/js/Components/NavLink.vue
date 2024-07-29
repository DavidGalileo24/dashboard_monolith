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
        ? 'items-center w-full p-2 mt-2 border-l-4 border-gray-300 bg-gray-700 text-md font-medium text-white hover:bg-green-600 transition duration-150 ease-in-out'
        : 'items-center w-full p-2 border-transparent text-md font-medium text-gray-200 hover:bg-gray-900 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
