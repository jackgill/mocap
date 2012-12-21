function drawHouse(leftPanelWidthPercent, leftPanelLeftHeightPercent, leftPanelRightHeightPercent, rightPanelWidthPercent, rightPanelLeftHeightPercent, rightPanelRightHeightPercent, topPanelWidthPercent, topPanelLeftHeightPercent, topPanelRightHeightPercent) {
    // Convert 0-100 percentage to 0-1
    leftPanelWidthPercent /= 100;
    leftPanelLeftHeightPercent /= 100;
    leftPanelRightHeightPercent /= 100;
    rightPanelWidthPercent /= 100;
    rightPanelLeftHeightPercent /= 100;
    rightPanelRightHeightPercent /= 100;
    topPanelWidthPercent /= 100;
    topPanelLeftHeightPercent /= 100;
    topPanelRightHeightPercent /= 100;

    // Define the base dimensions of the shapes
    var rectangleBaseWidth = 125;
    var rectangleBaseHeight = 125;
    var topPanelBaseWidth = rectangleBaseWidth * 3;
    var topPanelBaseHeight = 100;

    // The canvas is our drawing element
    // It has a coordinate system with (0,0) in the upper-left corner
    var canvas = document.getElementById('house');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // The fill collor is defined as (red, green, blue) with each value between 0 and 255
    var fillColor = 'rgb(79, 129, 189)'
    ctx.fillStyle = fillColor;

    // The offset of the house from the lower left corner of the canvas 
    var offsetX = 100;
    var offsetY = 100;

    // Draw left panel 
    var leftPanelWidth = leftPanelWidthPercent * rectangleBaseWidth;
    var leftPanelLeftHeight = leftPanelLeftHeightPercent * rectangleBaseHeight;
    var leftPanelRightHeight = leftPanelRightHeightPercent * rectangleBaseHeight;
    ctx.beginPath();
    ctx.moveTo(offsetX, canvas.height - offsetY);
    ctx.lineTo(offsetX + leftPanelWidth, canvas.height - offsetY);
    ctx.lineTo(offsetX + leftPanelWidth, canvas.height - offsetY - leftPanelRightHeight);
    ctx.lineTo(offsetX, canvas.height - offsetY - leftPanelLeftHeight);
    ctx.fill();

    // Draw right panel 
    var rightOffset = rectangleBaseWidth * 2; // How far to offset the right rectangle from the left rectangle
    var rightPanelWidth = rightPanelWidthPercent * rectangleBaseWidth;
    var rightPanelLeftHeight = rightPanelLeftHeightPercent * rectangleBaseHeight;
    var rightPanelRightHeight = rightPanelRightHeightPercent * rectangleBaseHeight;
    ctx.beginPath();
    ctx.moveTo(offsetX + rightOffset, canvas.height - offsetY);
    ctx.lineTo(offsetX + rightOffset + rightPanelWidth, canvas.height - offsetY);
    ctx.lineTo(offsetX + rightOffset + rightPanelWidth, canvas.height - offsetY - rightPanelRightHeight);
    ctx.lineTo(offsetX + rightOffset, canvas.height - offsetY - rightPanelLeftHeight);
    ctx.fill();

    // Draw top panel 
    var topPanelWidth = topPanelWidthPercent * topPanelBaseWidth;
    var topPanelLeftHeight = topPanelLeftHeightPercent * topPanelBaseHeight;
    var topPanelRightHeight = topPanelRightHeightPercent * topPanelBaseHeight;
    var roofOffset = rectangleBaseHeight;
    ctx.beginPath();
    ctx.moveTo(offsetX, canvas.height - offsetY - roofOffset);
    ctx.lineTo(offsetX + topPanelWidth, canvas.height - offsetY - roofOffset);
    ctx.lineTo(offsetX + .6 * topPanelWidth, canvas.height - offsetY - roofOffset - topPanelRightHeight);
    ctx.lineTo(offsetX + .4 * topPanelWidth, canvas.height - offsetY - roofOffset - topPanelLeftHeight);
    ctx.fill();

    // Draw family image
    ctx.drawImage(document.getElementById('family'), offsetX + rectangleBaseWidth + 12, canvas.height - offsetY - rectangleBaseHeight + 20);

    // Draw labels
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '20px Arial';
    ctx.fillText('Partner', offsetX + 25, canvas.height - offsetY - (.5 * rectangleBaseHeight) + 10);
    ctx.fillText('Engagement', offsetX + rightOffset + 5, canvas.height - offsetY - (.5 * rectangleBaseHeight) + 10);
    ctx.fillText('Housing', offsetX + (.5 * rightOffset) + 20, canvas.height - offsetY - (1.5 * rectangleBaseHeight) + 10);

    ctx.font = '18px Arial';
    ctx.fillText('2. Relationships', offsetX, canvas.height - offsetY + 18);
    ctx.fillText('8. Community', offsetX + rightOffset + 10, canvas.height - offsetY + 18);
    ctx.fillText('4. Rent Paid', offsetX + (.5 * rightOffset) + 10, canvas.height - offsetY - rectangleBaseHeight - 5);

    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('1. Emotional', - canvas.height + offsetY, offsetX - 8);
    ctx.fillText('3. Health', - canvas.height + offsetY, offsetX + rectangleBaseWidth + 22);
    ctx.fillText('7. Career', - canvas.height + offsetY, offsetX + rightOffset - 2);
    ctx.fillText('9. Life skills', - canvas.height + offsetY, offsetX + rightOffset + rectangleBaseWidth + 22);
    ctx.restore();

    ctx.save();
    ctx.rotate(-Math.PI / 5.2);
    ctx.fillText('5. Housekeeping', -60, 275);
    ctx.restore();
    
    ctx.save();
    ctx.rotate(Math.PI / 5.2);
    ctx.fillText('6. Finances', 400, -50);
    ctx.restore();

}

function render(e) {
        drawHouse($('input[name="leftPanelWidth"]').val(),
                  $('input[name="leftPanelLeftHeight"]').val(),
                  $('input[name="leftPanelRightHeight"]').val(),
                  $('input[name="rightPanelWidth"]').val(),
                  $('input[name="rightPanelLeftHeight"]').val(),
                  $('input[name="rightPanelRightHeight"]').val(),
                  $('input[name="topPanelWidth"]').val(),
                  $('input[name="topPanelLeftHeight"]').val(),
                  $('input[name="topPanelRightHeight"]').val())
    }

$(document).ready(function() {
    // Draw the default house
    render();

    // Change handler for number inputs 
    $('input[type="number"]').change(render);
})
