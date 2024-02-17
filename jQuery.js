$(document).ready(function() {
    const movingObject = $("#movingObject");
    const rectWidth = 200;
    const rectHeight = 100;
    let posX = 0;
    let posY = 0;
    let isResized = false;

    $("#moveRectangleBtn").click(moveInRectangle);
    $("#moveTriangleBtn").click(moveInTriangle);
    $("#resizeOpacityBtn").click(resizeAndChangeOpacity);

    function moveInRectangle() {
        if (posX < rectWidth && posY === 0) {
            posX += 10;
            movingObject.animate({left: posX}, 500);
        } else if (posX >= rectWidth && posY < rectHeight) {
            posY += 10;
            movingObject.animate({top: posY}, 500);
        } else if (posY >= rectHeight && posX > 0) {
            posX -= 10;
            movingObject.animate({left: posX}, 500);
        } else if (posX <= 0 && posY > 0) {
            posY -= 10;
            movingObject.animate({top: posY}, 500);
        }
    }

    function moveInTriangle() {
        if (posX < rectWidth && posY === 0) {
            posX += 10;
            posY += 10;
            movingObject.animate({left: posX, top: posY}, 500);
        } else if (posX >= rectWidth && posY < rectHeight) {
            posY += 10;
            movingObject.animate({top: posY}, 500);
        } else if (posY >= rectHeight && posX > 0) {
            posX -= 10;
            posY -= 10;
            movingObject.animate({left: posX, top: posY}, 500);
        } else if (posX > 0 && posY > 0) { 
            posY -= 10;
            movingObject.animate({top: posY}, 500);
        }
    }

    function resizeAndChangeOpacity() {
        if (!isResized) {
            movingObject.animate({width: "400px", height: "400px", opacity: 1}, 500);
            isResized = true;
        } else {
            movingObject.animate({width: "50px", height: "50px", opacity: 0}, 500);
            isResized = false;
        }
    }
});