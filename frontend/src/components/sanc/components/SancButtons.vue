<template>
    <div class='button-container'>
        <button v-on:click="approval">승인</button>
        <button v-on:click="delay">보류</button>
        <button v-on:click="reject">반려</button>
    </div>
</template>

<script>
export default {
    methods: {
        approval : function(){
            this.$router.push({name : 'approval'});
        },
        delay : function(){
            this.$router.push({name : 'delay'});
        },
        reject : function(){
            this.$router.push({name : 'reject'});
        }
    }
}
</script>

<style scoped>
    .button-container{
        float:right;
    }
</style>
