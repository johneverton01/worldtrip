import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { SliderProps } from "./interfaces";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './slider.module.scss'

import { Box, Image, Text, Link as CharkraLink } from "@chakra-ui/react";


export function Slider({ sliders }: SliderProps) {
	return (
		<Box
			width="100%"
			mb="2.5rem"
		>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className={styles.swiper}
			>
				{sliders.map(slider => (
					<SwiperSlide key={slider.key}  className={styles.swiperSlide}>
						<CharkraLink
							display="center"
							justifyContent="center"
							alignItems="center"
							href={slider.url}
						>
								<Image src={slider.img} height="450px" width="1240px" />
								<Box
									position="absolute"
									color="white"
									fontWeight="bold"
								>
									<Text
										as="h1"
										fontSize={["1.5rem", "3rem"]}
									>
										{slider.title}
									</Text>
									<Text
										as="p"
										fontSize={["0.875rem", "1.5rem"]}
									>
										{slider.description}
									</Text>
								</Box>

						</CharkraLink>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}