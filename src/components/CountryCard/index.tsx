import { Box, GridItem, Text, Image, Container, Grid } from "@chakra-ui/react";
import { CountryCardProps } from "./interfaces";

export function CountryCard({ img, city, country, flag }: CountryCardProps) {
	return (
		<GridItem>
			<Box
				maxW='sm'
				borderWidth='1px'
				borderRadius='lg'
				borderColor="yellow.100"
				overflow='hidden'
				bg='white'
				mx="auto"
				my={0}
			>
				<Image
					objectFit='cover'
					width="100%"
					src={img}
					alt={city}
				/>
				<Container
					maxW='100%'
					pt="1rem"
					pb="1.125rem"
				>
					<Grid
						templateRows='repeat(2, 1fr)'
						templateColumns='repeat(3, 1fr)'
						gap={2}
					>
						<GridItem
							rowSpan={1}
							colSpan={2}
						>
							<Text
								fontSize="1.25rem"
								fontWeight="semibold"
								color="gray.900"
							>
								{city}
							</Text>
						</GridItem>
						<GridItem
							rowSpan={2}
							colSpan={1}
							display="flex"
							alignItems="center"
						>
							<Image
								borderRadius='full'
								src={flag}
								alt={country}
								mx="auto"
							/>
						</GridItem>
						<GridItem
							rowSpan={1}
							colSpan={2}
						>
							<Text
								fontSize="1rem"
								color="gray.300"
							>
								{country}
							</Text>
						</GridItem>
					</Grid>
				</Container>
			</Box>
		</GridItem>
	)
}