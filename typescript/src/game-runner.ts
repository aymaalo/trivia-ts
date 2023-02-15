import {Game} from './game';
import {Player} from "./player";

export class GameRunner {
    public static main(): void {
        const joueur1 = new Player("Chet", 0);
        const joueur2 = new Player("Pat", 0);
        const joueur3 = new Player("Sue", 0);
        const game = new Game();
        game.add(joueur1);
        game.add(joueur2);
        game.add(joueur3);

        let notAWinner;
        do {
            game.roll(Math.floor(Math.random() * 6) + 1);
        
            if (Math.floor(Math.random() * 10) == 7) {
            notAWinner = game.wrongAnswer();
            } else {
            notAWinner = game.wasCorrectlyAnswered();
            }
        
        } while (notAWinner);
    }
}

GameRunner.main();

  