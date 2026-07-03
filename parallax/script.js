const animacao = document.querySelector("#animacao");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("animar");

        }else{

            entry.target.classList.remove("animar");

        }

    });

},{
    threshold:0.4
});

observer.observe(document.querySelector("#animacao"));

function ativarParallax(){

    const layers=document.querySelectorAll(".layer");

    animacao.addEventListener("mousemove",(e)=>{

        const rect=animacao.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;

        layers.forEach(layer=>{

            const speed=Number(layer.dataset.speed);

            const moveX=x*speed/100;
            const moveY=y*speed/100;

            layer.style.transform=`translate(${moveX}px,${moveY}px)`;

        });

    });

    animacao.addEventListener("mouseleave",()=>{

        layers.forEach(layer=>{

            layer.style.transform="translate(0,0)";

        });

    });

}
