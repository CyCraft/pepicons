<script lang="ts" setup>
import { useHead } from '#app'

definePageMeta({ layout: false })
useHead({ title: 'Privacy — Pepicons' })
</script>

<template>
  <main class="privacy-page">
    <a href="/">← Back to Pepicons</a>
    <h1>Privacy</h1>
    <p>
      Pepicons is an icon showcase and download website made by Cycraft. You can browse and download
      icons without creating an account.
    </p>
    <section>
      <h2>Website analytics</h2>
      <p>
        We use PostHog's US Cloud to understand which pages people visit, where visits come from,
        and which icons and download formats people use. Events include page URLs, referring
        websites, campaign tags, browser and device information, page visits and departures, and
        icon downloads.
      </p>
      <p>
        Analytics runs in cookieless mode, without persistent identifiers stored in your browser.
        Session recording, automatic click capture and person profiles are disabled. Cookieless
        analytics still processes technical information about visits.
      </p>
      <p>
        See <a href="https://posthog.com/privacy">PostHog's privacy policy</a> for information about
        the provider.
      </p>
    </section>
    <section>
      <h2>Hosting and fonts</h2>
      <p>
        Firebase Hosting serves this website, and Google Fonts supplies the Montserrat font. Your
        browser makes requests to these providers to load the page and fonts.
      </p>
      <p>
        Read more about
        <a href="https://firebase.google.com/support/privacy">Firebase privacy</a> and
        <a href="https://developers.google.com/fonts/faq/privacy">Google Fonts privacy</a>.
      </p>
    </section>
    <section>
      <h2>Contact</h2>
      <p>
        For questions about this website or its analytics, email
        <a href="mailto:support@cycraft.co">support@cycraft.co</a>.
      </p>
    </section>
    <p>Updated 9 November 2026.</p>
  </main>
</template>

<style lang="sass">
.privacy-page
  box-sizing: border-box
  max-width: 760px
  min-height: 100vh
  margin: 0 auto
  padding: 40px 24px
  display: flex
  flex-direction: column
  gap: 24px
  font-family: Montserrat, sans-serif
  line-height: 1.7
  color: #242231
  background: #fff
  h1, h2, p
    margin: 0
  h1
    font-size: 40px
  h2
    font-size: 24px
  section
    display: flex
    flex-direction: column
    gap: 16px
  a
    color: #5141a8
    text-decoration: underline
</style>
