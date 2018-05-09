export default class Test {
    constructor() {
        this.stuff = "some stuff here";
        this._log(this.stuff);
    }

    static _log(toLog) {
        console.log(toLog);
    }
}