import type { CollectionConfig } from 'payload'

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'subject', 'createdAt'],
  },
  access: {
    create: () => true, // Anyone can send a contact request
    read: ({ req: { user } }) => user?.role === 'admin',
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
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
  timestamps: true,
}
