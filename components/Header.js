import React from "react";

export const Header = () => {
	return (
		<header id="home" className="bg-black">
			<div className="z-10 bg-banner lg:bg-cover bg-center bg-no-repeat lg:h-full ">
				<div className=" z-20 bg-toxiik bg-no-repeat bg-auto bg-center  lg:-translate-y-16 lg:bg-top lg:pb-10 lg:pt-48">
					<div
						className=" relative z-30 bg-monta bg-cover h-12 translate-y-44 bg-center lg:h-auto py-72 lg:translate-y-1 "
						style={{ backgroundImage: "url('./images/monta.webp')" }}
					>
						<div class="absolute z-40 inset-x-0 bottom-0  bg-letra bg-auto bg-no-repeat bg-center h-3 md:h-5	-translate-y-48 lg:h-7 lg:-translate-y-24"></div>
					</div>
				</div>
			</div>
		</header>
	);
};
