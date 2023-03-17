import React from 'react'
import ClientWrapper from './clientWrapper'
import serverSideDash from './serverSideDash'
export default function Page() {
  return (
      <>
        <ClientWrapper>
          {/* @ts-ignore*/}
          <serverSideDash/>
        </ClientWrapper>
      </>
  )
}
