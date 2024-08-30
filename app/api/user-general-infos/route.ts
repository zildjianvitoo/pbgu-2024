import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/fileUpload";

export async function GET(req: NextRequest) {
  try {
    const result = await prisma.userGeneralInfo.findMany({});

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // const formData = await req.formData();

    // const userId = formData.get("userId") as string;
    // const fullname = formData.get("fullname") as string;
    // const alias = formData.get("alias") as string;
    // const nim = formData.get("nim") as string;
    // const major = formData.get("major") as string;
    // const birth = formData.get("birth") as string;
    // const age = formData.get("age") as string;
    // const gender = formData.get("gender") as string;
    // const address = formData.get("address") as string;
    // const phone_number = formData.get("phone_number") as string;
    // const email = formData.get("email") as string;
    // const line = formData.get("line") as string;
    // const facebook = formData.get("facebook") as string;
    // const instagram = formData.get("instagram") as string;
    // const picture = formData.get("picture") as File;

    // if (!picture) {
    //   return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    // }

    // await fileUpload(picture, "pictures");
    // const filePath = `/pictures/${picture.name}`;

    // const result = await prisma.userGeneralInfo.create({
    //   data: {
    //     userId: userId,
    //     fullname: fullname,
    //     alias: alias,
    //     nim: nim,
    //     major: major,
    //     birth: birth,
    //     age: age,
    //     gender: gender,
    //     address: address,
    //     phone_number: phone_number,
    //     email: email,
    //     line: line,
    //     facebook: facebook,
    //     instagram: instagram,
    //     picture: filePath,
    //   },
    // });

    const data = await req.json();

    const result = await prisma.userGeneralInfo.create({
      data,
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
