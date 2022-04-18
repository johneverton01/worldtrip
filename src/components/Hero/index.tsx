import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
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

						>
							Europa
						</Text>
					</Flex>
				</Box>
			<Image
				w='100%'
				h="auto"
				src="/EXdXLrZXS9Q.png"
				objectFit="cover"
			/>
		</Flex>
	)
}