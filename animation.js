

// function breckText(){
//     const h1 = document.querySelector('h1')
//     // console.log(h1)
//     var h1Text = h1.textContent
//     // console.log(h1Text)
    
//     // it willl be save our two steps 
//     // console.log(h1Text)
    
//     var splittext=h1Text.split("")
//     // console.log(splittext)
    
//     var vipul =""
//     splittext.forEach( function(elem){
//         // console.log('hello')
    
//         vipul += `<span>${elem}</span>`
//     })
//     console.log(vipul)
//     h1.innerHTML = vipul

// }
// breckText()

// gsap.from("h1 span",{
//     y:100,
//     duration:1,
//     opacity:0,
//     delay:0.5,
//     stagger:0.15
// }
// )


function breckText(){
    const h1 = document.querySelector('h1')
    // console.log(h1)
    var h1Text = h1.textContent
    // console.log(h1Text)
    
    // it willl be save our two steps 
    // console.log(h1Text)
    
    var splittext=h1Text.split("")
    // console.log(splittext)
    
    var hafValue = splittext.length/3

    vipul = ""
    splittext.forEach( function(elem,idx){
        // console.log('hello')
    if(idx<hafValue){
        // console.log(elem)
        vipul += `<span class="a">${elem}</span>`
    }else{
        // console.log("lol",elem)
        vipul += `<span class="b">${elem}</span>`
    }
    })
    console.log(vipul)
    h1.innerHTML =  vipul

}
breckText()

gsap.from("h1 .a",{
    y:80,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.15
}
)
gsap.from("h1 .b",{
    y:80,
    duration:1,
    opacity:0,
    delay:0,
    stagger:-0.15
}
)