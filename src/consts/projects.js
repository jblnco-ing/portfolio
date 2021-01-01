import CafeOslo from '../pages/projects/CafeOslo';
import HazPausa from '../pages/projects/HazPausa';
import HydroponicSystem from '../pages/projects/HydroponicSystem';
import ObsequiAr from '../pages/projects/ObsequiAr';
import TheFinder from '../pages/projects/TheFinder'
const projects = [
	{
		title: "The Finder",
		description: "Admin App",
		style: {
			backgroundImage: `url(${require("../assets/img/projects/the_finder_app/logo.png")})`,
			backgroundColor: "#fb9902",
		},
		point: "/the-finder",
		pageComponent: TheFinder,
	},
	{
		title: "ObsequiAr",
		description: "Admin App",
		style: {
			backgroundImage: `url(${require("../assets/img/projects/obsequi_ar/logo.png")})`,
			backgroundColor: "#696969",
		},
		point: "/obsequiar",
		pageComponent: ObsequiAr,
	},
	{
		title: "Hydroponic System",
		description: "Admin App",
		style: {
			backgroundImage: `url(${require("../assets/img/projects/hydroponic_system/logo.jpg")})`,
			backgroundColor: "#ffffff",
		},
		point: "/hydroponic-system",
		pageComponent: HydroponicSystem,
	},
	{
		title: "HazPausa",
		description: "Admin App",
		style: {
			backgroundImage: `url(${require("../assets/img/projects/haz_pausa/logo.png")})`,
			backgroundColor: "#F0F8FF",
		},
		point: "/hazpausa",
		pageComponent: HazPausa,
	},
	{
		title: "Café de Oslo",
		description: "Admin App",
		style: {
			backgroundImage: `url(${require("../assets/img/projects/cafe_oslo/logo.png")})`,
			backgroundColor: "#D03B40",
		},
		point: "/cafe-oslo",
		pageComponent: CafeOslo,
	},
];

export default projects;