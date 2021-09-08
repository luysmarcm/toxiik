import React from 'react'

const AboutUs = () => {
    return (
			<div
				id="about"
				className="bg-black py-32 transition-all"
                style={{scrollbehavior: "smooth"}}
			>
				<div className="grid grid-cols-2">
					<div>
						<div
							className=" relative z-20 bg-cover bg-center h-auto transform -translate-y-8 -translate-x-8"
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
		);
}

export default AboutUs
