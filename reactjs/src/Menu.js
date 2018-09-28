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
        name: 'Widgets',
        icon: 'icon-grid',
        path: 'widgets',
        label: { value: 30, color: 'success' },
        translate: 'sidebar.nav.WIDGETS'
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
        heading: 'More Line',
        translate: 'sidebar.heading.More Line'
    },
    {
        name: 'Forms',
        icon: 'icon-note',
        translate: 'sidebar.nav.form.FORM',
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
        name: 'Tables',
        icon: 'icon-grid',
        translate: 'sidebar.nav.table.TABLE',
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
        heading: 'More',
        translate: 'sidebar.heading.MORE'
    },
    {
        name: 'Extras',
        icon: 'icon-cup',
        translate: 'sidebar.nav.extra.EXTRA',
        submenu: [{
                name: 'Mailbox',
                path: 'mailbox',
                translate: 'sidebar.nav.extra.MAILBOX',
            },
            {
                name: 'Bug Tracker',
                path: 'bug-tracker'
            },
            {
                name: 'Contact Details',
                path: 'contact-details'
            },
            {
                name: 'Contacts',
                path: 'contacts'
            },
            {
                name: 'Faq',
                path: 'faq'
            },
            {
                name: 'File Manager',
                path: 'file-manager'
            },
            {
                name: 'Followers',
                path: 'followers'
            },
            {
                name: 'Help Center',
                path: 'help-center'
            },
            {
                name: 'Plans',
                path: 'plans'
            },
            {
                name: 'Project Details',
                path: 'project-details'
            },
            {
                name: 'Projects',
                path: 'projects'
            },
            {
                name: 'Settings',
                path: 'settings'
            },
            {
                name: 'Social Board',
                path: 'social-board'
            },
            {
                name: 'Team Viewer',
                path: 'team-viewer'
            },
            {
                name: 'Vote Links',
                path: 'vote-links'
            },
            {
                name: 'Timeline',
                path: 'timeline',
                translate: 'sidebar.nav.extra.TIMELINE'
            },
            {
                name: 'Calendar',
                path: 'calendar',
                translate: 'sidebar.nav.extra.CALENDAR'
            },
            {
                name: 'Invoice',
                path: 'invoice',
                translate: 'sidebar.nav.extra.INVOICE'
            },
            {
                name: 'Search',
                path: 'search',
                translate: 'sidebar.nav.extra.SEARCH'
            },
            {
                name: 'Todo',
                path: 'todo',
                translate: 'sidebar.nav.extra.TODO'
            },
            {
                name: 'Profile',
                path: 'profile',
                translate: 'sidebar.nav.extra.PROFILE'
            }
        ]
    },
    {
        name: 'Blog',
        icon: 'icon-notebook',
        submenu: [{
                name: 'List',
                path: 'blog-list'
            },
            {
                name: 'Post',
                path: 'blog-post'
            },
            {
                name: 'Articles',
                path: 'blog-articles'
            },
            {
                name: 'Article View',
                path: 'blog-article-view'
            }
        ]
    }
];

export default Menu;