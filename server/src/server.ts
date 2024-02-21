import Fastify from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/',async () =>{
     const habit = await prisma.habit.findMany(
        {where:{
            title:{
                startsWith:'Beber'
            }
        }}
     )
    return habit
})

app.listen({
    port: 8080,
}).then(()=>{
    console.log('Server running!')
}
)