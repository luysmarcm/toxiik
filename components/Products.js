import React from "react";

const Products = () => {
    return (
			<div id="products" className="transition">
				<div className="grid grid-cols-4">
					<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-2">
						<div className="flex-1 aspect-w-4 aspect-h-3 lg:aspect-h-4">
							<img className="object-cover" src="./images/gris.png" alt="" />
						</div>
					</div>

					<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1">
						<div className="flex-1 aspect-w-4 aspect-h-3 ">
							<img className="object-cover" src="./images/naranja.png" alt="" />
						</div>
					</div>

					<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1">
						<div className="flex-1 aspect-w-4 aspect-h-3 ">
							<img className="object-cover" src="./images/negro.png" alt="" />
						</div>
					</div>
					<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 ">
						<div className="flex-1 aspect-w-4 aspect-h-3 ">
							<img className="object-cover " src="./images/negro.png" alt="" />
						</div>
					</div>
					<div className="flex flex-col col-span-4 md:col-span-2 xl:row-span-1 xl:col-span-1 ">
						<div className="flex-1 aspect-w-4 aspect-h-3 ">
							<img class="object-cover" src="./images/naranja.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		);
}

export default Products
