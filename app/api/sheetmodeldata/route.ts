import SheetModelEntry from "@/types/Sheet";

export async function GET() {
    var vRet: SheetModelEntry[] = [];
    for (var i = 0; i < 20; i++) {
        vRet.push({ title: "Modèle n° " + i })
    }
    const data = vRet;
    data.forEach((item) => { console.log(item.title) });
    return Response.json( data );
}