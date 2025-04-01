import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ colourId: string }> }
) {
  try {
    const { colourId } = await params;

    if (!colourId) {
      return new NextResponse("Colour ID is required", { status: 400 });
    }

    const colour = await prismadb.colour.findUnique({
      where: { id: colourId },
    });
    return NextResponse.json(colour);
  } catch (error) {
    console.log("[COLOUR_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ storeId: string; colourId: string }> }
) {
  try {
    const { userId } = await auth();
    const { storeId, colourId } = await params;
    const body = await req.json();

    const { name, value } = body;

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!value) {
      return new NextResponse("Value is required", { status: 400 });
    }

    if (!colourId) {
      return new NextResponse("Colour id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorised", { status: 403 });
    }

    const colour = await prismadb.colour.updateMany({
      where: { id: colourId },
      data: {
        name,
        value,
      },
    });
    return NextResponse.json(colour);
  } catch (error) {
    console.log("[COLOUR_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ storeId: string; colourId: string }> }
) {
  try {
    const { userId } = await auth();
    const { storeId, colourId } = await params;

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 });
    }

    if (!colourId) {
      return new NextResponse("Colour ID is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorised", { status: 403 });
    }

    const colour = await prismadb.colour.deleteMany({
      where: { id: colourId },
    });
    return NextResponse.json(colour);
  } catch (error) {
    console.log("[COLOUR_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
