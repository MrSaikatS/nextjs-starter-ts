import { useRecoilState } from "recoil";
import TextAtom from "../atoms/TextAtom";

const Welcome = () => {
	const [text] = useRecoilState(TextAtom);
	return (
		<>
			Welcome to <a href='https://nextjs.org'>{text}</a>
		</>
	);
};

export default Welcome;
