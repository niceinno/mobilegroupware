<template>
    <div>
        <list-header header-text='게시판'></list-header>
        <board-tree v-bind:board-id="0"></board-tree>
        
    </div>
</template>

<script>

import ListHeader from '../common/ListHeader';
import BoardTree from './BoardTree';
import ListContents from '../common/ListContents';

export default {
    components: {
        'list-header' : ListHeader,
        'board-tree' : BoardTree,
        'list-contents' : ListContents,
    },
    methods:{
        
    }
}
</script>

<style>

</style>
