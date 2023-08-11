/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://xponend.com",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://xponend.com"}/sitemap.xml`,
      `${process.env.SITE_URL || "https://xponend.com"}/server-sitemap.xml`,
    ],
  },
};
