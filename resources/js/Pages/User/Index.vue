<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    users: {
        type: Object,
        default: ([]),
    },
});

</script>
<template>
    <Head title="Users" />
    <AuthenticatedLayout>
        <template #main>
            Users {{ users }}
        </template>
    </AuthenticatedLayout>
</template>
