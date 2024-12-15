import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
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
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        supplierName,
        phone: phone || null,
        email: email || null,
        address: address || null,
        contactPerson: contactPerson || null,
        supplierCode,
        paymentTerms: paymentTerms || null,
        taxID: taxID || null,
        notes: notes || null,
      },
    });
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create Supplier",
      },
      {
        status: 500,
      }
    );
  }
}
