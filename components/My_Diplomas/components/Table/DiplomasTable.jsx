import styled from 'styled-components'
import PropTypes from 'prop-types'
import DynamicTable from '@atlaskit/dynamic-table'
import Avatar from '@atlaskit/avatar'
import EmptyState from '@atlaskit/empty-state'
import { createKey } from '../../../Utils/Consts'
import { ProgressTracker } from '@atlaskit/progress-tracker'
import { Status } from '@atlaskit/status/element'
import Button from '@atlaskit/button'

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`

const AvatarWrapper = styled.div`
  margin-right: 8px;
`

const Wrapper = styled.div`
  min-width: 600px;
`

const DiplomasTable = ({ diplomas }) => {

    const styleState = new Map([['in progress', 'blue'], ['complete', 'green'], ['unavailable', 'neutral']])

    const head = (withWidth) => {
        return {
            cells: [
                {
                    key: 'name',
                    content: 'Diplomado',
                    isSortable: false,
                    width: withWidth ? 25 : undefined
                },
                {
                    key: 'progress',
                    content: 'Progreso',
                    isSortable: false,
                    width: undefined
                },

                {
                    key: 'status',
                    content: 'Estado',
                    isSortable: true,
                    width: withWidth ? 15 : undefined
                },
                {
                    key: 'score',
                    content: 'Nota',
                    isSortable: false,
                    width: withWidth ? 5 : undefined
                },
                {
                    key: 'action',
                    content: 'Acción',
                    isSortable: false,
                    width: withWidth ? 15 : undefined
                }
            ]
        }
    }

    const emptyProps = {
        header: 'No hay diplomados',
        description: `Lorem ipsum is a pseudo-Latin text used in web design,
        typography, layout, and printing in place of English to emphasise
        design elements over content. It's also called placeholder (or filler)
        text. It's a convenient tool for mock-ups.`,
        imageUrl: 'https://image.flaticon.com/icons/svg/972/972256.svg',
        size: 'narrow',
        maxImageWidth: 200,
        maxImageHeight: 200,
    }

    const getAction = (state) => {
        let lowerState = state.toLowerCase()

        if (lowerState === 'in progress')
            return <Button appearance='primary' >Continuar Diplomado</Button>
        else if (lowerState === 'complete')
            return <Button appearance='warning' >Descargar Certificado</Button>
    }

    const rows = diplomas.map((diploma, index) => ({
        key: `row-${ index }-${ diploma.name }`,
        cells: [
            {
                key: createKey(diploma.name),
                content: (
                    <NameWrapper>
                        <AvatarWrapper>
                            <Avatar
                                name={ diploma.name }
                                size='medium'
                                src={ `https://api.adorable.io/avatars/24/${ encodeURIComponent(
                                    diploma.name,
                                ) }.png` }
                            />
                        </AvatarWrapper>
                        { diploma.name }
                    </NameWrapper>
                )
            },
            {
                key: createKey('progressDiploma'),
                content: (<ProgressTracker items={ diploma.progress } />)
            },
            {
                key: createKey('statusDiploma'),
                content: (<Status text={ diploma.state } color={ styleState.get(diploma.state.toLowerCase()) } />)
            },
            {
                key: createKey(diploma.score),
                content: diploma.score
            },
            {
                key: createKey('diplomaActions'),
                content: getAction(diploma.state)
            }
        ]
    }))

    return (
        <Wrapper>
            <DynamicTable
                head={ head(true) }
                rows={ rows }
                emptyView={ <EmptyState { ...emptyProps }/> }
                rowPerPage={ 10 }
                defaultPage={ 1 }
                loadingSpinnerSize='large'
                isLoading={ false }
                isFixedSize
            />
        </Wrapper>
    )
}

DiplomasTable.propTypes = {
    diplomas: PropTypes.array.isRequired
}

export default DiplomasTable