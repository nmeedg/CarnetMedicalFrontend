// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Medical AI',
      type: 'item',
      url: '/medicalai',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: "Centre d'aide et FAQ",
      type: 'item',
      url: '/aide',
      icon: icons.IconHelp,
      external: true,
    }
  ]
};

export default other;
