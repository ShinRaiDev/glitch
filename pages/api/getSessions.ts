
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async  (req:any, res:any) => {
    
    const data = req.body;
  
    const result = await prisma.studySession.findMany({
        orderBy: [
            {
                id:"desc",
            }
        ],
        where: {
           userEmail:data.email
       }
   }) 
  
  res.send(result)
    
    
}