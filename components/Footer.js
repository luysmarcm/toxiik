import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
			<div>
				<div class=" bg-white p-14">
					<div className="x-auto py-4 px-5 flex flex-wrap flex-col items-center lg:items-baseline">
						<img src="./images/toxiikN.svg" alt="" width="100px" />
					</div>

					<div class=" mx-auto px-5 flex flex-wrap flex-col sm:flex-row">
						<div class="text-gray-500 text-sm text-center sm:text-left">
							TERMS OF USE - PRIVACY POLICY
						</div>
						<span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
							©{today.getFullYear()} TOXIIK - ALL RIGTHS RESERVER
						</span>
					</div>
				</div>
			</div>
		);
}

export default Footer
