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
    <div class="card flex justify-center">
        <Menu :model="items" class="w-full md:w-60">
            <template #start>
                Logo 
            </template>
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="item">
                <span>{{ item.label }}</span>
            </template>
            <template #end>
                <!--<button v-ripple
                    class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
                        shape="circle" />
                    <span class="inline-flex flex-col items-start">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Admin</span>
                    </span>
                </button>-->
            </template>
        </Menu>
    </div>
</template>
