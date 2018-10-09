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
                name: 'Buttons',
                path: 'buttons',
                translate: 'sidebar.nav.element.BUTTON'
            },
            {
                name: 'Notifications',
                path: 'notifications',
                translate: 'sidebar.nav.element.NOTIFICATION'
            },
            {
                name: 'Sweetalert',
                path: 'sweetalert'
            },
            {
                name: 'Carousel',
                path: 'carousel',
                translate: 'sidebar.nav.element.INTERACTION'
            },
            {
                name: 'Spinners',
                path: 'spinners',
                translate: 'sidebar.nav.element.SPINNER'
            },
            {
                name: 'Animations',
                path: 'animations',
                translate: 'sidebar.nav.element.ANIMATION'
            },
            {
                name: 'Dropdown',
                path: 'dropdown',
                translate: 'sidebar.nav.element.DROPDOWN'
            },
            {
                name: 'Nestable',
                path: 'nestable'
            },
            {
                name: 'Sortable',
                path: 'sortable'
            },
            {
                name: 'Cards',
                path: 'cards',
                translate: 'sidebar.nav.element.CARD'
            },
            {
                name: 'Grid',
                path: 'grid',
                translate: 'sidebar.nav.element.GRID'
            },
            {
                name: 'Grid Masonry',
                path: 'grid-masonry',
                translate: 'sidebar.nav.element.GRID_MASONRY'
            },
            {
                name: 'Typography',
                path: 'typography',
                translate: 'sidebar.nav.element.TYPO'
            },
            {
                name: 'IconsFont',
                path: 'icons-font',
                translate: 'sidebar.nav.element.FONT_ICON',
                label: { value: '+400', color: 'success' }
            },
            {
                name: 'IconsWeather',
                path: 'icons-weather',
                translate: 'sidebar.nav.element.WEATHER_ICON',
                label: { value: '+100', color: 'success' }
            },
            {
                name: 'Colors',
                path: 'colors',
                translate: 'sidebar.nav.element.COLOR'
            }
        ]
    },
    {
        name: 'Social',
        icon: 'icon-chemistry',
        translate: 'sidebar.nav.element.Social',
        submenu: [{
                name: 'Buttons',
                path: 'buttons',
                translate: 'sidebar.nav.element.BUTTON'
            },
            {
                name: 'Notifications',
                path: 'notifications',
                translate: 'sidebar.nav.element.NOTIFICATION'
            },
            {
                name: 'Sweetalert',
                path: 'sweetalert'
            },
            {
                name: 'Carousel',
                path: 'carousel',
                translate: 'sidebar.nav.element.INTERACTION'
            },
            {
                name: 'Spinners',
                path: 'spinners',
                translate: 'sidebar.nav.element.SPINNER'
            },
            {
                name: 'Animations',
                path: 'animations',
                translate: 'sidebar.nav.element.ANIMATION'
            },
            {
                name: 'Dropdown',
                path: 'dropdown',
                translate: 'sidebar.nav.element.DROPDOWN'
            },
            {
                name: 'Nestable',
                path: 'nestable'
            },
            {
                name: 'Sortable',
                path: 'sortable'
            },
            {
                name: 'Cards',
                path: 'cards',
                translate: 'sidebar.nav.element.CARD'
            },
            {
                name: 'Grid',
                path: 'grid',
                translate: 'sidebar.nav.element.GRID'
            },
            {
                name: 'Grid Masonry',
                path: 'grid-masonry',
                translate: 'sidebar.nav.element.GRID_MASONRY'
            },
            {
                name: 'Typography',
                path: 'typography',
                translate: 'sidebar.nav.element.TYPO'
            },
            {
                name: 'IconsFont',
                path: 'icons-font',
                translate: 'sidebar.nav.element.FONT_ICON',
                label: { value: '+400', color: 'success' }
            },
            {
                name: 'IconsWeather',
                path: 'icons-weather',
                translate: 'sidebar.nav.element.WEATHER_ICON',
                label: { value: '+100', color: 'success' }
            },
            {
                name: 'Colors',
                path: 'colors',
                translate: 'sidebar.nav.element.COLOR'
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