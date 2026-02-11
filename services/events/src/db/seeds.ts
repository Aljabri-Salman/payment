import { db } from "./database";
import { events } from "./schema";

await db.insert(events).values([
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
  {
    event_type: 'test_event',
    payload: JSON.stringify({
      message: 'Hello, Drizzle ORM!',
      what: "manyuk anta qasam"
    }),
    source: 'unit_test'
  },
]).run();