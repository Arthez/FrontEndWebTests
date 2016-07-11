/**
 * Created by Arthur on 2016-06-12.
 */

// document.getElementsByTagName('p'); //returns all paragraphs
// document.getElementsByClassName('col') //returns all elements with col class

function makeColumnsSpecial() {
    var columns = document.getElementsByClassName('col');
    var columnNum = columns.length;
    console.log("columns: " + columnNum);
    for (var i = 0; i < columnNum; i++) {
        console.log("column: " + i + "; size: " + columns.length);
        columns[0].className = "specialCol";
    }

}

makeColumnsSpecial();