<script setup>
import Menu from 'primevue/menu';
import { ref } from "vue";

const items = ref([
    {
        separator: true
    },
    {
        //label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                shortcut: '⌘+N'
            },
        ]
    },
    {
        separator: true
    }
]);
</script>
<template>
    <div class="relative min-h-screen">
        <div class="sidebarItems">
                Inicio
            </div>
            <div class="sidebarItems">
                Servicios
            </div>
    </div>
</template>
