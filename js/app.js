function rgba2hex () {
    const rgba = document.getElementById("rgbaValue").value;
    // Match color to groups with RegExp
    rgbaArray = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    const output = (rgbaArray && rgbaArray.length === 4) ? "#" +
    ("0" + parseInt(rgbaArray[1],10).toString(16)).slice(-2) + // Red
    ("0" + parseInt(rgbaArray[2],10).toString(16)).slice(-2) + //Green
    ("0" + parseInt(rgbaArray[3],10).toString(16)).slice(-2) : ''; //Blue
    //Send Output
    let hexElement = document.getElementById("hexValue");
    hexElement.value = output;

    // Keep text readable
    if (rgbaArray != null) {
        if (parseInt(rgbaArray[1],10) + parseInt(rgbaArray[2],10) + parseInt(rgbaArray[3],10) >= 300) {
            document.body.style.color = "#000000";
        }
        else if (parseInt(rgbaArray[1],10) >= 200 || parseInt(rgbaArray[2],10) >= 200 || parseInt(rgbaArray[3],10) >= 200) {
            document.body.style.color = "#000000";
        }
        else {
            document.body.style.color = "#FFFFFF";
        }
    }
    else {
        return null;
    }
    // Set background color = converted color
    document.body.style.backgroundColor = rgba;
}

function hex2rgba () {
    console.log("hex2rgba");
}
