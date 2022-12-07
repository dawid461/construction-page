import {useForm} from 'react-hook-form';
import {useState} from 'react';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {


    //message after sent message. Message will hide after 15 seconds.
    const [showResults, setShowResults] = useState(false);
    const hideMessage = () => {
        setShowResults(false);
    }

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const recaptchaRef = React.useRef();

    const SendForm = e => {
        const data = {
            name,
            subject,
            email,
            message,
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        });
        //message after sent message. Message will hide after 15 seconds.
        setShowResults(true);
        setTimeout(hideMessage, 10000);
        //------------------------------------------------------------
        reset();
    };

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }

    return (
        <>
            <div className='flex w-full items-center justify-center bg-contactForm sm:mt-5 lg:mt-20'>

                <div className="flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl flex-col pb-20 pt-20">

                    <div className="flex mb-10">
                        <h2 className="text-3xl text-secondaryColor font-semibold">Formularz kontaktowy</h2>
                    </div>

                    <form onSubmit={handleSubmit(SendForm, onSubmitWithReCAPTCHA)} className="w-full">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey="#"
                        />

                        <div className='w-full flex sm:flex-col lg:flex-row'>

                            <div className='flex sm:w-full lg:w-1/2 flex-col'>
                                <div className="w-full flex flex-col">
                                    <input name='fullName' {...register("fullName", {
                                        required: {
                                            value: true,
                                            message: 'To pole jest wymagane!'
                                        },
                                        maxLength: {
                                            value: 40,
                                            message: "Maksymalna ilość znaków to 40!",
                                        }
                                    })}
                                           className="appearance-none text-md text-thirdColor font-light bg-contactForm
                                       border-b-2 pl-3 pb-0.5 mt-6 border-colorFormBorder focus:outline-none"
                                           id="name" type="text"
                                           placeholder="Imię i nazwisko"
                                           onChange={e => setName(e.target.value)}
                                    />
                                    <span className="text-red-400 text-sm py-2">
                                    <p className='text-red font-semibold'>{errors.fullName?.message}</p>
                                </span>
                                </div>

                                <div className="w-full flex flex-col">
                                    <input name='subject' {...register("subject", {
                                        required: {
                                            value: true,
                                            message: 'To pole jest wymagane!'
                                        },
                                        maxLength: {
                                            value: 70,
                                            message: "Maksymalna ilość znaków to 70!",
                                        }
                                    })}
                                           className="appearance-none text-md text-thirdColor font-light bg-contactForm
                                       border-b-2 pl-3 pb-0.5 mt-6 border-colorFormBorder focus:outline-none"
                                           id="name" type="text"
                                           placeholder="Temat"
                                           onChange={e => setName(e.target.value)}
                                    />
                                    <span className="text-red-400 text-sm py-2">
                                    <p className='text-red font-semibold'>{errors.fullName?.message}</p>
                                </span>
                                </div>

                                <div className="w-full flex flex-col">
                                    <input  {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'To pole jest wymagane!'
                                        },
                                        maxLength: {
                                            value: 60,
                                            message: "Maksymalna ilość znaków to 60!"
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Twój adres email jest niepoprawny!',
                                        }
                                    })}
                                            className="appearance-none text-md text-thirdColor font-light bg-contactForm
                                       border-b-2 pl-3 pb-0.5 mt-6 border-colorFormBorder focus:outline-none"
                                            id="email" type="email"
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)}
                                    />
                                    <span className="text-red-400 text-sm py-2">
                                    <p className='text-red font-semibold'>{errors.email?.message}</p>
                                </span>
                                </div>
                            </div>


                            <div className='flex sm:w-full lg:w-1/2 flex-col'>
                                <div className="w-full flex flex-col">
                                <textarea {...register("text", {
                                    required: {
                                        value: true,
                                        message: 'To pole jest wymagane!'
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: "Maksymalna ilość znaków to 40!"
                                    },
                                })}
                                          className="appearance-none text-md text-thirdColor font-light bg-contactForm
                                          border-b-2 pl-3 pb-28 pt-6 border-colorFormBorder focus:outline-none lg:ml-20"
                                          placeholder="Treść wiadomości......."
                                          id="message"
                                          type="text"
                                          onChange={e => setMessage(e.target.value)}
                                />
                                    <p className='text-red font-semibold'> {errors.text?.message}</p>
                                </div>

                                <div className="flex">
                                    <p className="mt-2 text-xs text-thirdColor leading-5 lg:ml-20 opacity-70">
                                        Wysyłając wiadomość wyrażasz zgodę na przetwarzanie twoich danych osobowych
                                        przez Grupa Fewaterm z siedzibą na ul. Krynickiej 4 , 33-180 Gromnik w celu
                                        odpowiedzi na twoją wiadomość, drogą telefoniczną lub poprzez e‑mail.*
                                    </p>
                                </div>

                                <div className="w-full flex flex-col items-center justify-center mt-2 mb-5">
                                    <div className="w-full flex justify-center sm:mt-2 lg:mt-5">
                                        <button
                                            className="bg-primaryColor shadow hover:bg-secondaryColor hover:text-whiteSmoke
                                            focus:shadow-outline focus:outline-none text-whiteSmoke font-bold py-2 px-6
                                            rounded delay-75 duration-200"
                                            type="submit" id='sendButton'>
                                            Wyślij
                                        </button>
                                    </div>

                                    {showResults ?
                                        <div>
                                            <p className='mt-2 text-ld text-primaryColor font-semibold'>
                                                Wiadomość została wysłana.</p>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default ContactForm;