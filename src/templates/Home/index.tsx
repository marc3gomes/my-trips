import LinkWarapper from 'components/LinkWrapper'
import { PersonOutline } from '@styled-icons/evaicons-outline/PersonOutline'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWarapper href="/about">
        <PersonOutline size={32} aria-label="About" />
      </LinkWarapper>
      <Map places={places} />
    </>
  )
}
