<template>
    <div class="backgrond" style=" width: 100%;" >
        <div class="our-story-card animation-card downloadAndWatch flipped" data-uia-nmhp="downloadAndWatch" data-uia="our-story-card">
            <div class="animation-card-container">
                <div class="our-story-card-text">
                    <h1 id="" class="our-story-card-title" data-uia="animation-card-title">Baixe séries para assistir offline.</h1>
                    <h2 id="" class="our-story-card-subtitle" data-uia="our-story-card-subtitle">Disponível em todos os planos, exceto no Básico com anúncios.</h2>
                </div>
                <div class="our-story-card-img-container">
                    <div class="our-story-card-animation-container">
                        <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img">
                        <div class="our-story-card-animation" data-uia="our-story-card-animation">
                            <div class="our-story-card-animation-image">
                                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png">
                            </div>
                            <div class="our-story-card-animation-text">
                                <div id="" class="text-0" data-uia="">Stranger Things</div>
                                <div id="" class="text-1" data-uia="">Download em andamento... </div>
                            </div>
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
.our-story-card-title {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
}
.our-story-card-title {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
}
.animation-card .our-story-card-img-container {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    height: 100%;
    width: 48%;
}
.animation-card.downloadAndWatch.flipped .our-story-card-animation-container {
    margin: -8% 0 -4% -15%;
}
.animation-card.downloadAndWatch .our-story-card-animation-container {
    margin: -8% 0 0;
    min-height: 100px;
    width: 100%;
}
.animation-card .our-story-card-animation-container {
    overflow: hidden;
    position: relative;
}

@media only screen and (min-width: 1450px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .animation-card.downloadAndWatch .our-story-card-animation {
        padding: 0.5em 0.75em;
    }
}
.animation-card.downloadAndWatch .our-story-card-animation {
    align-items: center;
    background: #000;
    border: 2px solid hsla(0,0%,100%,.25);
    border-radius: 0.75em;
    bottom: 8%;
    box-shadow: 0 0 2em 0 #000;
    display: flex;
    left: 50%;
    margin: 0 auto;
    min-width: 15em;
    padding: 0.25em 0.65em;
    position: absolute;
    transform: translateX(-50%);
    width: 60%;
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-image {
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 1em 0 0;
}
@media only screen and (min-width: 950px) and (max-width: 1449px)
{
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-image img {
        height: 4.5em;
    }
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-image img {
    height: 3em;
}
img {
    border: 0;
    height: auto;
    max-width: 100%;
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text {
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0.3em 0;
}
@media only screen and (min-width: 1450px), only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-0 {
        font-size: 1em;
    }
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-0 {
    color: #fff;
    font-size: .9em;
    font-weight: 500;
}
@media only screen and (min-width: 1450px), only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-1, .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-2 {
        font-size: .9em;
    }
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-1, .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-text .text-2 {
    color: #0071eb;
    font-size: .75em;
    font-weight: 400;
}
@media only screen and (min-width: 1450px), only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px)
{
    .animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-custom {
        height: 3.75em;
    }
}
.animation-card.downloadAndWatch .our-story-card-animation .our-story-card-animation-custom {
    background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) 50% no-repeat;
    background-size: 100%;
    content: "";
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    width: 3em;
}
.center-pixel {
    left: 50%;
    position: absolute;
    top: 50%;
}
.faq-card {
    text-align: center;
}
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
</style>