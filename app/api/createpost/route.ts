import { NextResponse } from "next/server";

async function POST(req:Request) {

    const request = JSON.stringify(req)
    const data = await fetch(
        "localhost:8000",
        {
            method: "POST",
            headers: {
            "Content-type": "application/json"
            }
        }
    )

    return(NextResponse.json(data))
}