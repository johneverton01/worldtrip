import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface HeroProp {
	title: string;
	poster: string;
	city: string;
}
export function Hero({ title, poster, city }: HeroProp) {
	return (
		<Flex
			w="100%"
			position="relative"
		>
				<Box
					position="absolute"
					maxWidth="1440px"
					h="100%"
					w="100%"
					bottom={[null, "54px"]}
					left={[null, "50%"]}
					px={[null, "1rem"]}
					transform={[null, "translate(-50%, 0)"]}
				>
					<Flex
						justifyContent={["center", "start"]}
						alignItems={["center","end"]}
						width="100%"
						height="100%"

					>
						<Text
							color="white"
							as="h1"
							fontSize={["1.75rem", "3rem"]}
							textAlign={["center", null]}
							textTransform="capitalize"
						>
							{title}
						</Text>
					</Flex>
				</Box>
			<Image
				w='100%'
				maxHeight={500}
				h="auto"
				src={poster}
				alt={city}
				objectFit="cover"
			/>
		</Flex>
	)
}