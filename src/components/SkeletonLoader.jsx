import ContentLoader from 'react-content-loader';

const SkeletonLoader = ({ count = 6 }) => {
	return (
		<>
			{Array(count)
				.fill()
				.map((_, index) => (
					<li key={index} className='skeleton-wrapper'>
						<ContentLoader
							speed={2}
							viewBox='0 0 420 600'
							backgroundColor='#a8e3d888'
							foregroundColor='#a025ec55'
						>
							<rect x='0' y='0' width='100%' height='70%' />
							<rect x='24px' y='calc(70% + 30px)' width='60%' height='30px' />
							<rect x='24px' y='calc(70% + 75px)' width='40%' height='25px' />
						</ContentLoader>
					</li>
				))}
		</>
	);
};

export default SkeletonLoader;
