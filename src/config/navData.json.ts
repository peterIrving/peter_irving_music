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
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "Performances",
		dropdown: [
			{
				text: "Upcoming",
				link: "/performances",
			},
			{
				text: "Past",
				link: "/past-performances",
			},

		],
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

	// {
	// 	text: "Pricing",
	// 	link: "/#pricing",
	// },
];

export default navConfig;
