import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import {Player} from "../src/player";

describe('The test environment', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });
    it('The test for Feature#7: Chances that a player gets out of prison must be 1/X where X is the times he got in prison',function () {
        const player1 = new Player("test1", 2);
        const player2 = new Player("test2", 1);
        const player3 = new Player("test2", 6);
        expect(player1.chanceToGetOutOfPrison()).to.be.equal(0.8);
        expect(player2.chanceToGetOutOfPrison()).to.be.equal(0.15);
        expect(player3.chanceToGetOutOfPrison()).to.be.equal(1);
    })

});
