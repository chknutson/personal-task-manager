import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";


export const prisma = new PrismaClient()
//use 'prisma' in your application to read and write data in your DB

export async function GET(request) {
    const tasks = await prisma.task.findMany();
    console.log(tasks); //remove for production
    return Response.json(tasks);
}

// function GET (request) {
    
//     const task = await prisma.task.findMany();
//     // const users = await prisma.user.findMany();
//     console.log(task)
//     return task;
    // return NextResponse.json (body: "return Value placeholder")
}


// const users = await prisma.user.findMany();