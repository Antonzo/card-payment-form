<template>
    <div id="layout">
        <main-form/>
        <main-receipt/>
    </div>
</template>

<script>
import MainForm from './components/MainForm.vue'
import MainReceipt from './components/MainReceipt.vue'

export default({
    name: 'App',

    components : {
        MainForm,
        MainReceipt
    }
})
</script>

<style src='./assets/styles/styles.css'>
</style>
