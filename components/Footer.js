import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
			
				<footer class=" bg-black p-8	">
					<div className="x-auto py-4 px-5 flex flex-wrap flex-col items-center lg:items-baseline">
						<img src="./images/toxiikNa.svg" alt="" width="120px" />
					</div>

					<div class=" mx-auto px-5 flex flex-wrap flex-col sm:flex-row">
						<div class="text-white text-sm text-center sm:text-left">
							TERMS OF USE - PRIVACY POLICY
						</div>
						<span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">
							©{today.getFullYear()} TOXIIK - ALL RIGTHS RESERVER
						</span>
					</div>
				</footer>
			
		);
}

export default Footer
