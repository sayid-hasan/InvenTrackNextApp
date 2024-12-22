import db from "@/lib/db";
import { NextResponse } from "next/server";

// Get brand details by ID
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const supplier = await db.supplier.findUnique({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
    });

    if (!supplier) {
      return NextResponse.json(
        { message: "supplier not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(supplier);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to fetch supplier details",
      },
      {
        status: 500,
      }
    );
  }
}
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const {
      supplierName,
      phone,
      email,
      address,
      contactPerson,
      supplierCode,
      paymentTerms,
      taxID,
      notes,
    } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID parameter is required" },
        { status: 400 }
      );
    }

    // Query the brand using Prisma
    const supplier = await db.supplier.update({
      where: {
        id, // Prisma maps MongoDB's `_id` to `id`
      },
      data: {
        title: supplierName,
        phone: phone,
        email: email,
        address: address,
        contactPerson: contactPerson,
        supplierCode,
        paymentTerms: paymentTerms,
        taxID: taxID,
        notes: notes,
      },
    });

    if (!supplier) {
      return NextResponse.json(
        { message: "supplier not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: supplier,
        message: "updated successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: "Failed to update supplier details",
      },
      {
        status: 500,
      }
    );
  }
}
