<template>
    <div class="backgrond" style=" width: 100%;" >
        <div class="our-story-card animation-card watchOnDevice flipped" data-uia-nmhp="watchOnDevice" data-uia="our-story-card">
            <div class="animation-card-container">
                <div class="our-story-card-text">
                    <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Assista quando quiser.</h1>
                    <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
                </div>
                <div class="our-story-card-img-container">
                    <div class="our-story-card-animation-container">
                        <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img">
                        <div class="our-story-card-animation" data-uia="our-story-card-animation"><video class="our-story-card-video" data-uia="our-story-card-video" autoplay playsinline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></video>
                            <div class="our-story-card-animation-text"></div>
                            <div class="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
                <div class="center-pixel" style="position:absolute"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (min-width: 1450px), only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .our-story-card {
        padding: 70px 45px;
    }
}
.our-story-card {
    background: transparent;
    border-bottom: 8px solid #222;
    color: #fff;
    margin-bottom: 0;
    padding: 50px 5%;
    position: relative;
}
.animation-card.flipped .animation-card-container {
    flex-flow: row-reverse;
}
.animation-card .animation-card-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;
}
.animation-card.flipped .animation-card-container .our-story-card-text {
    padding: 0 0 0 3rem;
}
.animation-card.watchOnDevice .our-story-card-text {
    margin: -2% 0;
}
.animation-card .our-story-card-text {
    flex: 0 1 auto;
    height: 100%;
    padding: 0 3rem 0 0;
    width: 52%;
    z-index: 3;
}
.our-story-card-subtitle, .our-story-card-text {
    font-size: 1.625rem;
    font-weight: 400;
}
.animation-card .our-story-card-img-container {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    height: 100%;
    width: 48%;
}
.animation-card.watchOnDevice.flipped .our-story-card-animation-container {
    margin: -5% 0 0 -10%;
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
.animation-card.watchOnDevice .our-story-card-animation {
    height: 100%;
    left: 50%;
    max-height: 47%;
    max-width: 63%;
    position: absolute;
    top: 34%;
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
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
}
.center-pixel {
    left: 50%;
    position: absolute;
    top: 50%;
}
</style>