window.onload = function () {

    /*Applying the board class to all the children divs and then storing the squares in an array*/
    var tiles = document.querySelectorAll("#board div");

    /*Loading the square titles*/
    this.squareTiles(tiles);

    /*The Button*/
    document.getElementsByClassName("btn")[0].onclick = function () {
        var tiles = document.querySelectorAll("#board div");

        /*Removing the letters x and o from the titles when new game button is clicked on*/
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
        }

        let status = document.getElementById('status');
        status.className = "";
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    }
}

function squareTiles(tiles) {
    /*Adding the class square to the childern divs*/

    var letter = true;

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.add("square");

        /*Adding the x and o to the square tiles*/
        tiles[i].onclick = function () {
            if (tiles[i].innerHTML === "") {
                if (letter === true) {
                    tiles[i].innerHTML = "X"
                    tiles[i].classList.add("square");
                    tiles[i].classList.add("X");
                    letter = false;

                    playGame(tiles);
                }

                else {
                    tiles[i].innerHTML = "O";
                    tiles[i].classList.add("square");
                    tiles[i].classList.add("O");
                    letter = true;

                    playGame(tiles);
                }

                /*Changing the colour of the titles when the user's mouse is hovering on square tiles*/
                tiles[i].onmouseover = function () {
                    tiles[i].classList.toggle("hover", true);
                }

                /*Remove the colour when the user's mouse is moved from the square tiles*/
                tiles[i].onmouseout = function () {
                    tiles[i].classList.toggle("hover", false);
                }

            }

        }

    }
}

/*Keeping track of the scores for each player*/
function playGame(scores) {

    /*Horitonally*/
    if (scores[0].innerHTML !== "" && scores[0].innerHTML === scores[1].innerHTML && scores[1].innerHTML === scores[2].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[0].innerHTML + " is the Winner!"
    }

    else if (scores[3].innerHTML !== "" && scores[3].innerHTML === scores[4].innerHTML && scores[4].innerHTML === scores[5].innerHTML) {
        document.getElementById('status').className = "you-won"
        document.getElementById('status').innerHTML = "Congratulations!" + scores[3].innerHTML + " is the Winner!"
    }

    else if (scores[6].innerHTML !== "" && scores[6].innerHTML === scores[7].innerHTML && scores[7].innerHTML === scores[8].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[6].innerHTML + " is the Winner!"
    }

    /*Vertically*/
    else if (scores[0].innerHTML !== "" && scores[0].innerHTML === scores[3].innerHTML && scores[4].innerHTML === scores[6].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[0].innerHTML + " is the Winner!"
    }

    else if (scores[1].innerHTML !== "" && scores[1].innerHTML === scores[4].innerHTML && scores[4].innerHTML === scores[7].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[1].innerHTML + " is the Winner!"
    }

    else if (scores[2].innerHTML !== "" && scores[2].innerHTML === scores[5].innerHTML && scores[8].innerHTML === scores[7].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[2].innerHTML + " is the Winner!"
    }

    /*Digonally*/
    else if (scores[0].innerHTML !== "" && scores[0].innerHTML === scores[4].innerHTML && scores[4].innerHTML === scores[8].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[0].innerHTML + " is the Winner!"
    }

    else if (scores[2].innerHTML !== "" && scores[2].innerHTML === scores[4].innerHTML && scores[4].innerHTML === scores[6].innerHTML) {
        document.getElementById('status').className = "you-won";
        document.getElementById('status').innerHTML = "Congratulations!" + scores[2].innerHTML + " is the Winner!"
    }

}

