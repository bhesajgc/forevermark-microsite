import { db } from "./Firebase";
export const addtoData = () => {
    fetch("MediaDatabase.json").then(async data => {
        let tempdata = await data.json();
        Object.keys(tempdata).forEach(element => {
            db.collection("boothdata").doc(element).set(tempdata[element]);
        });
    })
}