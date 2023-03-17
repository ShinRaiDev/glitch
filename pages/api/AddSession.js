
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient , StudySession,User} from "@prisma/client";

const prisma = new PrismaClient()

export default async function (req, res){
    
    const data = req.body;
    try{ 
    await prisma.StudySession.create({
      data: {
        title:data.title,
        description:data.description,
        efficiency:data.efficiency,
        time:data.time,
        userEmail:data.email
      }
  
    })}
    catch(e){
      console.log(e);
    }
  
  res.send(200)
    
    
}