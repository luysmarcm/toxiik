import React from "react";

const NavBar = () => {
	return (
		<div className="w-full">
			<div className="fixed z-50 w-full bg-black top-0 text-white body-font flex flex-wrap items-center justify-between px-2 py-3 shadow-lg">
				{/* <header class="text-white body-font bg-black bg-fixed"> */}
				<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a>
						<img
							//className="w-10 h-1"
							viewBox="0 0 24 24"
							src="./images/tox.svg"
							alt="logo"
							width="31"
						/>
					</a>
					<nav class="md:ml-auto flex flex-wrap items-center text-base font-mono font-extrabold cursor-pointer justify-center">
						<a href="#home" class="mr-5 hover:text-primary">
							HOME
						</a>
						<a href="#about" class="mr-5 hover:text-primary">
							ABOUT US
						</a>
						<a href="#products" class="mr-5 hover:text-primary">
							PRODUCTS
						</a>
					</nav>
				</div>
				{/* </header> */}
			</div>
		</div>

		// <div>
		// 	<header class="text-white body-font bg-black bg-fixed">
		// 		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		// 			<a>
		// 				<img
		// 					//className="w-10 h-1"
		// 					viewBox="0 0 24 24"
		// 					src="./images/tox.svg"
		// 					alt="logo"
		// 					width="30"
		// 				/>
		// 			</a>
		// 			<nav class="md:ml-auto flex flex-wrap items-center text-base font-mono font-extrabold cursor-pointer justify-center">
		// 				<a class="mr-5 hover:text-primary">HOME</a>
		// 				<a class="mr-5 hover:text-primary">ABOUT US</a>
		// 				<a class="mr-5 hover:text-primary">PRODUCTS</a>
		// 			</nav>
		// 		</div>
		// 	</header>
		// </div>
	);
};

export default NavBar;
