export class Player {
    name: string;
    inJailSince: number;

    constructor(_name: string, _inJailSince: number) {
        this.name = _name;
        this.inJailSince = _inJailSince;
    }

    set setInJailSince(value: number) {
        this.inJailSince = value;
    }

    public chanceToGetOutOfPrison(): number {
        const chance = 1 - (1/(this.inJailSince )) + (0.15*this.inJailSince)
        return chance > 1 ? 1 : chance;
    }
}