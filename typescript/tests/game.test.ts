import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import {Game} from '../src/game';

describe('The test environment', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });
    it('The test for Feature#7: Chances that a player gets out of prison must be 1/X where X is the times he got in prison',function () {
        var game = new Game();
        expect(game.chanceToGetOutOfPrison(1)).to.be.equal(1);
        expect(game.chanceToGetOutOfPrison(0)).to.be.equal(0);
        expect(game.chanceToGetOutOfPrison(6)).to.be.closeTo(1/6,0.01);
    })

});
