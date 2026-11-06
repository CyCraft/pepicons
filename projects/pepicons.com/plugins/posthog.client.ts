import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const { posthogPublicKey, posthogHost } = useRuntimeConfig().public
  const enabled =
    !import.meta.dev &&
    ['pepicons.com', 'www.pepicons.com'].includes(window.location.hostname) &&
    posthogPublicKey &&
    posthogHost

  const client = enabled
    ? posthog.init(posthogPublicKey, {
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
    : undefined

  return { provide: { posthog: client } }
})
