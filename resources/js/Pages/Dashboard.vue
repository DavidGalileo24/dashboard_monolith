<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />
    <AuthenticatedLayout>
       <!--<template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>-->
        <template #main>
            You're logged in!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            lorem
            You're logged in!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            lorem
            You're logged in!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora molestias hic omnis, magni quisquam ratione dolorum adipisci veniam aperiam ex, culpa quasi velit praesentium iusto, sit quod repellat quo fugiat.
            
        </template>
    </AuthenticatedLayout>
</template>
