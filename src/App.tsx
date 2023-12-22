import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Stack,
	StackDivider,
	Image,
	Flex
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const toast = useToast();

	const handleCount = () => {
		setCount((count) => count + 1);
		toast({
			title: 'Added',
			description: 'You are recently added count.',
			status: 'success',
			duration: 9000,
			isClosable: true
		});
	};
	return (
		<>
			<Flex color='white'>
				<Card>
					<CardHeader>
						<Heading>Vite + React</Heading>
					</CardHeader>
					<CardBody>
						<Stack display={'flex'} alignItems={'center'}>
							<Image src={viteLogo} boxSize='100px' />
						</Stack>

						<Stack divider={<StackDivider />} spacing={4}>
							<Button onClick={handleCount}>
								count is {count}
							</Button>
							<p>
								Edit <code>src/App.tsx</code> and save to test
								HMR
							</p>
							<p className='read-the-docs'>
								Click on the Vite and React logos to learn more
							</p>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
		</>
	);
}

export default App;
