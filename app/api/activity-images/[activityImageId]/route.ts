import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/fileUpload";

export async function GET(
  request: Request,
  { params }: { params: { activityImageId: string } },
) {
  try {
    const activityImageId = params.activityImageId;
    const result = await prisma.activityImages.findUnique({
      where: {
        id: activityImageId,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { activityImageId: string } },
) {
  try {
    const activityImageId = params.activityImageId;
    const formData = await req.formData();

    const activitySlug = formData.get("activitySlug") as string;
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    let filePath;

    if (image instanceof File) {
      const filename = await fileUpload(image, "uploads");
      filePath = `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${filename}`;
    } else {
      filePath = image;
    }

    const result = await prisma.activityImages.update({
      where: {
        id: activityImageId,
      },
      data: {
        activitySlug: activitySlug,
        image: filePath,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { activityImageId: string } },
) {
  try {
    const activityImageId = params.activityImageId;
    const result = await prisma.activityImages.delete({
      where: {
        id: activityImageId,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}
