


// $("h1").text('asfna');


// $('body').text('aeges');


var aud = new Audio('./sounds/hraaa.opus');
aud.play();

$(".btn").click(function()
{$(this).fadeOut(100).fadeIn(100);   
}
);

$('#green').click(function(){
    var aud = new Audio('./sounds/hraaa.opus');
aud.play();
});

$('#red').click(function(){
    var aud = new Audio('./sounds/laal_orig.opus');
aud.play();
});

$('#yellow').click(function(){
    var aud = new Audio('./sounds/peela.opus');
aud.play();
});

$('#blue').click(function(){
    var aud = new Audio('./sounds/neela.opus');
aud.play();
});





//var random_num = Math.random();
//in the below array i will store random nums generated//


 //press key to restart and when restart only then new number add to random_num array//

var random_num_arr = ["green"];  //starting value for game//

$(document).on('keypress', function(){
    var random_num = Math.floor(Math.random()*5);
    switch(random_num){
        case 1:
            random_num_arr.push('green');
        case 2:
            random_num_arr.push('red');
        case 3:
            random_num_arr.push('yellow');
        case 4:
            random_num_arr.push('blue');
    }
    
})







////////////////////////////////////////////////////////////////













// in the below array i will store which numbers were clicked

var clicked_btn_arr = [];
var count=0;

$('.btn').on('click',function(event){
var clicked_id = $(this).attr('id');
clicked_btn_arr.push(clicked_id);
console.log("****************************");
console.log("clicked_id: "+clicked_id);
console.log("clicked btn arr: "+clicked_btn_arr);
console.log("****************************");



if(clicked_btn_arr[count] == random_num_arr[count]){

    
    count++;
    console.log("clicked_arr[count] == random_arr[count] -->count val: "+count);
}


else if(clicked_btn_arr[count] != random_num_arr[count]){
     //end the game.

    //  $(document).html('Game over');

    $('h1').text('game over');
    setTimeout(function(){
$('body').text('Game over')
    }, 1000);


    console.log("game over values below; ");
console.log("clickedbtnarr: "+clicked_btn_arr);
console.log("random arr: "+random_num_arr);
console.log("..............");

setTimeout(function(){
    location.reload(true);
}, 7000);
//show a slide that u failed and then hard reload everything//
};

if(count>random_num_arr.length-1){
    //new level//
    //level = random_num_arr.length;
    $('h1').text("level-"+(Number(count)+1));             // ---------------count+1 dhya rakho


    //clear current click_log;
    clicked_btn_arr = [];
count = 0;
   
{
    var random_num = Math.floor(Math.random()*5 +1);
    console.log("::::::::::::::::::::::::::::::::::");
    console.log('random num generated inside c>lenght: '+random_num);
    console.log("::::::::::::::::::::::::::::::::::");
    if(random_num == 5){
        var aud = new Audio('./sounds/no_change.opus');
        aud.play();
    }
    switch(random_num){
        case 1:
            $('#green').fadeOut().fadeIn();
            random_num_arr.push('green');
            var aud = new Audio('./sounds/hraaa.opus');
            setTimeout(function(){
                aud.play()
            }, 2000);
            
            break;
        case 2:
            $('#red').fadeOut().fadeIn();
            random_num_arr.push('red');
            var aud = new Audio('./sounds/laal_orig.opus');
         
            setTimeout(function(){
                aud.play()
            }, 2000);
            
            break;
        case 3:
            $('#yellow').fadeOut().fadeIn();
            random_num_arr.push('yellow');
            var aud = new Audio('./sounds/peela.opus');
            setTimeout(function(){
                aud.play() 
            }, 2000);
            
            break;
        case 4:
            $('#blue').fadeOut().fadeIn();
            random_num_arr.push('blue');
            var aud = new Audio('./sounds/neela.opus');
            setTimeout(function(){
                aud.play()
            }, 2000);
            
            break;
        
    }
    

};
}


console.log("codefinish random_num_arr:   "+random_num_arr);
console.log("codefinish clicked arr:  "+clicked_btn_arr);

console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");




    
})















///////////////////////////////////////////////////////


//ignore the below code it was an attempt to compare two arrays, but 
// we actually need to 
// for(var i=0; i<random_num_arr.length; i++){

//     if(random_num_arr[0]==)

// }
















