<template>
    <div>
        <sanc-header></sanc-header>
        <sanc-opinion></sanc-opinion>    
        {{this.$route.params.docId}}
    </div>
</template>

<script>
import SancHeader from './components/SancHeader';
import SancOpinion from './components/SancOpinion';
export default {
    components : {
        'sanc-header' : SancHeader,
        'sanc-opinion' : SancOpinion,
    },
    created : function(){
        const url = "/api/sanc/approval/"+this.$route.params.docId;
        this.$http.get(url).then((result)=>{
            console.log(result);
        });
    }
}
</script>

<style>

</style>
