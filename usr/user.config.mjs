/**
 * User Configuration File
 *
 * CHIN-DICTIONARY
 * https://chindictionary.lad-sapienza.it
 *
 * This file overrides the default s:CMS settings for the
 * CHIN-DICTIONARY website.
 */

export const userConfig = {
  // Full public URL of the website.
  // No base path is required because the site is served from
  // the root of the custom domain.
  site: 'https://chindictionary.lad-sapienza.it',

  // Do NOT set a GitHub Pages repository base here.
  // The public website is available at the root of the custom domain.
  // base: '/chindictionary',

  // Additional integrations (merged with core integrations)
  integrations: [
    // Add custom integrations here if needed
  ],

  // Custom Vite configuration
  vite: {
    // Add custom Vite settings here if needed
  },

  // Markdown configuration overrides
  markdown: {
    // Add custom Markdown settings here if needed
  },
};

/**
 * Site Metadata
 *
 * Used for SEO, social media cards, and general site information.
 */
export const siteMetadata = {
  title: 'Dictionarium Sinico-Latinum',
  titleTemplate: '%s | CHIN-DICTIONARY',

  description:
    'Digital edition and research environment for Basilio Brollo’s Dictionarium Sinico-Latinum, developed within the CHIN-DICTIONARY project.',

  author: 'CHIN-DICTIONARY Project',

  siteName: 'CHIN-DICTIONARY',

  defaultImage: '/images/chind/home/logo_chind.png',
};

/**
 * Directus Configuration
 *
 * CHIN-DICTIONARY uses Directus as its data source.
 *
 * IMPORTANT:
 * Authentication credentials must not be stored in this file
 * or committed to the repository.
 *
 * The CHIN-DICTIONARY server-side endpoints use:
 *
 * DIRECTUS_URL=https://db.lad-sapienza.it/chind
 * DIRECTUS_TOKEN=<read-only-token>
 *
 * Locally, these values are stored in the project's .env file.
 *
 * On GitHub Actions they must be configured as repository secrets:
 *
 * Settings
 * → Secrets and variables
 * → Actions
 *
 * Required secrets:
 *
 * DIRECTUS_URL
 * DIRECTUS_TOKEN
 *
 * Do not expose the read-only token through PUBLIC_DIRECTUS_TOKEN
 * unless a specific client-side s:CMS component explicitly requires it.
 */