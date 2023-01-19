<template>
    <div>
        <gereciaPerfil/>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    components:{
        gereciaPerfil: () => import("../Avatars/_components/gerenciarPerfis.vue"),          
    }
}
</script>