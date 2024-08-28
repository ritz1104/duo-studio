function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

Shery.mouseFollower();
Shery.makeMagnet("#navpart2 h4")

var mouseFollower = document.querySelector(".mousefollower");

var video = document.querySelector("#page1 video")
video.addEventListener("mouseenter",function(){

    mouseFollower.innerHTML = 'SOUND ON'
    mouseFollower.style.borderRadius = "2vh"
    mouseFollower.style.mixBlendMode = "normal"
    mouseFollower.style.backgroundColor = "#EDBFFF"
    mouseFollower.style.width = "10vw"
    mouseFollower.style.height = "3vh"
    mouseFollower.style.textAlign = 'center'  
    mouseFollower.style.color = 'black'  

})
video.addEventListener("mouseleave",function(){

    mouseFollower.innerHTML = ''
    mouseFollower.style.borderRadius = "50%"
    mouseFollower.style.mixBlendMode = "exclusion"
    mouseFollower.style.backgroundColor = "#fff"
    mouseFollower.style.width = "2vh"
    mouseFollower.style.height = "2vh"
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:'top 27%',
        end:'top 0%',
        scrub:3
    }
})
tl.to("#page1 h1",{
    x:-100,
   
},'anim')

tl.to("#page1 h2",{
    x:100,
   
},'anim')

tl.to("#page1 video",{
    width:"100%"
},'anim')

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:'top -115%',
        end:'top -120%',
        scrub:3
    }
})

tl2.to("#main",{
    backgroundColor:"#fff",
    color:"#111",
   
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:'top -500%',
        end:'top -520%',
        scrub:3
    }
})

tl3.to("#main",{
    backgroundColor:"#000",
    color:"#fff",
   
})

var boxes = document.querySelectorAll(".box")
var boxH3 = document.querySelectorAll(".box h3")
boxes.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        
       var att = elem.getAttribute("data-image")
        mouseFollower.style.width = "20vw"
        mouseFollower.style.height = "40vh"
        mouseFollower.style.borderRadius = "0"
        // mouseFollower.style.backgroundColor = "red"
        mouseFollower.style.backgroundImage = `url(${att})`
         mouseFollower.style.ZIndex ="-1"
        
    })
    elem.addEventListener('mouseleave', function(){
        
        var att = elem.getAttribute("data-image")
 
         mouseFollower.style.width = "2vh"
         mouseFollower.style.height = "2vh"
         mouseFollower.style.borderRadius = "50%"
         // mouseFollower.style.backgroundColor = "red"
         mouseFollower.style.backgroundImage = `none`
         
     })
})

Shery.makeMagnet("#footer h4")
Shery.makeMagnet(".page3-bottom h4")
