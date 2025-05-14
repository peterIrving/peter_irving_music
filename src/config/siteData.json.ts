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
	title: "Peter Irving - Songwriter, Musician & Performer",
	description:
		"Peter Irving is a Milwaukee-based musician specializing in old-time music, country blues, and ragtime performances. Book him for events or explore his original compositions.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Peter Irving",
		email: "irving.peter92@gmail.com",
		instagram: "peterirving.live"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/peter-irving-musician.jpg",
		alt: "Peter Irving performing music",
	},
};

export default siteData;
