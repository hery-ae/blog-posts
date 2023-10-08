import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className={ 'row mb-3' }>
                <div className={ 'col-12 position-relative px-0' }>
                    <img src="//localhost:8080/blog-posts/images/1084-1920x1080-grayscale.jpg" alt="highlight" className={ 'img-fluid rounded' } />
                    <h3 className={ 'position-absolute start-0 top-50 px-3 text-white fw-bold' }>Opinion</h3>
                    <h2 className={ 'position-absolute start-0 top-50 mt-3 p-3' }>
                        <Link href={ '/opinion/lorem-ipsum' }>
                            <a className={ 'text-white text-decoration-none' }>Lorem Ipsum Dolor Sit Amet, Consectur Adipiscing Elit</a>
                        </Link>
                    </h2>
                </div>
            </div>
            <div className={ 'row mb-3 px-1 px-md-0 justify-content-between' }>
                <div className={ 'col-12 col-md-6' }>
                    <div className={ 'row mb-2' }>
                        <div className={ 'col pe-0 border-start border-top border-bottom' }>
  
                        </div>
                        <div className={ 'col-auto ps-0' }>
                            <img src="//localhost:8080/blog-posts/images/88-192x192.jpg" alt="highlight" className={ 'img-fluid' } />
                        </div>
                    </div>
                </div>
                <div className={ 'col-12 col-md-6' }>
                    <div className={ 'row mb-2' }>
                        <div className={ 'col pe-0 border-start border-top border-bottom' }>
  
                        </div>
                        <div className={ 'col-auto ps-0 pe-md-0' }>
                            <img src="//localhost:8080/blog-posts/images/42-192x192.jpg" alt="42-192x192.jpg" className={ 'img-fluid' } />
                        </div>
                    </div>
                </div>
            </div>
            <div className={ 'row mb-3 px-1 px-md-0 justify-content-center' }>
                <div className={ 'col-auto col-md-4 mb-2 px-0 pe-md-3' }>
                    <img src={ '//localhost:8080/blog-posts/images/88-320x180.jpg' } alt={ '88-192x192.jpg' } className={ 'img-fluid' } />
                </div>
                <div className={ 'col-auto col-md-4 px-0 px-md-2' }>
                    <img src={ '//localhost:8080/blog-posts/images/42-320x180.jpg' } alt={ '42-192x192.jpg' } className={ 'img-fluid' } />
                </div>
                <div className={ 'col-auto col-md-4 px-0 ps-md-3' }>
                    <img src={ '//localhost:8080/blog-posts/images/1084-320x180-grayscale.jpg' } alt={ '1084-192x192-grayscale.jpg' } className={ 'img-fluid' } />
                </div>
            </div>
        </>
    )
}
