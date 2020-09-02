<template>
    <div>
        <div>사용자선택!</div>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            list :[],
        }
    },
    created : function(){
        this.$http.get('/api/userlist')
            .then((result)=>{
                this.list = result.data;
                console.log(result);
            });
    }
}
</script>

<style>

</style>
