import React from "react";

const Products = () => {
	return (
		<section id="products" class="relative w-auto py-10">
			<div className="text-primary font-mont font-extrabold py-16 text-center text-4xl lg:text-8x1">
				OUR PRODUCTS
				
			</div>
			<div className="w-scream grid grid-cols-4 ">
				<div className="flex flex-col col-span-4 md:col-span-2 lg:row-span-2 lg:p-14">
					<div className="flex-1 aspect-w-4 aspect-h-3 lg:aspect-h-4">
						{/* <img className="object-cover" src="./images/gris.png" alt="" /> */}
						<div className="flex flex-col p-12 lg:flex-row items-center">
							<img
								className="object-cover h-80 lg:h-full"
								src="./images/cargadorp.jpeg"
								alt=""
								//width="200px"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-5xl bg-fondoT bg-cover bg-left lg:text-8xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-5xl	bg-fondoT bg-cover lg:text-8xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1">
					<div className="flex-1 aspect-w-4 aspect-h-3 ">
						<div className="flex flex-col p-5 lg:flex-row items-center">
							<img
								className="object-cover h-80 lg:h-80"
								src="./images/7.png"
								alt=""
								//width="100px"
							/>
							<div className="flex-col -space-y-2  p-10 lg:p-0">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent	bg-fondoT bg-cover bg-left text-5xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent	bg-fondoT bg-cover text-5xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1">
					<div className="flex-1 aspect-w-4 aspect-h-3 ">
						<div className="flex flex-col p-5 lg:flex-row items-center">
							<img
								className="object-cover h-80 lg:h-80"
								src="./images/cargadorp.jpeg"
								alt=""
								//width="100px"
							/>
							<div className="flex-col -space-y-2  p-10 lg:p-0">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent	bg-fondoT bg-cover bg-left text-5xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent	bg-fondoT bg-cover text-5xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 ">
					<div className="flex-1 aspect-w-4 aspect-h-3 ">
						<div className="flex flex-col p-5 lg:flex-row items-center">
							<img
								className="object-cover h-80 lg:h-80"
								src="./images/cargadorp.jpeg"
								alt=""
								//width="100px"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent	bg-fondoT bg-cover bg-left text-5xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent	bg-fondoT bg-cover text-5xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 ">
					<div className="flex-1 aspect-w-2 aspect-h-1 ">
						<div className="flex flex-col p-5 lg:flex-row items-center">
							<img
								className="object-cover h-80 lg:h-80"
								src="./images/cargadorp.jpeg"
								alt=""
								//width="100px"
							/>
							<div className="flex-col -space-y-2  p-10 lg:p-0">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent bg-fondoT bg-cover bg-left text-5xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent	bg-fondoT bg-cover text-5xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
