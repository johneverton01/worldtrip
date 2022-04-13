import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../../components";
import { Hero } from "../../components/Hero";

export default function Continente() {
	return (
		<>
		<Head>
        <title>Worldtrip - Europa</title>
        <meta name="description" content="Chegou a hora de tirar do papel a viagem que você sempre sonhou." />
      </Head>
      <Flex
        direction="column"
        h="100vh"
      >
        <Header />
				<Hero />
        <Flex
          as="section"
          mt="80px"
          mx="auto"
          alignItems="center"
          justifyContent="space-around"
          maxWidth="1440px"
          width="100%"
        >
          <SimpleGrid  columns={{ md: 1, lg: 2 }} spacing="70px">
            <Box>
              <Text
                as="p"
                textAlign="justify"
                fontSize="1.5rem"
              >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
                península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela
                divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
            </Box>
            <Box>
              <Grid templateColumns='repeat(3, 1fr)' gap="42px">
                <GridItem justifyContent="center">
                  <Box textAlign="center">
                    <Text
                      as="h3"
                      fontSize="3rem"
                      fontWeight="semibold"
                      color="#FFBA08"
                    >
                      50
                    </Text>
                    <Text
                      as="p"
                      fontSize="1.5rem"
                      fontWeight="semibold"
                      color="gray.900"
                    >
                      países
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box textAlign="center">
                    <Text
                      as="h3"
                      fontSize="3rem"
                      fontWeight="semibold"
                      color="#FFBA08"
                    >
                      60
                    </Text>
                    <Text
                      as="p"
                      fontSize="1.5rem"
                      fontWeight="semibold"
                      color="gray.900"
                    >
                      línguas
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box textAlign="center">
                    <Text
                      as="h3"
                      fontSize="3rem"
                      fontWeight="semibold"
                      color="#FFBA08"
                    >
                      27
                    </Text>
                    <Text
                      as="p"
                      fontSize="1.5rem"
                      fontWeight="semibold"
                      color="gray.900"
                    >
                      cidades + 100
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </SimpleGrid>
        </Flex>
        <Flex
          as="section"
          mx="auto"
          mt="80px"
          maxWidth="1440px"
          width="100%"
        >
          <Text
            fontSize="2.25rem"
            as="h2"
          >Cidades +100</Text>
        </Flex>
			</Flex>
		</>
	)
}