<template>
    <div class="backgrond" style=" width: 100%; height: 100%;" >
        <div class="our-story-card animation-card watchOnTv" data-uia-nmhp="watchOnTv" data-uia="our-story-card">
            <div class="animation-card-container">
                <div class="our-story-card-text">
                    <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Aproveite na TV.</h1>
                    <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h2>
                </div>
                <div class="our-story-card-img-container">
                    <div class="our-story-card-animation-container">
                        <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img">
                        <div class="our-story-card-animation" data-uia="our-story-card-animation">
                            <video class="our-story-card-video" data-uia="our-story-card-video" autoplay playsinline muted loop>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></video>
                                <div class="our-story-card-animation-text"></div>
                                <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                <div class="center-pixel" style="position:absolute"></div>
            </div>
        </div>
        <bannerAssista/>
        <bannerCriePerfis/>
        <bannerBaixeSeries/>

    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    components:{
        bannerAssista: () => import("./bannerAssista.vue"),
        bannerCriePerfis: () => import("./bannerCriePerfis.vue"),
        bannerBaixeSeries: () => import("./bannerBaixeSeries.vue"),
        
    }
}
</script>
<style scoped>
    .backgrond{
        background-color: black;
        /* background-image:  linear-gradient( to right, rgba(209, 11, 11, 0.767), transparent, rgba(29, 29, 209, 0.767) ), black; */
    }
</style>
<style scoped>
.animation-card.watchOnDevice .our-story-card-img, .animation-card.watchOnTv .our-story-card-img {
    position: relative;
    z-index: 2;
}
.our-story-card {
    background: transparent;
    border-bottom: 8px solid #222;
    color: #fff;
    margin-bottom: 0;
    padding: 50px 5%;
    position: relative;
}
@media only screen and (min-width: 1450px), only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .our-story-card {
        padding: 70px 45px;
    }
}
/**CENTRALIZA OS COMPONENTES */
.animation-card .animation-card-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;
}
.animation-card.watchOnTv .our-story-card-text {
    margin: -5% 0;
}
.animation-card .our-story-card-text {
    flex: 0 1 auto;
    height: 100%;
    padding: 0 3rem 0 0;
    width: 52%;
    z-index: 3;
}
.animation-card .our-story-card-img-container {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    height: 100%;
    width: 48%;
}
.animation-card.watchOnTv .our-story-card-animation-container {
    margin: -10% -5% -5% 0;
}
.animation-card .our-story-card-animation-container {
    overflow: hidden;
    position: relative;
}
.animation-card.watchOnDevice .our-story-card-img, .animation-card.watchOnTv .our-story-card-img {
    position: relative;
    z-index: 2;
}
img {
    border: 0;
    height: auto;
    max-width: 100%;
}
.animation-card.watchOnTv .our-story-card-animation {
    height: 100%;
    left: 50%;
    max-height: 54%;
    max-width: 73%;
    position: absolute;
    top: 46%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.animation-card.watchOnDevice .our-story-card-video, .animation-card.watchOnTv .our-story-card-video {
    height: 100%;
    width: 100%;
}
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
}
</style>