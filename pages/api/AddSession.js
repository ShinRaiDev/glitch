
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient , StudySession,User} from "@prisma/client";

const prisma = new PrismaClient()

export default async (req, res) => {
    
    const data = req.body;

    await prisma.studySession.create({
      data: {
        title:data.title,
        description:data.description,
        efficiency:data.efficiency,
        time:data.time,
        userEmail:data.email
      }
  
    })
  
  res.send(200)
    
    
}