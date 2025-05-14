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
		text: "Performances",
		link: "/performances",
	},
	{
		text: "Music",
		link: "/music",
	},
	{
		text: "Artwork",
		link: "/artwork",
	},
];

export default navData;
