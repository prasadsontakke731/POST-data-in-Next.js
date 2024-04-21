import { NextResponse } from "next/server";

export async function POST(req, res) {
    let { name, age, email } = await req.json()

    if (!email || !name || !age) {
        return NextResponse.json({ error: "Required filled not found", ok: false }, { status: 400 })
    }
    console.log(name, age, email);

    return NextResponse.json({ res: "Data send successfully", ok: true }, { status: 200 })

}