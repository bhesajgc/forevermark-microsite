import { db } from "./Firebase";
export const addtoData = () => {
    fetch("fmzone.json").then(async data => {
        let tempdata = await data.json();
        tempdata.forEach(element => {
            db.collection("FM-Zone Data").doc(element.subzone).set(element.data);
        });
        // Object.keys(tempdata).forEach(element => {
        //     db.collection("boothdata").doc(element).set(tempdata[element]);
        // });
    })
}