new Vue({
    el: '#root',
    data: {
        currentPlayer: "X",

        board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ],
        gameOver: false,
        winner: null
    },
    methods: {
        makeMove(row, col) {
            if (this.gameOver || this.board[row][col] !== '') {
                return
            }
            this.$set(this.board[row], col, this.currentPlayer);
             if (this.checkWinner()) {
                this.winner = this.currentPlayer;
                 this.gameOver = true;

            };

            if (this.currentPlayer === "X") {
                this.currentPlayer = "O"
            } else {
                this.currentPlayer = "X"

            }

        },

        checkWinner() {
            for (let i = 0; i < 3; i++) {
                if (
                    this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]
                ) {
                    return true;
                }
                if (
                    this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]
                ) {
                    return true;
                }
            }
            if (
                this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]
            ) {
                return true;
            }
            if (
                this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]
            ) {
                return true;
            }
            return false;
        },
        startOver(){
            this.board=[["", "", ""],
                ["", "", ""],
                ["", "", ""]];
            this.gameOver = false;
            this.currentPlayer="X";
             this.winner=null;
            this.makeMove();

        }
    }
});

