import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const SERVICE_ID = 'service_hw0vgm8';
const TEMPLATE_ID = 'template_5ct92w7';
const PUBLIC_KEY = 'GEAZjXc9Rd44dsSCN';

const ContactForm = () => {
	const formRef = useRef();
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setSending(true);
		setError(false);

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
			.then(() => {
				setSending(false);
				setSent(true);
				formRef.current.reset();
			})
			.catch(() => {
				setSending(false);
				setError(true);
			});
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					ref={formRef}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="from_name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="reply_to"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols={14}
							rows={6}
							aria-label="Message"
						></textarea>
					</div>

					{/* Status messages */}
					{sent && (
						<p className="mt-4 text-green-500 font-medium">
							Message sent successfully! I'll get back to you soon.
						</p>
					)}
					{error && (
						<p className="mt-4 text-red-500 font-medium">
							Something went wrong. Please try again.
						</p>
					)}

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<button
							type="submit"
							disabled={sending}
							aria-label="Send Message"
							className="w-full disabled:opacity-50"
						>
							{sending ? 'Sending...' : 'Send Message'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;