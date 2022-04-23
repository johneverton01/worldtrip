import { Box, Container, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Hero, CountryCard } from "../../components";
import { api } from '../../services/api';

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

interface City {
	country: string,
	city: string,
	img: string,
	flag: string,
}

interface CityParams {
	id: string,
	poster: string,
	country: number,
	languages: number,
  abstract:string,
	featuredCities: string,
	featuredNumberCities: string,
	citiesTotal: number,
	idContinent: string | number,
	city: City[],
}

export default function Continents() {
  const [cities, setCities] = useState<CityParams>({} as CityParams);
  const router = useRouter();
  const { slug } = router.query

  useEffect(() => {
    getCities(slug)
  }, [slug]);

  const getCities = async (slug : string | string[] | undefined) => {
    if (slug) {
      const dataCities = (await api.get(`/cities/${slug}`)).data.city;
      setCities(dataCities);
    }
  }
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
        <Hero title={cities.id} poster={cities.poster} city={cities.featuredCities}/>
        <Flex
          as="section"
          mt={["24px", "80px"]}
          mx="auto"
          alignItems="center"
          justifyContent="space-around"
          maxWidth="1440px"
          width="100%"
        >
          <SimpleGrid columns={{ md: 1, lg: 2 }} spacing={["1rem","70px"]}>
            <Box px="1rem">
              <Text
                as="p"
                textAlign="justify"
                fontSize={["0.875rem","1.5rem"]}
              >
                {cities.abstract}
              </Text>
            </Box>
            <Box px="1rem">
              <Grid templateColumns='repeat(3, 1fr)' gap="42px">
                <GridItem justifyContent="center">
                  <Box textAlign={["left", "center"]}>
                    <Text
                      as="h3"
                      fontSize={["1.5rem","3rem"]}
                      fontWeight="semibold"
                      color="#FFBA08"
                    >
                      {cities.country}
                    </Text>
                    <Text
                      as="p"
                      fontSize={["1rem", "1.5rem"]}
                      color="gray.900"
                    >
                      países
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box textAlign={["left", "center"]}>
                    <Text
                      as="h3"
                      fontSize={["1.5rem","3rem"]}
                      fontWeight="semibold"
                      color="#FFBA08"

                    >
                      {cities.languages}
                    </Text>
                    <Text
                      as="p"
                      fontSize={["1rem", "1.5rem"]}
                      color="gray.900"
                    >
                      línguas
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box textAlign={["left", "center"]}>
                    <Text
                      as="h3"
                      fontSize={["1.5rem","3rem"]}
                      fontWeight="semibold"
                      color="#FFBA08"
                    >
                      {cities.featuredNumberCities}
                    </Text>
                    <Text
                      as="p"
                      fontSize={["1rem", "1.5rem"]}
                      color="gray.900"
                    >
                      cidades +100
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
          mt={["2rem", "80px"]}
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
              Cidades +{cities.citiesTotal}
            </Text>
            <Grid
              templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)','repeat(4, 1fr)']}
              gap={6}
              h="100%"
            >
              {cities!.city && cities.city.map(city => (
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