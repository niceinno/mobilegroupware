<template>
    <div class="page">
        <sanc-header v-on:onToggleMenu="onToggleMenu"></sanc-header>
        <div class="wrapper">
            <sanc-tree v-on:clickTree="onTreeClick" v-bind:sanc-count="sancCount" v-bind:is-show="isShow"></sanc-tree>        
            <div class="content-wrapper">
                <div>{{this.pageText}} {{this.totalCnt}}</div>
                <router-view></router-view>
                <b-pagination-nav class="page-nav" align="center" :link-gen="movePage" :number-of-pages="totalCnt | getPages" v-model="page" />
            </div>
        </div>
    </div>
</template>

<script>

import SancHeader from '../sanc/components/SancHeader';
import SancTree from '../sanc/components/SancTree';
import SancList from '../sanc/components/SancList';


export default {
    
    data : function(){
        return {
            path : "wait",
            page : 1,
            isShow : false,
            totalCnt :0,
            pageText :"결재대기",
            sancCount :{}
        }
    },
    components :{
        'sanc-header' : SancHeader,
        'sanc-tree' : SancTree,
        'sanc-list' : SancList
    },
    created : function(){
        this.getSancCount();
    },
    methods : {
        movePage : function(pageNum){
            return '#/sanc/'+this.path+"/"+ pageNum;
        },
        getSancCount: function(){
            this.$http.get('/api/sanc/sancCount.json')
            .then((result)=>{
                this.sancCount = result.data;
                this.totalCnt = result.data.sancWait;
            });
        },
        onTreeClick : function(path){
            const url = "/sanc/"+path+"/1";
            this.path =path;
            this.page=1;
            this.setSubTitle(path);
            this.$router.push({path:url});
            
        },
        setSubTitle : function(path){
            switch(path){
                case "wait":
                    this.pageText = "결재대기";
                    this.totalCnt = this.sancCount.sancWait;
                    break;
                case "process":
                    this.pageText = "결재진행";
                    this.totalCnt = this.sancCount.sancDoing;
                    break;
                case "expect":
                    this.pageText = "결재예정";
                    this.totalCnt = this.sancCount.sancExpect;
                    break;
                case "complete":
                    this.pageText = "결재완료";
                    this.totalCnt = this.sancCount.sancDone;
                    break;
                case "return":
                    this.pageText = "결재반려";
                    this.totalCnt = this.sancCount.sancReturn;
                    break;
            }
        },onToggleMenu : function(){
            this.isShow = !this.isShow;
        }
    },
    filters: {
        getPages : function(total){
            return Math.round(total/10);
        }
    }
}
</script>
    
<style>
    .page{
        height:100%;
    }
    .wrapper{
        display:flex;
    }
    .content-wrapper{
        overflow-x: hidden;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 80px;
    }
    .page-nav{
        margin-top:20px;
    }
</style>
