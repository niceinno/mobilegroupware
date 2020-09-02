<template>
    <div>
        <board-tree v-bind:board-id="boardId"></board-tree>
    </div>
</template>

<script>
import BoardTree from './BoardTree';
export default {
    props :['boardId'],
    components :{
        'board-tree' : BoardTree,
    },
    created: function(){
        console.log("child created"+ this.boardId);
    },
    methods: {
        setChildTree :function(boardId){
            
        }
    }
}
</script>

<style>

</style>
