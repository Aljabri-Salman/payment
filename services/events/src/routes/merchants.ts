import { Elysia } from 'elysia'
import { db } from '../db/database'
import * as schema from '../db/schema'

export default new Elysia({ prefix: '' })
  .get('/merchants', async ({ set }) => {
    const merchants = await db.select().from(schema.merchants)
    set.status = 200
    return {
      success: true,
      data: merchants
    }
  })