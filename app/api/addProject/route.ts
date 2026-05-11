
import { db } from "@/config/firebaseAdmin"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, description, linkToPage, features, techStack, images } = body

    const docRef = await db.collection("projects").add({
      name,
      description,
      linkToPage,
      features,
      techStack,
      images,
      createdAt: new Date(),
    })

    return NextResponse.json({
      id: docRef.id,
      success: true,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project. " + error },
      { status: 500 }
    )
  }
}