import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      warehouseTitle,
      warehouseLocation,
      warehouseType,
      warehouseDescription,
    } = await request.json();
    const warehouse = {
      warehouseTitle,
      warehouseLocation,
      warehouseType,
      warehouseDescription,
    };
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create category",
      },
      {
        status: 500,
      }
    );
  }
}
