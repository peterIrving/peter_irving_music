export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		instagram: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Peter Irving Music",
	// Your website's title and description (meta fields)
	title: "Peter Irving - Songwriting and Performance",
	description:
		"Explore the soulful world of Peter Irving, featuring old-time music, country blues, and ragtime performances. Discover his unique songwriting and captivating live shows.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Peter irving",
		email: "irving.peter92@gmail.com",
		instagram: "peterirving.live"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
