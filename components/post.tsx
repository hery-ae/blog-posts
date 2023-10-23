import Link from 'next/link'

type PostProps = {
    priority: number,
    position: number,
    pathname: string,
    category: string,
    title: string,
    image: string,
}

export default function Post({ priority, position, pathname, category, title, image }: PostProps) {
    switch( priority ) {
        case 3: {
            return (
                <>
                    { position === 1 && (
                        <div className="col-auto col-md-4 px-0 pe-md-3">
                            <img src={ image } alt={ title } className="img-fluid" />
                            <h3 className="my-0 px-1 py-2 border-start border-end" style={{ height: '108px' }}>
                                <Link href={ pathname }>
                                    <a className="link-dark text-decoration-none">{ title }</a>
                                </Link>
                            </h3>
                            <h6 className="p-3 border text-primary-emphasis fw-bold">{ category }</h6>
                        </div>
                    )}
                    { position === 2 && (
                        <div className="col-auto col-md-4 px-0 px-md-3">
                            <img src={ image } alt={ title } className="img-fluid" />
                            <h3 className="my-0 px-1 py-2 border-start border-end" style={{ height: '108px' }}>
                                <Link href={ pathname }>
                                    <a className="link-dark text-decoration-none">{ title }</a>
                                </Link>
                            </h3>
                            <h6 className="p-3 border text-primary-emphasis fw-bold">{ category }</h6>
                        </div>
                    )}
                    { position === 3 && (
                        <div className="col-auto col-md-4 px-0 ps-md-3">
                            <img src={ image } alt={ title } className="img-fluid" />
                            <h3 className="my-0 px-1 py-2 border-start border-end" style={{ height: '108px' }}>
                                <Link href={ pathname }>
                                    <a className="link-dark text-decoration-none">{ title }</a>
                                </Link>
                            </h3>
                            <h6 className="p-3 border text-primary-emphasis fw-bold">{ category }</h6>
                        </div>
                    )}
                </>
            )
        }
        case 2: {
            return (
                <>
                    { position === 1 && (
                        <div className="col-12 col-md-6">
                            <div className="row mb-2">
                                <div className="col pe-0 py-3 border-start border-top border-bottom">
                                    <h6 className="mb-2 text-primary-emphasis fw-bold">{ category }</h6>
                                    <h3 className="mb-0">
                                        <Link href={ pathname }>
                                            <a className="link-dark text-decoration-none">{ title }</a>
                                        </Link>
                                    </h3>
                                </div>
                                <div className="col-auto ps-0">
                                    <img src={ image } alt={ title } className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    )}
                    { position === 2 && (
                        <div className="col-12 col-md-6">
                            <div className="row mb-2">
                                <div className="col pe-0 py-3 border-start border-top border-bottom">
                                    <h6 className="mb-2 text-primary-emphasis fw-bold">{ category }</h6>
                                    <h3 className="mb-0">
                                        <Link href={ pathname }>
                                            <a className="link-dark text-decoration-none">{ title }</a>
                                        </Link>
                                    </h3>
                                </div>
                                <div className="col-auto ps-0 pe-md-0">
                                    <img src={ image } alt={ title } className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )
        }
        default: {
            return (
                <>
                    <div className="col-12 position-relative px-0">
                        <img src={ image } alt="highlight" className="img-fluid rounded" />
                        <h3 className="position-absolute start-0 top-50 px-3 text-white fw-bold">{ category }</h3>
                        <h2 className="position-absolute start-0 top-50 mt-3 p-3">
                            <Link href={ pathname }>
                                <a className="text-white text-decoration-none">{ title }</a>
                            </Link>
                        </h2>
                    </div>
                </>
            )
        }
    }
}
