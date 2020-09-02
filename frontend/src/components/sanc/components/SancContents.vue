<template>
    <section>
        <div class="container">
            <div class='title-container'>
                <div>{{view.title}}</div>
            </div>
            <div class="sub-container">
                <span>{{view.drafter}} | {{view.draftTime | dateString}}</span>
                <button v-if="view.contents != 0" v-on:click="goSummary(view.docID)"></button>
                <button v-on:click="goConvertView(view.docID)">원문</button>
                
            </div> 
        </div>
         <div class="sanc-line-container">
            <div v-for="(sanLine ,index) in view.sancList" :key="index" class="sanc-line">
                <span>{{sanLine.name}}</span>
                <span v-if="index == 0">[ {{sanLine.sancType}}]</span>
                <span v-else>[ {{sanLine.sancType}} : {{sanLine.sancStatus}}]</span>
                <span v-if="sanLine.processedTime != null && sanLine.processedTime != ''">
                    {{sanLine.processedTime | dateString}}
                </span>
            </div>
        </div>
       <div class="file-container">
            <div v-for="(file,index) in view.attachList" :key="index" class="file">
                <span>{{file.name}}</span>
                <span>{{file.length | dataFormat}}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props : ['docId'],
    data : function(){
        return{
            view :{},
        }
    },
    created : function(){
        const url = "/api/sanc/list/"+this.docId;
        this.$http.get(url).then((result)=>{
            console.log(result.data);
            this.view = result.data;
        });
    },
    filters :{
        dateString : function (fullDate){
            if(fullDate != undefined){
                var time = fullDate.split(' ');
                var date = time[0].substring(0,4)+"/"+time[0].substring(4,6)+"/"+time[0].substring(6,8);
                var hour = time[1].substring(0,2)+":"+time[1].substring(2,4);
                return date+" "+hour;
            }
            
        },
        dataFormat : function(data){
            if(data != undefined){
                if(Math.ceil(data/1024)>0){
                    var temp = Math.ceil(data/1024)
                    if(Math.ceil(temp/1024)>0){
                        return Math.ceil(temp/1024)+"MB";
                    }else{
                        return temp+"KB";
                    }
                }else{
                    return data+"B";
                }            
            }
           
        }
    }
}
</script>

<style scoped>
    .container{
        width:100%;
	    border-bottom:1px solid grey;
	    background-color:#eaeaea;
    }
    .title-container{
        padding: 10px 3px 10px 5px;
    }
    .sub-container{
        padding : 0px 10px 5px 5px;
	    height:30px;
	    line-height:30px;
    }
    
</style>
