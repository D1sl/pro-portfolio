export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'current',
            title: 'I currently work here',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'start',
            title: 'Date started',
            type: 'date',
            options: {
                dateFormat: 'MM-YYYY'
            }
        },
        {
            name: 'end',
            title: 'Date ended',
            type: 'date',
            options: {
                dateFormat: 'MM-YYYY'
            },
            hidden: ({document}) => document?.current
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
    orderings: [
        {
            title: 'end',
            name: 'end',
            by: [
                {field: 'end', direction: 'desc'}
            ]
        }
    ]
}