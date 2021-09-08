import React from 'react'
import NavBar from './NavBar';

export const Header = () => {
    return (
			<div id="home" className="bg-black">
				<div
					className="z-10 bg-banner bg-cover bg-center bg-no-repeat"
					// style={{
					// 	backgroundImage: "url('./images/banner.svg')",
					// }}
				>
					<div className=" z-20 bg-toxiik bg-no-repeat bg-auto bg-top pb-10 pt-48">
						<div className=" relative z-30 bg-monta bg-cover bg-center h-auto py-72 "></div>
					</div>
				</div>
			</div>
		);
}
