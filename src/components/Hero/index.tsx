import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
	return (
		<Flex
			w="100%"
			direction="column"
			justifyContent="end"
		>
			<Image
				w='100%'
				h="auto"
				src="/EXdXLrZXS9Q.png"
				objectFit="cover"
			/>
			<Box
				position="relative"
				bottom="105px"
				maxWidth="1440px"
				width="100%"
				mx="auto"
			>
				<Text
					color="white"
					as="h1"
					fontSize="3rem"
				>
					Londres
				</Text>
			</Box>

		</Flex>
	)
}