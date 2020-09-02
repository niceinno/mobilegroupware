<template>
    <div>
        <main-header></main-header>
        <main-contents></main-contents>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './MainHeader';
import MainContents from './MainContents';
import MainFooter from './MainFooter';

export default {
    components : {
        'main-header' : MainHeader,
        'main-contents' : MainContents,
        'main-footer' : MainFooter
    }
}
</script>

<style>
@media screen  and (min-width:600px) {

 .box-1{
 	background-size : 100%;
 }

}
</style>
