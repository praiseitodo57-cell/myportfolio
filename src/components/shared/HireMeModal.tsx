import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';


const SERVICE_ID = 'service_hw0vgm8';
const TEMPLATE_ID = 'template_5ct92w7';
const PUBLIC_KEY = 'GEAZjXc9Rd44dsSCN';

const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];

// 1. Remove onRequest from props (unused)
// 2. Type the sendEmail parameter
// 3. Add null check for formRef.current

const HireMeModal = ({ onClose }: { onClose: () => void }) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;
		setSending(true);
		setError(false);

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
			.then(() => {
				setSending(false);
				setSent(true);
				formRef.current?.reset();
				setTimeout(() => {
					setSent(false);
					onClose();
				}, 2000);
			})
			.catch(() => {
				setSending(false);
				setError(true);
			});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className="text-primary-dark dark:text-primary-light text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form
								ref={formRef}
								onSubmit={sendEmail}
								className="max-w-xl m-4 text-left"
							>
								<div>
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="from_name"
										type="text"
										required
										placeholder="Name"
										aria-label="Name"
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="reply_to"
										type="email"
										required
										placeholder="Email"
										aria-label="Email"
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										required
										aria-label="Project Category"
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>
								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols={14}
										rows={6}
										aria-label="Details"
										placeholder="Project description"
									></textarea>
								</div>

								{/* Status messages */}
								{sent && (
									<p className="mt-4 text-green-500 font-medium">
										Message sent successfully!
									</p>
								)}
								{error && (
									<p className="mt-4 text-red-500 font-medium">
										Something went wrong. Please try again.
									</p>
								)}

								<div className="mt-6 pb-4 sm:pb-1">
									<button
										type="submit"
										disabled={sending}
										className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500 disabled:opacity-50"
										aria-label="Submit Request"
									>
										{sending ? 'Sending...' : 'Send Request'}
									</button>
								</div>
							</form>
						</div>
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border-t text-right">
							<span
								onClick={onClose}
								className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500 cursor-pointer"
								aria-label="Close Modal"
							>
							</span>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;