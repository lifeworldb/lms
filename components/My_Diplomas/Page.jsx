import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import PageHeader from '@atlaskit/page-header'
import DiplomasTable from './components/Table/DiplomasTable'

const diplomas = [
    {
        name: 'Administración de la propiedad horizontal',
        state: 'In Progress',
        progress: [
            {
                id: 'disabled-1',
                label: 'Unidad 1',
                percentageComplete: 100,
                status: 'disabled',
            },
            {
                id: 'visited-1',
                label: 'Unidad 2',
                percentageComplete: 80,
                status: 'disabled',
                href: '#',
            },
            {
                id: 'visited-2',
                label: 'Unidad 3',
                percentageComplete: 0,
                status: 'current',
            },
            {
                id: 'visited-3',
                label: 'Unidad 4',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '4,4'
    },
    {
        name: 'Gestión Documental y Administración de Archivos',
        state: 'In Progress',
        progress: [
            {
                id: 'disabled-2',
                label: 'Unidad 1',
                percentageComplete: 10,
                status: 'current',
            },
            {
                id: 'visited-4',
                label: 'Unidad 2',
                percentageComplete: 0,
                status: 'unvisited',
                href: '#',
            },
            {
                id: 'visited-5',
                label: 'Unidad 3',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-6',
                label: 'Unidad 4',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '0,0'
    },
    {
        name: 'Neuropedagogía Infantil',
        state: 'Unavailable',
        progress: [
            {
                id: 'disabled-3',
                label: 'Unidad 1',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-7',
                label: 'Unidad 2',
                percentageComplete: 0,
                status: 'unvisited',
                href: '#',
            },
            {
                id: 'visited-8',
                label: 'Unidad 3',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-9',
                label: 'Unidad 4',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '0,0'
    },
    {
        name: 'ATENCIÓN INTEGRAL A LA VÍCTIMA DE LA VIOLENCIA SEXUAL',
        state: 'Complete',
        progress: [
            {
                id: 'disabled-4',
                label: 'Unidad 1',
                percentageComplete: 100,
                status: 'disabled',
            },
            {
                id: 'visited-10',
                label: 'Unidad 2',
                percentageComplete: 100,
                status: 'disabled',
                href: '#',
            },
            {
                id: 'visited-11',
                label: 'Unidad 3',
                percentageComplete: 100,
                status: 'disabled',
            },
            {
                id: 'visited-12',
                label: 'Unidad 4',
                percentageComplete: 0,
                status: 'disabled',
            },
        ],
        score: '4,0'
    }
]

const MyDiplomaPage = () => (
    <Fragment>
        <PageHeader>
            Mis Diplomas
        </PageHeader>
        <Page>
            <Grid layout='fluid'>
                <GridColumn>
                    <DiplomasTable diplomas={ diplomas } />
                </GridColumn>
            </Grid>
        </Page>
    </Fragment>
)

MyDiplomaPage.propTypes = {
    diplomas: PropTypes.array
}

export default MyDiplomaPage