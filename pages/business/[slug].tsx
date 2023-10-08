import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const slug = router.query.slug

  return (
    <main className={ 'container-fluid mt-3 mb-5' }>
      <div className={ 'row mb-3' }>
        <div className={ 'col' }>
          <h3>{ slug }</h3>
          <p className={ 'text-tertiary' }><small>{ 'January 1, 2021 by Mark' }</small></p>
        </div>
      </div>
      <div className={ 'row mb-3' }>
        <div className={ 'col' }>
        </div>
      </div>
    </main>
  )
}
