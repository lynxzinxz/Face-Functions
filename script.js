var reveal = document.getElementById('description');

function eyes() {
    if (document.getElementById('eyes').src.match('img/eyesopen.png')) {
        reveal.style.display = "block"
        document.getElementById('header').innerHTML = "EYES";    
        document.getElementById('para').innerHTML ="Eyes play a crucial role in vision, capturing and interpreting visual information. They also contribute to non-verbal communication through expressions";
        document.getElementById('eyes').src = 'img/eyesclose.png';
        document.getElementById("eye").textContent = "Eyes Open";
    } else {
        document.getElementById('eyes').src ='img/eyesopen.png' 
        reveal.style.display = "none";
        document.getElementById("eye").textContent = "Eyes Close";
    }
    
}

function nose() {

    if (document.getElementById('nose').src.match('img/nose1.png')) {
        reveal.style.display = "block"
        document.getElementById('nose').src = 'img/nose2.jpg';
        document.getElementById('para').innerHTML ="The nose helps us smell things, and it also prepares the air we breathe by filtering and warming it before it goes into our lungs. It's not just for smelling; it's essential for breathing too.";
        document.getElementById('header').innerHTML = "NOSE";  
        document.getElementById("noses").textContent = "Nose Inhale";
    } else {
        document.getElementById('nose').src ='img/nose1.png';  
        reveal.style.display = "none";
        document.getElementById("noses").textContent = "Nose Exhale";
    }
}


function mouth() {
    if (document.getElementById('mouth').src.match('img/mouth1.jpg')) {
        reveal.style.display = "block"
        document.getElementById('mouth').src = 'img/mouth2.jpg';
        document.getElementById('para').innerHTML ="The mouth's primary function is to facilitate eating, drinking, and speaking. It plays a crucial role in digestion by breaking down food with chewing, and it aids in communication through speech and expression";
        document.getElementById('header').innerHTML = "MOUTH";    
        document.getElementById("mouths").textContent = "Smile";
    } else {
        document.getElementById('mouth').src ='img/mouth1.jpg' ;
        reveal.style.display = "none";
        document.getElementById("mouths").textContent = "Shout";
    }
}

