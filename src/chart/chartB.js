import "core-js/stable";
import "regenerator-runtime/runtime";
import { addLabelCoords } from "./addlabelCoords.js";
import * as getDates from "./getDates.js";
import { renderDef, eraseDef } from "./termDefs.js"


// creating reusable chart
export function chartA() {
    function draw(selection) {
        selection.each(function (data) {
        })
    }

    return draw;
}
