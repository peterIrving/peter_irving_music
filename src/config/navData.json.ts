export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navData: navItem[] = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "About",
		link: "/#about",
	},
	{
		text: "Performances",
		link: "/performances",
	},
	{
		text: "Music",
		dropdown: [
			{
				text: "Originals",
				link: "/original-music/",
			},
			{
				text: "Traditional Tunes",
				link: "/traditional-tunes/",
			},

		],
	},
	{
		text: "Artwork",
		link: "/artwork",
	},
	{
		text: "Contact",
		link: "/#contact",
	},

	// {
	// 	text: "Pricing",
	// 	link: "/#pricing",
	// },
];

export default navData;
