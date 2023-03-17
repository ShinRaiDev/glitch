
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient , StudySession,User} from "@prisma/client";

const prisma = new PrismaClient()

export default async function Handler (req, res){
    
    const data = req.body;
    
    const result = await prisma.StudySession.findMany({
        where: {
            userEmail:data.email
        }
    })
    
  
  res.send(result)
    
    
}