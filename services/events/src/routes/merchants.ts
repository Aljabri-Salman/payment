import { Elysia } from 'elysia'
import { db } from '../db/database'
import * as schema from '../db/schema'
import { success } from '../utils'

export default new Elysia({ prefix: '' })
  .get('/merchants', async ({ set }) => {
    const merchants = await db.select().from(schema.merchants)
    const response = success(merchants)
    set.status = response.status
    return response.data
  })