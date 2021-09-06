import Head from "next/head";

export default function Home() {
	return (
		<div className="bg-black bg-fixed">
			<Head>
				<title>Toxiik</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className="z-10 bg-banner bg-cover bg-center"
				// style={{
				// 	backgroundImage: "url('./images/banner.svg')",
				// }}
			>
				<div className=" z-20 bg-toxiik bg-no-repeat bg-auto bg-center pb-10 pt-48">
					<div className=" relative z-30 bg-monta bg-cover bg-center h-auto py-72"></div>
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-2">
					<div>
						<div
							className=" relative z-20 bg-cover bg-center h-auto transform -translate-y-6"
							style={{
								backgroundImage: "url('./images/cable.svg')",
							}}
						>
							<figure className=" md:flex rounded-xl z-10 p-8 md:p-0">
								<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
									<h1 className="text-white -translate-x-36 font-mont font-extrabold text-8xl">
										FAST
									</h1>
									<h1 className="text-white font-mont font-extrabold text-8xl">
										FAST
									</h1>
									<h1 className="text-white translate-x-16 font-mont font-normal text-5xl">
										CHARGING
									</h1>
								</div>
							</figure>
						</div>
					</div>
					<div>
						<figure className=" md:flex bg-black bg-opacity-50 rounded-xl p-8 md:p-0">
							<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
								<blockquote>
									<h1 className="text-primary font-mont font-extrabold text-xxl">
										ABOUT US
									</h1>
								</blockquote>
								<figcaption className="font-medium">
									<div className="text-white font-mont font-normal text-justify text-base">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Phasellus sollicitudin risus sed libero facilisis, suscipit
										euismod metus pretium. Nam laoreet, orci sed pellentesque
										interdum, mauris sapien luctus nunc, id consectetur dolor
										tortor sollicitudin ipsum.
									</div>
								</figcaption>
							</div>
						</figure>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="max-w-screen-xl mx-auto xl:px-0">
					<div className="grid grid-cols-4 gap-2 p-4">
						<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-2 rounded-lg">
							<div className="flex-1 aspect-w-4 aspect-h-3 lg:aspect-h-4 shadow-lg">
								<img
									className="object-cover rounded-lg shadow-lg "
									src="./images/mano.svg"
									alt=""
								/>
								<div className="">
									<h1 className="text-white font-mont text-left font-extrabold text-6xl">
										POWER
									</h1>
									<h1 className="text-white text-left font-mont font-normal text-4xl">
										JUST
									</h1>
									<h1 className="text-white font-mont text-left font-normal text-4xl">
										FASTER
									</h1>
								</div>
							</div>
						</div>

						<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 rounded-lg">
							<div className="flex-1 aspect-w-4 aspect-h-3 shadow-lg">
								<img
									className="object-cover rounded-lg shadow-lg"
									src="./images/cargador1.jpg"
									alt=""
								/>
							</div>
						</div>

						<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 rounded-lg">
							<div className="flex-1 aspect-w-4 aspect-h-3 shadow-lg">
								<img
									className="object-cover  rounded-lg shadow-lg"
									src="./images/cargador2.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 rounded-lg">
							<div className="flex-1 aspect-w-4 aspect-h-3 shadow-lg">
								<img
									className="object-cover rounded-lg 	shadow-lg"
									src="./images/cable2.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 rounded-lg">
							<div className="flex-1 aspect-w-4 aspect-h-3 shadow-lg">
								<img
									class=" rounded-lg shadow-lg"
									src="./images/cable3.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container flex-auto bg-white">
				<div className="grid grid-cols-2">
					{/* <div
						flex
						flex-col
						col-span-4
						md:col-span-2
						xl:row-span-1
						xl:col-span-1
						rounded-lg
					></div> */}
					<div className="p-14 flex flex-col md:col-auto xl:col-auto object-center translate-y-44">
						<h1 className=" text-9xl font-bold bg-clip-text text-transparent bg-fondoT bg-cover bg-left from-black via-red-600 to-yellow-700">
							{" "}
							TOXIIK
						</h1>
						{/* <h1 className="text-black font-mont text-left font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-br from-black via-red-600 to-yellow-700">
									TOXIIK
								</h1> */}
						<h1 className="bg-clip-text text-transparent bg-fondoT bg-cover text-9xl font-normal">
							UNIVERSE
						</h1>
						<div className="text-black font-mont font-normal text-justify text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							sollicitudin risus sed libero facilisis, suscipit euismod metus
							pretium.
						</div>
					</div>

					<div class="flex flex-wrap justify-center md:col-auto xl:col-auto">
						<img
							className="max-w-full h-auto align-middle"
							src="./images/cargador1.png"
							alt=""
							width="400px"
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="grid grid-cols-4 gap-2 p-4">
					<div className="flex-1 aspect-w-4 aspect-h-3 lg:aspect-h-4">
						<div className="">
							<h1 className="text-white font-mont text-left font-extrabold text-6xl">
								POWER
							</h1>
							<h1 className="text-white text-left font-mont font-normal text-4xl">
								JUST
							</h1>
							<h1 className="text-white font-mont text-left font-normal text-4xl">
								FASTER
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
