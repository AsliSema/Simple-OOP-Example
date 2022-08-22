const wrapper = document.querySelector(".wrapper")

class Circle {
    constructor(top, left, size) {
        this.circle = document.createElement("div")
        this.circle.style.position = "absolute"
        this.circle.style.top = top + "px"
        this.circle.style.left = left + "px"
        this.circle.style.height = size + "px"
        this.circle.style.width = size + "px"
        this.circle.style.borderRadius = "50%"
        this.circle.style.backgroundColor = "azure"
        this.circle.style.border = "1px solid azure"
        this.circle.style.transitionDuration= "0.5s"
        this.circle.style.cursor = "pointer"
        this.size = size

        this.circle.addEventListener("click", this.changeSizeAndColor.bind(this))
    }
    addToWrapper(){
        wrapper.appendChild(this.circle)
    }
    resize(newsize){
        this.circle.style.height = newsize + "px"
        this.circle.style.width = newsize + "px"
    }
    double(){
        this.size = this.size*2
        this.circle.style.height = this.size + "px"
        this.circle.style.width = this.size + "px"
    }
    changeColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        this.circle.style.backgroundColor = "#" + randomColor
        //this.circle.style.borderColor = "#" + randomColor
    }
    changeSizeAndColor(){
        this.double()
        this.changeColor()
    }
}

function generateRandomInteger(upperLimit){
    return Math.floor((Math.random()) * upperLimit)
}

let circles = []
for(let i=0; i<30; i++){
    let circle = new Circle(generateRandomInteger(700), generateRandomInteger(1400), generateRandomInteger(100)+1)
    circle.addToWrapper()
    circles.push(circle)
}
