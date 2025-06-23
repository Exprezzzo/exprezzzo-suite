'use client';

import { useState, FormEvent } from 'react';
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function BookingForm({ vendorId, vendorName }: { vendorId: string, vendorName: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      await addDoc(collection(db, 'bookings'), {
        vendorId,
        vendorName,
        customerName: name,
        customerEmail: email,
        message,
        submittedAt: serverTimestamp(),
        status: 'pending',
      });

      setStatus('success');
      setStatusMessage('Booking submitted!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setStatusMessage('Something went wrong. Try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-6 bg-white rounded-lg shadow space-y-4 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900">Book {vendorName}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Message (optional)"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        rows={4}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#FFD700] text-black font-bold py-2 px-6 rounded hover:bg-yellow-400 transition"
      >
        {status === 'loading' ? 'Sending...' : 'Book Now'}
      </button>
      {statusMessage && (
        <p className={status === 'success' ? 'text-green-600' : 'text-red-600'}>{statusMessage}</p>
      )}
    </form>
  );
}
