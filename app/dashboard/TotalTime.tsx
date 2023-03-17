"use client"

import React from 'react'

export default function TotalTime() {
  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            <span style={{ "--value": }}></span>
          </span>
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            <span style={{ "--value": }}></span>
          </span>
          min
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            <span style={{ "--value": }}></span>
          </span>
          sec
        </div>
    </div>
  )
}
