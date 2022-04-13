import { Box, GridItem, Text, Image } from "@chakra-ui/react";
import { TravelItemProps } from "./interfaces";

export function TravelItem({img, text}: TravelItemProps) {
	return (
		<GridItem w="auto">
			<Box justifyContent="center" alignItems="center">
				<Image mx="auto" w="85px" h="85px" src={img} />
				<Text mt="24px" fontWeight={700 } align="center">{text}</Text>
			</Box>
	</GridItem >
	)
}