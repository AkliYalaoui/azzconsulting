// app/[locale]/contact/page.tsx

'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Replace with API call or Formspree config
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">
          {t('title')}
        </h1>
        <p className="text-center text-slate-600 mb-12">
          {t('subtitle')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('form.name')}
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('form.email')}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t('form.subject')}
            </label>
            <input
              name="subject"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t('form.message')}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-800 transition"
            >
              {t('form.submit')}
            </button>
          </div>

          {status === 'success' && (
            <p className="text-green-600 mt-4">{t('form.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-4">{t('form.error')}</p>
          )}
        </form>
      </div>
    </main>
  );
}
