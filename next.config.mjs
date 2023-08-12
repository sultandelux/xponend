import runtimeCaching from 'next-pwa/cache.js';
import pkg from './next-i18next.config.js';
import withPWA from 'next-pwa';
import { withContentlayer } from 'next-contentlayer';

const { i18n } = pkg;

const combinedWithPWA = withPWA({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
});

export default withContentlayer({
    reactStrictMode: true,
    i18n: {
        locales: ['kk', 'en', 'ru'],
        defaultLocale: 'kk',
        domains: [
            { domain: 'xponend.com/kk', defaultLocale: 'kk' },
            { domain: 'xponend.com/en', defaultLocale: 'en' },
            { domain: 'xponend.com/ru', defaultLocale: 'ru' },
        ],
    },
    images: {
        domains: [
            'localhost',
            'xponend.com'
        ],
    },
    swcMinify: true,
    experimental: {
        newNextLinkBehavior: true,
        scrollRestoration: true,
        appDir: true,
        mdxRs: false,
    },
    ...(process.env.APPLICATION_MODE === 'production' && {
        typescript: {
            ignoreBuildErrors: true,
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
    }),
    compiler: {
        styledComponents: true,
    },
});
