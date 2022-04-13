export interface SliderProps {
	sliders: SliderItem[];
}

type SliderItem = {
	key: string;
	img: string;
	url: string;
	title : string;
	description : string;
}