export interface SliderProps {
	sliders: SliderItem[];
}

type SliderItem = {
	id: string;
	image: string;
	url: string;
	name : string;
	description : string;
}