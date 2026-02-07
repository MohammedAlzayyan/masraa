import type { CollectionConfig } from 'payload'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'location', 'rating', 'price'],
  },
  access: {
    read: () => true, // Everyone can see hotels
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'location',
      type: 'select',
      options: [
        { label: 'Makkah', value: 'Makkah' },
        { label: 'Madinah', value: 'Madinah' },
      ],
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
}
