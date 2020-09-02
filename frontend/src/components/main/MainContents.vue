<template>
    <div class="nanum-page-content page-content">
        <div class="nanum-section section">
            <div class="nanum-box box">
                <div  class="nanum-box box-1">
                    <div class="nanum-box box-3">
                        <div class="nanum-box box-4" >
                            <div class="box-16"><span id="mail_recv"></span></div>
                            <div class="box-15">내부메일</div>
                        </div>
                        <div  class="nanum-box box-5" >
                            <div class="box-16"><span id="sanc_wait"></span></div>
                            <div class="box-15">전자결재</div>
                        </div>
                    </div>
                </div>
                <div class="nanum-box box-2">
                    <div class="nanum-box box-6">
                        <div class="nanum-box box-8" v-on:click="gotoPage('/sanc/wait/1')">
                            <div class="btn-center">
                                <div class="btn-1"></div>
                                <div>전자결재</div>
                            </div>
                        </div>
                        <div class="nanum-box box-9" v-on:click="gotoPage('/brd')">
                            <div class="btn-center">
                                <div class="btn-2"></div>
                                <div>게시판</div>
                            </div>
                        </div>
                        <div class="nanum-box box-10" v-on:click="gotoPage('/addr')">
                            <div class="btn-center">
                                <div class="btn-3"></div>
                                <div>주소록</div>
                            </div>
                        </div>
                    </div>
                    <div class="nanum-box box-7">
                        <div class="nanum-box box-11" v-on:click="gotoPage('/mail')">
                            <div class="btn-center">
                                <div class="btn-4"></div>
                                <div>메일</div>
                            </div>
                        </div>
                        <div class="nanum-box box-12" v-on:click="gotoPage('/sch')">
                            <div class="btn-center">
                                <div class="btn-5"></div>
                                <div>일정</div>
                            </div>
                        
                        </div>
                        <div class="nanum-box box-13" v-on:click="gotoPage('/set')">
                            <div class="btn-center">
                                <div class="btn-6"></div>
                                <div>설정</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods : {
            gotoPage : function(path){
                this.$router.push({
                    path : path
                });
            }
        }
    }
</script>

<style scoped>
.section {
 	width:100%;
 	height:100%;
}
.nanum-page-content{
	position:absolute;
	width:100%;
	height:75%;
	top:10%;
}
.page-content {
  background-color:#FFFFFF;
}

.btn-1{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) 0px 0px;
}
.btn-2{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) -55px 0px;;
}
.btn-3{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) -110px 0px;
}
.btn-4{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) 0px -57px;
}
.btn-5{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) -55px -57px;
}
.btn-6{
	width:53px;
	height:53px;
	display:inline-block;
	background:url(/resources/img/main/btn_main_menu.png) -110px -57px;
}
.box {
  height:100%;
  position:relative;
  width:100%;
}
.btn-center{
	width:80%;
	height:80%;
	margin: 0 auto;
	margin-top:20%;
	text-align:center;
}

.box-1 {
	position:absolute;
	width:100%;
	height:45%;
	background: url(/resources/img/main/main_bg1.png) no-repeat; 
	color:white;
}
.box-2 {
	position:absolute;
	height:55%;
	top:45%;
	width:100%;
}
.box-3{
	position:relative;
	float:right;
	width:35%;
	height:100%;
}
.box-4{
	width:100%;
	height:50%;
	position:absolute;
	background-color: #5cb1c4;opacity:0.8
}
.box-5{
	width:100%;
	height:50%;
	position:absolute;
	top:50%;;
	opacity: 0.8;
	background-color: #387bc7;
}
.box-6{
	position:absolute;
	width:100%;
	height:50%;
	top:0;
}
.box-7{
	position:absolute;
	width:100%;
	height:50%;
	top:50%;
}
.box-8 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  
}
.box-9 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  left:33%;
  border-left:1px solid #d6d6d6; 
  border-right:1px solid #d6d6d6;
}
.box-10 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  left:66%;
}
.box-11 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  border-top:1px solid #d6d6d6;
  
}
.box-12 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  left:33%;
  border-left:1px solid #d6d6d6; 
  border-right:1px solid #d6d6d6;
  border-top: 1px solid #d6d6d6;
}
.box-13 {
  float:left;
  height:100%;
  position:absolute;
  width:33%;
  left:66%;
  border-top:1px solid #d6d6d6;
}
.box-15{
    position: absolute;
    bottom: 0;
    right: 5px;
    margin: 10px;
	
}
.box-16{
	margin:10px;
}
</style>
