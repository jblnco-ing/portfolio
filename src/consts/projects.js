import CafeOslo from '../pages/projects/CafeOslo';
import HazPausa from '../pages/projects/HazPausa';
import HydroponicSystem from '../pages/projects/HydroponicSystem';
import ObsequiAr from '../pages/projects/ObsequiAr';
import TheFinder from '../pages/projects/TheFinder'
import { logo as cafe_oslo_logo } from '../assets/img/projects/cafe_oslo'
import { logo as haz_pausa_logo } from '../assets/img/projects/haz_pausa'
import { logo as hydroponic_system_logo } from '../assets/img/projects/hydroponic_system'
import { logo as obsequi_ar_logo } from '../assets/img/projects/obsequi_ar'
import { logo as the_finder_app_logo } from '../assets/img/projects/the_finder_app'
const projects = [
	{
		title: "The Finder",
		description: "Admin App",
		styles: {
			backgroundImage: `url(${the_finder_app_logo})`,
			backgroundColor: "#fb9902",
		},
		point: "/the-finder",
		pageComponent: TheFinder,
	},
	{
		title: "ObsequiAr",
		description: "Realidad Aumentada",
		styles: {
			backgroundImage: `url(${obsequi_ar_logo})`,
			backgroundColor: "#696969",
		},
		point: "/obsequiar",
		pageComponent: ObsequiAr,
	},
	{
		title: "Hydroponic System",
		description: "Hardware",
		styles: {
			backgroundImage: `url(${hydroponic_system_logo})`,
			backgroundColor: "#ffffff",
		},
		point: "/hydroponic-system",
		pageComponent: HydroponicSystem,
	},
	{
		title: "HazPausa",
		description: "App Mobile",
		styles: {
			backgroundImage: `url(${haz_pausa_logo})`,
			backgroundColor: "#F0F8FF",
		},
		point: "/hazpausa",
		pageComponent: HazPausa,
	},
	{
		title: "Café de Oslo",
		description: "Landing Page",
		styles: {
			backgroundImage: `url(${cafe_oslo_logo})`,
			backgroundColor: "#D03B40",
		},
		point: "/cafe-oslo",
		pageComponent: CafeOslo,
	},
];

export default projects;