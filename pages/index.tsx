import Welcome from "../components/Welcome";

const index = () => {
	return (
		<div className='grid place-items-center h-screen text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
			<Welcome />
		</div>
	);
};

export default index;
