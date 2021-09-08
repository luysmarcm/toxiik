import React from 'react'

const ToxiikUni = () => {
    return (
			<div className="flex rounded-lg h-full bg-gray-100 p-8 py-32 px-32 flex-col">
				<div className="flex items-center mb-3">
					<div className="text-9xl font-bold bg-clip-text text-transparent bg-fondoT bg-cover bg-left">
						{" "}
						TOXIIK
						<div className="bg-clip-text text-transparent bg-fondoT bg-cover text-9xl font-normal">
							UNIVERSE
						</div>
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
							width="500px"
						/>
					</div>
				</div>
			</div>
		);
}

export default ToxiikUni
