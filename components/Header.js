import React from 'react'


export const Header = () => {
    return (
			<div id="home" className="bg-black">
				<div
					className="z-10 bg-banner bg-cover bg-center bg-no-repeat "
					// style={{
					// 	backgroundImage: "url('./images/banner.svg')",
					// }}
				>
					<div className=" z-20 bg-toxiik bg-no-repeat bg-auto bg-center transform -translate-y-16 lg:bg-top lg:pb-10 lg:pt-48"
					>
						<div className=" relative z-30 bg-monta bg-cover translate-y-16 bg-center h-auto py-72 lg:translate-y-1 ">
							{/* <div className="text-xl text-black ">
								Prueba
							</div> */}
						</div>
					</div>
				</div>
			</div>
		);
}
