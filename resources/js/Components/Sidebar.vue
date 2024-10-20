<script setup>
import NavLink from './NavLink.vue';

</script>
<template>
    <div class="mt-5">
        <div class="">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                <font-awesome-icon :icon="['fas', 'house']" class="linkItem" />Inicio
            </NavLink>
        </div>
        <div class="">
            <NavLink :href="route('users')" :active="route().current('users')">
                <font-awesome-icon :icon="['fas', 'circle-user']" class="linkItem" />Usuarios
            </NavLink>
        </div>
        <div class="">
            <NavLink :href="route('roles')" :active="route().current('roles')">
                <font-awesome-icon :icon="['fas', 'id-card-clip']" class="linkItem" />Roles
            </NavLink>
        </div>
    </div>
</template>
<style scoped>
    .linkItem{
        margin-right: 10px;
    }
</style>
