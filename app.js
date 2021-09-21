
let btn = document.getElementById("gary")

function Sing() {
    let friends = ["Nick", "Garrett", "Cole", "Parker", "Kam"]
    for (i = 0; i < friends.length; i++) {
        let h = document.createElement("h3")
         h.innerHTML= friends[i]
        let friendDiv = document.createElement("div")
        document.body.appendChild(friendDiv)
        friendDiv.classList = "friend"           
        friendDiv.appendChild(h)
        for (index = 99; index > 0; index--) {
            // console.log(index +"  lines of code in the file, " + index + " lines of code; John strikes one out, clears it all out,"+ (index - 1) + " lines of code in the file.")
            if (index == 1) {
                let text = document.createElement("p")
                text.innerHTML = (index + "  line of code in the file, " + index + " line of code; " + friends[i] + " strikes one out, clears it all out," + (index - 1) + " lines of code in the file.")
                friendDiv.appendChild(text)
            } else if (index > 1) {
                let text = document.createElement("p")
                text.innerHTML = (index + "  lines of code in the file, " + index + " lines of code; " + friends[i] + " strikes one out, clears it all out," + (index - 1) + " lines of code in the file.")
                friendDiv.appendChild(text)
            } else {
                let text = document.createElement("p")
                text.innerHTML = (index + "  line of code in the file, " + index + " line of code; " + friends[i] + " strikes one out, clears it all out," + (index - 1) + " line of code in the file.")
                friendDiv.appendChild(text)
            }
        }
    }
}
btn.addEventListener("click", Sing)