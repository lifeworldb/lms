import PropTypes from 'prop-types'
import styled from 'styled-components'

const relatedDiplomats = [
    {
        id: 1,
        text: 'ADMINISTRACIÓN DE LA PROPIEDAD HORIZONTAL',
        shortDescription: 'Objetivo:\n' +
            'Proporcionar a los participantes los conceptos y herramientas administrativas, jurídicas y financieras, de aplicación práctica en nuestro medio Colombiano, que son requeridas para poder enfrentar con éxito los retos actuales de la gestión moderna para el manejo y dirección de los recursos humanos y logísticos de la propiedad horizontal.',
        cover: {
            alt: 'imagen-diploma1',
            imageBg: 'https://admin.polisura.com/images/programas/programas/img-5e14f42835f4c.png',
            preview: 'https://admin.polisura.com/images/programas/gestion/img-5d6e89e5b32bf.png'
        }
    },
    {
        id: 2,
        text: 'GESTIÓN DOCUMENTAL Y ADMINISTRACIÓN DE ARCHIVOS',
        shortDescription: 'Objetivo:\n' +
            'El Diplomado en Gestión Documental y Administración de Archivos pretende responder a la necesidad de entidades públicas o privadas y de personas particulares de diferentes áreas del conocimiento, que interactúan en sus actividades con labores archivísticas, transformando la visión del archivo más allá del simple cumplimiento de una normatividad.',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://admin.polisura.com/images/programas/programas/img-5e1e320959245.png',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 3,
        text: 'NEUROPEDAGOGÍA INFANTIL',
        shortDescription: 'Objetivo:\n' +
            'Comprender la utilidad de la Neuropedagogía Infantil en el ámbito de la enseñanza - aprendizaje.',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://admin.polisura.com/images/programas/programas/img-5e1f1620cbac3.png',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 4,
        text: 'ATENCIÓN INTEGRAL A LA VÍCTIMA DE LA VIOLENCIA SEXUAL',
        shortDescription: 'Objetivo:\n' +
            'Brindar las herramientas necesarias a las personas de las Instituciones Prestadoras de servicios de salud para el correcto proceso en la atención de mujeres víctimas de violencia sexual, dando cumplimiento a las exigencias de la norma de habilitación vigente dentro de un marco asistencial y legal. Teniendo como referente el Decreto 1011 de 2006 (SOGC), Resolución 0459 de 2012 y la Resolución 2003 de 2014, la cual obliga a todos los prestadores a tener un protocolo de atención a las mujeres víctimas de violencia sexual.',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://admin.polisura.com/images/programas/programas/img-5e14f9fb16412.png',
            preview: 'https://admin.polisura.com/images/website/carousel/img-5d9df5519447b.png'
        }
    },
    {
        id: 5,
        text: 'Diploma 5',
        shortDescription: 'Related diploma description',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 6,
        text: 'Diploma 6',
        shortDescription: 'Related diploma description',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 7,
        text: 'Diploma 7',
        shortDescription: 'Related diploma description',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 8,
        text: 'Diploma 8',
        shortDescription: 'Related diploma description',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    },
    {
        id: 9,
        text: 'Diploma 9',
        shortDescription: 'Related diploma description',
        cover: {
            alt: 'imagen-diploma2',
            imageBg: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg',
            preview: 'https://www.timelinecoverbanner.com/facebook-covers/2012/11/sunrise-earth.jpg'
        }
    }
]

const RelatedDiploma = ({ related }) => {

    const Wrapper = styled.div`
      padding: ${ props => props.width }px;
      background: #419be0;
    `

    return (
        <div uk-slider="autoplay: true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
                    {relatedDiplomats.map((diploma, index) => (
                        <li key={ `related-${ index }-${ diploma.id }` }>
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                    <img src={ diploma.cover.preview } alt={ diploma.cover.alt } />
                                </div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">{ diploma.text }</h3>
                                    <p>{ diploma.subText }</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    {/*<li>*/}
                    {/*    <div className="uk-card uk-card-default">*/}
                    {/*        <div className="uk-card-media-top">*/}
                    {/*            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="uk-card-body">*/}
                    {/*            <h3 className="uk-card-title">Headline</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*                eiusmod tempor incididunt.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className="uk-card uk-card-default">*/}
                    {/*        <div className="uk-card-media-top">*/}
                    {/*            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="uk-card-body">*/}
                    {/*            <h3 className="uk-card-title">Headline</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*                eiusmod tempor incididunt.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className="uk-card uk-card-default">*/}
                    {/*        <div className="uk-card-media-top">*/}
                    {/*            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="uk-card-body">*/}
                    {/*            <h3 className="uk-card-title">Headline</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*                eiusmod tempor incididunt.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className="uk-card uk-card-default">*/}
                    {/*        <div className="uk-card-media-top">*/}
                    {/*            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="uk-card-body">*/}
                    {/*            <h3 className="uk-card-title">Headline</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*                eiusmod tempor incididunt.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <div className="uk-card uk-card-default">*/}
                    {/*        <div className="uk-card-media-top">*/}
                    {/*            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className="uk-card-body">*/}
                    {/*            <h3 className="uk-card-title">Headline</h3>*/}
                    {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                    {/*                eiusmod tempor incididunt.</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                   uk-slidenav-previous={ true.toString() } uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
                   uk-slidenav-next={ true.toString() } uk-slider-item="next"></a>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    )
}

RelatedDiploma.propTypes = {
    related: PropTypes.array
}

export default RelatedDiploma