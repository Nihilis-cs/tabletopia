import SheetModelEntry from "@/types/Sheet";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    var vRet: SheetModelEntry[] = [];
    const requestMethod = req.method;
    console.log(" la requete est: " + requestMethod);
    //const body = JSON.parse(req.body);

    // switch (requestMethod) {
    //     case 'GET':
    for (var i = 0; i < 20; i++) {
        vRet.push({ title: "Modèle n° " + i, date: new Date("2023-09-27") })
    }
    res.status(200).json({ vRet });
    return res;
    //     break;
    // default: 
    //     res.status(200).json({ message: 'Ca marche pas'});
    //     break;
}