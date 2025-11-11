import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PalmPay - Secure Digital Payments',
    short_name: 'PalmPay',
    description: 'Simple, secure payments for everyone. Patent-pending palm biometrics and liveness detection.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2F29E6',
    icons: [
      {
        src: '/icons/logo-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
