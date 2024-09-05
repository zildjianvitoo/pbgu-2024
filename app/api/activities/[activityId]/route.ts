import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/fileUpload";

export async function GET(
  request: Request,
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const result = await prisma.activities.findUnique({
      where: {
        id: activityId,
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
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const formData = await req.formData();
    console.log(formData);

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    let filePath;

    if (image instanceof File) {
      await fileUpload(image, "activities");
      filePath = `/activities/${image.name}`;
    } else {
      filePath = image;
    }

    const result = await prisma.activities.update({
      where: {
        id: activityId,
      },
      data: {
        title: title,
        slug: slug,
        content: content,
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
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const result = await prisma.activities.delete({
      where: {
        id: activityId,
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
