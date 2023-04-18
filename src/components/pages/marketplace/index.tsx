const Marketplace = () => {
	return <section>
		<div className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
			<div className="container px-4 mx-auto">
				<div className="pb-9 text-center border-b border-black border-opacity-5">
					<div className="relative">
						<h2 className="mb-5 md:mb-0 text-5xl xl:text-10xl leading-normal font-heading font-medium text-center">Marketplace 🏛️</h2>
						<span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">449 products found</span>
					</div>
				</div>
				<div className="flex flex-wrap py-5 mb-14 xl:mb-16 border-b border-black border-opacity-10">
					<div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
						<a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href="#">
							<span>Producent</span>
							<svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
							</svg>
						</a>
					</div>
					<div className="relative w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
						<a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href="#">
							<span>Bestseller</span>
							<svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
							</svg>
						</a>
						<div className="relative z-50 -top-16 transform -translate-y-1">
							<div className="absolute py-3 px-5 bg-blueGray-100 w-full border border-blue-400 rounded-3xl">
								<a className="flex items-center justify-between py-1 px-7 leading-7 font-heading font-medium underline bg-white rounded-xl" href="#">
									<span>Best seller</span>
									<img src="uinel-assets/elements/ecommerce-product-list/check-black.svg" alt=""/>
								</a>
								<a className="flex items-center justify-between py-1 px-7 leading-7 font-heading font-medium rounded-xl" href="#">Unpopular</a><a className="flex items-center justify-between py-1 px-7 leading-7 font-heading font-medium rounded-xl" href="#">All</a>
							</div>
						</div>
					</div>
					<div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
						<a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href="#">
							<span>Sale</span>
							<svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
							</svg>
						</a>
					</div>
					<div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
						<a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href="#">
							<span>Materials</span>
							<svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
							</svg>
						</a>
					</div>
					<div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
						<a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href="#">
							<span>Delivery</span>
							<svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
							</svg>
						</a>
					</div>
				</div>
				<div className="sm:flex sm:flex-wrap mb-24">
					<div className="sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12">
						<div className="mb-10 xl:mb-16">
							<h2 className="mb-6 text-3xl leading-9 font-heading font-medium">Category</h2>
							<a className="block py-5 px-10 mb-3 bg-white font-heading font-medium rounded-3xl" href="#">
								Machine Learning
								</a>
							<a className="block py-5 px-10 mb-3 bg-white bg-opacity-50 font-heading font-medium rounded-3xl" href="#">
							Data Cleaning
								</a>
							<a className="flex items-center justify-between py-5 px-10 mb-3 bg-white bg-opacity-50 font-heading font-medium rounded-3xl" href="#">
								<span>Natural Language Processing</span>
							</a>
							<a className="flex items-center justify-between py-5 px-10 mb-3 bg-white bg-opacity-50 font-heading font-medium rounded-3xl" href="#">
								<span>Data Transformations</span>

							</a>
							<a className="flex items-center justify-between py-5 px-10 mb-3 bg-white bg-opacity-50 font-heading font-medium rounded-3xl" href="#">
								<span>Data Enrichment</span>
								<span className="text-sm text-gray-300">240</span>
							</a>
							<div className="sm:mx-auto sm:max-w-max"><a className="block py-3 px-10 w-full text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">All</a></div>
						</div>
						<div className="mb-10 xl:mb-16">
							<h2 className="mb-10 text-3xl leading-9 font-heading font-medium">Price</h2>
							<div className="relative mb-28 mx-auto w-52 h-1 bg-white">
								<div className="relative left-0 max-w-max">
									<a className="absolute -top-2 -left-4 transform -translate-y-px w-6 h-6 bg-white rounded-full shadow-5xl" href="#"></a>
									<div className="absolute -left-7 top-10 max-w-max">
										<svg className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z" fill="white"></path>
										</svg>
										<div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">$10</div>
									</div>
								</div>
								<div className="relative left-20 max-w-max">
									<a className="absolute -top-2 left-0 transform -translate-y-px w-6 h-6 bg-blue-500 rounded-full shadow-5xl" href="#">
										<img className="absolute -left-20 top-2 max-w-max" src="uinel-assets/elements/ecommerce-product-list/toggle-bg-blue.svg" alt=""/>
									</a>
									<div className="absolute -left-6 transform translate-x-2 top-10 max-w-max">
										<svg className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z" fill="white"></path>
										</svg>
										<div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">$99</div>
									</div>
								</div>
							</div>
							{/* <div style="height: 2px; background-image: url('uinel-assets/elements/ecommerce-product-list/dotted-line.svg')"></div> */}
						</div>
						<div className="py-10 px-11 mb-10 xl:mb-16 bg-purple-500 rounded-3xl">
							<h2 className="mb-5 text-3xl leading-9 text-white font-heading font-medium">Size</h2>
							<div className="sm:flex sm:flex-wrap">
								<div className="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 2xl:w-1/3"><a className="block py-5 px-4 text-center font-heading font-medium bg-white hover:bg-gray-50 rounded-3xl" href="#">32GB</a></div>
								<div className="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 2xl:w-1/3"><a className="block py-5 px-4 text-center font-heading font-medium bg-white hover:bg-gray-50 rounded-3xl" href="#">64GB</a></div>
								<div className="p-1 w-full md:w-1/3 lg:w-full 2xl:w-1/3"><a className="block py-5 px-4 text-white text-center font-heading font-medium bg-indigo-400 hover:bg-indigo-500 rounded-3xl" href="#">128GB</a></div>
							</div>
						</div>
						<div className="mb-10 xl:mb-11">
							<h2 className="mb-6 text-3xl leading-9 font-heading font-medium">Location</h2>
							<a className="flex items-center py-4 px-10 mb-3 leading-8 font-heading font-medium bg-white rounded-3xl" href="#">
								<span className="mr-6">
									<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="27" height="27" rx="8" fill="#28E172"></rect>
										<path d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z" fill="white"></path>
									</svg>
								</span>
								<span>Europe</span>
							</a>
							<a className="flex items-center py-4 px-10 leading-8 font-heading font-medium bg-white bg-opacity-50 rounded-3xl" href="#">
								<span className="mr-6">
									<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="26" height="26" rx="5.5" fill="white" stroke="#DBDDE1"></rect></svg>
								</span>
								<span>United States</span>
							</a>
						</div>
						<div>
							<img className="mb-3 -ml-4" src="uinel-assets/elements/ecommerce-product-list/percent.svg" alt=""/>
								<p className="text-lg text-darkBlueGray-400 sm:max-w-xs sm:pr-16">The nulla commodo, commodo eros.</p>
						</div>
					</div>
					<div className="w-full sm:w-1/2 lg:w-8/12 xl:w-9/12 sm:pl-7">
						<div className="flex flex-wrap -mx-2">
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/iphone-12-pro.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Apple iPhone 12 Pro (128GB) Silver</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>544.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/macbook-pro-17.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">MacBook Pro 17’’</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>2090.59</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/smartwatch-green.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Smartwatch Uistore Homme Watch 19</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>120.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/macbook-pro-15.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">MacBook Pro 15’’ new</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>1780.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/headphones-blacksaint.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Headphones Blacksaint 3</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>42.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/smartphone.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Wiko Y51 1GB/16GB 5.45’’ Syrena Lol</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>376.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 mb-16 xl:mb-0 px-2">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/xiaomi-camera.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Kamera Xiaomi Mi Home Security Camera 2K 360°</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>37.90</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 mb-16 lg:mb-0 px-2">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/xiaomi-camera2.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Kamera Xiaomi Mi Home Security Camera 2K Pro 360°</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>29.59</span>
								</p>
							</div>
							<div className="w-full lg:w-1/2 xl:w-1/3 px-2">
								<div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
									<a className="block mx-auto max-w-max" href="#">
										<img className="h-40 object-cover" src="uinel-assets/images/ecommerce-product-list/smartwatch-blue.png" alt=""/>
									</a>
								</div>
								<a href="#">
									<p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">Xui Smartwatch Pr</p>
								</a>
								<p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
									<span className="text-base pr-2">$</span>
									<span>44.90</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:mx-auto sm:w-96"><a className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">More products</a></div>
			</div>
		</div>
	</section>
}

export default Marketplace;