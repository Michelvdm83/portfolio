const backgroundsHTML = "<img src=media/luna.jpg width=100%></img>"

let ttDivs = document.getElementsByName("table-tennis");
for(i = 0; i < ttDivs.length; i++){
    ttDivs[i].onmouseenter = function(event){
        event.target.innerHTML = "<video class=`buttonVid` width=100% height=110% src=" + "media/tt3.mp4" + " muted autoplay loop></video>";
    }

    ttDivs[i].onmouseleave = function(event){
        event.target.innerText = "Tafeltennis";
    }
}

function loadTT(){
    let mainF = document.getElementById("mainContent");
    if(document.getElementById("mainVid") == null){
        let vid = document.createElement("video");
        vid.src = "media/tt.mp4";
        vid.autofocus = false;
        vid.autoplay = true;
        vid.muted = true;
        vid.loop = true;
        vid.classList.add("vidMain");
        vid.id = "mainVid";

        mainF.appendChild(vid);
        
        vid.classList.add("fade-and-slide");
    } else {
        let vid = document.getElementById("mainVid");
        
        vid.style.animation = 'none';
        vid.style.animation = null;
        vid.classList.add("fade-and-slide-out");
        const testOut = setTimeout(remover, 3000);
    }
}

function remover(){
let mainF = document.getElementById("mainContent");
let vid = document.getElementById("mainVid");
mainF.removeChild(vid);
console.log("made it");
}