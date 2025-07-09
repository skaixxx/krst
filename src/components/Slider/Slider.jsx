import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({ list }) {
	return (
		<div className="slider">
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={1}
      			pagination={{ clickable: true }}
			>
				{list.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="slider__img">
							<img src={slide.image} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}