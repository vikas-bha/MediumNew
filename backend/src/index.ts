import { Hono } from 'hono';

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors'
import { sign, verify } from 'hono/jwt';
import { userRouter } from './routes/User';
import { postRouter } from './routes/Post';



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();

app.use('/api/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/post",postRouter);


// app.post('/api/v1/user/signup', async(c) => {


//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

// const body = await c.req.json();
// 	try {
// 		const user = await prisma.user.create({
// 			data: {
// 				email: body.email,
// 				password: body.password, 
//         name : body.name
// 			}
// 		});
	
//     const jwt = await sign({
//       id: user.id
//     }, c.env.JWT_SECRET)

// 		return c.text(jwt)
// 	} catch(e) {
// 		 c.status(411);
//      return c.text("couldn't signup")
// 	}


// 	// return c.text('signup route')
// })

// app.post('/api/v1/signin', (c) => {
// 	return c.text('signin route')
// })

// app.get('/api/v1/blog/:id', (c) => {
// 	const id = c.req.param('id')
// 	console.log(id);
// 	return c.text('get blog route')
// })


// app.post('/api/v1/blog', (c) => {

// 	return c.text('signin route')
// })

// app.put('/api/v1/blog', (c) => {
// 	return c.text('signin route')
// })

export default app;


// postgresql://vikasb.mp18:2voyj5xLcTFG@ep-holy-hall-a5vgpavc-pooler.us-east-2.aws.neon.tech/test?sslmode=require


// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOWUwNDhkN2QtZTc1Mi00YTViLWEzOWUtZjZkZTE1ZjkzOWE2IiwidGVuYW50X2lkIjoiOTMyNzU2YzI2ODE1ZTFiZmQxMWI0NjJhZDgyMDg3YmIzODMwZDEwOGIzMmNjZTEyNDM5NDkyYTA0Mjk0NDhkMiIsImludGVybmFsX3NlY3JldCI6IjcwNzA2ZGQzLTU2M2EtNDI3Yy05OWZmLWMzMDlmMTQzZGU2OSJ9.M9HC1rbJ2gyzlIJfkOvb7HbEsr9HW9FMaXHnbj5Lm4Q"