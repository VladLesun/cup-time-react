const SkeletonLoader = ({ count = 6 }) => {
	return (
		<>
			{Array(count)
				.fill()
				.map((_, index) => (
					<li key={index} className='skeleton-wrapper'></li>
				))}
		</>
	);
};

export default SkeletonLoader;
