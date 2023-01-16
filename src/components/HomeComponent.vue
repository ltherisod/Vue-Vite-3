<script setup>
import { useUserStore } from '../store/userStore';
import { computed, onMounted } from 'vue'
import TableComponent from './TableComponent.vue'
 const data = useUserStore();
  onMounted(async() => {
      data.getUsers()
    })
   
</script>
<template>
    <TableComponent :users="data.users"/>
</template>


<style scoped>
</style>