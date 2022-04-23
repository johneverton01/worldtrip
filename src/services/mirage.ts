import { belongsTo, createServer, hasMany, Model } from "miragejs"

export function makeServer({ environment = "development" }) {
  let server = createServer({
		environment,
    models: {
      continent: Model.extend({
				city: hasMany('slug'),
			}),
			city:  Model.extend({
				slug: belongsTo('id'),
			}),
    },

    seeds(server) {
      server.db.loadData({
				continents: [
					{
						id: 'america-do-norte',
						name: "América do Norte",
						description: "Belas atrações naturais e culturais",
						image: "/america-norte.jpg",
						url: 'continente/america-do-norte',
					},
					{
						id: 'america-do-sul',
						name: "América do Sul",
						description: "Grande diversidade vegetacional.",
						image: "/america-sul.jpg",
						url: 'continente/america-do-sul',
					},
					{
						id: 'asia',
						name: "Ásia",
						description: "Um lugar sensacional!",
						image: "/asia.jpg",
						url: 'continente/asia',
					},
					{
						id: 'africa',
						name: "África",
						description: "O berço da humanidade.",
						image: "/africa.jpg",
						url: 'continente/africa',
					},
					{
						id: 'europa',
						name: "Europa",
						description: "O continente mais antigo.",
						image: "/europa.png",
						url: 'continente/europa',
					},
					{
						id: 'oceania',
						name: "Oceania",
						description: "O Novíssimo Mundo",
						image: "/oceania.jpg",
						url: 'continente/oceania',
					},
				],
				cities: [
					{
						id: 'america-do-norte',
						country: 3,
						languages: 6,
						featuredCities: 'Nova York',
						poster: '/mike-c-valdivia-kZokA2VTKn4-unsplash.jpg',
						abstract: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Canadá",
								img: '/conor-samuel-Onadzzr1yBU-unsplash.jpg',
								city: "Toronto",
								flag: '/flags/canada.png'
							},
							{
								country: "EUA",
								img: '/roma.png',
								city: "California",
								flag: '/flags/estados-unidos.png'
							},
							{
								country: "Canadá",
								img: '/brayden-law-KuJXxZifLZA-unsplash.jpg',
								city: "Vancouver",
								flag: '/flags/canada.png'
							},
							{
								country: "México",
								img: '/david-carballar-FZU-vIW-lk8-unsplash.jpg',
								city: "Cidade do México",
								flag: '/flags/mexico.png'
							},
							{
								country: "EUA",
								img: '/jon-flobrant-s6L0uQyprpE-unsplash.jpg',
								city: "New York",
								flag: '/flags/estados-unidos.png'
							},
						]
					},
					{
						id: 'america-do-sul',
						country: 12,
						languages: 9,
						featuredCities: 'Los Roques',
						poster: '/d202dfab-6343-473d-af40-46062b49348b.webp',
						abstract: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Brasil",
								img: '/janderson-bomfim-mU7UdSNtfHg-unsplash.jpg',
								city: "Salvador",
								flag: '/flags/brasil.png'
							},
							{
								country: "Argentina",
								img: '/telmo-filho-jvibkBbR-xc-unsplash.jpg',
								city: "Buenos Aires",
								flag: '/flags/argentina.png'
							},
							{
								country: "Chile",
								img: '/sebastian-tapia-huerta-5qba-p9ahTE-unsplash.jpg',
								city: "Machu Picchu",
								flag: '/flags/chile.png'
							},
							{
								country: "Uruguai",
								img: '/christian-von-koenig-ziTMnqtgMA0-unsplash.jpg',
								city: "Praga",
								flag: '/flags/uruguai.png'
							},
							{
								country: "Paraguai",
								img: '/thiago-patriota-Ecr8eE4mhls-unsplash.jpg',
								city: "Holanda",
								flag: '/flags/paraguai.png'
							},
						]
					},
					{
						id: 'asia',
						country: 50,
						languages: 5,
						featuredCities: 'Tokyo',
						poster: '/athanasia-andrikopoulos-NCHFqf3H4CA-unsplash.jpg',
						abstract: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Reino Unido",
								img: '/londres.png',
								city: "Londres",
								flag: '/flags/reino-unido.png'
							},
							{
								country: "Paris",
								img: '/paris.png',
								city: "França",
								flag: '/flags/franca.png'
							},
							{
								country: "Itália",
								img: '/roma.png',
								city: "Roma",
								flag: '/flags/italia.png'
							},
							{
								country: "República Tcheca",
								img: '/praga.png',
								city: "Praga",
								flag: '/flags/republica-tcheca.png'
							},
							{
								country: "Amsterdã",
								img: '/amsterdã.png',
								city: "Holanda",
								flag: '/flags/holanda.png'
							},
						]
					},
					{
						id: 'africa',
						country: 54,
						languages: 22,
						featuredCities: 'Cairo',
						poster: '/omar-elsharawy-pwMbtwA9LRc-unsplash.jpg',
						abstract: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Reino Unido",
								img: '/londres.png',
								city: "Londres",
								flag: '/flags/reino-unido.png'
							},
							{
								country: "Paris",
								img: '/paris.png',
								city: "França",
								flag: '/flags/franca.png'
							},
							{
								country: "Itália",
								img: '/roma.png',
								city: "Roma",
								flag: '/flags/italia.png'
							},
							{
								country: "República Tcheca",
								img: '/praga.png',
								city: "Praga",
								flag: '/flags/republica-tcheca.png'
							},
							{
								country: "Amsterdã",
								img: '/amsterdã.png',
								city: "Holanda",
								flag: '/flags/holanda.png'
							},
						]
					},
					{
						id: 'europa',
						country: 50,
						languages: 60,
						featuredCities: 'Londres',
						poster: '/EXdXLrZXS9Q.png',
						abstract: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Reino Unido",
								img: '/londres.png',
								city: "Londres",
								flag: '/flags/reino-unido.png'
							},
							{
								country: "Paris",
								img: '/paris.png',
								city: "França",
								flag: '/flags/franca.png'
							},
							{
								country: "Itália",
								img: '/roma.png',
								city: "Roma",
								flag: '/flags/italia.png'
							},
							{
								country: "República Tcheca",
								img: '/praga.png',
								city: "Praga",
								flag: '/flags/republica-tcheca.png'
							},
							{
								country: "Holanda",
								img: '/amsterdã.png',
								city: "Amsterdã",
								flag: '/flags/holanda.png'
							},
						]
					},
					{
						id: 'oceania',
						country: 16,
						languages: 18,
						featuredCities: 'Londres',
						poster: '/EXdXLrZXS9Q.png',
						abstract: 'A Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d`Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.',
						featuredNumberCities: 27,
						citiesTotal: 100,
						city: [
							{
								country: "Reino Unido",
								img: '/londres.png',
								city: "Londres",
								flag: '/flags/reino-unido.png'
							},
							{
								country: "Paris",
								img: '/paris.png',
								city: "França",
								flag: '/flags/franca.png'
							},
							{
								country: "Itália",
								img: '/roma.png',
								city: "Roma",
								flag: '/flags/italia.png'
							},
							{
								country: "República Tcheca",
								img: '/praga.png',
								city: "Praga",
								flag: '/flags/republica-tcheca.png'
							},
							{
								country: "Amsterdã",
								img: '/amsterdã.png',
								city: "Holanda",
								flag: '/flags/holanda.png'
							},
						]
					},
				]
			})

    },

    routes() {
      this.get("api/continents", () => {
        return this.schema.all('continent');
      });

			this.get("api/cities/:slug", (schema:any, request: any) => {
				const continentId = request.params.slug;
				return schema.cities.findBy({id: continentId});
			});

			this.passthrough();
    },
  })

  return server
}
