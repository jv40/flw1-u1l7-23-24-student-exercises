// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Bananyas";
    // 2. Updated the src of profileImage a picture of you or one that makes sense.
profileImage.src = "https://static.wikia.nocookie.net/bananya/images/8/8c/Bananya.pn";
    // 3. Updated the src of main to a photo that's be your first post.
main.src="https://thicc-af.mywaifulist.moe/waifus/momonga-overlord/1Y3mRHUwkOulZxKTumAKj0AQk9BNrNPfAq8K5IoZ.jpg";

});