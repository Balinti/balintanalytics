import { memo } from 'react'

/**
 * Loading component - Used as Suspense fallback
 * Advanced React pattern: React.memo for preventing unnecessary re-renders
 */
const Loading = memo(function Loading({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <p className="loading-text">{message}</p>
    </div>
  )
})

export default Loading
