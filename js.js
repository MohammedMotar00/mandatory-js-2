function startGame() {
    let player1 = 'X',
        player2 = 'O',
        playerTurn = player1,
        winner = null,
        box = $('.box'),
        resetBtn = $('#reset'),
        moves = 0;




    function nextMove() {
        box.on('click', (e) => {
            if (winner !== null) {
                message(`${winner} har redan vunnit!`);

            } else if (e.target.innerHTML === "") {
                e.target.innerHTML = playerTurn;
                e.target.classList.add(playerTurn);
                changePlayer();


            } else {
                message('Oops! kvadraten används redan! välj annan kvadrat :)');
            };
        });
    };


    function changePlayer() {
        if (checkWinner(playerTurn)) {
        message(`Grattis ${playerTurn} ! Du vann :)`);
        winner = playerTurn;

        } else if (playerTurn === player1) {
            playerTurn = player2;
            message(`It's ${playerTurn} turn!`);

        } else {
            playerTurn = player1;
            message(`It's ${playerTurn} turn!`);
        };
    };


    function checkWinner(player) {
        let result = false;

        if (checkTable(1, 2, 3, player) ||
            checkTable(4, 5, 6, player) ||
            checkTable(7, 8, 9, player) ||
            
            checkTable(1, 4, 7, player) ||
            checkTable(2, 5, 8, player) ||
            checkTable(3, 6, 9, player) ||
            
            checkTable(1, 5, 9, player) ||
            checkTable(3, 5, 7, player)) result = true;

        return result;
    };


    function checkTable(a, b, c, player) {
        let result = false;

        if (getBox(a) === player && getBox(b) === player && getBox(c) === player) result = true;
        return result;
    };


    function getBox(nums) {
        //return $('b' + nums).innerHTML;
        return document.getElementById('b' + nums).innerHTML;
    };


    function message(msg) {
        //$('#msg').innerText = msg;
        document.getElementById('msg').innerHTML = msg;
    };


    function tie() {
        resetBtn.on('click', (e) => {
            moves++;
            if (this.target === moves) {
                message('Det är lika, starta om spelet');
            }
        });
    };



    resetBtn.on('click', () => {
        playerTurn = player1;
        winner = null;
        message("Let's GOOO :)");
        $('.box').html("");
    
        $('.X').removeClass("X").addClass("");
        $('.O').removeClass("O").addClass("");
        
    });

    nextMove();
    tie();
};

startGame();