function preload() {
    forest = loadImage('https://i.imgur.com/alQcvUw.png');
    lifepod = loadImage('https://i.imgur.com/tPx0l9i.png');
    river = loadImage('https://i.imgur.com/D53v4al.png');
    forestWalk = loadImage('https://i.imgur.com/h3r6PV3.png');
    wreck = loadImage('https://i.imgur.com/2dVIGRb.png');
    finalShot = loadImage(' https://i.imgur.com/IWpfkbs.png');
}

function setup() {
    var canvas = createCanvas(windowWidth * (0.45), windowHeight);
    canvas.parent('sketch-holder');
    background(0);
}

function draw() {
    fishing = document.getElementById('river').value;
    night = document.getElementById('night').value;
    forestWalkB = document.getElementById('forestWalk').value;
    final = document.getElementById('final').value;
    wreckSite = document.getElementById('wreck').value;

    fill(0);
    let nightCover = rect(0, 0, windowWidth * 0.45, windowHeight);

    if (fishing == "T") {
        image(river, 0, 0, windowWidth * 0.5, windowHeight);
        if (night == 'T') {
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
    else if (forestWalkB == "T") {
        image(forestWalk, 0, 0, windowWidth * 0.5, windowHeight);
        if (night == 'T') {
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
    else if (final == "T") {
        image(finalShot, 0, 0, windowWidth * 0.5, windowHeight);
    }
    else if (wreckSite == "T") {
        image(wreck, 0, 0, windowWidth * 0.5, windowHeight);
    }
    else{
        image(forest, -10, -10, windowWidth*0.5, windowHeight);
        image(lifepod, windowWidth * (0.22), windowHeight - windowHeight / 3, windowWidth / 4, windowHeight / 4);
        if (night == 'T') {
            tint(255, 80);
            image(nightCover, 0, 0, windowWidth * 0.45, windowHeight);
        }
    }
}

// https://imgur.com/a/wWqo1Tl