import React from "react";

const ToxiikUni = () => {
	return (
		<section class="relative w-auto">
			<div
				// class="flex flex-col py-28 px-28 lg:flex-row items-center gap-12"
				className="flex flex-col p-8 lg:flex-row items-center gap-12 lg:p-28 lg:h-3/4 xl:p-28"
			>
				<div className="flex flex-1 flex-col items-center lg:items-start lg:w-1/2">
					<div
						className="
							font-bold 
							bg-clip-text
							text-transparent
							bg-fondoT
							bg-cover 
							bg-left 
							text-bookmark-blue 
							text-6xl 
							md:text-4 
							lg:text-9xl 
							text-center 
							lg:text-left 
							mb-6
							lg:h-3/4
							"
					>
						TOXIIK
					</div>
					<div
						className="
							font-bold 
							bg-clip-text
							text-transparent
							bg-fondoT
							bg-cover 
							
							text-bookmark-blue 
							text-6xl 
							md:text-4 
							lg:text-9xl
							bg-left-top

							text-center 
							lg:text-left 
							mb-6"
					>
						UNIVERSE
					</div>
					<div
						// class="bg-clip-text text-transparent bg-fondoT bg-cover text-9xl font-normal lg:text-left mb-6"
						className=" 
							bg-clip-text text-transparent 
							bg-fondoT 
							bg-left-top
							text-6xl 
							text-center 
							lg:text-left
							lg:text-9xl 
							mb-6"
					></div>

					<div className="text-black font-mont font-normal text-2xl text-center lg:text-left mb-6 lx:text-1xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						sollicitudin risus sed libero facilisis, suscipit euismod metus
						pretium.
					</div>
				</div>

				<div className="flex justify-center flex-1 ">
					<img
						className="sm:w-8/12 sm:h-3/5 md:w-8/12 md:h-3/5"
						src="./images/cargador1.png"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default ToxiikUni;
