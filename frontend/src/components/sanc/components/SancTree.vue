<template>
    <ul class="sidebar navbar-nav">
        <li class="nav-item" v-on:click="clickTree('wait')" >
            <span>결재대기</span>
            <span v-text="sancCount.sancWait"></span>
        </li>
        
        <li class="nav-item" v-on:click="clickTree('process')" >
            <span>결재진행</span>
            <span v-text="sancCount.sancDoing"></span>
        </li>
        <li class="nav-item" v-on:click="clickTree('expect')" >
            <span>결재예정</span>
            <span v-text="sancCount.sancExpect"></span>
        </li>
        <li class="nav-item" v-on:click="clickTree('complete')" >
            <span>결재완료</span>
            <span v-text="sancCount.sancDone"></span>
        <li class="nav-item" v-on:click="clickTree('return')" >
            <span>결재반려</span>
            <span v-text="sancCount.sancReturn"></span>
        </li>
    </ul>
</template>

<script>
export default {
    props :['sancCount'],
    
    methods:{
        clickTree : function(path){
            this.$emit('clickTree',path);
        }
    }
}
</script>

<style scoped>
    .tree-container{
        padding: 15px 0 15px 10px;
	    border-bottom: 1px solid grey;
    }
    .sidebar {
        width: 100px !important;
        min-height: calc(100vh - 56px);
        display:none;
    }
    .sidebar.toggled {
        width: 0 !important;
        overflow: hidden;
    }
    @media (min-width: 768px) {
        .sidebar{
            width : 300px !important;
            display: block;
        }
    }
</style>
