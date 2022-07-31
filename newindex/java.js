const app = new Vue({
el:"#app",
methods: {
move(){
const se = new Audio("misic.mp3")
se.play()
this.seen = true
}
}
})