let z = document.getElementById("flex-container");
let bx1 = document.getElementById("box1");
let bx2 = document.getElementById("box2");
let bx3 = document.getElementById("box3");
let grow = 0;

function reset() {
    bx1.style.flexGrow = "0";
    bx2.style.flexGrow = "0";
    bx3.style.flexGrow = "0";
    z.style.justifyContent = "start";
    z.style.alignItems = "start";
    z.style.flexDirection = "row";
    z.style.gap = "0";
}

function gap(gapinput) {
    z.style.gap = gapinput + "px";
}

function flexDirection(flexdirinput) {
    if (flexdirinput == 1) {
        z.style.flexDirection = 'row';
    }
    else if (flexdirinput == 2) {
        z.style.flexDirection = 'column';
    }
}

function justifyContent(justifyconinput) {
    if (justifyconinput == 1) {
        z.style.justifyContent = 'start';
    }
    else if (justifyconinput == 2) {
        z.style.justifyContent = 'center';
    }
    else if (justifyconinput == 3) {
        z.style.justifyContent = 'end';
    }
    else if (justifyconinput == 4) {
        z.style.justifyContent = 'space-between';
    }
    else if (justifyconinput == 5) {
        z.style.justifyContent = 'space-around';
    }
    else if (justifyconinput == 6) {
        z.style.justifyContent = 'space-evenly';
    }
}

function alignItems(alignitemsinput) {
    if (alignitemsinput == 1) {
        z.style.alignItems = 'start';
    }
    else if (alignitemsinput == 2) {
        z.style.alignItems = 'center';
    }
    else if (alignitemsinput == 3) {
        z.style.alignItems = 'end';
    }
}

function flexGrow(flexgrowinput) {
    if (flexgrowinput == 1) {
        grow = 0
        bx1.style.flexGrow = grow;
        bx2.style.flexGrow = grow;
        bx3.style.flexGrow = grow;
    }
    else if (flexgrowinput == 2) {
        bx1.style.flexGrow = Number(1) + Number(bx1.style.flexGrow);
        bx2.style.flexGrow = Number(1) + Number(bx2.style.flexGrow);
        bx3.style.flexGrow = Number(1) + Number(bx3.style.flexGrow);
    }
}

function box1grow(box1input) {
    bx1.style.flexGrow = box1input;
}

function box2grow(box2input) {
    bx2.style.flexGrow = box2input;
}

function box3grow(box3input) {
    bx3.style.flexGrow = box3input;
}
