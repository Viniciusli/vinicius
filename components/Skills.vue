<template>
    <div class="flex flex-row justify-center font-sans mb-8">
        <h1 class="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Skills</h1>
    </div>

    <div class="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
        <Card>
            <template v-slot:icon><Icon icon="fa-brands:php" color="#484c89" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="logos:laravel" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="logos:mysql" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="tabler:brand-inertia" color="#9256e9" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="vscode-icons:file-type-js" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="logos:vue" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="logos:tailwindcss-icon" width="7,5em" height="5em" /></template>
        </Card>
        <Card>
            <template v-slot:icon><Icon icon="logos:bootstrap" width="7,5em" height="5em" /></template>
        </Card>
    </div>
    
</template>

<script setup>
  import { Icon } from '@iconify/vue'
</script>

