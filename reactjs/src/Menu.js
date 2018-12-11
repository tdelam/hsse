const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboards',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.DASHBOARD',
        /*label: { value: 3, color: 'success' },*/
        submenu: [{
                name: 'Main Dashboard',
                path: '/dashboardmain'
            }
        ]
    },
    {
        heading: 'Assigned Queue',
        translate: 'sidebar.heading.Evidence Systems'
    },
    {
        name: 'Health Systems Assigned',
        icon: 'icon-layers',
        translate: 'sidebar.nav.element.AssignedHealth',
        submenu: [
            {
                name: ' Elibigility & Filters',
                path: '/hse/assignedeligibilityfiltersqueue',
                translate: 'sidebar.nav.element.ASSIGNEDELIGIBILITYFILTERS'
            },
            {
                name: 'Quality Appraisal',
                path: '/hse/assignedqualityappraisalqueue',
                translate: 'sidebar.nav.element.ASSIGNEDQUALITYAPPRAISAL'
            },
            {
                name: 'Linking Studies',
                path: '/hse/assignedlinkingstudiesqueue',
                translate: 'sidebar.nav.element.ASSIGNEDLINKINGSTUDIES'
            },
            {
                name: 'Presentation Details',
                path: '/hse/assignedpresentationdetailsqueue',
                translate: 'sidebar.nav.element.ASSIGNEDPRESENTATIONDETAILS'
            },
            {
                name: 'Translating Titles',
                path: '/hse/assignedtranslatingtitlesqueue',
                translate: 'sidebar.nav.element.ASSIGNEDTRANSLATINGTITLES'
            },
            {
                name: 'Tracking & Prioritizing',
                path: '/hse/assignedtrackingprioritizingqueue',
                translate: 'sidebar.nav.element.ASSIGNEDTRACKINGPRIORITIZING'
            }
        ]
    },
    {
        name: 'Social Systems Assigned',
        icon: 'icon-layers',
        translate: 'sidebar.nav.element.Health',
        submenu: [
            {
                name: 'Elibigility & Filters',
                path: '/sse/assignedeligibilityfiltersqueue',
                translate: 'sidebar.nav.element.ELIGIBILITYFILTERS'
            },
            {
                name: 'Quality Appraisal',
                path: '/sse/assignedqualityappraisalqueue',
                translate: 'sidebar.nav.element.QUALITYAPPRAISAL'
            },
            {
                name: 'Linking Studies',
                path: '/sse/assignedlinkingstudiesqueue',
                translate: 'sidebar.nav.element.LINKINGSTUDIES'
            },
            {
                name: 'Presentation Details',
                path: '/sse/assignedpresentationdetailsqueue',
                translate: 'sidebar.nav.element.PRESENTATIONDETAILS'
            },
            {
                name: 'Translating Titles',
                path: '/sse/assignedtranslatingtitlesqueue',
                translate: 'sidebar.nav.element.TRANSLATINGTITLES'
            },
            {
                name: 'Tracking & Prioritizing',
                path: '/sse/assignedtrackingprioritizingqueue',
                translate: 'sidebar.nav.element.TRACKINGPRIORITIZING'
            }
        ]
    },
    {
        heading: 'Pending Queue',
        translate: 'sidebar.heading.Evidence Systems'
    },
    {
        name: 'Health Systems Pending',
        icon: 'icon-layers',
        translate: 'sidebar.nav.element.QueuedHealth',
        submenu: [{
                name: 'Add Article',
                path: '/hse/addarticle',
                translate: 'sidebar.nav.element.ADDHSEARTICLE'
            },{
                name: 'Batch Upload',
                path: '/hse/batchfileupload',
                translate: 'sidebar.nav.element.BATCHHSEUPLOAD'
            },
            {
                name: 'Elibigility & Filters Article',
                path: '/hse/pendingeligibilityfiltersarticlequeue',
                translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERARTICLES'
            },
            {
                name: 'Elibigility & Filters Batch',
                path: '/hse/pendingeligibilityfiltersbatchfilequeue',
                translate: 'sidebar.nav.element.PENDINGELIGIBILITYFILTERBATCHFILES'
            },
            {
                name: 'Quality Appraisal',
                path: '/hse/pendingqualityappraisalqueue',
                translate: 'sidebar.nav.element.PENDINGQUALITYAPPRAISAL'
            },
            {
                name: 'Linking Studies',
                path: '/hse/pendinglinkingstudiesqueue',
                translate: 'sidebar.nav.element.PENDINGLINKINGSTUDIES'
            },
            {
                name: 'Presentation Details',
                path: '/hse/pendingpresentationdetailsqueue',
                translate: 'sidebar.nav.element.PENDINGPRESENTATIONDETAILS'
            },
            {
                name: 'Translating Titles',
                path: '/hse/pendingtranslatingtitlesqueue',
                translate: 'sidebar.nav.element.PENDINGTRANSLATINGTITLES'
            },
            {
                name: 'Tracking & Prioritizing',
                path: '/hse/pendingtrackingprioritizingqueue',
                translate: 'sidebar.nav.element.PENDINGTRACKINGPRIORITIZING'
            }
        ]
    },
    {
        name: 'Social Systems Pending',
        icon: 'icon-chemistry',
        translate: 'sidebar.nav.element.Social',
        submenu: [{
            name: 'Harvesting & Uploading',
            path: 'buttons',
            translate: 'sidebar.nav.element.HARVESTUPLOAD'
        },
        {
            name: 'Elibigility & Filters',
            path: 'notifications',
            translate: 'sidebar.nav.element.ELIGIBILITYFILTERS'
        },
        {
            name: 'Quality Appraisal',
            path: 'carousel',
            translate: 'sidebar.nav.element.QUALITYAPPRAISAL'
        },
        {
            name: 'Linking Studies',
            path: 'spinners',
            translate: 'sidebar.nav.element.LINKINGSTUDIES'
        },
        {
            name: 'Presentation Details',
            path: 'animations',
            translate: 'sidebar.nav.element.PRESENTATIONDETAILS'
        },
        {
            name: 'Translating Titles',
            path: 'dropdown',
            translate: 'sidebar.nav.element.TRANSLATINGTITLES'
        },
        {
            name: 'Tracking & Prioritizing',
            path: 'cards',
            translate: 'sidebar.nav.element.TRACKINGPRIORITIZING'
        }
    ]
    },
    {
        heading: 'Managers',
        translate: 'sidebar.heading.Managers'
    },
    {
        name: 'Search',
        icon: 'icon-note',
        translate: 'sidebar.nav.form.SEARCH',
        submenu: [{
                name: 'Standard',
                path: 'form-standard',
                translate: 'sidebar.nav.form.STANDARD'
            },
            {
                name: 'Extended',
                path: 'form-extended',
                translate: 'sidebar.nav.form.EXTENDED'
            },
            {
                name: 'Validation',
                path: 'form-validation',
                translate: 'sidebar.nav.form.VALIDATION'
            },
            {
                name: 'Wizard',
                path: 'form-wizard',
            },
            {
                name: 'Upload',
                path: 'form-upload',
            },
            {
                name: 'Cropper',
                path: 'form-cropper',
            }
        ]
    },
    {
        name: 'Export',
        icon: 'icon-note',
        translate: 'sidebar.nav.form.EXPORT',
        submenu: [{
                name: 'Standard',
                path: 'form-standard',
                translate: 'sidebar.nav.form.STANDARD'
            },
            {
                name: 'Extended',
                path: 'form-extended',
                translate: 'sidebar.nav.form.EXTENDED'
            },
            {
                name: 'Validation',
                path: 'form-validation',
                translate: 'sidebar.nav.form.VALIDATION'
            },
            {
                name: 'Wizard',
                path: 'form-wizard',
            },
            {
                name: 'Upload',
                path: 'form-upload',
            },
            {
                name: 'Cropper',
                path: 'form-cropper',
            }
        ]
    },{
        name: 'Translation',
        icon: 'icon-grid',
        translate: 'sidebar.nav.table.TRANSLATION',
        submenu: [{
                name: 'Standard',
                path: 'table-standard',
                translate: 'sidebar.nav.table.STANDARD'
            },
            {
                name: 'Extended',
                path: 'table-extended',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Datatable',
                path: 'table-datatable',
                translate: 'sidebar.nav.table.DATATABLE'
            },
            {
                name: 'Datagrid',
                path: 'table-datagrid',
            }
        ]
    },{
        name: 'Monthly Email',
        icon: 'icon-grid',
        translate: 'sidebar.nav.table. MONTHLY EMAIL',
        submenu: [{
                name: 'Standard',
                path: 'table-standard',
                translate: 'sidebar.nav.table.STANDARD'
            },
            {
                name: 'Extended',
                path: 'table-extended',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Datatable',
                path: 'table-datatable',
                translate: 'sidebar.nav.table.DATATABLE'
            },
            {
                name: 'Datagrid',
                path: 'table-datagrid',
            }
        ]
    },
    {
        heading: 'Settings',
        translate: 'sidebar.heading.SETTINGS'
    },{
        name: 'Users',
        icon: 'icon-people',
        translate: 'sidebar.nav.table.USER',
        submenu: [{
                name: 'Standard',
                path: 'table-standard',
                translate: 'sidebar.nav.table.STANDARD'
            },
            {
                name: 'Extended',
                path: 'table-extended',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Datatable',
                path: 'table-datatable',
                translate: 'sidebar.nav.table.DATATABLE'
            },
            {
                name: 'Datagrid',
                path: 'table-datagrid',
            }
        ]
    }
];

export default Menu;