
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient , StudySession,User} from "@prisma/client";

const prisma = new PrismaClient()

export default async function Handler (req:any, res:any){
    
    
    const result = await prisma.user.findMany(
        {
            take:10,
            orderBy:{
                xp:"desc"
            }
        })
    
  
  res.send(result)
    
    
}