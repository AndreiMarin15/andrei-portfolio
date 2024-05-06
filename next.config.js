/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "tailwindui.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "readme-typing-svg.herokuapp.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "skillicons.dev",
				pathname: "**",
			},
		],
	},
};
//
module.exports = nextConfig;
