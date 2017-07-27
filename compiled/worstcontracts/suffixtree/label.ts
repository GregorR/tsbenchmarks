import { Data as data } from "./data";
export module Label {
        // all values are considered possible label elements
        function isLabelElement(x: any): boolean {
            return true;
        }
        // use built in JS equality to test
        function isLabelElementEqual(x: any, y: any): any {
            return x == y;
        }
        let sentinelFlag: boolean = false;
        // sentinels are # or $, they are inserted at the end of the strings
        function makeSentinel(): string {
            sentinelFlag = !sentinelFlag;
            if (sentinelFlag) {
                return "#";
            }
            else {
                return "$";
            }
        }
        function isSentinel(datum: any): boolean {
            return (datum == "#") || (datum == "$");
        }
        function catenateStrings(inVals: string[]): string {
            let ret: string = "";
            for (var i: number = 0; i < inVals.length; i++) {
                ret += inVals[i];
            }
            return ret;
        }
        export function vectorToLabel(inVal: string[]): data.Label {
            let theDatum: string = catenateStrings(inVal);
            return new data.Label(theDatum, 0, theDatum.length);
        }
        // stick a sentinel on the end of the string
        export function vectorToLabelWithSentinel(inVal: string[]): data.Label {
            let theDatum: string = catenateStrings(inVal);
            return new data.Label(theDatum + makeSentinel(), 0, theDatum.length);
        }
        export function stringToLabel(inVal: any): data.Label {
            return new data.Label(inVal, 0, inVal.length);
        }
        export function stringToLabelWithSentinel(inVal: string): data.Label {
            return new data.Label(inVal + makeSentinel(), 0, inVal.length + 1);
        }
    }
