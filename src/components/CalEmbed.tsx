'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

const CAL_NAMESPACE = '30min'
const CAL_LINK = 'fred-b-pohcjp/30min'

export default function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#e3b45c' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{
        width: '100%',
        height: '750px',
        overflow: 'hidden',
        borderRadius: '32px',
      }}
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  )
}
