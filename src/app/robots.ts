import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_HOST_URL || 'https://natureofthedivine.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api', '/checkout', '/ticket'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
