import { useTransition } from '@remix-run/react'
import { Button } from '~/components/Button'
import { UserForm } from '~/components/UserForm'

export default function SignInPage() {
  const transition = useTransition()

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl text-slate-800 mb-8">Sign in</h1>
      <UserForm>
        <Button type="submit" disabled={transition.state !== 'idle'}>
          {transition.state === 'submitting' || 'loading'
            ? 'Login'
            : 'Logging in....'}
        </Button>
      </UserForm>
    </div>
  )
}
