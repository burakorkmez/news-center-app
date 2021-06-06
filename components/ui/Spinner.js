import spinner from '../../public/spinner.gif';
import Image from 'next/image';

const Spinner = () => {
	return (
		<div className="container text-center mt-3">
			<Image
				src={spinner}
				width={400}
				height={400}
				style={{ borderRadius: '50%' }}
				alt=""
			/>
		</div>
	);
};

export default Spinner;
