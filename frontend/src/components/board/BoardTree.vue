<template>
    <div>
        <div>
            
        </div>
    </div>
</template>

<script>
import BoardTreeChildren from './BoardTreeChildren';
export default {
    data : function(){
        return{
            list:{}
        }
    },
    props:['boardId'],
    components :{
        'board-tree-children' : BoardTreeChildren,
    },
    watch : {
        boardId : function(boardId){
            console.log('watch boardId '+boardId);
        }
    },
    methods :{
        getChildTree : function(){
            
        },
        getChildTreeData : function(){
            const url = "/api/brd/tree/"+this.boardId;
            this.$http.get(url)
            .then((result)=>{
                this.list = result.data;
                console.log(result);        
        });
        }
    },
    created: function(){
        console.log('board tree created '+this.boardId);
        this.getChildTreeData();
    }
} 
</script>

<style>

</style>
