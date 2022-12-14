import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import UseState from './components/UseState/UseState';
import UseStateOne from './components/UseState/UseStateOne/UseStateOne';
import UseStateTwo from './components/UseState/UseStateTwo/UseStateTwo';

const navigation = [
	{ name: 'Use-State', current: true },
	{ name: 'Use-Reducer', current: false },
	{ name: 'Parent-Children', current: false },
	{ name: 'Immutable-State', current: false },
	{ name: 'Context', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function App() {
	return (
		<>
			<div className='min-h-full'>
				<Disclosure as='nav' className='bg-gray-800'>
					{({ open }) => (
						<>
							<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
								<div className='flex h-16 items-center justify-between'>
									<div className='flex items-center'>
										<div className='hidden md:block'>
											<div className='ml-10 flex items-baseline space-x-4'>
												{navigation.map(item => (
													<button
														key={item.name}
														className={classNames(
															item.current
																? 'bg-gray-900 text-white'
																: 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'px-3 py-2 rounded-md text-sm font-medium',
														)}
														aria-current={item.current ? 'page' : undefined}
													>
														{item.name}
													</button>
												))}
											</div>
										</div>
									</div>
									<div className='-mr-2 flex md:hidden'>
										{/* Mobile menu button */}
										<Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
											<span className='sr-only'>Open main menu</span>
											{open ? (
												<XMarkIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											) : (
												<Bars3Icon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className='md:hidden'>
								<div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
									{navigation.map(item => (
										<Disclosure.Button
											key={item.name}
											className={classNames(
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'block px-3 py-2 rounded-md text-base font-medium',
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<main>
					<UseState />
				</main>
			</div>
		</>
	);
}
