import React from 'react'
import * as TfiIcons from 'react-icons/tfi'

export const SidebarData = [
    {
        title: 'Acceuil',
        path: '/',
        icon: <TfiIcons.TfiHome />,
        cName: 'nav-text',
    },
    {
        title: 'Gallerie',
        path: '/gallery',
        icon: <TfiIcons.TfiGallery />,
        cName: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <TfiIcons.TfiCommentAlt />,
        cName: 'nav-text',
    },
]
