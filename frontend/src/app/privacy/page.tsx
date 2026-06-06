export default function PrivacyPage() {
    return (
      <main className="min-h-screen max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">
          Privacy Policy
        </h1>
  
        <div className="space-y-6 text-gray-700 dark:text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Information We Collect
            </h2>
  
            <p>
              We may collect names, email addresses,
              resumes, job descriptions, and account
              information submitted by users.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              How We Use Information
            </h2>
  
            <p>
              Information is used to provide resume
              analysis, candidate matching, authentication,
              and platform functionality.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Data Security
            </h2>
  
            <p>
              We implement reasonable security measures
              to protect user information from unauthorized
              access.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Data Sharing
            </h2>
  
            <p>
              We do not sell personal information. Data
              may be shared only when required by law or
              necessary to provide services.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Contact
            </h2>
  
            <p>
              For privacy-related questions, contact
              support@resumeai.com.
            </p>
          </section>
        </div>
      </main>
    );
  }