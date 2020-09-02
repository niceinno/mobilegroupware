<template>
    <nav class="navbar navbar-expand  static-top">
        <button class="toggleMenu btn btn-lg btn-link btn-md order-1 order-md-0" v-on:click="toggleMenu">
            <i class="fas fa-bars"></i>
        </button>
        <div>
            전자결재
        </div>
    </nav>
</template>

<script>
export default {
    data : function(){
      return{
          
      } 
    },
    methods:{
        toggleMenu : function(){
            this.$emit('onToggleMenu');
        }
    }
}
</script>

<style scoped>
    .toggleMenu{
        display:block;
    }
    @media (min-width: 768px) {
        .sidebar{
            width : 300px !important;
            display: block;
        }
        .toggleMenu{
            display: none;
        }
    }
</style>
