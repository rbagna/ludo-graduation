const loader = document.getElementById("loader")
const slides = document.querySelectorAll(".slide")

setTimeout(()=>{

loader.style.display="none"

slides.forEach(s=>{
    s.style.opacity=1
    s.style.transform="translateY(0)"
    })

},3000)



const countdown = document.querySelector(".countdown")

if(countdown){
    let number = 3
    const timer = setInterval(()=>{
        number--
        if(number>0){
            countdown.innerText = number
        }else{
            countdown.innerText = "JUMP"
            clearInterval(timer)
        }
    },1000)

}