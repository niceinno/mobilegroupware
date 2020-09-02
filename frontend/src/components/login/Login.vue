<template>
    <div>
        <h2>Log In</h2>
      <form @submit.prevent="onSubmit">
          <input name='szID' placeholder="Enter your ID" v-model="szID">
          <input name='szPW' placeholder="Enter your password" v-model="szPW">
          <button type="submit">Login</button>
      </form>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            szID: '',
            szPW: '',
            msg: '',
        }
    },
    methods : {
        onSubmit : function(){
            const params = new URLSearchParams();
            params.append('szID', this.szID);
            params.append('szPW', this.szPW);
            console.log(JSON.stringify(params));
            this.$http.post('/api/login',params)
            .then((result)=>{
                console.log(params);
                switch(result.data){
                    case "ok":
                        this.$router.push({name : 'main'});
                        break;
                    case "duplicate":
                        this.$router.push({name : 'duplicateLogin'});
                        break;
                    default:
                        
                }
            });
        }
    }
}
</script>

<style>

</style>
