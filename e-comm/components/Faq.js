import React,{useState} from 'react'
import { Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import Link from 'next/link';
function Faq() {
    const [showAnswers, setShowAnswers] = useState(false);

    const faqData = [
        {
          id: 1,
          question: 'When is the workshop?',
          answer: 'Workshop is on Saturday, 15th April at 7 PM.'
        },
        {
          id: 2,
          question: 'Will this be live or pre-recorded?',
          answer: 'It is a completely LIVE Workshop'
        },
        {
          id: 3,
          question: 'Do you get notes & assignments to practice?',
          answer: 'Absolutely. It is a completely hands-on workshop where you will also get notes, reference material & assignments for your future reference.'
        },
        {
            id: 4,
            question: 'Is the Workshop Certified?',
            answer: 'Yes! It is a Skill Nation & Ex-Google Vendor Team Certified Workshop.'
          },
          {
            id: 5,
            question: 'Will it be recorded?',
            answer: 'No, it will not be recorded.'
          },
          {
            id: 6,
            question: 'I made the payment but did not receive any email',
            answer: 'Please write to us at hello@skillnation.in & our awesome support team will get back to you as soon as possible to help you out.'
          }
      ];

      const handleClick = () => {
        setShowAnswers(!showAnswers);
      };
  return (
    <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
    <ul className="space-y-4">
      {faqData.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className="flex justify-between w-full py-2 px-4 border border-gray-300 rounded-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
            onClick={handleClick}
          >
            <span className="text-lg font-medium">{item.question}</span>
            {showAnswers ? (
              <MinusIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            )}
          </button>
          <Transition
            show={showAnswers}
            enter="transition-opacity ease-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {showAnswers && (
              <div className="py-2 px-4 bg-gray-100 rounded-md text-gray-700">{item.answer}</div>
            )}
          </Transition>
        </li>
      ))}
    </ul>
    <div className="flex justify-center mt-5 mb-5">
    <Link href='/payment'><button  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Book your seat spot now (Only Rs 99)</button></Link>
        
      </div>
  </div>
  )
}

export default Faq
