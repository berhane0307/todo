/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'Yoga',
      priority: 'Low',
      details: 'Stretch and relax the body',
      completed: false,
    },
    {
      id: 2,
      task: 'Running',
      priority: 'High',
      details: 'Outdoor running session for cardiovascular health',
      completed: false,
    },
    {
      id: 3,
      task: 'play harp',
      priority: 'Low',
      details: 'Practice chords and learn new songs',
      completed: false,
    },
  ])
}
