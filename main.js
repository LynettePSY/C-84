canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;



rover_image = "rover.jpg";

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackround;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackround() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
        {
           up();
           console.log("up");
        }
        if (keyPressed == '40')
            {
                down();
                console.log("down");
            }
            if (keyPressed == '37')
                {
                    left();
                    console.log("left");
                }
                if (keyPressed == '39')
                    {
                        right();
                        console.log("right");
                    }
}
function up()
{
    if(rover_y >=0)
        {
            rover_y = rover_y - 10;
            console.log("When up arrow is presesd, x="+rover_x + " y="+rover_y);
        uploadBackround();
        uploadrover();
        }
}
function down()
{
    if(rover_y <=500)
        {
            rover_y = rover_y + 10;
            console.log("When down arrow is presesd, x="+rover_x + " y="+rover_y);
        uploadBackround();
        uploadrover();
        }
}
function left()
{
    if(rover_x >=0)
        {
            rover_x = rover_x - 10;
            console.log("When left arrow is presesd, x="+rover_x + " y="+rover_y);
        uploadBackround();
        uploadrover();
        }
}
function right()
{
    if(rover_x <=700)
        {
            rover_x = rover_x + 10;
            console.log("When right arrow is presesd, x="+rover_x + " y="+rover_y);
        uploadBackround();
        uploadrover();
        }
}
nasa_mars_images_array = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
random_numbers = Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_numbers];
console.log("background_images = " + background_image);