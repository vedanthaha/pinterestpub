export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-12">
      <div className="space-y-4 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">Privacy Policy</h1>
        <p className="text-zinc-400">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-invert prose-zinc max-w-none">
        <p className="text-zinc-300 lead bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg">
          <strong>Important Notice:</strong> PinFind is currently an in-development project. 
          The application only requests data necessary for its core functionality and does not sell personal information.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">1. Information We Receive</h2>
          <p className="text-zinc-400 leading-relaxed">
            When you interact with the PinFind Telegram bot, we may receive the following information to facilitate the service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong>Telegram Context:</strong> Basic information provided by the Telegram Bot API such as your user ID, username, and language preference to return inline results.</li>
            <li><strong>Search Queries:</strong> The text queries you submit through the inline bot to search for Pinterest content.</li>
            <li><strong>Pinterest Authorization:</strong> If you choose to connect your Pinterest account in the future, we will receive an authentication token to make authorized API requests on your behalf. We do not receive your Pinterest password.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">2. How Information is Used</h2>
          <p className="text-zinc-400 leading-relaxed">
            The information we collect is used solely to provide the intended functionality of the application: processing your search queries and returning relevant visual content from Pinterest directly into your Telegram chats. We do not use your data for targeted advertising or user profiling.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">3. Data Retention</h2>
          <p className="text-zinc-400 leading-relaxed">
            Search queries and temporary Telegram routing data are kept only as long as necessary to process the immediate request. We do not persistently log or store the content of your inline searches or chat contexts.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">4. Third-Party Services</h2>
          <p className="text-zinc-400 leading-relaxed">
            PinFind relies on APIs provided by third parties. Your interactions are subject to their respective privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-400">
            <li><strong>Pinterest API:</strong> Used to fetch visual content and search results. Subject to the <a href="https://policy.pinterest.com/en/privacy-policy" className="text-[#e11d48] hover:underline" target="_blank" rel="noreferrer">Pinterest Privacy Policy</a>.</li>
            <li><strong>Telegram Bot API:</strong> Used to interface with the messaging app. Subject to the <a href="https://telegram.org/privacy" className="text-[#e11d48] hover:underline" target="_blank" rel="noreferrer">Telegram Privacy Policy</a>.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">5. Security</h2>
          <p className="text-zinc-400 leading-relaxed">
            We implement reasonable security measures to protect the minimal data processed by the application during transit. However, no internet-based service can guarantee 100% security.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-zinc-400 leading-relaxed">
            You may stop using the inline bot at any time. If Pinterest authentication is added, you will have the ability to revoke our application's access directly from your Pinterest account settings.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-zinc-200 mt-8 mb-4">7. Changes to This Policy</h2>
          <p className="text-zinc-400 leading-relaxed">
            We may update this Privacy Policy from time to time as the in-development project evolves. The updated version will be indicated by an updated "Effective Date" at the top of this document.
          </p>
        </section>

        <section className="mt-8 space-y-4 border-t border-zinc-800 pt-8">
          <h2 className="text-xl font-semibold text-zinc-200 mb-4">Contact</h2>
          <p className="text-zinc-400 leading-relaxed">
            If you have questions about this policy, please contact: <strong className="text-zinc-200">BuildByBits</strong>
          </p>
        </section>

      </div>
    </div>
  );
}
