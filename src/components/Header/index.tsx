import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1440}
			h="100px"
			align="center"
			mx="auto"
			py="3"
			alignItems="center"
			justifyContent="center"
		>
			<Link href="/">
				<a>
					<Image src="/logo.svg" alt="logo worldtrip" />
				</a>
			</Link>
		</Flex>
	)
}