$.ajax("https://infocast-info.azurewebsites.net/api/v1/infocasts")
    .done(function(data){
       for (let i = 0; i < data.length; i++){
        // criando os elementos

        var slide = document.createElement("div")
        slide.className = "slide-container"
        slide.innerHTML =
        `<div class="slide">
            <div class="frame" style = background-image:url("${data[i].cover}")>
                    <div class="box">
                        <div class="row-1">
                            <div class="col-1-1"></div>
                            <div class="col-1-2"><hr>${data[i].dateTime}</div>
                        </div>
                        <div class="row-2"></div>
                        <div class="row-3">
                            <div class="col-3-1 col-texto">#${data.length-i}</div>
                            <div class="col-3-2 col-texto">${data[i].title}</div>
                            <div class="col-3-3"></div>
                        </div>
                    </div>
                </div>

                <div id="modal-podcast" class="modal">
                    <div class="modal-podcast__content">
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>

                <div class="soundcloud">
                    <iframe data-v-d139e514="" width="100%" height="120" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data[i].soundCloudId}&amp;color=%23ff4e50&amp;auto_play=false&amp;show_artwork=false&amp;sharing=true&amp;download=true&amp;sharing=true&amp;buying=true"></iframe>                 
                </div>
                    <div class="nav-podcast">
                        <div class="nav-podcast__info">
                            <button class="btn btn-info"><p class="arrow"></p>Mais Informações</button> 
                        </div> 

                        <ul class="nav-podcast__links">      
                                                
                            <li class="podcast-link">
                                <a href="">
                                    <img src="assets/icones/spotify-logo-button.png" alt="">
                                    <span>Spotify</span>
                                </a>
                            </li>

                            <li class="podcast-link">
                                <a href="">
                                    <img src="assets/icones/itunes-icone.png" alt="">
                                    <span>Itunes</span>
                                </a>
                            </li>

                            <li class="podcast-link">
                                <a href="">
                                    <img src="assets/icones/deezer-logo.png" alt="">
                                    <span>Deezer</span>
                                </a>
                            </li>

                            <li class="podcast-link">
                                <a href="">
                                    <img src="assets/icones/youtube.png" alt="">
                                    <span>Youtube</span>
                                </a>
                            </li>

                            <li class="podcast-link">
                                <a href="">
                                    <img src="assets/icones/medium.png" alt="">
                                    <span>Medium</span>
                                </a>
                            </li>

                        </ul>

                </div>

            </div>`

            document.getElementById("slider-frame").appendChild(slide);
    }

    $('.btn-info').click(showModal);
});

$('.center').slick({
    centerMode: true,
    centerPadding:'60px',
    slidesToShow: 1,
    // appendArrows:$(".slicer"),
    arrows:true,
    // nextArrow: "<div id=\"next\" class=\"slick-prev arrow\">&gt</div>",
    // prevArrow: "<div id=\"prev\" class=\"slick-next arrow\">&lt</div>"
});

var modal = document.getElementById('modal-podcast');
var frame = document.querySelector('.frame');
// var btn2 = document.getElementById("btn2");
// console.log(btn2)
var span = document.getElementsByClassName("close")[0];


function showModal(ev){
    const buttonText = this.innerText;

    console.log(buttonText)
    if (buttonText == "Mais Informações") {
         $('#modal-podcast').css("display" ,"block");
         $('.frame').css("height","200px");
         $(this).text("Menos Informações");
         
    }else if(buttonText == "Menos Informações") {
        $('#modal-podcast').css("display" ,"none");
        $('.frame').css("height","280px");
        $(this).text("Mais Informações");
    }
};



// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }