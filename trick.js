const intro = document.querySelector(".text-center")
const video = intro.querySelector("video")

// scroll magic
const controller = new ScrollMagic.Controller()
// scenes
let scene = new ScrollMagic.Scene({
    duration : 30000,
    triggerElement : intro,
    triggerHook : 0
})
.addTo(controller)
.setPin(intro);

/*const textanim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })
let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textanim)
    .addTo(controller);*/


// video animation 
let accelamount =0.2
let scrollpos = 0
let delay =0 

scene.on('update', e =>{
    scrollpos = e.scrollPos /1000;
})
setInterval(() =>{
    delay += (scrollpos - delay) * accelamount
    video.currentTime = delay
},83)


