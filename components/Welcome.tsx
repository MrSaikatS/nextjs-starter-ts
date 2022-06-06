import { useRecoilState } from "recoil";
import TextAtom from "../atoms/TextAtom";

const Welcome = () => {
	const [text] = useRecoilState(TextAtom);
	return (
		<>
			<h1 className='md:text-3xl lg:text-5xl font-serif'>
				Welcome to {""}
				<a href='https://nextjs.org'>{text}</a> Starter with TypeScript
			</h1>
		</>
	);
};

export default Welcome;
