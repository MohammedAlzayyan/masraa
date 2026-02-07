import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'icon'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Hotel', value: 'hotel' },
        { label: 'Car', value: 'car' },
        { label: 'Gem', value: 'gem' },
        { label: 'Map', value: 'map' },
        { label: 'Headset', value: 'headset' },
        { label: 'Building', value: 'building' },
        { label: 'Plane', value: 'plane' },
        { label: 'Users', value: 'users' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
