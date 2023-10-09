"use client"

import { useState } from 'react'
import { arrowRight } from '@/public/icons'
import Button from '@/components/Button'
import ShoeCard from '@/components/ShoeCard'
import { statistics, shoes } from '@/constants'
import { bigShoe1 } from '@/public/images'
import Image from 'next/image'

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
				<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[1] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
					<br />
					<span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
				</h1>
				<p className='font-montserrat text-slate-gray text-lg mt-6 leading-8 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovative for your active life.</p>
				<Button
					label="Shop now"
					iconURL={arrowRight}
				/>
				<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
					{statistics.map((stat, index) => (
						<div key={`${stat.label} with index ${index}`}>
							<p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
							<p className='leading-7 font-montserrat text-slate-gray '>{stat.label}</p>
						</div>))}
				</div>
			</div>

			<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center' >
				<Image src={bigShoeImg} alt='show collection'
					width={610}
					height={500}
					className=' object-contain z-10 relative'
				/>
				<div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
					{shoes.map((shoe) => (
						<div key={shoe}>
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImage={(shoe) => {
									setBigShoeImg(shoe)
								}}
								bigShoeImage={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero