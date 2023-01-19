<template>
    <div>
        <gereciaBrowser/>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    components:{
        gereciaBrowser: () => import("../Avatars/_components/browserAvatar.vue"),          
    }
}
</script>