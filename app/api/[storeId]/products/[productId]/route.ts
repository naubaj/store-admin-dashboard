import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;

    if (!productId) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    const product = await prismadb.product.findUnique({
      where: { id: productId },
      include: { images: true, category: true, size: true, colour: true },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ storeId: string; productId: string }> }
) {
  try {
    const { userId } = await auth();
    const { storeId, productId } = await params;
    const body = await req.json();

    const {
      name,
      price,
      categoryId,
      colourId,
      sizeId,
      images,
      isFeatured,
      isArchived,
    } = body;

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Image(s) is required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse("Category id is required", { status: 400 });
    }

    if (!colourId) {
      return new NextResponse("Colour id is required", { status: 400 });
    }

    if (!sizeId) {
      return new NextResponse("Size id is required", { status: 400 });
    }

    if (!productId) {
      return new NextResponse("Product id is required", { status: 400 });
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

    await prismadb.product.update({
      where: { id: productId },
      data: {
        name,
        price,
        categoryId,
        colourId,
        sizeId,
        images: {
          deleteMany: {},
        },
        isFeatured,
        isArchived,
      },
    });

    const product = await prismadb.product.update({
      where: {
        id: productId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ storeId: string; productId: string }> }
) {
  try {
    const { userId } = await auth();
    const { storeId, productId } = await params;

    if (!userId) {
      return new NextResponse("Unathenticated", { status: 401 });
    }

    if (!productId) {
      return new NextResponse("Product ID is required", { status: 400 });
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

    const product = await prismadb.product.deleteMany({
      where: { id: productId },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("[Product_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
