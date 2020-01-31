import styled from 'styled-components'
import PropTypes from 'prop-types'
import DynamicTable from '@atlaskit/dynamic-table'
import Avatar from '@atlaskit/avatar'
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker'
import { createKey } from '../../../Utils/Consts'

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

const head = (withWidth) => {
    return {
        cells: [
            {
                key: 'name',
                content: 'Unidad',
                isSortable: false,
                width: withWidth ? 25 : undefined
            },
            {
                key: 'activity',
                content: 'Actividad',
                isSortable: false,
                width: withWidth ? 15 : undefined
            },
            {
                key: 'progress',
                content: 'Avance de la unida',
                isSortable: false,
                width: undefined
            },
            {
                key: 'score',
                content: 'Nota',
                isSortable: false,
                width: withWidth ? 15 : undefined
            }
        ]
    }
}

const QualificationsTable = ({ units }) => {

    const rows = units.map((unitsScore, index) => ({
        key: `row-${ index }-${ unitsScore.name }`,
        cells: [
            {
                key: createKey(unitsScore.name),
                content: (
                    <NameWrapper>
                        <AvatarWrapper>
                            <Avatar
                                name={ unitsScore.name }
                                size='medium'
                                src={ `https://api.adorable.io/avatars/24/${ encodeURIComponent(
                                    unitsScore.name,
                                ) }.png` }
                            />
                        </AvatarWrapper>
                        { unitsScore.name }
                    </NameWrapper>
                )
            },
            {
                key: createKey(unitsScore.activity),
                content: unitsScore.activity
            },
            {
                key: createKey('progressUnit'),
                content: (<ProgressTracker items={ unitsScore.progress } />)
            },
            {
                key: createKey(unitsScore.score),
                content: unitsScore.score
            }
        ]
    }))

    return (
        <Wrapper>
            <DynamicTable
                caption='Notas del diplomado'
                head={ head(true) }
                rows={ rows }
                rowPerPage={ 10 }
                defaultPage={ 1 }
                loadingSpinnerSize='large'
                isLoading={ false }
                isFixedSize
            />
        </Wrapper>
    )
}

QualificationsTable.propTypes = {
    units: PropTypes.array.isRequired
}

export default QualificationsTable
