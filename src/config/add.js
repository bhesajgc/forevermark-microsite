import { db } from "./Firebase";
export const addtoData = () => {
    fetch("fmzone.json").then(async data => {
        let tempdata = await data.json();
        Object.keys(tempdata).forEach(element => {
            db.collection("FM-Zone Data").doc(element).set(tempdata[element]);
        });

    })
}