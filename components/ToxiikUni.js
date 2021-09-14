import React from "react";

const ToxiikUni = () => {
	return (
		<section class="relative w-auto">
			<div className="flex flex-col p-2 lg:flex-row items-center gap-12 lg:p-28 lg:h-3/4 xl:p-28">
				<div className="flex flex-1 flex-col items-center lg:items-start lg:h-1/5 xl:items-start xl:w-1/2">
					<div
						className="flex flex-col font-extrabold bg-clip-text -space-y-2 bg-left-bottom lg:bg-left-top  text-transparent bg-fondoT bg-cover 
							text-6xl md:text-4 lg:text-7xl text-center lg:text-left mb-6 lg:h-1/5 xl:text-9xl xl:h-3/4"
					>
						TOXIIK UNIVERSE
					</div>
					{/* <div
						className="font-bold bg-clip-text text-transparent bg-fondoT bg-cover text-bookmark-blue text-6xl 
							md:text-4 lg:text-7xl bg-left-top text-center lg:text-left lg:h-1/5
							xl:text-9xl xl:h-3/4 mb-6"
					></div> */}
					{/* <div
						className="bg-clip-text text-transparent bg-fondoT bg-left-top text-6xl text-center 
							lg:text-left lg:text-9xl mb-6"
					></div> */}

					<div className="text-black font-mont font-normal text-base text-center lg:text-left mb-6 lg:text-base xl:text-base  ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						sollicitudin risus sed libero facilisis, suscipit euismod metus
						pretium.
					</div>
				</div>

				<div className="flex justify-center flex-1 ">
					<img
						className="w-8/12 sm:h-3/5 md:w-8/12 md:h-3/5"
						src="./images/cargador1.png"
						alt="Cargador"
					/>
				</div>
			</div>
		</section>
	);
};

export default ToxiikUni;
