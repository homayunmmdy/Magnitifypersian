import CashData from "@/app/cash/CashData";
import { PublicationModel } from "@/app/models";
import { handleGetRequest, handleGetSingleRequest } from "@/app/util/apiUtil";
import { NextResponse } from "next/server";

export async function GET() {
  return handleGetRequest(PublicationModel, CashData);
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const publicationData = body.formData;

    const updatePublicationData = await PublicationModel.findByIdAndUpdate(id, {
      ...publicationData,
    });

    return NextResponse.json({ message: "Post Crated Successfully"}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await PublicationModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post Delete Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}