import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import QualificationsTable from './components/Table/QualificationsTable'
import PageHeader from '@atlaskit/page-header'

const unitss = [
    {
        name: 'Unidad 1',
        activity: 'Primera fase',
        progress: [
            {
                id: 'disabled-1',
                label: 'Tema 1',
                percentageComplete: 100,
                status: 'disabled',
            },
            {
                id: 'visited-1',
                label: 'Tema 2',
                percentageComplete: 80,
                status: 'disabled',
                href: '#',
            },
            {
                id: 'visited-2',
                label: 'Tema 3',
                percentageComplete: 0,
                status: 'current',
            },
            {
                id: 'visited-3',
                label: 'Actividad',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '4,4'
    },
    {
        name: 'Unidad 2',
        activity: 'Segunda fase',
        progress: [
            {
                id: 'disabled-2',
                label: 'Tema 1',
                percentageComplete: 10,
                status: 'current',
            },
            {
                id: 'visited-4',
                label: 'Tema 2',
                percentageComplete: 0,
                status: 'unvisited',
                href: '#',
            },
            {
                id: 'visited-5',
                label: 'Tema 3',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-6',
                label: 'Actividad',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '0,0'
    },
    {
        name: 'Unidad 3',
        activity: 'Tercera fase',
        progress: [
            {
                id: 'disabled-3',
                label: 'Tema 1',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-7',
                label: 'Tema 2',
                percentageComplete: 0,
                status: 'unvisited',
                href: '#',
            },
            {
                id: 'visited-8',
                label: 'Tema 3',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-9',
                label: 'Actividad',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '0,0'
    },
    {
        name: 'Unidad 4',
        activity: 'Cuarta fase',
        progress: [
            {
                id: 'disabled-4',
                label: 'Tema 1',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-10',
                label: 'Tema 2',
                percentageComplete: 0,
                status: 'unvisited',
                href: '#',
            },
            {
                id: 'visited-11',
                label: 'Tema 3',
                percentageComplete: 0,
                status: 'unvisited',
            },
            {
                id: 'visited-12',
                label: 'Actividad',
                percentageComplete: 0,
                status: 'unvisited',
            },
        ],
        score: '0,0'
    }
]

const QualificationPage = ({ units }) => (
    <Fragment>
        <PageHeader>
            Mis Calificaciones
        </PageHeader>
        <Page>
            <Grid layout='fluid'>
                <GridColumn>
                    <QualificationsTable units={ unitss } />
                </GridColumn>
            </Grid>
        </Page>
    </Fragment>
)

QualificationPage.propTypes = {
    units: PropTypes.array
}

export default QualificationPage