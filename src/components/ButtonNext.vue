<template>
    
</template>

<script>
export default {
    name: "buttonNext",
    methods:{      
     updateArray(){
            this.$store.commit("updateNotesArrayIndex");
        }
    }
}
</script>

<style>

</style>
