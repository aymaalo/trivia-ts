import {Game} from './game';

export class GameRunner {
    public static main(): void {
        const game = new Game();
        game.add("Chet");
        game.add("Pat");
        game.add("Sue");
        
        game.askForWinningGoldAmount();

        if(game.howManyPlayers() >= 2)
        {

        let notAWinner;
        do {

            game.roll(Math.floor(Math.random() * 6) + 1);
        
            if (Math.floor(Math.random() * 10) == 7) {
            notAWinner = game.wrongAnswer();
            } else {
            notAWinner = game.wasCorrectlyAnswered();
            }
        
        } while (notAWinner);
        } else{
            console.log('Il doit y avoir deux joueurs minimum NULL NULL NULL bouhhhhhhh');
        }
    }
}

GameRunner.main();

  