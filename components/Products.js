import React from "react";

const Products = () => {
	return (
		<section id="products" class="relative w-auto py-10">
			<div className="text-primary font-mont font-extrabold py-16 text-center text-4xl lg:text-8x1 xl:text-9x1">
				OUR PRODUCTS
			</div>
			<div className="grid lg:grid-cols-4 xl:grid-cols-4 ">
				<div className="flex flex-col col-span-4 lg:col-span-2 lg:row-span-2 lg:p-14">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex flex-row p-12 md:flex-row	 lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-4/5 xl:h-full"
								src="./images/cargadorp.jpeg"
								alt=""
								//width="200px"
							/>
							<div className="flex-col -space-y-2 p-10 lg:p-0 ">
								<div className="text-black font-mont font-normal text-3xl lx:text-1xl">
									FAST
								</div>

								<div className="font-mont font-extrabold bg-clip-text text-transparent text-5xl bg-fondoT bg-cover bg-left lg:text-5xl xl:text-7xl ">
									CHAR
								</div>
								<div className="text-black font-mont font-extrabold bg-left-top bg-clip-text text-transparent text-5xl	bg-fondoT bg-cover lg:text-5xl xl:text-7xl ">
									GER
								</div>
								{/* <div className="text-black font-mont font-extrabold text-2xl lx:text-1xl">
									travel
								</div> */}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col col-span-4  lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12 md:flex-row md:items-center lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
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
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12  md:flex-row lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
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
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4 ">
						<div className="flex p-12 md:flex-row lg:flex-row items-center lg:items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
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
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col col-span-4 lg:col-span-2  xl:col-span-1">
					<div className="flex justify-center aspect-w-4 aspect-h-3 lg:aspect-h-4">
						<div className="flex  p-12 md:flex-row lg:flex-row items-center">
							<img
								className="object-cover h-80 md:h-auto lg:h-80"
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
