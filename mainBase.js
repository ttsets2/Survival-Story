/*
    normally will preload images when it runs, but since pages in html are basically
    unique pages we end up loading all of them each time we create a new page.
*/ 
function preload() {
    forest = loadImage('https://i.imgur.com/alQcvUw.png');
    lifepod = loadImage('https://i.imgur.com/tPx0l9i.png');
    river = loadImage('https://i.imgur.com/D53v4al.png');
    forestWalk = loadImage('https://i.imgur.com/h3r6PV3.png');
    wreck = loadImage('https://i.imgur.com/2dVIGRb.png');
    finalShot = loadImage(' https://i.imgur.com/IWpfkbs.png');
}

/*
    setups the canvas and defines css that'll control the canvas
*/ 
function setup() {
    var canvas = createCanvas(windowWidth * (0.45), windowHeight);
    canvas.parent('sketch-holder');
    background(0);
    noLoop();
}

/*
    obtains the values that control what image will show up on the left
    uses simple T for "true" and F for "false"
*/ 
function getBool() {
    fishing = document.getElementById('river').value;
    night = document.getElementById('night').value;
    forestWalkB = document.getElementById('forestWalk').value;
    final = document.getElementById('final').value;
    wreckSite = document.getElementById('wreck').value;
}

/*
   draws the image 
*/ 
function draw() {
    // calls getBool which sets the variables
    getBool();
    fill(0);

    // creates a rectangle that wll darken the image to simulate night
    let nightCover = rect(0, 0, windowWidth * 0.45, windowHeight);

    // renders image for fishing (but is the river setting)
    if (fishing == "T") {
        image(river, 0, 0, windowWidth * 0.45, windowHeight);
        if (night == 'T') {
            // tint is used to control the opacity 255 is max, 0 is transparent
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
    // renders the forest image
    else if (forestWalkB == "T") {
        image(forestWalk, 0, 0, windowWidth * 0.45, windowHeight);
        if (night == 'T') {
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
    // renders the final image in space
    else if (final == "T") {
        image(finalShot, 0, 0, windowWidth * 0.45, windowHeight);
    }
    // randers the ship wreckage
    else if (wreckSite == "T") {
        image(wreck, 0, 0, windowWidth * 0.45, windowHeight);
    }
    // creates the image of the plave where the lifepod landed
    else {
        image(forest, -10, -10, windowWidth*0.45, windowHeight);
        image(lifepod, windowWidth * (0.22), windowHeight - windowHeight / 3, windowWidth / 4, windowHeight / 4);
        if (night == 'T') {
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
}

/*
 * https://en.wikipedia.org/wiki/Uruguayan_Air_Force_Flight_571
 * https://en.wikipedia.org/wiki/Alexander_Selkirk
 * https://en.wikipedia.org/wiki/List_of_sole_survivors_of_aviation_accidents_and_incidents#:~:text=%20%20%20%20Date%20%20%20,%20%20%5B89%5D%20%2020%20more%20rows%20
 * https://en.wikipedia.org/wiki/Jos%C3%A9_Salvador_Alvarenga
*/