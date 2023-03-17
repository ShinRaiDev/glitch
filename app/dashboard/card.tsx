"use client"

import { StudySession } from '@prisma/client'
import React from 'react'

export default function SessionCard({props}:any
) {
  return (
    <div className="card w-96 bg-secondary text-base-100 shadow-xl">
  
  <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              <span>{props.description}</span>
    <div className="card-actions justify-end flex">
                  <span>Efficiency: {props.efficiency}</span>
                  <span>Time: {props.time}</span>
    </div>
  </div>
</div>
  )
}
