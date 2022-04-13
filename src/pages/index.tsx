import { Box, Flex, Grid, HStack, Image, Text, VStack, Divider, SimpleGrid } from '@chakra-ui/react'
import Head from 'next/head'
import { Header, Slider, TravelItem } from '../components'

const sliders = [
  {
    key: "1",
    img: "/continent-image.png",
    title: "Europa",
    url: "continente/europa",
    description: "O continente mais antigo."
  },
  {
    key: "2",
    img: "/continent-image.png",
    title: "Europa",
    url: "continente/europa",
    description: "O continente mais antigo."
  },
  {
    key: "3",
    img: "/continent-image.png",
    title: "Europa",
    url: "continente/europa",
    description: "O continente mais antigo."
  },
  {
    key: "4",
    img: "/continent-image.png",
    title: "Europa",
    url: "continente/europa",
    description: "O continente mais antigo."
  },
  {
    key: "5",
    img: "/continent-image.png",
    title: "Europa",
    url: "continente/europa",
    description: "O continente mais antigo."
  },
]


export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
        <meta name="description" content="Chegou a hora de tirar do papel a viagem que você sempre sonhou." />
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
            <VStack>
              <Box w="426px">
                <Text
                  as="h1"
                  fontSize="2.25rem"
                  mb="1.25rem"
                  fontWeight="500"
                >
                  5 Continentes, infinitas possibilidades.
                </Text>
              </Box>
              <Box w="426px">
                <Text
                  as="p"
                  fontSize="1.25rem"
                  fontWeight="300"
                >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>

              </Box>
            </VStack>
            <Box position="relative" bottom={-55}>
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
          <SimpleGrid maxWidth="1440px" templateColumns='repeat(5, 1fr)' gap="160px">
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
            mb="50px"
          />
        </Flex>

        <Flex
          as="section"
          w="100%"
          direction="column"
          justifyContent="center"
          mt="3.25rem"
          mb="3.25rem"
        >
          <Text
            as="h2"
            w="100%"
            textAlign="center"
            fontSize="36"
            fontWeight={600}
          >
            Vamos nessa?
          </Text>
          <Text
            as="h2"
            w="100%"
            textAlign="center"
            fontSize="36"
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
            sliders={sliders}
          />
        </Flex>


      </Flex>
    </>
  )
}


