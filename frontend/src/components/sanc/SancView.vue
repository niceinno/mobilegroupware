<template>
    <div v-cloak>
        <sanc-header></sanc-header>
        <sanc-contents v-bind:doc-id="this.$route.params.docId"></sanc-contents>
        <sanc-buttons v-if="this.$route.params.path =='wait'"></sanc-buttons>
        
        
    </div>
</template>

<script>
import SancHeader from '../sanc/components/SancHeader';
import SancContents from '../sanc/components/SancContents';
import SancButtons from '../sanc/components/SancButtons';
export default {
    
    components : {
        'sanc-header' : SancHeader,
        'sanc-contents' : SancContents,
         'sanc-buttons' : SancButtons
    }
}
</script>

<style>
    [v-cloak]{
        display:none !important;
    }
</style>
