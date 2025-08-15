// app/[locale]/contact/page.tsx

'use client';

import { useTranslations } from 'next-intl';
import { useActionState } from "react";
import { MessageCircle, Mail, User, LoaderIcon } from "lucide-react";
import sendEmail from "@/email/lib";

export default function ContactPage() {
  const [messages, formAction, isPending] = useActionState(sendEmail, null);
  const t = useTranslations('ContactPage');

  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">
          {t('title')}
        </h1>
        <p className="text-center text-slate-600 mb-12">
          {t('subtitle')}
        </p>

        {messages?.error && (
          <div className=" bg-red-200 border border-red-800 text-slate-950 p-4 rounded-lg mb-6">
            <p className="flex items-center">
              <MessageCircle className="mr-2 text-red-800" />
              <strong>{t("notM")}</strong>
              {t("wrong")}
            </p>
          </div>
        )}

        {messages?.success && (
          <div className="max-w-4xl mx-auto bg-emerald-200 border border-emerald-800 text-emerald-950 p-4 rounded-lg mb-6">
            <p className="flex items-center">
              <Mail className="mr-2 text-emerald-800" />
              <strong>{t("m")}</strong>
              {t("getBack")}
            </p>
          </div>
        )}
        <form
          action={formAction}
          className="shadow-lg p-8  rounded-lg border-t-4 border-softpink bg-peach"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-coffee font-semibold mb-2"
            >
              <User className="inline mr-1 text-coffee" /> {t("name")}{" "}
              <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full  px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-coffee"
              placeholder={t("namePlaceholder")}
              required
            />
            {messages?.name && (
              <p className="mt-2 text-sm text-red-500">{t(messages?.name)}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-coffee font-semibold mb-2"
            >
              <Mail className="inline mr-1 text-coffee" /> {t("email")}{" "}
              <strong className="text-red-500">*</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full  px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-coffee"
              placeholder={t("emailPlaceholder")}
              required
            />
            {messages?.email && (
              <p className="mt-2 text-sm text-red-500">{t(messages?.email)}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-coffee font-semibold mb-2"
            >
              <MessageCircle className="inline mr-1 text-coffee" />{" "}
              {t("subject")} <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-coffee"
              placeholder={t("subjectPlaceholder")}
              required
            />
            {messages?.subject && (
              <p className="mt-2 text-sm text-red-500">{t(messages?.subject)}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-coffee font-semibold mb-2"
            >
              <MessageCircle className="inline mr-1 text-coffee" />{" "}
              {t("message")} <strong className="text-red-500">*</strong>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:coffee"
              placeholder={t("messagePlaceholder")}
              required
            ></textarea>
            {messages?.message && (
              <p className="mt-2 text-sm text-red-500">{t(messages?.message)}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className=" flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold p-2 rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-emerald-600 disabled:opacity-50 cursor-pointer"
          >
            {isPending ? (
              <>
                <LoaderIcon className="animate-spin mr-2" />{" "}
                {t("sending")}
              </>
            ) : (
              t("send")
            )}
          </button>
        </form>

      </div>
    </main>
  );
}
