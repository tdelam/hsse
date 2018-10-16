const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboard',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.DASHBOARD',
        label: { value: 3, color: 'success' },
        submenu: [{
                name: 'Dashboard v3',
                path: 'dashboardv3'
            }
        ]
    },
    {
        heading: 'Evidence Systems',
        translate: 'sidebar.heading.Evidence Systems'
    },
    {
        name: 'Health',
        icon: 'icon-layers',
        translate: 'sidebar.nav.element.Health',
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
        name: 'Social',
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