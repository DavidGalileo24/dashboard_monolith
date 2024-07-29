<script setup>
import NavLink from './NavLink.vue';

</script>
<template>
    <div class="relative min-h-screen">
        <div class="sidebarItems mt-5">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                <font-awesome-icon :icon="['fas', 'house']" class="linkItem" />Inicio
            </NavLink>
        </div>
    </div>
</template>
<style scoped>
    .sidebarItems{
        display:flex;
        align-items:center
    }
    .linkItem{
        margin-right: 10px;
    }
</style>
