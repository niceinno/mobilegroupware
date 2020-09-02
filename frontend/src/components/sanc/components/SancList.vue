<template>
    <div>
        <div v-for="item in list" :key="item.docID" class="list-container" v-on:click="goView(item.docID)">
            <div class="title-container" >
                <span >   
                    {{item.title}}
                </span> 
            </div>
            <div class="otherinfo-container">
                <span>{{item.creatorPersonInfo | getName}}</span>
                
                <span style='float:right;'>{{item.arrivedTime | dateToString}}</span>
                <span class="file-container" >
                        <i v-if="item.isAttach=='1'" class="fas fa-paperclip"></i>
                        <i v-if="item.isOpinioned=='1'" class="fas fa-comment-dots"></i>		
                </span> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            list :[],
            totalCnt : 0,
        }
    },
    beforeCreate : function(){
        console.log('breforecreate')
    },
    created : function(){
        console.log('created');
        this.getSancList();
    },
    mounted : function(){
        console.log('mounted');
    },
    watch : {
        '$route': 'fetchData'
    },
    methods :{
        goView : function(docId){
            const url = "/sanc/"+this.$route.params.path+"/view/"+docId;
            this.$router.push({path : url});
        },
        fetchData: function(){
            this.getSancList();
        },
        getSancList :function(){
            const url = "/api/sanc/"+this.$route.params.path+"/"+this.$route.params.page;
            this.$http.get(url).then((result)=>{
            this.list = result.data.list;
            this.totalCnt = result.data.toTalCnt;
            console.log(result.data);
            });
        }
    },
    filters : {
        pathToString : function(data){
            switch(data){
                case "path":
                    data = "결재대기";
                    break;
                case "process":
                    data = "결재진행";
                    break;
                case "complete":
                    data ="결재완료";
                    break;
                case "return":
                    data="결재반려";
                    break;
                case "expect":
                    data ="결재예정";
                    break;
            }
        },
        getName : function(FullName){
            return FullName.split('/')[0];
        },
        dateToString : function(date){
            var tempDate = date.split(' ');
            var currentDate = new Date();
            var cYear = currentDate.getFullYear();
            var cMonth = ((currentDate.getMonth()+1).length==1)?"0"+(currentDate.getMonth()+1):(currentDate.getMonth()+1);
            var cDate = ((currentDate.getDate()+1).length==1)?"0"+(currentDate.getDate()+1):(currentDate.getDate()+1);
            var cTime = ""+cYear+cMonth+cDate;
            if(tempDate[0]==cTime){
                return tempDate[1].substring(0,2)+":"+tempDate[1].substring(2,4);
            }else{
                return tempDate[0].substring(0,4)+"/"+tempDate[0].substring(4,6)+"/"+tempDate[0].substring(6,8);
            }
        }
    }
}
</script>

<style scoped>
    .list-container{
        height: 80px;
        border-bottom: 1px solid #d4cece;
        padding: 0 5px 0 10px;
        margin: 0 5px;
    }
    .list-container:acvice{
        background-color:#cfcfcf;
	    color:white !important;
    }
    .title-container {
        height:40px;
	    line-height:40px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
    }
    .otherinfo-container{
        height:40px;
	    position:relative;
	    line-height:40px;
    }
    .file-container{
        float:right;
        margin-right:10px;
    }
</style>
