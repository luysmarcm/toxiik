import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
			<div>
				<div class="bg-white">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<img className="" src="./images/toxiikN.svg" alt="" width="100px" />
						<p class="text-gray-500 text-sm text-center sm:text-left">
							TERMS OF USE - PRIVACY POLICY
						</p>
						<span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
							©{today.getFullYear()} TOXIIK - ALL RIGTHS RESERVER
						</span>
					</div>
				</div>
			</div>
		);
}

export default Footer
