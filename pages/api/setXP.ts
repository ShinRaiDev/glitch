
import { userFromEmail } from "@/lib/prisma/userIdFunc";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async  (req:any, res:any) => {
    
    const data = req.body;
  
    await prisma.user.update({
        where: {
            email:data.email
        },
        data: {
            xp:parseInt(data.xp)
        }
    })
  
  res.send(200)
    
    
}