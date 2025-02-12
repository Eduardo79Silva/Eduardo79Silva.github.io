import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// GitHub Pages works best when every route has a trailing slash.
	// This avoids issues with relative paths.
	trailingSlash: true,

	// If you’re deploying to a project page (e.g. username.github.io/repo-name),
	// you might also need to set the basePath.
	// For a user site (username.github.io), you can leave it undefined.
	// basePath: '/repo-name', * config options here */
};

export default nextConfig;
