import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const userFromEmail =async (email:any) => {
    console.log(email);
    
    return await prisma.user.findUnique({
        where: {
            email:email
        }
    })
    
}
