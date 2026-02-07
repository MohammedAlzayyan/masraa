import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'duration', 'price'],
  },
  access: {
    read: () => true,
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
      name: 'type',
      type: 'select',
      options: [
        { label: 'Umrah', value: 'Umrah' },
        { label: 'Hajj', value: 'Hajj' },
        { label: 'Cultural', value: 'Cultural' },
      ],
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
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
      name: 'includes',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
        },
      ],
    },
  ],
}
