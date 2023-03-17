
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async  (req:any, res:any) => {
    
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