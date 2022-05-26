let timeout = 500;
let rScale = 15, gScale = 5, bScale = 10;
$(".container-fluid").css('background-color','rgb(60,60,224)');
function anim(r, g, b){
    $(".container-fluid").animate({
        'background-color': "rgb(" + r + "," + g + "," + 224 + ")",
    },timeout, 'linear', function() {
        if(r+rScale==165 || r+rScale==45)
            rScale = -rScale;
        if(g+gScale==95 || g+gScale==55)
            gScale = -gScale;
        anim((r + rScale)%255,(g + gScale)%255,224);
    });
}
anim(60,60,224);

$('#ego').fadeIn("slow");
$('#titlecard').fadeIn("slow");