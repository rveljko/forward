'use client'

import Dashboard from '@/components/dashboard'
import { useEffect, useRef, useState } from 'react'

export type ActivePanelIndex = 0 | 1 | 2

export default function DashboardControls() {
  const duration = 3000
  const [activePanelIndex, setActivePanelIndex] = useState<ActivePanelIndex>(0)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActivePanelIndex((prev) => ((prev + 1) % 3) as ActivePanelIndex)
    }, duration)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function handlePanelClick(activeIndex: ActivePanelIndex) {
    setActivePanelIndex(activeIndex)

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setActivePanelIndex((prev) => ((prev + 1) % 3) as ActivePanelIndex)
    }, duration)
  }

  return (
    <div className="max-md:hidden">
      <div className="relative isolate mb-8 px-4 after:absolute after:inset-x-0 after:top-1/2 after:-z-1 after:h-px after:-translate-y-1/2 after:bg-neutral-200">
        <div
          role="tablist"
          className="mx-auto flex max-w-5xl divide-x divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200"
        >
          <button
            data-active={activePanelIndex === 0}
            onClick={() => handlePanelClick(0)}
            className="group relative w-full bg-white p-4 transition hover:cursor-pointer hover:bg-neutral-50 data-[active=true]:bg-neutral-100"
            disabled={activePanelIndex === 0}
          >
            Tasks
            <div className="absolute inset-1">
              <span
                style={{ animationDuration: `${duration}ms` }}
                className="group-data-[active=true]:animate-progress-fill absolute bottom-0 left-0 h-0.5 bg-black"
              />
            </div>
          </button>
          <button
            data-active={activePanelIndex === 1}
            onClick={() => handlePanelClick(1)}
            className="group relative w-full bg-white p-4 transition hover:cursor-pointer hover:bg-neutral-50 data-[active=true]:bg-neutral-100"
            disabled={activePanelIndex === 1}
          >
            Issues
            <div className="absolute inset-1">
              <span
                style={{ animationDuration: `${duration}ms` }}
                className="group-data-[active=true]:animate-progress-fill absolute bottom-0 left-0 h-0.5 bg-black"
              />
            </div>
          </button>
          <button
            data-active={activePanelIndex === 2}
            onClick={() => handlePanelClick(2)}
            className="group relative w-full bg-white p-4 transition hover:cursor-pointer hover:bg-neutral-50 data-[active=true]:bg-neutral-100"
            disabled={activePanelIndex === 2}
          >
            Drafts
            <div className="absolute inset-1">
              <span
                style={{ animationDuration: `${duration}ms` }}
                className="group-data-[active=true]:animate-progress-fill absolute bottom-0 left-0 h-0.5 bg-black"
              />
            </div>
          </button>
        </div>
      </div>
      <div aria-label="Dashboard" className="mx-4">
        <Dashboard activePanelIndex={activePanelIndex} />
      </div>
    </div>
  )
}
