// lib/utils.ts
export const siteConfig = {
    name: 'buildwithrai.com',
    description: 'Portfolio of Raidion Fails – Strategy, Ops, and Creative Engineering.',
    url: 'https://buildwithrai.com'
};

export function absoluteUrl(path: string = '') {
    return `${siteConfig.url}${path}`;
}
