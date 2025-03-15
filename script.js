document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let answer = document.getElementById("answer").value;
    
    if (answer == 8) { // Correct answer
        document.getElementById("userName").innerText = name;
        let gifts = ["gift1.jpg", "gift2.jpg", "gift3.jpg"];
        let randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        document.getElementById("giftImage").src = randomGift;
        document.getElementById("result").classList.remove("hidden");
    } else {
        alert("Wrong answer! Try again.");
    }
});
