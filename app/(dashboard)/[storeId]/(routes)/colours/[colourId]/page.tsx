import prismadb from "@/lib/prismadb";
import { ColourForm } from "./components/colour-form";

export default async function ColourPage({
  params,
}: {
  params: Promise<{ colourId: string }>;
}) {
  const { colourId } = await params;
  const colour = await prismadb.colour.findUnique({
    where: {
      id: colourId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColourForm initialData={colour} />
      </div>
    </div>
  );
}
