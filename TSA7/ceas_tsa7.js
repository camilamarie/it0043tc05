let x = document.getElementById("flex-container");
let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let grow = 0;

function reset() {
    b1.style.flexGrow = "0";
    b2.style.flexGrow = "0";
    b3.style.flexGrow = "0";
    x.style.justifyContent = "start";
    x.style.alignItems = "start";
    x.style.flexDirection = "row";
    x.style.gap = "0";
}

function gap(gapinput) {
    x.style.gap = gapinput + "px";
}

function flexDir(flexdirinput) {
    if (flexdirinput == 1) {
        x.style.flexDirection = 'row';
    }
    else if (flexdirinput == 2) {
        x.style.flexDirection = 'column';
    }
}

function justifyCon(justifyconinput) {
    if (justifyconinput == 1) {
        x.style.justifyContent = 'start';
    }
    else if (justifyconinput == 2) {
        x.style.justifyContent = 'center';
    }
    else if (justifyconinput == 3) {
        x.style.justifyContent = 'end';
    }
    else if (justifyconinput == 4) {
        x.style.justifyContent = 'space-between';
    }
    else if (justifyconinput == 5) {
        x.style.justifyContent = 'space-around';
    }
    else if (justifyconinput == 6) {
        x.style.justifyContent = 'space-evenly';
    }
}

function alignItems(alignitemsinput) {
    if (alignitemsinput == 1) {
        x.style.alignItems = 'start';
    }
    else if (alignitemsinput == 2) {
        x.style.alignItems = 'center';
    }
    else if (alignitemsinput == 3) {
        x.style.alignItems = 'end';
    }
}

function flexGrow(flexgrowinput) {
    if (flexgrowinput == 1) {
        grow = 0
        b1.style.flexGrow = grow;
        b2.style.flexGrow = grow;
        b3.style.flexGrow = grow;
    }
    else if (flexgrowinput == 2) {
        b1.style.flexGrow = Number(1) + Number(b1.style.flexGrow);
        b2.style.flexGrow = Number(1) + Number(b2.style.flexGrow);
        b3.style.flexGrow = Number(1) + Number(b3.style.flexGrow);
    }
}

function boxOneGrow(boxoneinput) {
    b1.style.flexGrow = boxoneinput;
}

function boxTwoGrow(boxtwoinput) {
    b2.style.flexGrow = boxtwoinput;
}

function boxThreeGrow(boxthreeinput) {
    b3.style.flexGrow = boxthreeinput;
}
