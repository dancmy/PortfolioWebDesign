//Dark Light Mode Theme
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("toggleContainer");
    var img = document.getElementById("toggleImg"); 
    var text = document.getElementById("toggleText"); 

    //Check if a theme is already saved in localStorage
    var savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark") 
    {
        document.body.classList.add("darkTheme");
        img.src = "assets/sun.png";
        text.textContent = "Light";
    } 
    else
    {
        document.body.classList.remove("darkTheme");
        img.src = "assets/moon.png";
        text.textContent = "Dark";
    }

    btn.onclick = function() 
    {
        document.body.classList.toggle("darkTheme");

        if(document.body.classList.contains("darkTheme")) 
        {
            img.src = "assets/sun.png";
            text.textContent = "Light";
            localStorage.setItem("theme", "dark"); //Save the theme as dark
        } 
        else
        {
            img.src = "assets/moon.png";
            text.textContent = "Dark";
            localStorage.setItem("theme", "light"); //Save the theme as light
        }
    }
});
//End of dark light mode



//Nav hover bar stays on current page
document.querySelectorAll('.navContainer a').forEach(link => 
{
    if(link.href === window.location.href) 
    {
        link.classList.add('active');
    } 
    else
    {
        link.classList.remove('active');
    }
});
//End of hover bar



//Speech translator
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

//voice option
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i))
}

//voice changes
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
})

document.getElementById("speechBtn").addEventListener("click", () =>{
    speech.text = document.getElementById("speechText").value;
    window.speechSynthesis.speak(speech);
});
//End of speech translator



//Popup side bar for voice translator
document.addEventListener("DOMContentLoaded", function() 
{
    const trigger = document.querySelector('.popupSide');
    const box = document.querySelector('.popupBox');
    const closeBtn = document.querySelector('.popupBoxClose');

    //Function to show the popup box and hide the trigger
    function showBox() 
    {
        box.classList.add('active');
        trigger.style.display = 'none';
    }

    //Function to hide the popup box and show the trigger
    function hideBox() 
    {
        box.classList.remove('active');
        trigger.style.display = 'block';
    }

    //Event listener for the trigger to show the box
    trigger.addEventListener('click', showBox);

    //Event listener for the close button to hide the box
    closeBtn.addEventListener('click', hideBox);
});
//End of popup side bar 



//Hamburger icon when resizing
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navContainer');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{
    sections.forEach(sec => 
    {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => 
            {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            }
            )
        }
    }
    )
}

menuIcon.onclick = () => 
{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}
//End of hamburger icon