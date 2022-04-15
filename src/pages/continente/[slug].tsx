import { Box, Container, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header, Hero, CountryCard } from "../../components";

const cities = [
  {
    img: '/londres.png',
    city: 'Londres',
    country: 'Reino Unido',
    flag: '/Ellipse 6-4.png',
  },
  {
    img: '/paris.png',
    city: 'Paris',
    country: 'França',
    flag: '/Ellipse 6-3.png',
  },
  {
    img: '/roma.png',
    city: 'Roma',
    country: 'Itália',
    flag: '/Ellipse 6-2.png',
  },
  {
    img: '/praga.png',
    city: 'Praga',
    country: 'República Tcheca',
    flag: '/Ellipse 6-1.png',
  },
  {
    img: '/amsterdã.png',
    city: 'Amsterdã',
    country: 'Holanda',
    flag: '/Ellipse 6.png',
  },
]

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
          <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="70px">
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
          <Container
            maxW='100%'
          >
            <Text
              fontSize="2.25rem"
              as="h2"
              mb="40px"
            >
              Cidades +100
            </Text>
            <Grid
              templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(4, 1fr)']}
              gap={6}
              h="100%"
            >
              {cities.map(city => (
                <CountryCard
                  key={city.city}
                  img={city.img}
                  city={city.city}
                  country={city.country}
                  flag={city.flag}
                />
              ))}
            </Grid>
          </Container>
        </Flex>
      </Flex>
    </>
  )
}