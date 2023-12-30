import DetailSheetModel from "@/components/sheetmodels/DetailSheetModel";

export default function ModelDetails({ params }: { params: { id: string } }) {



  return (
        <DetailSheetModel id={params.id} />
  )

}