<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    roles: {
        type: Object,
        default: ([]),
    },
});
</script>

<template>
    <Head title="Roles" />
    <AuthenticatedLayout>
        <template #main>
            Roles {{ roles }}
        </template>
    </AuthenticatedLayout>
</template>
