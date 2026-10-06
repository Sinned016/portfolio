export default function Spinner() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='h-10 w-10 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground' />
    </div>
  )
}
