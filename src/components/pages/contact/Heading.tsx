import Script from "next/script"

export default function Heading() {
	return (
		<div className="p-8 py-20 bg-gray-900 overflow-hidden rounded-3xl">
			<div className="text-center mx-auto mb-24">
				<h1 className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight">
					<span>Contact us</span>
				</h1>
				<p className="text-xl text-gray-400 font-bold">
					Reach out via <a href="mailto:kirk@4db.io" className="text-blue-400">email here</a>
				</p>
				<br/>
				<br/>
				<Script src="https://assets.calendly.com/assets/external/widget.js" />
				<div className="flex justify-center w-full">
				<div className="calendly-inline-widget"
					data-url="https://calendly.com/kirk-4db/4db-intro-call"
					style={{
						backgroundColor: 'black',
						width: '600px',
						height: '1031px'
					}}></div>
				</div>
			</div>
		</div>
	)
}