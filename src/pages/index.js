import React from "react";
import theme from "theme";
import { Theme, Text, Link, Box, Icon, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaYoutube, FaTwitter, FaFacebookF, FaTwitch, FaInstagram } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/ARK%20Survival%20Evolved.url.png?v=2020-09-25T07:48:16.062Z) 0% 0% /cover no-repeat scroll padding-box" min-height="600px" position="relative" padding="0 0 0 0">
			<Override slot="SectionContent" justify-content="space-between" background="background-image: linear-gradient( 108deg,  rgba(251,250,45,1) 0.5%, rgba(214,4,4,1) 29.8%, rgba(241,57,221,1) 59.9%, rgba(95,11,228,1) 84.2% );" />
			<Stack justify-content="space-around" margin="20px -16px -16px -16px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="normal 600 20px/1.5 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#fff">
						Not-steam.com
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-end" />
					<Box display="flex" justify-content="center" align-items="center">
						<Link
							href="#"
							width="20px"
							height="20px"
							display="block"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Buscar.png?v=2020-09-25T08:14:53.301Z) 0% 0% /contain no-repeat scroll padding-box"
							margin="0px 20px 0px 0px"
						/>
						<Link
							href="#"
							width="20px"
							height="20px"
							display="block"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/sacola.png?v=2020-09-25T08:15:37.466Z) 0% 0% /contain no-repeat scroll padding-box"
						/>
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<Box
				position="absolute"
				bottom="auto"
				height="230px"
				left="auto"
				right="138px"
				top="160px"
				width="320px"
				display="flex"
				flex-direction="column"
				align-items="center"
			>
				<Box
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Destiny_2_logo.png?v=2020-09-25T08:20:03.045Z) 0% 0% /cover no-repeat scroll padding-box"
					width="320px"
					height="170px"
					bottom="auto"
					left="auto"
					right="183px"
					top="202px"
					margin="0px 0px 20px 0px"
				/>
				<Box display="flex">
					<Link
						href="#"
						color="#fff"
						text-decoration-line="initial"
						font="20px sans-serif"
						display="flex"
						width="140px"
						height="40px"
						text-align="center"
						align-items="center"
						justify-content="center"
						border-width="1px"
						border-style="solid"
					>
						Learn more
					</Link>
					<Box
						width="40px"
						height="40px"
						border-width="1px"
						border-style="solid"
						border-color="#fff"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Icon category="io" icon={IoIosArrowForward} color="#fff" />
					</Box>
				</Box>
			</Box>
			<Box background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/linha.png?v=2020-09-25T08:44:59.242Z) 0% 50% /contain no-repeat scroll padding-box" />
		</Section>
		<Section border-color="--color-darkL1" background="--color-dark">
			<Stack color="#fff" justify-content="space-around" margin="-16px -16px 100px -16px">
				{"    "}
				<StackItem width="30%" display="flex">
					{"        "}
					<Text font="normal 600 20px/1.5 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block">
						Укажите игровую платформу:
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="41%" display="flex">
					<Box display="flex" align-items="center" margin="0px 15px 0px 0px">
						<Image
							width="15px"
							height="15px"
							src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/todos.png?v=2020-09-25T08:53:51.151Z"
							object-fit="fill"
							margin="0px 10px 0px 0px"
						/>
						<Link href="#" color="#3f4141" text-decoration-line="initial">
							Todos
						</Link>
					</Box>
					<Box display="flex" align-items="center" margin="0px 15px 0px 0px">
						<Image
							width="15px"
							height="15px"
							src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/playstation.png?v=2020-09-25T08:54:01.499Z"
							object-fit="fill"
							margin="0px 10px 0px 0px"
						/>
						<Link href="#" color="#3f4141" text-decoration-line="initial">
							Playstation
						</Link>
					</Box>
					<Box display="flex" align-items="center" margin="0px 15px 0px 0px">
						<Image
							width="15px"
							height="15px"
							src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/xbox.png?v=2020-09-25T08:54:01.272Z"
							object-fit="fill"
							margin="0px 10px 0px 0px"
						/>
						<Link href="#" color="#3f4141" text-decoration-line="initial">
							Xbox
						</Link>
					</Box>
					<Box display="flex" align-items="center">
						<Image
							width="15px"
							height="15px"
							src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/pc.png?v=2020-09-25T08:54:01.257Z"
							object-fit="fill"
							margin="0px 10px 0px 0px"
						/>
						<Link href="#" color="#3f4141" text-decoration-line="initial">
							Personal Computer
						</Link>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<StackItem display="flex" width="10%">
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
						margin="0px 20px 0px 0px"
					>
						<Icon category="io" icon={IoIosArrowBack} color="#3f4141" margin="0px 20p 0px 0px" />
					</Box>
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Icon category="io" icon={IoIosArrowForward} color="#3f4141" />
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<Box border-radius="5px" display="flex" align-items="center" justify-content="space-around">
				<Box
					width="230px"
					height="360px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Base.png?v=2020-09-25T09:38:36.711Z) 0% 0% /auto no-repeat scroll padding-box"
					display="flex"
					align-items="flex-end"
				>
					<Box
						color="#fff"
						width="100%"
						text-align="left"
						padding="0px 0px 0px 10px"
						height="50%"
						display="flex"
						flex-direction="column"
					>
						<Text text-align="left">
							The Last of Us:
							<br />
							{" "}Remastered
						</Text>
						<Text text-align="left" color="#3f4141" font="500 12px sans-serif">
							Adventura{" "}
							<br />
							Naughty Dog, 2014
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between">
							<Text>
								$ 99,00
							</Text>
							<Image
								width="15px"
								height="15px"
								src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/playstation.png?v=2020-09-25T08:54:01.499Z"
								object-fit="fill"
								margin="0px 10px 0px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width="230px"
					height="360px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Base2.png?v=2020-09-25T09:44:33.447Z) 0% 0% /auto no-repeat scroll padding-box"
					display="flex"
					align-items="flex-end"
				>
					<Box
						color="#fff"
						width="100%"
						text-align="left"
						padding="0px 0px 0px 10px"
						height="50%"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Text text-align="left">
							God of War
						</Text>
						<Text text-align="left" font="500 12px sans-serif" color="#3f4141">
							{" "}Adventura{" "}
							<br />
							Santa Monica Studio, 2018
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between">
							<Text>
								$ 199,00
							</Text>
							<Image
								width="15px"
								height="15px"
								src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/playstation.png?v=2020-09-25T08:54:01.499Z"
								object-fit="fill"
								margin="0px 10px 0px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width="230px"
					height="360px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Base3.png?v=2020-09-25T09:44:33.416Z) 0% 0% /auto no-repeat scroll padding-box"
					display="flex"
					align-items="flex-end"
				>
					<Box
						color="#fff"
						width="100%"
						text-align="left"
						padding="0px 0px 0px 10px"
						height="50%"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Text text-align="left">
							Need for Speed: Heat
						</Text>
						<Text text-align="left" font="500 12px sans-serif" color="#3f4141">
							Electronic Arts Inc, 2019
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" align-self="auto">
							<Text>
								$ 99,00
							</Text>
							<Image
								width="15px"
								height="15px"
								src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/playstation.png?v=2020-09-25T08:54:01.499Z"
								object-fit="fill"
								margin="0px 10px 0px 0px"
							/>
						</Box>
					</Box>
				</Box>
				<Box
					width="230px"
					height="360px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Base4.png?v=2020-09-25T09:44:33.413Z) 0% 0% /auto no-repeat scroll padding-box"
					display="flex"
					align-items="flex-end"
				>
					<Box
						color="#fff"
						width="100%"
						text-align="left"
						padding="0px 0px 0px 10px"
						height="50%"
						display="flex"
						flex-direction="column"
						justify-content="space-around"
					>
						<Text text-align="left">
							Assassin's Creed:
							<br />
							Odyssey{" "}
						</Text>
						<Text text-align="left" font="500 12px sans-serif" color="#3f4141">
							Adventura
							<br />
							Ubisoft, 2018
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between">
							<Text>
								$ 99,00
							</Text>
							<Image
								width="15px"
								height="15px"
								src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/playstation.png?v=2020-09-25T08:54:01.499Z"
								object-fit="fill"
								margin="0px 10px 0px 0px"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-dark" inner-width="100%">
			<Stack color="#fff" justify-content="space-around" margin="-16px -16px 50px -16px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Pre-order:
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="10%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
						margin="0px 20px 0px 0px"
					>
						<Icon category="io" icon={IoIosArrowBack} color="#3f4141" margin="0px 20p 0px 0px" />
					</Box>
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Icon category="io" icon={IoIosArrowForward} color="#3f4141" />
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box display="flex" overflow-x="hidden" width="100%">
				<Box width="710px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/sm.qT4XVyzEpNniMmBWvhFvQj.750.jpg?v=2020-09-25T10:01:34.986Z) 56% 0% /cover no-repeat scroll padding-box" margin="0px 10px 0px 0px" border-width="5px" />
				<Box
					width="710px"
					height="400px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/main.png?v=2020-09-25T09:57:29.628Z) 0% 0% /auto repeat scroll padding-box"
					min-width="710px"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-end"
					margin="0px 10px 0px 0px"
					border-width="5px"
				>
					<Box background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/Layer%205.png?v=2020-09-25T10:03:40.574Z) 0% 0% /auto no-repeat scroll padding-box" width="340px" height="100px" />
				</Box>
				<Box width="710px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/1-25.jpg?v=2020-09-25T10:00:04.596Z) 32% 0% /cover no-repeat scroll padding-box" margin="0px 0 0px 0px" border-width="5px" />
			</Box>
		</Section>
		<Section background="--color-dark">
			<Stack color="#fff" justify-content="space-around" margin="100px -16px 50px -16px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Choose category
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="10%">
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
						margin="0px 20px 0px 0px"
					>
						<Icon category="io" icon={IoIosArrowBack} color="#3f4141" margin="0px 20p 0px 0px" />
					</Box>
					<Box
						width="20px"
						height="20px"
						border-width="1px"
						border-style="solid"
						border-color="#3f4141"
						display="flex"
						align-items="center"
						justify-content="center"
					>
						<Icon category="io" icon={IoIosArrowForward} color="#3f4141" />
					</Box>
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Box display="flex" flex-direction="column" align-items="center" margin="0px 0px 100px 0px">
				<Box margin="0px 0px 20px 0px">
					<Image
						width="550px"
						height="270px"
						margin="0px 20px 0px 0px"
						src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/lara.png?v=2020-09-25T10:33:39.461Z"
						border-width="10px"
						opacity="0.8"
					/>
					<Image
						width="400px"
						height="270px"
						src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/fifa.png?v=2020-09-25T10:33:39.438Z"
						border-width="10px"
						opacity="0.8"
					/>
				</Box>
				<Box>
					<Image
						width="440px"
						height="270px"
						margin="0px 20px 0px 0px"
						src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/lol.png?v=2020-09-25T10:33:39.441Z"
						object-fit="cover"
						border-width="10px"
						opacity="0.8"
					/>
					<Image
						width="550px"
						height="270px"
						src="https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/tark.png?v=2020-09-25T10:33:39.447Z"
						border-width="10px"
						opacity="0.8"
					/>
				</Box>
			</Box>
			<Box background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f68e0a3aa47e10022c2711e/images/linha.png?v=2020-09-25T08:44:59.242Z) 0% 50% /contain no-repeat scroll padding-box" />
		</Section>
		<Section background="--color-dark">
			<Stack color="#fff" margin="100px -16px 100px -16px">
				{"    "}
				<StackItem width="30%" display="flex" align-items="center" justify-content="start">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"        "}
					<Text font="normal 600 20px/1.5 --fontFamily-sans" margin="0px 0px 10px 0px" display="inline-block" quarkly-title="TextNot-steam.com">
						Not-steam.com{"\n\n"}
					</Text>
					<Box display="flex">
						<Icon category="fa" icon={FaYoutube} margin="0px 20px 0px 0px" />
						<Icon category="fa" icon={FaTwitter} margin="0px 20px 0px 0px" />
						<Icon category="fa" icon={FaFacebookF} margin="0px 20px 0px 0px" />
						<Icon category="fa" icon={FaTwitch} margin="0px 20px 0px 0px" />
						<Icon category="fa" icon={FaInstagram} />
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex">
					{"        "}
					<Box margin="0px 50px 0px 0px">
						<Text font="normal 600 20px/1.5 --fontFamily-googleGildaDisplay" margin="0px 0px 0px 0px" display="inline-block" color="#a6123e">
							Category
						</Text>
						<Box color="#434255">
							<Text display="flex">
								Simuladores{" "}
							</Text>
							<Text display="flex">
								Esportes
							</Text>
							<Text display="flex">
								Estrategias{" "}
							</Text>
							<Text display="flex">
								{" "}Atiradores
							</Text>
							<Text display="flex">
								{" "}Corrida
							</Text>
						</Box>
					</Box>
					<Box margin="0px 50px 0px 0px">
						<Text font="normal 600 20px/1.5 --fontFamily-googleGildaDisplay" margin="0px 0px 0px 0px" display="inline-block" color="#6aa859">
							Category
						</Text>
						<Box color="#434255">
							<Text display="flex">
								Simuladores{" "}
							</Text>
							<Text display="flex">
								Esportes
							</Text>
							<Text display="flex">
								Estrategias{" "}
							</Text>
							<Text display="flex">
								{" "}Atiradores
							</Text>
							<Text display="flex">
								{" "}Corrida
							</Text>
						</Box>
					</Box>
					<Box margin="0px 50px 0px 0px">
						<Text font="normal 600 20px/1.5 --fontFamily-googleGildaDisplay" margin="0px 0px 0px 0px" display="inline-block" color="#f9e876">
							Category
						</Text>
						<Box color="#434255">
							<Text display="flex">
								Simuladores{" "}
							</Text>
							<Text display="flex">
								Esportes
							</Text>
							<Text display="flex">
								Estrategias{" "}
							</Text>
							<Text display="flex">
								{" "}Atiradores
							</Text>
							<Text display="flex">
								{" "}Corrida
							</Text>
						</Box>
					</Box>
					<Box margin="0px 50px 0px 0px">
						<Text font="normal 600 20px/1.5 --fontFamily-googleGildaDisplay" margin="0px 0px 0px 0px" display="inline-block" color="#43cbfd">
							Category
						</Text>
						<Box color="#434255">
							<Text display="flex">
								Simuladores{" "}
							</Text>
							<Text display="flex">
								Esportes
							</Text>
							<Text display="flex">
								Estrategias{" "}
							</Text>
							<Text display="flex">
								{" "}Atiradores
							</Text>
							<Text display="flex">
								{" "}Corrida
							</Text>
						</Box>
					</Box>
					<Box>
						<Text font="normal 600 20px/1.5 --fontFamily-googleGildaDisplay" margin="0px 0px 0px 0px" display="inline-block" color="#633fbb">
							Category
						</Text>
						<Box color="#434255">
							<Text display="flex">
								Simuladores{" "}
							</Text>
							<Text display="flex">
								Esportes
							</Text>
							<Text display="flex">
								Estrategias{" "}
							</Text>
							<Text display="flex">
								{" "}Atiradores
							</Text>
							<Text display="flex">
								{" "}Corrida
							</Text>
						</Box>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});