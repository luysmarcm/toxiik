import React from "react";

const Products = () => {
	return (
		<section id="products" class="relative w-auto py-10 overflow-hidden">
			<div className="text-primary font-mont font-extrabold py-16 text-center text-4xl lg:text-8x1 xl:text-9x1">
				OUR PRODUCTS
			</div>
			<div className="grid lg:grid-cols-4 xl:grid-cols-4 xl:px-24">
				<div className="flex flex-col col-span-4 lg:col-span-2 lg:row-span-2 lg:p-14">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex flex-row p-12 -space-x-9 lg:-space-x-0 md:flex-row	 lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:object-scale-down lg:h-auto	"
								src="./images/p4.webp"
								alt="cable"
								max-width="100%"
								width="60%"
								height="60%"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-2xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-3xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-6xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-3xl	bg-fondoT bg-cover lg:text-5xl xl:text-6xl ">
									GING
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col col-span-4  lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12 -space-x-9 lg:-space-x-0 md:flex-row md:items-center lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
								src="./images/p7.webp"
								alt="cable"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-2xl xl:text-2xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-3xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-4xl ">
									DATA
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-3xl	bg-fondoT bg-cover lg:text-5xl xl:text-4xl ">
									CABLE
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12 -space-x-9  lg:-space-x-0 md:flex-row lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
								src="./images/p8.webp"
								alt="cable"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-2xl xl:text-2xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-3xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-4xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-3xl	bg-fondoT bg-cover lg:text-5xl xl:text-4xl ">
									GER
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12 -space-x-9 lg:-space-x-0 md:flex-row lg:flex-row items-center lg:items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
								src="./images/pr2.webp"
								alt="cargador"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-2xl xl:text-2xl">
									TRAVEL
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-3xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-4xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-3xl	bg-fondoT bg-cover lg:text-5xl xl:text-4xl ">
									GER
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4">
						<div className="flex  p-12 -space-x-9 lg:-space-x-0 md:flex-row lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
								src="./images/Pr1.webp"
								alt="cargador"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-base xl:text-2xl">
									PORTABLE
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-3xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-4xl ">
									DUAL
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-3xl	bg-fondoT bg-cover lg:text-5xl xl:text-4xl ">
									USB
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
