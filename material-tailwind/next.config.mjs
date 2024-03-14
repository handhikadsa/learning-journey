import nextMDX from '@next/mdx';

const withMDX = nextMDX({
    extension: /\.mdx?$/
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
};

export default withMDX(nextConfig)
