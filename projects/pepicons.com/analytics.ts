import posthog from 'posthog-js'

export const analytics =
  import.meta.env.PROD &&
  typeof window !== 'undefined' &&
  ['pepicons.com', 'www.pepicons.com', 'pepicons.cycraft.co'].includes(window.location.hostname) &&
  import.meta.env.VITE_POSTHOG_PUBLIC_KEY &&
  import.meta.env.VITE_POSTHOG_HOST
    ? posthog
    : undefined

export function initializeAnalytics() {
  if (!analytics) return
  const posthogHost = import.meta.env.VITE_POSTHOG_HOST
  analytics.init(import.meta.env.VITE_POSTHOG_PUBLIC_KEY, {
    api_host: posthogHost,
    defaults: '2026-08-30',
    cookieless_mode: 'always',
    persistence: 'memory',
    disable_persistence: true,
    person_profiles: 'never',
    autocapture: false,
    capture_pageview: 'history_change',
    capture_pageleave: true,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_performance: false,
    capture_dead_clicks: false,
    rageclick: false,
    disable_session_recording: true,
    enable_recording_console_log: false,
    disable_surveys: true,
    advanced_disable_feature_flags: true,
  })
}
