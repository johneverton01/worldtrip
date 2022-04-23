import {
  Box, Flex, HStack, Image, Text, Divider, SimpleGrid, Stack
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Header, Slider, TravelItem } from '../components'
import { api } from '../services/api';

interface Continent {
  id: string;
	image: string;
	url: string;
	name : string;
	description : string;
}

export default function Home() {
  const [continent, setContinent] = useState<Continent[]>([]);

  useEffect(() => {
    api.get('continents')
      .then(
        response => setContinent(response.data.continents)
      );
  }, [])

  return (
    <>
      <Head>
        <title>Worldtrip</title>
        <meta
          name="description"
          content="Chegou a hora de tirar do papel a viagem que você sempre sonhou."
        />
      </Head>
      <Flex
        direction="column"
        h="100vh"
      >
        <Header />
        <Flex
          w="100%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Image
            loading="eager"
            src="/background.png"
            w="100%"
            objectFit="cover"
            height="335px"
            minH="163px"
          />
          <HStack
            position="absolute"
            justifyContent="space-around"
            width="100%"
            maxWidth="1440px"
            color="white"
          >
            <Stack
              direction='column'
              align={['center']}
            >
              <Box
                w={["333px", "426px"]}
                textAlign={['center', "left"]}
              >
                <Text
                  as="h1"
                  fontSize={["1.25rem", "2.25rem"]}
                  mb="1.25rem"
                  fontWeight="500"
                >
                  5 Continentes, infinitas possibilidades.
                </Text>
              </Box>
              <Box
                w={["333px", "426px"]}
                textAlign={['center', "left"]}
              >
                <Text
                  as="p"
                  fontSize={["1rem", "1.25rem"]}
                  fontWeight="300"
                >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>

              </Box>
            </Stack>
            <Box
              display={["none", "none", "none", "block"]}
              position="relative" bottom={-55}>
              <Image mb="-20px" src="/Airplane.png" />
            </Box>
          </HStack>
        </Flex>

        <Flex
          as="section"
          my="80px"
          mx="auto"
          alignItems="center"
          justifyContent="space-around"
          maxWidth="1440px"
          width="100%"
        >
          <SimpleGrid
            maxWidth="1440px"
            templateColumns={
              [
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(3, 1fr)',
                'repeat(5, 1fr)'
              ]
            }
            gap={["71px", "160px"]}>
            <TravelItem
              img="/cocktail.svg"
              text="vida noturna"
            />
            <TravelItem
              img="/surf.svg"
              text="praia"
            />
            <TravelItem
              img="/building.svg"
              text="moderno"
            />
            <TravelItem
              img="/museum.svg"
              text="clássico"
            />
            <TravelItem
              img="/earth.svg"
              text="e mais..."
            />
          </SimpleGrid>
        </Flex>

        <Flex justifyContent="center">
          <Divider
            borderColor="gray.900"
            w={90}
            border={2}
            mb={[0, "50px"]}
          />
        </Flex>

        <Flex
          as="section"
          w="100%"
          direction="column"
          justifyContent="center"
          mt={["1.5rem", "3.25rem"]}
          mb={["1.25rem", "3.25rem"]}
          fontSize={["20", "36"]}
        >
          <Text
            as="h2"
            w="100%"
            textAlign="center"
            fontWeight={600}
          >
            Vamos nessa?
          </Text>
          <Text
            as="h2"
            w="100%"
            textAlign="center"
            fontWeight={600}
          >
            Então escolha seu continente
          </Text>
        </Flex>

        <Flex
          as="section"
          w="100%"
          maxWidth="1440px"
          h="100%"
          justifyContent="center"
          mx="auto"
        >
          <Slider
            sliders={continent}
          />
        </Flex>
      </Flex>
    </>
  )
}