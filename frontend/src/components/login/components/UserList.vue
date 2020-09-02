<template>
    <div>
        <div v-for="(user, index) in userList" :key="index">
            <div v-on:click="goMain(user.id)">{{user.name}}/{{user.rankName}}/{{user.deptName}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['userList'],
    methods:{
        goMain : function(userId){
            this.$http.post("/api/",params).then((result)=>{
                console.log(result);
            });
            this.$router.push({name : 'main'});
        }    
    }
}
</script>

<style>

</style>
