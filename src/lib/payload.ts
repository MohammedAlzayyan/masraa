import configPromise from '@payload-config'
import { getPayload as getPayloadLocal } from 'payload'

export const getPayload = async () => {
  return await getPayloadLocal({
    config: configPromise,
  })
}
