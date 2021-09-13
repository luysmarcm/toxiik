import React from 'react'

const AboutUs = () => {
	

	
    return (
			<section id="about" class="relative bg-black lg:py-32">
				<div
					// class="flex flex-col py-28 px-28 lg:flex-row items-center gap-12"
					className="flex flex-col-reverse p-10 lg:flex-row items-center gap-12 sm:gap-10 lg:p-8"
				>
					<div class="flex space-x-4 justify-center flex-1 ">
						<div className="lg:-translate-x-28">
							<div
								className=" relative z-20 bg-cover bg-center h-auto items-center  md:flex lg:transform lg:-translate-y-10 "
								style={{
									backgroundImage: "url('./images/cable10.svg')",
								}}
							>
								<figure className=" z-0 md:flex rounded-xl p-8 md:p-0">
									<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
										<h1 className="text-white  font-mont text-5xl -translate-x-28 font-extrabold lg:text-9xl lg:-translate-x-48">
											FAST
										</h1>
										<h1 className="text-white font-mont font-extrabold text-5xl lg:text-9xl ">
											FAST
										</h1>
										<h1 className="text-white translate-x-16 font-mont text-4xl font-normal lg:text-6xl">
											CHARGING
										</h1>
									</div>
								</figure>
							</div>
						</div>
					</div>
					<div
						//class="flex flex-1 flex-col items-center lg:items-start"
						className="flex flex-1 flex-col items-center p-4 lg:items-start"
					>
						<div className="text-primary font-mont font-extrabold py-8 text-center text-4xl lg:text-xxl lg:text-left">
							ABOUT US
						</div>

						<div className="text-white font-mont font-normal text-2xl text-center lg:text-left mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							sollicitudin risus sed libero facilisis, suscipit euismod metus
							pretium.
						</div>
					</div>
				</div>
			</section>
			// <div
			// 	id="about"
			// 	className="bg-black py-32 transition-all"
			// 	style={{ scrollbehavior: "smooth" }}
			// >
			// 	<div className="grid grid-cols-2">
			// 		<div>
			// 			<div
			// 				className=" relative z-20 bg-cover bg-center h-auto transform -translate-y-8 -translate-x-8 md:flex"
			// 				style={{
			// 					backgroundImage: "url('./images/cable10.svg')",
			// 				}}
			// 			>
			// 				<figure className=" md:flex rounded-xl z-10 p-8 md:p-0">
			// 					<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
			// 						<h1 className="text-white -translate-x-36 font-mont font-extrabold text-8xl">
			// 							FAST
			// 						</h1>
			// 						<h1 className="text-white font-mont font-extrabold text-8xl">
			// 							FAST
			// 						</h1>
			// 						<h1 className="text-white translate-x-16 font-mont font-normal text-5xl">
			// 							CHARGING
			// 						</h1>
			// 					</div>
			// 				</figure>
			// 			</div>
			// 		</div>
			// 		<div>
			// 			<figure className=" md:flex bg-black bg-opacity-50 rounded-xl p-8 md:p-0">
			// 				<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
			// 					<blockquote>
			// 						<h1 className="text-primary font-mont font-extrabold text-xxl">
			// 							ABOUT US
			// 						</h1>
			// 					</blockquote>
			// 					<figcaption className="font-medium">
			// 						<div className="text-white font-mont font-normal text-justify text-base">
			// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			// 							Phasellus sollicitudin risus sed libero facilisis, suscipit
			// 							euismod metus pretium. Nam laoreet, orci sed pellentesque
			// 							interdum, mauris sapien luctus nunc, id consectetur dolor
			// 							tortor sollicitudin ipsum.
			// 						</div>
			// 					</figcaption>
			// 				</div>
			// 			</figure>
			// 		</div>
			// 	</div>
			// </div>
		);
}

export default AboutUs
