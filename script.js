window.onscroll = function() {NavBarScroll();};

function NavBarScroll() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-60px";
    }
}
function imgSize() {
    scW = scrollWidth();
    let wWidth = window.innerWidth;
    document.getElementById("bg").style.width = JSON.stringify(wWidth-scW)+"px";
    document.getElementById("bg").style.height = JSON.stringify((wWidth-scW)/3)+"px";
    document.getElementById("productsImg").style.width = JSON.stringify((wWidth/3)*0.8)+"px";
    document.getElementById("scmain").style.marginTop = JSON.stringify(wWidth/7)+"px";

    let Img = document.getElementsByClassName("Img");
    for(i=0; i<Img.length; i++) {
        Img[i].style.width = JSON.stringify((wWidth/3)*0.8)+"px";
    }

    document.getElementById("title").style.fontSize = JSON.stringify(wWidth*0.028125)+"px";

    let navLinks = document.getElementsByClassName("navLink");
    for(i=0;i<navLinks.length; i++) {
        navLinks[i].style.fontSize = JSON.stringify(window.innerWidth*0.01875)+"px";
    }
    document.getElementById("nav2").style.padding = JSON.stringify(wWidth*0.015625)+"px";

    let tTop = (document.getElementById("nav2").clientHeight/2) - ((wWidth*0.028125)/2);
    document.getElementById("title").style.top = JSON.stringify(tTop)+"px";

    let smallTitle = document.getElementsByClassName("smallTitle");
    let text = document.getElementsByClassName("text");

    for(i=0; i<smallTitle.length; i++) {
        smallTitle[i].style.fontSize = JSON.stringify(wWidth*0.01875)+"px";
    }
    for(i=0; i<text.length; i++) {
        text[i].style.fontSize = JSON.stringify(wWidth*0.0141)+"px";    
    }

    let divHeight = document.getElementById("part1r").clientHeight;
    document.getElementById("part1l").style.height = JSON.stringify(divHeight)+"px";
    document.getElementById("part2r").style.height = JSON.stringify(divHeight)+"px";

    let mHeight = document.getElementById("mainTable").clientHeight;
    document.getElementById("scmain").style.height = JSON.stringify(mHeight)+"px";

    let tdHeight = document.getElementById("productsImg").offsetHeight;
    for(i=0; i<tdHeight.length; i++)  {
        document.getElementsByTagName("td")[i].style.width=JSON.stringify(tdHeight)+"px";
        document.getElementsByTagName("td")[i].style.height=JSON.stringify(tdHeight)+"px";
    }
    document.getElementById("part2r").style.width=JSON.stringify(tdHeight)+"px";
    document.getElementById("part1l").style.width=JSON.stringify(tdHeight)+"px";
    document.getElementById("part3l").style.width=JSON.stringify(tdHeight)+"px";
    document.getElementById("part3l").style.height=JSON.stringify(tdHeight)+"px";
}

function scrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // must put it in the document, otherwise sizes will be 0
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}

window.addEventListener("resize", imgSize);

window.addEventListener("scroll", fade);

function fade() {
    let images=document.getElementsByClassName("Img");
    for(i=0; i < images.length; i++) {
        var img = images[i];
        var distInView = img.getBoundingClientRect().top - window.innerHeight + 30;
        if(distInView < 0) {
            img.classList.add("inView");
        } else {
            img.classList.remove("inView");
        }
    }
}