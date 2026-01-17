import { Suspense } from 'react'

function VerifyEmailContent({
  searchParams,
}: {
  searchParams: { email?: string }
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check your email
            </h2>
            <p className="text-gray-600 mb-4">
              We've sent a verification link to:
            </p>
            {searchParams.email && (
              <p className="font-medium text-gray-900 mb-6">
                {searchParams.email}
              </p>
            )}
            <p className="text-sm text-gray-500">
              Click the link in the email to verify your account and complete the setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>
}) {
  const params = await searchParams
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent searchParams={params} />
    </Suspense>
  )
}
