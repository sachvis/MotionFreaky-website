const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 15,
    duration: 1,
    ease: Power3,
    opacity: 0
});

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 50,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1
});

Shery.imageEffect("#imgntext img", {style: 3,
    config: {"uFrequencyX":{"value":9.92,"range":[0,100]},
    "uFrequencyY":{"value":3.05,"range":[0,100]},
    "uFrequencyZ":{"value":49.62,"range":[0,100]},
    "geoVertex":{"range":[1,64],"value":5.81},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":0.6666666222839202},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
    "shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
    "gooey":{"value":false},"infiniteGooey":{"value":false},
    "growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},
    "durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},
    "noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.2,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2]},
    "discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0.002,"range":[0,0.1]},
    "noise_height":{"value":0.5,"range":[0,2]},
    "noise_scale":{"value":10,"range":[0,100]}},
}); 

Shery.imageEffect(".imgeff img", {style: 5,
    config: {"a":{"value":3.66,"range":[0,30]},"b":{"value":-0.36,"range":[-1,1]},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":0.5882579520760647},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},
    "shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
    "shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},
    "scrollLerp":{"value":0.07},"gooey":{"value":false},
    "infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},
    "durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1.49,"range":[1,5]},
    "scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
    "noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.2,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0.002,"range":[0,0.1]},
    "noise_height":{"value":0.5,"range":[0,2]},
    "noise_scale":{"value":10,"range":[0,100]

    }},
});

gsap.from("#imgntext img", {
    z: "7",
    opacity: 0,
    duration: 2,
    ease: Expo,
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {"a":{"value":4.35,"range":[0,30]},"b":{"value":0.91,"range":[-1,1]},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":1.5520239539568892},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
    "gooey":{"value":true},"infiniteGooey":{"value":false},
    "growSize":{"value":4,"range":[1,8]},
    "durationOut":{"value":1,"range":[0.1,5]},
    "durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1,"range":[1,5]},
    "scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
    "noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.31,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":34}},
    "discard_threshold":{"value":0.58,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},
    "noise_height":{"value":0.41,"range":[0,2]},
    "noise_scale":{"value":16.03,"range":[0,100]}},
    gooey: true,
});

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power4
    });
});

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power4
    });
});

