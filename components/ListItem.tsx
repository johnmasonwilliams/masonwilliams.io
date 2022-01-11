import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces/User'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <div className='container-center'>
      <a>
        {data.id}: {data.name}
      </a>
    </div>

  </Link>
)

export default ListItem
