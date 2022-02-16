import Level1 from "../../activity/level1/level1";
import { step1 } from "../activity-data/level1-data";
import PixelsGrid from "../../PixelsGrid";
import CellContentBinary from "../../CellContentBinary";

const level1 = {
  title: "Level 1 CourEtDefi",
  // defaultData: defaultData,
  component: Level1,
  data: {
	stepper: {
	  visible: true,
	  nbVisible: 4,
	},
	steps: [
	  // level1
	  {
		stop: true,
		tuto: true,
		content: [
		  {
			component: PixelsGrid,
			actions: ["SAVE_LOCAL_PROGRESS", "NEXT_STEP"],
			content: { data: step1, cellComponent: CellContentBinary },
		  },
		],
	  },
	  {
		stop: true,
		tuto: true,
		content: [
		  {
			component: PixelsGrid,
			actions: ["SAVE_LOCAL_PROGRESS", "NEXT_STEP"],
			content: { data: step1, cellComponent: CellContentBinary },
		  },
		],
	  },
	],
  },
};
