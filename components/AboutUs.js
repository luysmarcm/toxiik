import React from 'react'

const AboutUs = () => {
	

	
    return (
			<section id="about" class="relative bg-black py-32 lg:py-32">
				<div
					
					className="flex flex-col-reverse  lg:flex-row items-center gap-12 sm:gap-10 lg:p-8"
				>
					<div class="flex space-x-4 justify-center flex-1 ">
						<div className="lg:-translate-x-28">
							<div
								className=" relative z-20 bg-cover bg-center h-auto items-center  md:flex lg:transform lg:-translate-y-10 "
								style={{
									backgroundImage: "url('./images/cable10.svg')",
								}}
							>
								<figure className=" z-0 md:flex rounded-xl md:p-0">
									<div className="pt-6 md:p-20 text-center md:text-left space-y-4">
										<h1 className="text-white  font-mont text-4xl -translate-x-16 font-extrabold lg:text-9xl lg:-translate-x-48">
											FAST
										</h1>
										<h1 className="text-white font-mont font-extrabold text-4xl lg:text-9xl ">
											FAST
										</h1>
										<h1 className="text-white translate-x-10 font-mont text-3xl font-normal lg:text-6xl">
											CHARGING
										</h1>
									</div>
								</figure>
							</div>
						</div>
					</div>
					<div
						className="flex flex-1 flex-col items-center p-4 lg:items-start"
					>
						<div className="text-primary font-mont font-extrabold py-8 text-center text-5xl lg:text-4xl lg:text-left">
							ABOUT US
						</div>

						<div className="text-white font-mont font-normal text-base text-center lg:text-left mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							sollicitudin risus sed libero facilisis, suscipit euismod metus
							pretium.
						</div>
					</div>
				</div>
			</section>
			
		);
}

export default AboutUs
