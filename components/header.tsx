import Link from 'next/link'

export default function Header() {
    return (
        <header className={ 'd-flex flex-wrap align-items-center justify-content-center justify-content-md-between gap-2 py-3' }>
            <div className={ 'col-auto col-md-3 my-auto' }>
                <Link href={ '/' }>
                    <a className={ 'link-body-emphasis text-decoration-none' }>
                        <img src={ '/logo-black.svg' } width={ 40 } height={ 32 } className={ 'img-fluid' } />
                    </a>
                </Link>
            </div>
            <h1 className={ 'h2 my-0 fw-bold' } style={{ fontFamily: '\"Playfair Display\", Georgia, \"Times New Roman\", serif' }}>{ 'Blog Posts' }</h1>
            <div className={ 'col-auto col-md-3 text-end d-none d-md-block' }>
                <Link href={ '#' }>
                    <a className={ 'link-secondary' } aria-label={ 'Search' }>
                        <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } stroke={ 'currentColor' } strokeLinecap={ 'round' } strokeLinejoin={ 'round' } strokeWidth={ 2 } className={ 'mx-3' } role={ 'img' } viewBox={ '0 0 24 24' }><title>{ 'Search' }</title><circle cx={ 10.5 } cy={ 10.5 } r={ 7.5 }/><path d={ 'M21 21l-5.2-5.2' } /></svg>
                    </a>
                </Link>
            </div>
        </header>
    )
}
